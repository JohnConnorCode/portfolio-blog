'use client'

import { useState, useEffect } from 'react'
import { sanityClient } from '@/lib/sanity/client'
import { thoughtsQuery } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'
import { Hash, Pin } from 'lucide-react'
import { Thought, PortableTextImageValue, PortableTextCodeValue, PortableTextLinkValue } from '@/types'

const moodEmoji: Record<string, string> = {
  'fired-up': '🔥',
  'contemplative': '💭',
  'building': '🚀',
  'learning': '📚',
  'insight': '⚡',
  'focused': '🎯',
  'questioning': '🤔',
}

export default function ThoughtsFeed() {
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchThoughts() {
      try {
        const data = await sanityClient.fetch(thoughtsQuery)
        setThoughts(data || [])
      } catch {
        console.log('No thoughts yet')
      } finally {
        setLoading(false)
      }
    }
    
    fetchThoughts()
  }, [])
  
  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-mono animate-pulse">Loading thoughts...</p>
      </div>
    )
  }
  
  if (!thoughts || thoughts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-mono">No thoughts yet. Check back soon.</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {thoughts.map((thought: Thought, index: number) => (
        <ThoughtCard key={thought._id} thought={thought} index={index} />
      ))}
    </div>
  )
}

function ThoughtCard({ thought, index }: { thought: Thought; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card-glass hover:border-cyan-400/50 transition-all">
        {/* Pinned indicator */}
        {thought.pinned && (
          <div className="absolute -top-3 -right-3 bg-cyan-400 text-primary-foreground p-2 rounded-full">
            <Pin className="w-4 h-4" />
          </div>
        )}
        
        {/* Mood and timestamp */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {thought.mood && (
              <span className="text-2xl">{moodEmoji[thought.mood]}</span>
            )}
            <time className="text-sm text-muted-foreground font-mono">
              {formatDistanceToNow(new Date(thought.publishedAt), { addSuffix: true })}
            </time>
          </div>
        </div>
        
        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none thought-content">
          <PortableText 
            value={thought.content}
            components={{
              types: {
                image: ({value}: {value: PortableTextImageValue}) => (
                  <div className="my-4 rounded-lg overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={value.asset?.url || ''}
                      alt={value.alt || ''}
                      className="w-full h-auto"
                    />
                    {value.caption && (
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {value.caption}
                      </p>
                    )}
                  </div>
                ),
                code: ({value}: {value: PortableTextCodeValue}) => (
                  <div className="my-4">
                    {value.filename && (
                      <div className="text-xs text-muted-foreground mb-1 font-mono">
                        {value.filename}
                      </div>
                    )}
                    <pre className="bg-background/50 border border-border rounded p-4 overflow-x-auto">
                      <code className={`language-${value.language || 'plaintext'}`}>
                        {value.code}
                      </code>
                    </pre>
                  </div>
                ),
              },
              marks: {
                link: ({children, value}: {children?: React.ReactNode, value?: PortableTextLinkValue}) => (
                  <a 
                    href={value?.href || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    {children}
                  </a>
                ),
                code: ({children}: {children: React.ReactNode}) => (
                  <code className="bg-background/50 px-1 py-0.5 rounded text-cyan-400 font-mono text-sm">
                    {children}
                  </code>
                ),
              },
            }}
          />
        </div>
        
        {/* Tags */}
        {thought.tags && thought.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {thought.tags.map((tag: string) => (
              <span 
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs border border-border rounded-full text-muted-foreground hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
              >
                <Hash className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Hover accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
      </div>
    </motion.div>
  )
}