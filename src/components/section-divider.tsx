'use client'

import { motion } from 'framer-motion'
import { viewport, TIMING } from '@/lib/animation-config'

interface SectionDividerProps {
  variant?: 'geometric' | 'wave' | 'deco'
  className?: string
}

export function SectionDivider({ variant = 'geometric', className = '' }: SectionDividerProps) {
  const dividers = {
    geometric: (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <svg viewBox="0 0 1200 60" className="w-full h-12 text-primary" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,30 L300,5 L600,30 L900,5 L1200,30"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewport}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    ),

    wave: (
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={viewport}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1200 60" className="w-full h-8 text-primary" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30"
              stroke="url(#waveGradient)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>
    ),

    deco: (
      <div className="relative py-6">
        <div className="flex items-center justify-center">
          <motion.svg
            viewBox="0 0 200 40"
            className="w-48 h-10 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
          >
            <defs>
              <linearGradient id="decoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Art Deco Rays */}
            {[...Array(9)].map((_, i) => (
              <motion.line
                key={i}
                x1="100"
                y1="20"
                x2={100 + Math.cos((i - 4) * 0.2) * 80}
                y2={20 - Math.abs(Math.sin((i - 4) * 0.3)) * 15}
                stroke="url(#decoGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={viewport}
                transition={{ duration: TIMING.normal, delay: i * 0.05 }}
              />
            ))}
            {/* Central Diamond */}
            <motion.path
              d="M100,10 L108,20 L100,30 L92,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={viewport}
              transition={{ duration: TIMING.fast, delay: TIMING.normal }}
            />
            {/* Horizontal Lines */}
            <line x1="0" y1="20" x2="85" y2="20" stroke="url(#decoGradient)" strokeWidth="1" />
            <line x1="115" y1="20" x2="200" y2="20" stroke="url(#decoGradient)" strokeWidth="1" />
          </motion.svg>
        </div>
      </div>
    ),
  }

  return (
    <div className={`py-8 no-shadow ${className}`}>
      {dividers[variant]}
    </div>
  )
}
