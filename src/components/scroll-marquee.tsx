'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollMarqueeProps {
  text: string
  direction?: 'left' | 'right'
  className?: string
  variant?: 'default' | 'outline' | 'mixed'
}

export function ScrollMarquee({ text, direction = 'left', className = '', variant = 'mixed' }: ScrollMarqueeProps) {
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

  // Split text into words for mixed styling
  const words = text.split(' • ').filter(Boolean)

  return (
    <div ref={containerRef} className={`overflow-hidden py-6 md:py-10 relative ${className}`}>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        style={{ x, willChange: 'transform' }}
        className="flex items-center whitespace-nowrap"
      >
        {[...Array(4)].map((_, repeatIdx) => (
          <div key={repeatIdx} className="flex items-center">
            {words.map((word, wordIdx) => (
              <div key={`${repeatIdx}-${wordIdx}`} className="flex items-center">
                {/* Word with alternating styles */}
                {variant === 'mixed' && wordIdx % 2 === 0 ? (
                  // Filled text with glow
                  <span
                    className="text-[12vw] sm:text-[8vw] md:text-[4.5vw] font-black tracking-tight text-primary/40 font-jost select-none drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                    style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.2)' }}
                  >
                    {word}
                  </span>
                ) : variant === 'mixed' ? (
                  // Outlined text
                  <span
                    className="text-[12vw] sm:text-[8vw] md:text-[4.5vw] font-black tracking-tight font-jost select-none"
                    style={{
                      WebkitTextStroke: '1px hsl(var(--primary) / 0.5)',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {word}
                  </span>
                ) : variant === 'outline' ? (
                  <span
                    className="text-[12vw] sm:text-[8vw] md:text-[4.5vw] font-black tracking-tight font-jost select-none"
                    style={{
                      WebkitTextStroke: '1px hsl(var(--primary) / 0.4)',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span className="text-[12vw] sm:text-[8vw] md:text-[4.5vw] font-black tracking-tight text-primary/30 font-jost select-none">
                    {word}
                  </span>
                )}

                {/* Decorative separator */}
                <span className="mx-4 sm:mx-6 md:mx-10 flex items-center gap-2">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary/40 rotate-45" />
                  <span className="w-6 md:w-10 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                </span>
              </div>
            ))}
          </div>
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
