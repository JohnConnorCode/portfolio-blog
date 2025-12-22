'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollMarqueeProps {
  text: string
  direction?: 'left' | 'right'
  className?: string
}

export function ScrollMarquee({ text, direction = 'left', className = '' }: ScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-25%'] : ['-25%', '0%']
  )

  return (
    <div ref={containerRef} className={`overflow-hidden py-4 md:py-8 ${className}`}>
      <motion.div
        style={{ x, willChange: 'transform' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[14vw] sm:text-[9vw] md:text-[5vw] font-black tracking-tight text-primary/30 sm:text-primary/25 md:text-primary/20 font-jost mx-3 sm:mx-4 md:mx-8 select-none"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

interface ParallaxDividerProps {
  className?: string
}

export function ParallaxDivider({ className = '' }: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`py-8 md:py-16 relative ${className}`}>
      <motion.div
        style={{ scaleX, opacity, willChange: 'transform, opacity' }}
        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
      />
      {/* Diamond only on desktop */}
      <motion.div
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className="w-6 h-6 border border-primary/30 rotate-45" />
      </motion.div>
    </div>
  )
}
