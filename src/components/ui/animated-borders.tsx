'use client'

import { motion } from 'framer-motion'

interface AnimatedBorderProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedBorder({ children, className = "", delay = 0 }: AnimatedBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-l from-transparent via-primary/50 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Left border */}
      <motion.div
        className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-transparent via-primary/50 to-transparent"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {children}
    </div>
  )
}