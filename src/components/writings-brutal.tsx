'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Zap, Brain, Users, Globe } from 'lucide-react'
import { fadeInUp, headerAnimation, cardHover, staggerContainer, ANIMATION_DELAY, SECTION_DELAYS } from '@/lib/animation-config'
import Link from 'next/link'
import { useRef } from 'react'

const writings = [
  {
    title: 'Why Ecosystem Funding is Broken',
    excerpt: 'Traditional grant systems reward promises over delivery. Here\'s how to fix it.',
    category: 'WEB3',
    icon: Globe,
    color: 'text-cyan-600 dark:text-cyan-400',
    slug: 'why-ecosystem-funding-is-broken',
    featured: true
  },
  {
    title: 'Debate as Leadership Practice',
    excerpt: 'The best leaders embrace intellectual conflict and use it to sharpen thinking.',
    category: 'LEADERSHIP',
    icon: Users,
    color: 'text-purple-600 dark:text-purple-500',
    slug: 'debate-as-leadership-practice'
  },
  {
    title: 'Automation as Human Right',
    excerpt: 'AI should free humans for creativity, not replace them entirely.',
    category: 'AI',
    icon: Brain,
    color: 'text-pink-600 dark:text-pink-500',
    slug: 'automation-as-human-right'
  },
  {
    title: 'Death of Growth Theater',
    excerpt: 'Why vanity metrics are killing startups and what to measure instead.',
    category: 'PRODUCT',
    icon: Zap,
    color: 'text-yellow-600 dark:text-yellow-400',
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
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: SECTION_DELAYS.writings }}
      className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section title with glitch effect */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            {...headerAnimation}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]"
          >
            <span className="text-foreground">THOUGHT</span>
            <span className="text-primary dark:text-cyan-400 font-black neon-glow"> LEADERSHIP</span>
          </motion.h2>
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
            className="text-base sm:text-lg text-gray-100 dark:text-gray-400 font-light tracking-wide"
          >
            Strategic insights on technology, community, and human potential
          </motion.p>
        </motion.div>
        
        {/* Writing cards in brutal grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {writings.map((writing, index) => {
            const Icon = writing.icon
            return (
              <motion.article
                key={writing.title}
                variants={fadeInUp}
                className={`group ${writing.featured ? 'md:col-span-2' : ''}`}
              >
                <Link href={`/blog/${writing.slug}`}>
                  <motion.div
                    {...cardHover}
                    className="card-glass hover:border-cyan-400/50 transition-all"
                  >
                    {/* Featured badge */}
                    {writing.featured && (
                      <motion.div
                        variants={fadeInUp}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-4 py-1 font-bold text-xs uppercase tracking-wide"
                      >
                        Featured
                      </motion.div>
                    )}

                    {/* Content */}
                    <motion.div
                      variants={staggerContainer}
                      className="flex items-start gap-6"
                    >
                      <motion.div
                        variants={fadeInUp}
                        className={`${writing.color} flex-shrink-0`}
                      >
                        <Icon className="w-12 h-12" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div
                          variants={fadeInUp}
                          className={`${writing.color} font-mono text-xs mb-2`}
                        >
                          [{writing.category}]
                        </motion.div>
                        <motion.h3
                          variants={fadeInUp}
                          className="text-xl sm:text-2xl font-black text-foreground group-hover:text-cyan-400 transition-colors mb-2"
                        >
                          {writing.title}
                        </motion.h3>
                        <motion.p
                          variants={fadeInUp}
                          className="text-gray-400 font-mono text-xs sm:text-sm mb-4"
                        >
                          {writing.excerpt}
                        </motion.p>
                        <motion.div
                          variants={fadeInUp}
                          className="flex items-center gap-2 text-cyan-400 font-black uppercase text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          READ MORE
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
        
        {/* CTA with brutal button */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <motion.button
              {...headerAnimation}
              transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.section }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-semibold uppercase tracking-wider"
            >
              <span className="relative z-10">EXPLORE ALL WRITINGS</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}