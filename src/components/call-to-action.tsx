'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  sectionWithChildrenVariants,
  childVariants,
  viewport,
} from '@/lib/animation-config'

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
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative p-8 sm:p-12 lg:p-16 text-center bg-card border border-border"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

          {/* Decorative diamond */}
          <motion.div variants={childVariants} className="flex items-center justify-center gap-4 mb-8">
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
          </motion.div>

          <motion.h2 variants={childVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Let&apos;s Solve Your Product Problems
          </motion.h2>

          <motion.p variants={childVariants} className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-jost text-foreground/70">
            I work with founders and teams to find clarity and ship.
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="group relative px-8 sm:px-10 py-4 sm:py-5 font-semibold text-sm sm:text-base flex items-center justify-center gap-3 overflow-hidden font-jost bg-primary text-primary-foreground tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
              >
                <span className="relative z-10">Start the Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </Link>

            <Link href="/work">
              <button
                className="px-8 sm:px-10 py-4 sm:py-5 font-medium text-sm sm:text-base transition-all duration-300 font-jost bg-transparent text-foreground border border-foreground/30 hover:border-primary hover:text-primary tracking-widest uppercase"
              >
                See My Work
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
