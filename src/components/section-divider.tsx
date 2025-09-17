'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'geometric' | 'organic' | 'dots' | 'wave'
  className?: string
}

export function SectionDivider({ variant = 'geometric', className = '' }: SectionDividerProps) {
  const dividers = {
    geometric: (
      <svg
        viewBox="0 0 1200 60"
        className="w-full h-12"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,30 L300,5 L600,30 L900,5 L1200,30"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    ),
    organic: (
      <svg
        viewBox="0 0 1200 80"
        className="w-full h-16"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,40 Q300,10 600,40 T1200,40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/20"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="600"
          cy="40"
          r="3"
          fill="currentColor"
          className="text-primary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </svg>
    ),
    dots: (
      <div className="flex justify-center items-center space-x-6 py-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-foreground/30"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    ),
    wave: (
      <div className="relative h-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 1200 60"
            className="w-full h-8"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-foreground/20"
            />
          </svg>
        </motion.div>
      </div>
    ),
  }

  return (
    <div className={`py-12 ${className}`}>
      {dividers[variant]}
    </div>
  )
}