'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  stagger?: number
  once?: boolean
}

export function AnimatedText({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'p',
  stagger = 0.02,
  once = true
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  
  const words = children.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: stagger
      }
    }
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  }
  
  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{ 
              display: 'inline-block', 
              marginRight: '0.25em',
              perspective: '1000px'
            }}
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}

interface AnimatedLettersProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  once?: boolean
}

export function AnimatedLetters({ 
  text, 
  className = '', 
  delay = 0,
  as: Component = 'span',
  once = true
}: AnimatedLettersProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  
  const letters = text.split('')
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.015
      }
    }
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    }
  }
  
  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: 'inline-block', perspective: '1000px' }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            style={{ 
              display: 'inline-block',
              transformStyle: 'preserve-3d'
            }}
            variants={child}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}

interface FadeInTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeInText({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  once = true
}: FadeInTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        delay, 
        duration,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}