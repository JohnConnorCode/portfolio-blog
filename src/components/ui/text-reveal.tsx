'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: string | ReactNode
  className?: string
  variant?: 'words' | 'characters' | 'lines' | 'fade-up' | 'slide-in'
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export function TextReveal({
  children,
  className,
  variant = 'words',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  once = true
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10%' })

  if (typeof children !== 'string') {
    // For non-string content, use simple fade-up animation
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    )
  }

  const text = children as string

  if (variant === 'fade-up') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {text}
      </motion.div>
    )
  }

  if (variant === 'slide-in') {
    return (
      <motion.div
        ref={ref}
        className={cn('overflow-hidden', className)}
        initial={{ width: 0 }}
        animate={isInView ? { width: 'auto' } : { width: 0 }}
        transition={{ duration: duration * 1.5, delay, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration, delay: delay + 0.2 }}
        >
          {text}
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'lines') {
    const lines = text.split('\n').filter(line => line.length > 0)

    return (
      <div ref={ref} className={className}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={isInView ? { y: '0%' } : { y: '100%' }}
              transition={{
                duration,
                delay: delay + lineIndex * stagger,
                ease: 'easeOut'
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'characters') {
    const characters = text.split('')

    return (
      <motion.div ref={ref} className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={isInView ?
              { opacity: 1, y: 0, rotateX: 0 } :
              { opacity: 0, y: 50, rotateX: 90 }
            }
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: 'easeOut'
            }}
            style={{ display: 'inline-block', transformOrigin: 'center bottom' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Default: words animation
  const words = text.split(' ')

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          animate={isInView ?
            { opacity: 1, y: 0, rotateX: 0 } :
            { opacity: 0, y: 50, rotateX: 90 }
          }
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: 'easeOut'
          }}
          style={{
            transformOrigin: 'center bottom',
            marginRight: index < words.length - 1 ? '0.25em' : '0'
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Specialized components for common use cases
export function HeroTextReveal({
  children,
  className
}: {
  children: string
  className?: string
}) {
  return (
    <TextReveal
      variant="words"
      duration={0.8}
      stagger={0.08}
      delay={0.2}
      className={className}
    >
      {children}
    </TextReveal>
  )
}

export function SubtleTextReveal({
  children,
  className
}: {
  children: string | ReactNode
  className?: string
}) {
  return (
    <TextReveal
      variant="fade-up"
      duration={0.6}
      delay={0.1}
      className={className}
    >
      {children}
    </TextReveal>
  )
}

export function TypewriterText({
  children,
  className,
  speed = 50,
  delay = 0
}: {
  children: string
  className?: string
  speed?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const text = children as string
  const characters = text.split('')

  return (
    <motion.div ref={ref} className={cn('overflow-hidden', className)}>
      {isInView && characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * speed) / 1000,
            duration: 0.05
          }}
          style={{ display: 'inline' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}

      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          delay: delay + (characters.length * speed) / 1000,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="inline-block w-0.5 h-[1em] bg-current ml-1"
      />
    </motion.div>
  )
}

// Glitch text effect
export function GlitchText({
  children,
  className,
  intensity = 0.02,
  speed = 0.1
}: {
  children: string
  className?: string
  intensity?: number
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className)}
      animate={isInView ? {
        textShadow: [
          '0 0 0 transparent',
          `${intensity * 10}px 0 0 #ff0000, -${intensity * 10}px 0 0 #00ffff`,
          `${intensity * 5}px 0 0 #ff0000, -${intensity * 5}px 0 0 #00ffff`,
          '0 0 0 transparent'
        ]
      } : {}}
      transition={{
        duration: speed,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    >
      {children}

      {/* Glitch layers */}
      <motion.div
        className="absolute inset-0 opacity-80 mix-blend-multiply text-red-500"
        animate={isInView ? {
          x: [0, intensity * 20, -intensity * 15, 0],
          skewX: [0, intensity * 100, -intensity * 80, 0]
        } : {}}
        transition={{
          duration: speed * 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{ clipPath: 'polygon(0 20%, 100% 20%, 100% 80%, 0 80%)' }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-80 mix-blend-multiply text-cyan-500"
        animate={isInView ? {
          x: [0, -intensity * 15, intensity * 20, 0],
          skewX: [0, -intensity * 80, intensity * 100, 0]
        } : {}}
        transition={{
          duration: speed * 2,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: speed * 0.5
        }}
        style={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 40%, 0 40%)' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}