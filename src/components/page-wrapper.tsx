'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { childVariants } from '@/lib/animation-config'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      variants={childVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}