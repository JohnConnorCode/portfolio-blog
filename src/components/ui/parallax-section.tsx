'use client'

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
  enableTilt?: boolean
  enableScale?: boolean
  offset?: [string, string]
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  enableTilt = false,
  enableScale = false,
  offset = ["start end", "end start"]
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? ['0%', `-${speed * 100}%`] : ['0%', `${speed * 100}%`]
  )

  const scale = enableScale ? useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]) : 1
  const rotateX = enableTilt ? useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]) : 0
  const rotateY = enableTilt ? useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0]) : 0

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        style={{
          y,
          scale,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface LayeredParallaxProps {
  layers: Array<{
    content: ReactNode
    speed: number
    className?: string
    zIndex?: number
  }>
  className?: string
}

export function LayeredParallax({ layers, className }: LayeredParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {layers.map((layer, index) => {
        const y = useTransform(scrollYProgress, [0, 1], ['0%', `${layer.speed * -100}%`])

        return (
          <motion.div
            key={index}
            style={{
              y,
              zIndex: layer.zIndex || index
            }}
            className={cn('absolute inset-0', layer.className)}
          >
            {layer.content}
          </motion.div>
        )
      })}
    </div>
  )
}

interface MouseParallaxProps {
  children: ReactNode
  className?: string
  intensity?: number
  enableRotation?: boolean
  enableScale?: boolean
}

export function MouseParallax({
  children,
  className,
  intensity = 0.1,
  enableRotation = true,
  enableScale = false
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useTransform(() => 0)
  const mouseY = useTransform(() => 0)

  const springMouseX = useSpring(mouseX, { stiffness: 300, damping: 50 })
  const springMouseY = useSpring(mouseY, { stiffness: 300, damping: 50 })

  const rotateX = enableRotation ? useTransform(springMouseY, [-0.5, 0.5], [10, -10]) : 0
  const rotateY = enableRotation ? useTransform(springMouseX, [-0.5, 0.5], [-10, 10]) : 0
  const scale = enableScale ? useTransform(springMouseX, [-0.5, 0.5], [0.95, 1.05]) : 1

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) / rect.width * intensity
    const y = (e.clientY - centerY) / rect.height * intensity

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('transform-gpu will-change-transform', className)}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

interface DepthParallaxProps {
  children: ReactNode[]
  className?: string
  spacing?: number
}

export function DepthParallax({ children, className, spacing = 100 }: DepthParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={ref} className={cn('relative', className)} style={{ height: '150vh' }}>
      {children.map((child, index) => {
        const depth = index + 1
        const y = useTransform(scrollYProgress, [0, 1], [0, depth * spacing])
        const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + depth * 0.1])
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3])

        return (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              y,
              scale,
              opacity,
              zIndex: children.length - index
            }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}

// Floating elements with parallax
export function FloatingParallax({
  elements,
  className
}: {
  elements: Array<{
    content: ReactNode
    initialX: number
    initialY: number
    speed: number
    amplitude?: number
  }>
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {elements.map((element, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [element.initialY, element.initialY + (element.speed * -200)]
        )

        const floatY = useTransform(
          () => Math.sin(Date.now() * 0.001 + index) * (element.amplitude || 10)
        )

        const combinedY = useTransform([y, floatY], (values) => values[0] + values[1])

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              x: element.initialX,
              y: combinedY,
              zIndex: index
            }}
            animate={{
              x: [element.initialX - 5, element.initialX + 5, element.initialX],
              rotate: [-2, 2, -2]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {element.content}
          </motion.div>
        )
      })}
    </div>
  )
}

// Sticky parallax sections
export function StickyParallax({
  children,
  className,
  stickyDistance = 300
}: {
  children: ReactNode
  className?: string
  stickyDistance?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -stickyDistance])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      style={{ height: `calc(100vh + ${stickyDistance}px)` }}
    >
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        {children}
      </motion.div>
    </div>
  )
}