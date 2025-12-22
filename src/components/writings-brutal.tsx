'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Zap, Brain, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const writings = [
  {
    title: 'Why Ecosystem Funding is Broken',
    excerpt: 'Traditional grant systems reward promises over delivery. Here\'s how to fix it.',
    category: 'WEB3',
    icon: Globe,
    slug: 'why-ecosystem-funding-is-broken',
    featured: true
  },
  {
    title: 'Debate as Leadership Practice',
    excerpt: 'The best leaders embrace intellectual conflict and use it to sharpen thinking.',
    category: 'LEADERSHIP',
    icon: Users,
    slug: 'debate-as-leadership-practice'
  },
  {
    title: 'Automation as Human Right',
    excerpt: 'AI should free humans for creativity, not replace them entirely.',
    category: 'AI',
    icon: Brain,
    slug: 'automation-as-human-right'
  },
  {
    title: 'Death of Growth Theater',
    excerpt: 'Why vanity metrics are killing startups and what to measure instead.',
    category: 'PRODUCT',
    icon: Zap,
    slug: 'death-of-growth-theater',
    featured: true
  }
]

export function WritingsBrutal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="py-24 sm:py-32 px-4 bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path
                d="M12 2 L22 12 L12 22 L2 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 6 L18 12 L12 18 L6 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity="0.5"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Thought Leadership
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto font-jost text-foreground/60">
            Strategic insights on technology, community, and human potential
          </p>
        </motion.div>

        {/* Writing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {writings.map((writing, index) => {
            const Icon = writing.icon
            return (
              <motion.article
                key={writing.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group ${writing.featured ? 'md:col-span-2' : ''}`}
              >
                <Link href={`/blog/${writing.slug}`}>
                  <div className="relative bg-card border border-border p-6 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Featured badge */}
                    {writing.featured && (
                      <div className="absolute -top-3 -right-3 px-4 py-1 font-semibold text-xs uppercase tracking-wider font-jost bg-primary text-primary-foreground">
                        Featured
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs mb-2 tracking-wider uppercase font-semibold font-jost text-primary">
                          {writing.category}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary font-jost text-foreground">
                          {writing.title}
                        </h3>
                        <p className="text-sm mb-4 leading-relaxed font-jost text-foreground/60">
                          {writing.excerpt}
                        </p>
                        <div className="flex items-center gap-2 font-semibold uppercase text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-jost text-primary">
                          Read More
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 font-semibold text-sm transition-all duration-300 font-jost bg-transparent text-foreground border border-foreground/30 hover:border-primary hover:text-primary tracking-widest uppercase"
            >
              Explore All Writings
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-jost text-foreground/40">
            Ideas that <span className="text-primary">shape the future</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
