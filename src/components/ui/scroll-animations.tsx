'use client'

import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  once?: boolean
  className?: string
  staggerChildren?: number
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  direction?: 'vertical' | 'horizontal'
  className?: string
}

interface ScrollProgressProps {
  className?: string
  height?: number
  color?: string
}

// Enhanced scroll reveal with multiple animation options
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  threshold = 0.1,
  once = true,
  className,
  staggerChildren
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 }
      case 'down': return { y: -distance, opacity: 0 }
      case 'left': return { x: distance, opacity: 0 }
      case 'right': return { x: -distance, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: getInitialPosition(),
        animate: {
          ...getFinalPosition(),
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            ...(staggerChildren && {
              staggerChildren,
              delayChildren: 0.1
            })
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax scrolling effect
export function Parallax({
  children,
  speed = 0.5,
  direction = 'vertical',
  className
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical'
      ? [`0px`, `${speed * 100}px`]
      : [`0px`, `${speed * 100}px`]
  )

  return (
    <motion.div
      ref={ref}
      style={direction === 'vertical' ? { y: transform } : { x: transform }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll progress indicator
export function ScrollProgress({
  className,
  height = 4,
  color = '#06b6d4'
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={cn('fixed top-0 left-0 right-0 z-50 origin-left bg-primary', className)}
      style={{
        scaleX: scrollYProgress,
        height: `${height}px`,
        backgroundColor: color,
        transformOrigin: '0%'
      }}
    />
  )
}

// Staggered list animation
export function StaggeredList({
  children,
  staggerDelay = 0.1,
  className
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual list item for staggered animation
export function StaggeredItem({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll-triggered counter animation
export function ScrollCounter({
  from = 0,
  to,
  duration = 2,
  className,
  suffix = '',
  prefix = ''
}: {
  from?: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useTransform(
    useAnimation().progress,
    [0, 1],
    [from, to]
  )

  useEffect(() => {
    if (isInView) {
      // Animate counter when in view
      count.set(to)
    }
  }, [isInView, to, count])

  return (
    <motion.div
      ref={ref}
      className={className}
    >
      {prefix}
      <motion.span>
        {Math.round(count.get())}
      </motion.span>
      {suffix}
    </motion.div>
  )
}

// Magnetic scroll effect (elements follow scroll with spring physics)
export function MagneticScroll({
  children,
  strength = 0.1,
  className
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y = useTransform(
    scrollY,
    (latest) => latest * strength
  )

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale on scroll
export function ScrollScale({
  children,
  scaleRange = [0.8, 1],
  className
}: {
  children: ReactNode
  scaleRange?: [number, number]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Rotate on scroll
export function ScrollRotate({
  children,
  rotationRange = [-10, 10],
  className
}: {
  children: ReactNode
  rotationRange?: [number, number]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${rotationRange[0]}deg`, `${rotationRange[1]}deg`]
  )

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal on scroll (letter by letter)
export function ScrollTextReveal({
  children,
  className
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const text = children

  return (
    <motion.div
      ref={ref}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Scroll-triggered path animation (for SVGs)
export function ScrollPath({
  pathLength = 100,
  className,
  strokeWidth = 2,
  stroke = 'currentColor',
  children
}: {
  pathLength?: number
  className?: string
  strokeWidth?: number
  stroke?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div ref={ref} className={className}>
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.5 }
        }}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      >
        {children}
      </motion.svg>
    </motion.div>
  )
}