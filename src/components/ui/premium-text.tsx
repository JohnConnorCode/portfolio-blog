'use client'

import { motion, useInView, stagger } from 'framer-motion'
import { ReactNode, useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface PremiumTextProps {
  children: ReactNode
  /** Text variant */
  variant?: 'gradient' | 'shimmer' | 'glow' | 'reveal' | 'typewriter' | 'blur-in'
  /** Animation on hover */
  hoverEffect?: 'gradient-shift' | 'letter-spacing' | 'scale' | 'glow' | 'none'
  /** Custom className */
  className?: string
  /** Animation duration */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Whether to trigger animation when in view */
  animateInView?: boolean
  /** Gradient colors for gradient variant */
  gradientFrom?: string
  gradientTo?: string
  gradientVia?: string
  /** Custom shimmer color */
  shimmerColor?: string
  /** Text size for responsive design */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  /** Word-by-word animation speed */
  wordDelay?: number
  /** Character-by-character animation speed */
  charDelay?: number
}

// Shimmer animation keyframes
const shimmerVariants = {
  initial: {
    backgroundPosition: '-200% center',
  },
  animate: {
    backgroundPosition: '200% center',
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'linear',
    },
  },
}

// Gradient shift on hover
const gradientShiftVariants = {
  initial: {
    backgroundPosition: '0% center',
  },
  hover: {
    backgroundPosition: '100% center',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Letter spacing animation
const letterSpacingVariants = {
  initial: {
    letterSpacing: '0em',
  },
  hover: {
    letterSpacing: '0.1em',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

// Glow effect
const glowVariants = {
  initial: {
    textShadow: 'none',
  },
  hover: {
    textShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
    transition: {
      duration: 0.3,
    },
  },
}

export function PremiumText({
  children,
  variant = 'gradient',
  hoverEffect = 'gradient-shift',
  className,
  duration = 1,
  delay = 0,
  animateInView = true,
  gradientFrom = '#06b6d4',
  gradientTo = '#a855f7',
  gradientVia = '#ec4899',
  shimmerColor = 'rgba(255, 255, 255, 0.8)',
  as = 'span',
  wordDelay = 0.1,
  charDelay = 0.03,
}: PremiumTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldAnimate = !animateInView || (animateInView && isInView)

  // Convert children to string if it's a string, otherwise handle React nodes
  const textContent = typeof children === 'string' ? children : ''
  const words = textContent.split(' ')

  // Base styles for different variants
  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientVia} 50%, ${gradientTo} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200% 200%',
        }

      case 'shimmer':
        return {
          background: `linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            ${shimmerColor} 50%,
            transparent 60%,
            transparent 100%
          )`,
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }

      case 'glow':
        return {
          color: 'currentColor',
          textShadow: '0 0 10px currentColor',
        }

      default:
        return {}
    }
  }

  const getHoverVariant = () => {
    switch (hoverEffect) {
      case 'gradient-shift':
        return gradientShiftVariants
      case 'letter-spacing':
        return letterSpacingVariants
      case 'glow':
        return glowVariants
      case 'scale':
        return {
          initial: { scale: 1 },
          hover: {
            scale: 1.05,
            transition: { duration: 0.2, ease: 'easeInOut' }
          }
        }
      default:
        return {}
    }
  }

  // Word reveal animation
  if (variant === 'reveal' && textContent) {
    const Component = motion[as] as any

    return (
      <Component
        ref={ref}
        className={cn("inline-block", className)}
        initial="initial"
        whileHover="hover"
        variants={getHoverVariant()}
        style={getVariantStyles()}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={shouldAnimate ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            } : {}}
            transition={{
              duration: duration * 0.5,
              delay: delay + (i * wordDelay),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {word}
          </motion.span>
        ))}
      </Component>
    )
  }

  // Typewriter animation
  if (variant === 'typewriter' && textContent) {
    const Component = motion[as] as any
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
      if (!shouldAnimate || !mounted) return

      let currentIndex = 0
      const timer = setInterval(() => {
        setDisplayText(textContent.slice(0, currentIndex + 1))
        currentIndex++

        if (currentIndex >= textContent.length) {
          clearInterval(timer)
        }
      }, 50)

      return () => clearInterval(timer)
    }, [shouldAnimate, textContent, mounted])

    return (
      <Component
        ref={ref}
        className={cn("inline-block", className)}
        initial="initial"
        whileHover="hover"
        variants={getHoverVariant()}
        style={getVariantStyles()}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="ml-1"
        >
          |
        </motion.span>
      </Component>
    )
  }

  // Blur-in character animation
  if (variant === 'blur-in' && textContent) {
    const Component = motion[as] as any
    const chars = textContent.split('')

    return (
      <Component
        ref={ref}
        className={cn("inline-block", className)}
        initial="initial"
        whileHover="hover"
        variants={getHoverVariant()}
        style={getVariantStyles()}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={shouldAnimate ? {
              opacity: 1,
              filter: 'blur(0px)'
            } : {}}
            transition={{
              duration: duration * 0.3,
              delay: delay + (i * charDelay),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    )
  }

  // Standard variants (gradient, shimmer, glow)
  const Component = motion[as] as any

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  if (variant === 'shimmer') {
    return (
      <Component
        ref={ref}
        className={cn("inline-block", className)}
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        whileHover="hover"
        variants={{
          ...animationVariants,
          ...shimmerVariants,
          ...getHoverVariant(),
        }}
        transition={{
          opacity: { duration, delay },
          y: { duration, delay },
        }}
        style={getVariantStyles()}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      ref={ref}
      className={cn("inline-block", className)}
      initial="initial"
      animate={shouldAnimate ? "animate" : "initial"}
      whileHover="hover"
      variants={{
        ...animationVariants,
        ...getHoverVariant(),
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={getVariantStyles()}
    >
      {children}
    </Component>
  )
}

// Preset configurations
export const PremiumTextPresets = {
  /** Hero heading with gradient */
  hero: {
    variant: 'gradient' as const,
    hoverEffect: 'gradient-shift' as const,
    as: 'h1' as const,
    gradientFrom: '#06b6d4',
    gradientTo: '#a855f7',
    gradientVia: '#ec4899',
  },

  /** Shimmering subtitle */
  shimmerSubtitle: {
    variant: 'shimmer' as const,
    hoverEffect: 'letter-spacing' as const,
    as: 'h2' as const,
    duration: 0.8,
  },

  /** Glowing call-to-action */
  glowCTA: {
    variant: 'glow' as const,
    hoverEffect: 'glow' as const,
    as: 'span' as const,
  },

  /** Word-by-word reveal */
  wordReveal: {
    variant: 'reveal' as const,
    hoverEffect: 'none' as const,
    wordDelay: 0.15,
    duration: 1.2,
  },

  /** Typewriter effect */
  typewriter: {
    variant: 'typewriter' as const,
    hoverEffect: 'none' as const,
    delay: 0.5,
  },

  /** Blur-in animation */
  blurIn: {
    variant: 'blur-in' as const,
    hoverEffect: 'scale' as const,
    charDelay: 0.05,
    duration: 0.8,
  },

  /** Elegant paragraph */
  elegantParagraph: {
    variant: 'gradient' as const,
    hoverEffect: 'letter-spacing' as const,
    as: 'p' as const,
    gradientFrom: '#64748b',
    gradientTo: '#1e293b',
    duration: 1.5,
  }
} as const

// Helper component for easy preset usage
interface PremiumTextPresetProps extends Omit<PremiumTextProps, keyof typeof PremiumTextPresets[keyof typeof PremiumTextPresets]> {
  preset: keyof typeof PremiumTextPresets
}

export function PremiumTextWithPreset({ preset, ...props }: PremiumTextPresetProps) {
  const presetConfig = PremiumTextPresets[preset]
  return <PremiumText {...presetConfig} {...props} />
}