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
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-light mb-4"
          >
            <span className="text-white">RANDOM</span>
            <span className="text-cyan-400 font-black neon-glow"> THOUGHTS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 font-light"
          >
            Unfiltered ideas, insights, and observations. My personal tweet-like microblog.
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