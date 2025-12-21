'use client'

import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useRef, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variant?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'flip'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  threshold?: number
  cascade?: boolean
  cascadeDelay?: number
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-down': {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 }
  }
}

export function ScrollReveal({
  children,
  className,
  variant = 'slide-up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
  threshold = 0.1,
  cascade = false,
  cascadeDelay = 0.1
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    margin: `0px 0px -${threshold * 100}% 0px` as `${number}px ${number}px ${number}px ${number}px`
  })
  const controls = useAnimation()

  // Custom distance for slide variants
  const customVariants = {
    ...variants[variant],
    hidden: {
      ...variants[variant].hidden,
      ...(variant.includes('slide-up') && { y: distance }),
      ...(variant.includes('slide-down') && { y: -distance }),
      ...(variant.includes('slide-left') && { x: distance }),
      ...(variant.includes('slide-right') && { x: -distance }),
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  if (cascade && Array.isArray(children)) {
    return (
      <div ref={ref} className={className}>
        {children.map((child, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={customVariants}
            transition={{
              duration,
              delay: delay + index * cascadeDelay,
              ease: 'easeOut'
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Specialized reveal components
export function FadeInReveal({ children, className, delay = 0 }: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal variant="fade" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}

export function SlideUpReveal({ children, className, delay = 0, distance = 30 }: {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}) {
  return (
    <ScrollReveal variant="slide-up" delay={delay} distance={distance} className={className}>
      {children}
    </ScrollReveal>
  )
}

export function ScaleReveal({ children, className, delay = 0 }: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal variant="scale" delay={delay} duration={0.8} className={className}>
      {children}
    </ScrollReveal>
  )
}

// Staggered reveal for lists
export function StaggeredReveal({
  children,
  className,
  staggerDelay = 0.1,
  variant = 'slide-up'
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  variant?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants[variant]}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: 'easeOut'
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Parallax scroll reveal
export function ParallaxReveal({
  children,
  className,
  speed = 0.5,
  direction = 'up'
}: {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  const directionMap = {
    up: { y: -100 * speed },
    down: { y: 100 * speed },
    left: { x: -100 * speed },
    right: { x: 100 * speed }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{
        duration: 1.2,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Progressive reveal (reveals sections progressively)
export function ProgressiveReveal({
  sections,
  className,
  sectionDelay = 0.3
}: {
  sections: ReactNode[]
  className?: string
  sectionDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <div ref={ref} className={className}>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{
            duration: 0.8,
            delay: index * sectionDelay,
            ease: 'easeOut'
          }}
        >
          {section}
        </motion.div>
      ))}
    </div>
  )
}

// Magnetic reveal (elements are drawn to each other)
export function MagneticReveal({
  children,
  className,
  magnetStrength = 20
}: {
  children: ReactNode[]
  className?: string
  magnetStrength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={cn('flex flex-wrap gap-4', className)}>
      {children.map((child, index) => {
        const angle = (index / children.length) * Math.PI * 2
        const startX = Math.cos(angle) * magnetStrength
        const startY = Math.sin(angle) * magnetStrength

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: startX,
              y: startY,
              scale: 0.5
            }}
            animate={isInView ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1
            } : {
              opacity: 0,
              x: startX,
              y: startY,
              scale: 0.5
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}