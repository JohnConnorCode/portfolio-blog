'use client'

import ThoughtsFeed from '@/components/thoughts-feed'
import { motion } from 'framer-motion'
import {
  pageHeaderVariants,
  decoratorVariants,
  childVariants,
  titleVariants,
  sectionVariants,
  viewportOnce,
} from '@/lib/animation-config'

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={pageHeaderVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          {/* Decorative element */}
          <motion.div
            variants={decoratorVariants}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.span
            variants={childVariants}
            className="text-primary/60 text-xs tracking-[0.3em] uppercase block mb-4 font-jost"
          >
            Unfiltered
          </motion.span>

          <motion.h1
            variants={titleVariants}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-wide font-jost"
          >
            <span className="text-foreground">The </span>
            <span className="text-primary">Thoughts</span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-lg text-muted-foreground font-light"
          >
            Unfiltered ideas, insights, and observations. My personal microblog.
          </motion.p>
        </motion.div>

        {/* Feed */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ThoughtsFeed />
        </motion.div>
      </div>
    </div>
  )
}