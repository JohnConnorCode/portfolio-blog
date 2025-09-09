'use client'

import { useState, useEffect } from 'react'
import { sanityClient } from '@/lib/sanity/client'
import { thoughtsQuery } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Thought, PortableTextCodeValue } from '@/types'

const moodEmoji: Record<string, string> = {
  'fired-up': '🔥',
  'contemplative': '💭', 
  'building': '🚀',
  'learning': '📚',
  'insight': '⚡',
  'focused': '🎯',
  'questioning': '🤔',
}

export function ThoughtsPreview() {
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchThoughts() {
      try {
        const data = await sanityClient.fetch(thoughtsQuery)
        setThoughts(data?.slice(0, 3) || [])
      } catch (error) {
        console.log('No thoughts yet')
      } finally {
        setLoading(false)
      }
    }
    
    fetchThoughts()
  }, [])
  
  if (loading) {
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-800 rounded w-1/3 mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-800 rounded"></div>
              <div className="h-32 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  if (!thoughts || thoughts.length === 0) {
    return null
  }
  
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-foreground">LATEST</span>
              <span className="text-cyan-400 font-black neon-glow"> THOUGHTS</span>
            </h2>
            
            <Link 
              href="/thoughts"
              className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="font-mono text-sm uppercase">View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-gray-400 font-light max-w-2xl">
            Quick insights, random observations, and work-in-progress ideas
          </p>
        </motion.div>
        
        {/* Thoughts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {thoughts.map((thought: Thought, index) => (
            <motion.div
              key={thought._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-glass h-full hover:border-cyan-400/50 transition-all flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  {thought.mood && (
                    <span className="text-xl">{moodEmoji[thought.mood]}</span>
                  )}
                  <time className="text-xs text-gray-500 font-mono">
                    {formatDistanceToNow(new Date(thought.publishedAt), { addSuffix: true })}
                  </time>
                </div>
                
                {/* Content preview */}
                <div className="prose prose-invert prose-sm max-w-none flex-1 line-clamp-4">
                  <PortableText 
                    value={thought.content}
                    components={{
                      types: {
                        image: () => (
                          <div className="text-gray-500 text-xs">
                            [Image]
                          </div>
                        ),
                        code: ({value}: {value: PortableTextCodeValue}) => (
                          <span className="text-cyan-400 font-mono text-xs">
                            {`<${value.language || 'code'}>`}
                          </span>
                        ),
                      },
                      marks: {
                        link: ({children}: {children: React.ReactNode}) => (
                          <span className="text-cyan-400">{children}</span>
                        ),
                        code: ({children}: {children: React.ReactNode}) => (
                          <code className="text-cyan-400 font-mono text-xs">
                            {children}
                          </code>
                        ),
                      },
                    }}
                  />
                </div>
                
                {/* Tags */}
                {thought.tags && thought.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {thought.tags.slice(0, 3).map((tag: string) => (
                      <span 
                        key={tag}
                        className="text-xs text-gray-500 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center lg:hidden"
        >
          <Link 
            href="/thoughts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>View All Thoughts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}