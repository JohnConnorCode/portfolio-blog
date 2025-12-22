'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number // -1 to 1, negative = slower, positive = faster
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }: ScrollRevealProps) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleOnScrollProps {
  children: ReactNode
  className?: string
}

export function ScaleOnScroll({ children, className = '' }: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  amplitude?: number
  duration?: number
  className?: string
}

export function FloatingElement({ children, amplitude = 20, duration = 6, className = '' }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RotateOnScrollProps {
  children: ReactNode
  degrees?: number
  className?: string
}

export function RotateOnScroll({ children, degrees = 180, className = '' }: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees])

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  )
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-jost">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </motion.div>
  )
}

interface HorizontalScrollTextProps {
  text: string
  speed?: number
  className?: string
}

export function HorizontalScrollText({ text, speed = 1, className = '' }: HorizontalScrollTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [speed > 0 ? '-20%' : '20%', speed > 0 ? '20%' : '-20%'])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="whitespace-nowrap">
        <span className="text-[8vw] font-bold tracking-tight text-foreground/[0.03] font-jost">
          {text} &nbsp; {text} &nbsp; {text}
        </span>
      </motion.div>
    </div>
  )
}
