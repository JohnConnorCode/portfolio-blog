'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 lg:p-16 text-center bg-card border border-border"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

          {/* Decorative diamond */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
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
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Ready to Ship?
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-jost text-foreground/70">
            Tell me what you&apos;re building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 font-semibold text-sm sm:text-base flex items-center justify-center gap-3 overflow-hidden font-jost bg-foreground text-background tracking-widest uppercase"
              >
                <span className="relative z-10">Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.button>
            </Link>

            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-4 sm:py-5 font-medium text-sm sm:text-base transition-all duration-300 font-jost bg-transparent text-foreground border border-foreground/30 hover:border-primary hover:text-primary tracking-widest uppercase"
              >
                View My Work
              </motion.button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm mt-8 tracking-widest uppercase font-jost text-foreground/40">
            Typical response time: Within 24 hours
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
