'use client'

import ThoughtsFeed from '@/components/thoughts-feed'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThoughtsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-cyan-400/60 text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Unfiltered
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Thoughts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Unfiltered ideas, insights, and observations. My personal microblog.
          </motion.p>
        </div>
        
        {/* Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ThoughtsFeed />
        </motion.div>
      </div>
    </motion.div>
  )
}