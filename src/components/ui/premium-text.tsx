'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumTextProps {
  children: ReactNode
  className?: string
}

export function PremiumText({ children, className = '' }: PremiumTextProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.span>
  )
}