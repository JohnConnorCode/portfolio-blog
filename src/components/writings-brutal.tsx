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
    color: 'text-cyan-400',
    glow: 'rgba(0, 212, 255, 0.4)',
    slug: 'why-ecosystem-funding-is-broken',
    featured: true
  },
  {
    title: 'Debate as Leadership Practice',
    excerpt: 'The best leaders embrace intellectual conflict and use it to sharpen thinking.',
    category: 'LEADERSHIP',
    icon: Users,
    color: 'text-purple-400',
    glow: 'rgba(168, 85, 247, 0.4)',
    slug: 'debate-as-leadership-practice'
  },
  {
    title: 'Automation as Human Right',
    excerpt: 'AI should free humans for creativity, not replace them entirely.',
    category: 'AI',
    icon: Brain,
    color: 'text-pink-500',
    glow: 'rgba(236, 72, 153, 0.4)',
    slug: 'automation-as-human-right'
  },
  {
    title: 'Death of Growth Theater',
    excerpt: 'Why vanity metrics are killing startups and what to measure instead.',
    category: 'PRODUCT',
    icon: Zap,
    color: 'text-yellow-400',
    glow: 'rgba(250, 204, 21, 0.4)',
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
            className="text-base sm:text-lg text-gray-400 dark:text-gray-400 font-light tracking-wide"
          >
            Strategic insights on technology, community, and human potential
          </motion.p>
        </motion.div>
        
        {/* Writing cards in premium grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {writings.map((writing, index) => {
            const Icon = writing.icon
            return (
              <motion.article
                key={writing.title}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`group ${writing.featured ? 'md:col-span-2' : ''}`}
              >
                <Link href={`/blog/${writing.slug}`}>
                  <div className="relative">
                    {/* Glow effect on hover */}
                    <div
                      className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                      style={{ background: `radial-gradient(circle, ${writing.glow}, transparent 70%)` }}
                    />

                    <div
                      className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full group-hover:border-white/20 transition-all duration-300"
                    >
                      {/* Featured badge */}
                      {writing.featured && (
                        <div
                          className="absolute -top-3 -right-3 px-4 py-1 font-bold text-xs uppercase tracking-wide text-black"
                          style={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #00ffff 100%)',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
                          }}
                        >
                          Featured
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex items-start gap-5">
                        <div className={`${writing.color} flex-shrink-0`}>
                          <Icon className="w-10 h-10" style={{ filter: `drop-shadow(0 0 10px currentColor)` }} />
                        </div>
                        <div className="flex-1">
                          <div
                            className={`${writing.color} font-mono text-xs mb-2 tracking-wider`}
                          >
                            [{writing.category}]
                          </div>
                          <h3
                            className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 mb-3"
                          >
                            {writing.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {writing.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold uppercase text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            READ MORE
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
        
        {/* CTA with premium button */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <motion.button
              {...headerAnimation}
              transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.section }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-4 font-bold uppercase tracking-wider overflow-hidden"
              style={{
                background: 'transparent',
                color: '#fff',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)',
                border: '2px solid rgba(0, 212, 255, 0.6)',
              }}
            >
              <span className="relative z-10">EXPLORE ALL WRITINGS</span>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%)' }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}