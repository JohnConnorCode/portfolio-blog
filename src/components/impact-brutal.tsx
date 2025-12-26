'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { reveal, card } from '@/lib/animation-config'

const selectedWork = [
  {
    company: 'Upland',
    outcome: '13K → 300K users',
    description: 'Redesigned token economy around earning, not speculation.',
  },
  {
    company: 'Mode Mobile',
    outcome: '3x revenue, -50% churn',
    description: 'Found the real problem by watching behavior, not surveys.',
  },
  {
    company: 'Sparkblox',
    outcome: '$1M raised, 18-person team',
    description: 'Built NFT infrastructure. Hard lessons on timing vs. product.',
  },
]

export function ImpactBrutal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])
  const textX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <motion.section
      ref={containerRef}
      className="py-24 sm:py-32 px-4 bg-card relative overflow-hidden border-t border-border"
    >
      {/* Horizontal scrolling text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: textX }}
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 whitespace-nowrap"
        >
          <span className="text-[10vw] font-bold tracking-tight text-primary/[0.03] font-jost">
            SHIPPED &nbsp; SCALED &nbsp; LEARNED &nbsp; SHIPPED &nbsp; SCALED &nbsp; LEARNED
          </span>
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div {...reveal()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto font-jost text-foreground/60">
            Products I&apos;ve built and scaled.
          </p>
        </motion.div>

        {/* Work cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {selectedWork.map((work, index) => (
            <motion.div
              key={work.company}
              {...card(index)}
              className="group"
            >
              <Link href="/work">
                <div className="relative bg-card border border-border p-6 sm:p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Company name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary font-jost">
                      {work.company}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Outcome */}
                  <p className="text-2xl sm:text-3xl font-bold mb-3 font-jost text-foreground">
                    {work.outcome}
                  </p>

                  {/* Description */}
                  <p className="text-sm font-jost text-foreground/50 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div {...reveal(0, 0.3)} className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-jost text-foreground/50 hover:text-primary transition-colors"
          >
            <span>View all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
