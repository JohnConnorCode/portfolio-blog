'use client'

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import { ReactNode, useRef, MouseEvent, useState } from 'react'
import { cn } from '@/lib/utils'

interface MagneticHoverProps {
  children: ReactNode
  /** Magnetic strength (0-1) */
  strength?: number
  /** Maximum distance for magnetic effect */
  maxDistance?: number
  /** Spring configuration */
  springConfig?: {
    stiffness: number
    damping: number
    mass: number
  }
  /** Custom className */
  className?: string
  /** Whether to enable magnetic effect */
  magnetic?: boolean
}

export function MagneticHover({
  children,
  strength = 0.3,
  maxDistance = 50,
  springConfig = { stiffness: 200, damping: 20, mass: 0.5 },
  className,
  magnetic = true,
}: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const distanceX = mouseX - centerX
    const distanceY = mouseY - centerY
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    if (distance < maxDistance) {
      const magnetStrength = 1 - distance / maxDistance
      x.set(distanceX * strength * magnetStrength)
      y.set(distanceY * strength * magnetStrength)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

interface Premium3DCardProps {
  children: ReactNode
  /** Tilt strength (0-1) */
  tiltStrength?: number
  /** Shadow intensity */
  shadowIntensity?: number
  /** Scale on hover */
  hoverScale?: number
  /** Custom className */
  className?: string
  /** Whether to enable 3D effect */
  enable3D?: boolean
}

export function Premium3DCard({
  children,
  tiltStrength = 0.1,
  shadowIntensity = 0.3,
  hoverScale = 1.02,
  className,
  enable3D = true,
}: Premium3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [15 * tiltStrength, -15 * tiltStrength])
  const rotateY = useTransform(x, [-0.5, 0.5], [-15 * tiltStrength, 15 * tiltStrength])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enable3D || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = (e.clientX - centerX) / (rect.width / 2)
    const mouseY = (e.clientY - centerY) / (rect.height / 2)

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: enable3D ? rotateX : 0,
        rotateY: enable3D ? rotateY : 0,
      }}
      animate={{
        scale: isHovered ? hoverScale : 1,
      }}
      transition={{
        scale: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Dynamic shadow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg"
        style={{
          background: 'linear-gradient(145deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
          transform: useTransform(
            [x, y],
            ([latestX, latestY]) =>
              `translateX(${latestX * 25}px) translateY(${latestY * 25 + 10}px) scale(${isHovered ? 1.1 : 1})`
          ),
          opacity: isHovered ? shadowIntensity : 0,
        }}
        animate={{
          opacity: isHovered ? shadowIntensity : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  )
}

interface LiquidButtonProps {
  children: ReactNode
  /** Liquid color */
  liquidColor?: string
  /** Animation duration */
  duration?: number
  /** Button variant */
  variant?: 'fill' | 'blob' | 'wave' | 'morphing'
  /** Custom className */
  className?: string
  /** Click handler */
  onClick?: () => void
}

export function LiquidButton({
  children,
  liquidColor = '#06b6d4',
  duration = 0.6,
  variant = 'fill',
  className,
  onClick,
}: LiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePos({ x, y })
  }

  const getLiquidVariants = () => {
    switch (variant) {
      case 'fill':
        return {
          initial: {
            scale: 0,
            opacity: 0,
          },
          hover: {
            scale: 1.5,
            opacity: 1,
          }
        }

      case 'blob':
        return {
          initial: {
            scale: 0,
            borderRadius: '50%',
          },
          hover: {
            scale: 1.2,
            borderRadius: ['50%', '40% 60%', '60% 40%', '40% 60%', '50%'],
          }
        }

      case 'wave':
        return {
          initial: {
            scaleX: 0,
            scaleY: 1,
          },
          hover: {
            scaleX: 1,
            scaleY: 1,
          }
        }

      case 'morphing':
        return {
          initial: {
            scale: 0,
            rotate: 0,
          },
          hover: {
            scale: 1.3,
            rotate: [0, 180, 360],
          }
        }

      default:
        return {}
    }
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-colors z-10",
        "border border-gray-300 text-gray-700 hover:text-white",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: liquidColor,
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        variants={getLiquidVariants()}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={{
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

interface AnimatedUnderlineProps {
  children: ReactNode
  /** Underline color */
  color?: string
  /** Animation direction */
  direction?: 'left-to-right' | 'right-to-left' | 'center-out' | 'edges-in'
  /** Animation duration */
  duration?: number
  /** Underline thickness */
  thickness?: number
  /** Custom className */
  className?: string
  /** Tag to render */
  as?: 'a' | 'span' | 'div'
  /** Link href if using anchor */
  href?: string
}

export function AnimatedUnderline({
  children,
  color = 'currentColor',
  direction = 'left-to-right',
  duration = 0.3,
  thickness = 2,
  className,
  as = 'span',
  href,
}: AnimatedUnderlineProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getUnderlineVariants = () => {
    switch (direction) {
      case 'left-to-right':
        return {
          initial: { width: '0%', left: '0%' },
          hover: { width: '100%', left: '0%' }
        }

      case 'right-to-left':
        return {
          initial: { width: '0%', right: '0%' },
          hover: { width: '100%', right: '0%' }
        }

      case 'center-out':
        return {
          initial: { width: '0%', left: '50%', transform: 'translateX(-50%)' },
          hover: { width: '100%', left: '50%', transform: 'translateX(-50%)' }
        }

      case 'edges-in':
        return {
          initial: { width: '100%', opacity: 0 },
          hover: { width: '100%', opacity: 1 }
        }

      default:
        return {
          initial: { width: '0%' },
          hover: { width: '100%' }
        }
    }
  }

  const Component = motion[as] as any

  const commonProps = {
    className: cn("relative inline-block", className),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    ...(as === 'a' && href ? { href } : {}),
  }

  return (
    <Component {...commonProps}>
      {children}
      <motion.div
        className="absolute bottom-0"
        style={{
          height: `${thickness}px`,
          backgroundColor: color,
        }}
        variants={getUnderlineVariants()}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={{
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </Component>
  )
}

// Preset configurations
export const PremiumHoverPresets = {
  /** Strong magnetic effect */
  strongMagnetic: {
    strength: 0.5,
    maxDistance: 80,
    springConfig: { stiffness: 150, damping: 15, mass: 0.5 }
  },

  /** Subtle magnetic effect */
  subtleMagnetic: {
    strength: 0.2,
    maxDistance: 40,
    springConfig: { stiffness: 300, damping: 25, mass: 0.3 }
  },

  /** Dramatic 3D card */
  dramatic3D: {
    tiltStrength: 0.2,
    shadowIntensity: 0.5,
    hoverScale: 1.05,
  },

  /** Gentle 3D card */
  gentle3D: {
    tiltStrength: 0.05,
    shadowIntensity: 0.2,
    hoverScale: 1.01,
  },

  /** Blob liquid button */
  blobButton: {
    variant: 'blob' as const,
    duration: 0.8,
    liquidColor: '#a855f7',
  },

  /** Wave liquid button */
  waveButton: {
    variant: 'wave' as const,
    duration: 0.5,
    liquidColor: '#06b6d4',
  },

  /** Elegant underline */
  elegantUnderline: {
    direction: 'center-out' as const,
    duration: 0.4,
    thickness: 2,
  },

  /** Quick underline */
  quickUnderline: {
    direction: 'left-to-right' as const,
    duration: 0.2,
    thickness: 1,
  }
} as const