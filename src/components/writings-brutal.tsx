'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Brain, Users, Globe } from 'lucide-react'
import Link from 'next/link'

const writings = [
  {
    title: 'Why Ecosystem Funding is Broken',
    excerpt: 'Traditional grant systems reward promises over delivery. Here\'s how to fix it.',
    category: 'WEB3',
    icon: Globe,
    color: 'text-cyan-400',
    slug: 'why-ecosystem-funding-is-broken',
    featured: true
  },
  {
    title: 'Debate as Leadership Practice',
    excerpt: 'The best leaders embrace intellectual conflict and use it to sharpen thinking.',
    category: 'LEADERSHIP',
    icon: Users,
    color: 'text-purple-500',
    slug: 'debate-as-leadership-practice'
  },
  {
    title: 'Automation as Human Right',
    excerpt: 'AI should free humans for creativity, not replace them entirely.',
    category: 'AI',
    icon: Brain,
    color: 'text-pink-500',
    slug: 'automation-as-human-right'
  },
  {
    title: 'Death of Growth Theater',
    excerpt: 'Why vanity metrics are killing startups and what to measure instead.',
    category: 'PRODUCT',
    icon: Zap,
    color: 'text-yellow-400',
    slug: 'death-of-growth-theater',
    featured: true
  }
]

export function WritingsBrutal() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="text-foreground">THOUGHT</span>
            <span className="text-cyan-400 font-black neon-glow"> LEADERSHIP</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light tracking-wide">
            Strategic insights on technology, community, and human potential
          </p>
        </motion.div>
        
        {/* Writing cards in brutal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {writings.map((writing, index) => {
            const Icon = writing.icon
            return (
              <motion.article
                key={writing.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${writing.featured ? 'md:col-span-2' : ''}`}
              >
                <Link href={`/blog/${writing.slug}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="card-glass hover:border-cyan-400/50 transition-all"
                  >
                    {/* Featured badge */}
                    {writing.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-4 py-1 font-bold text-xs uppercase tracking-wide">
                        Featured
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex items-start gap-6">
                      <div className={`${writing.color} flex-shrink-0`}>
                        <Icon className="w-12 h-12" />
                      </div>
                      <div className="flex-1">
                        <div className={`${writing.color} font-mono text-xs mb-2`}>
                          [{writing.category}]
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                          {writing.title}
                        </h3>
                        <p className="text-gray-400 font-mono text-xs sm:text-sm mb-4">
                          {writing.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-cyan-400 font-black uppercase text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          READ MORE
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </Link>
              </motion.article>
            )
          })}
        </div>
        
        {/* CTA with brutal button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-semibold uppercase tracking-wider"
            >
              <span className="relative z-10">EXPLORE ALL WRITINGS</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}