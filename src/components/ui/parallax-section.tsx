'use client'

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Type for scroll offset
type ScrollOffset = ["start end" | "start start" | "end start" | "end end", "start end" | "start start" | "end start" | "end end"]

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
  enableTilt?: boolean
  enableScale?: boolean
  offset?: ScrollOffset
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

  // Always call hooks unconditionally
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
  const rotateXValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0])
  const rotateYValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        style={{
          y,
          scale: enableScale ? scaleValue : 1,
          rotateX: enableTilt ? rotateXValue : 0,
          rotateY: enableTilt ? rotateYValue : 0,
          transformStyle: 'preserve-3d'
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Extracted component for LayeredParallax layers
interface LayerItemProps {
  content: ReactNode
  speed: number
  className?: string
  zIndex?: number
  index: number
  scrollYProgress: MotionValue<number>
}

function LayerItem({ content, speed, className, zIndex, index, scrollYProgress }: LayerItemProps) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * -100}%`])

  return (
    <motion.div
      style={{
        y,
        zIndex: zIndex || index
      }}
      className={cn('absolute inset-0', className)}
    >
      {content}
    </motion.div>
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
    offset: ["start end", "end start"] as ScrollOffset
  })

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {layers.map((layer, index) => (
        <LayerItem
          key={index}
          content={layer.content}
          speed={layer.speed}
          className={layer.className}
          zIndex={layer.zIndex}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
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

  // Always call hooks unconditionally
  const rotateXValue = useTransform(springMouseY, [-0.5, 0.5], [10, -10])
  const rotateYValue = useTransform(springMouseX, [-0.5, 0.5], [-10, 10])
  const scaleValue = useTransform(springMouseX, [-0.5, 0.5], [0.95, 1.05])

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
        rotateX: enableRotation ? rotateXValue : 0,
        rotateY: enableRotation ? rotateYValue : 0,
        scale: enableScale ? scaleValue : 1,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// Extracted component for DepthParallax children
interface DepthItemProps {
  child: ReactNode
  index: number
  totalChildren: number
  spacing: number
  scrollYProgress: MotionValue<number>
}

function DepthItem({ child, index, totalChildren, spacing, scrollYProgress }: DepthItemProps) {
  const depth = index + 1
  const y = useTransform(scrollYProgress, [0, 1], [0, depth * spacing])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + depth * 0.1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        y,
        scale,
        opacity,
        zIndex: totalChildren - index
      }}
    >
      {child}
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
    offset: ["start end", "end start"] as ScrollOffset
  })

  return (
    <div ref={ref} className={cn('relative', className)} style={{ height: '150vh' }}>
      {children.map((child, index) => (
        <DepthItem
          key={index}
          child={child}
          index={index}
          totalChildren={children.length}
          spacing={spacing}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}

// Extracted component for FloatingParallax elements
interface FloatingItemProps {
  content: ReactNode
  initialX: number
  initialY: number
  speed: number
  amplitude?: number
  index: number
  scrollYProgress: MotionValue<number>
}

function FloatingItem({ content, initialX, initialY, speed, amplitude = 10, index, scrollYProgress }: FloatingItemProps) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [initialY, initialY + (speed * -200)]
  )

  const floatY = useTransform(
    () => Math.sin(Date.now() * 0.001 + index) * amplitude
  )

  const combinedY = useTransform([y, floatY], ([yVal, floatVal]) => (yVal as number) + (floatVal as number))

  return (
    <motion.div
      className="absolute"
      style={{
        x: initialX,
        y: combinedY,
        zIndex: index
      }}
      animate={{
        x: [initialX - 5, initialX + 5, initialX],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {content}
    </motion.div>
  )
}

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
    offset: ["start end", "end start"] as ScrollOffset
  })

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {elements.map((element, index) => (
        <FloatingItem
          key={index}
          content={element.content}
          initialX={element.initialX}
          initialY={element.initialY}
          speed={element.speed}
          amplitude={element.amplitude}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
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
