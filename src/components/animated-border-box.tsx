'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedBorderBoxProps {
  children: ReactNode
  delay?: number
  className?: string
  borderColor?: string
  borderWidth?: number
}

export function AnimatedBorderBox({ 
  children, 
  delay = 0, 
  className = '',
  borderColor = 'rgba(255, 255, 255, 0.2)',
  borderWidth = 2
}: AnimatedBorderBoxProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        pathLength: { 
          delay,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        },
        opacity: { delay, duration: 0.1 }
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* SVG Border Animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <motion.rect
          x="1"
          y="1"
          width="98"
          height="98"
          fill="none"
          stroke={borderColor}
          strokeWidth="2"
          rx="4"
          vectorEffect="non-scaling-stroke"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        />
      </svg>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          delay: delay + 0.3,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Variant for simpler borders without SVG
export function BorderFadeBox({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'all' as 'all' | 'top' | 'right' | 'bottom' | 'left'
}: {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'all' | 'top' | 'right' | 'bottom' | 'left'
}) {
  const borderStyles = {
    all: 'border-2',
    top: 'border-t-2',
    right: 'border-r-2',
    bottom: 'border-b-2',
    left: 'border-l-2'
  }

  return (
    <motion.div
      className={`${borderStyles[direction]} border-foreground/20 ${className}`}
      initial={{ 
        opacity: 0,
        borderColor: 'rgba(255, 255, 255, 0)'
      }}
      whileInView={{ 
        opacity: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          delay: delay + 0.2,
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}