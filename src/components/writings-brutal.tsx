'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Brain, Users, Globe } from 'lucide-react'
import Link from 'next/link'

const writings = [
  {
    title: 'Human-first Futurism',
    excerpt: 'Automation should free humans for high-context work.',
    category: 'PHILOSOPHY',
    icon: Brain,
    color: 'text-cyan-400',
    featured: true
  },
  {
    title: 'Debate as Growth Tool',
    excerpt: 'Intellectual sparring builds resilience and community.',
    category: 'COMMUNITY',
    icon: Users,
    color: 'text-pink-500'
  },
  {
    title: 'Designing Abundance',
    excerpt: 'Open systems compound faster than walled gardens.',
    category: 'ECONOMICS',
    icon: Zap,
    color: 'text-yellow-400',
    featured: true
  },
  {
    title: 'Community-Owned Economies',
    excerpt: 'Communities should own their infrastructure.',
    category: 'WEB3',
    icon: Globe,
    color: 'text-purple-500'
  }
]

export function WritingsBrutal() {
  return (
    <section className="relative overflow-hidden" style={{ padding: 'var(--space-12) var(--space-2)', background: 'linear-gradient(to bottom, var(--gray-900), var(--black))' }}>
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
          <h2 className="heading-section mb-4">
            <span style={{ color: 'var(--white)', fontWeight: 300 }}>THOUGHT</span>
            <span className="text-gradient" style={{ fontWeight: 700 }}> LEADERSHIP</span>
          </h2>
          <p className="text-base sm:text-lg font-light tracking-wide" style={{ color: 'var(--gray-400)' }}>
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
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${writing.featured ? 'md:col-span-2' : ''}`}
              >
                <Link href="/blog">
                  <div className="card-glass hover-glow">
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
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors mb-2">
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
                  </div>
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
              className="btn-primary"
            >
              <span className="relative z-10">EXPLORE ALL WRITINGS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}