'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'intense' | 'subtle' | 'neon'
  tiltEffect?: boolean
  glowOnHover?: boolean
  borderGlow?: boolean
}

export function GlassmorphismCard({
  children,
  className,
  variant = 'default',
  tiltEffect = true,
  glowOnHover = true,
  borderGlow = true
}: GlassmorphismCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth movement
  const springMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // Transform values for 3D tilt effect
  const rotateX = useTransform(springMouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springMouseX, [-0.5, 0.5], [-10, 10])

  // Gradient shifts
  const gradientX = useTransform(springMouseX, [-0.5, 0.5], [0, 100])
  const gradientY = useTransform(springMouseY, [-0.5, 0.5], [0, 100])

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tiltEffect) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) / rect.width
    const y = (e.clientY - centerY) / rect.height

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  // Variant styles
  const variants = {
    default: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    },
    intense: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
    },
    subtle: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
    },
    neon: {
      background: 'rgba(99, 102, 241, 0.05)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn('relative rounded-2xl overflow-hidden transform-gpu will-change-transform', className)}
      style={{
        ...variants[variant],
        rotateX: tiltEffect ? rotateX : 0,
        rotateY: tiltEffect ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={glowOnHover ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Dynamic gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow effect */}
      {borderGlow && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: 'transparent',
            boxShadow: variant === 'neon'
              ? '0 0 20px rgba(99, 102, 241, 0.5), inset 0 0 20px rgba(99, 102, 241, 0.1)'
              : '0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Noise texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)',
          transform: 'translateX(-100%)',
        }}
        animate={isHovered ? {
          transform: 'translateX(100%)',
          opacity: [0, 0.5, 0],
        } : {}}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
          delay: 0.1,
        }}
      />
    </motion.div>
  )
}