'use client'

import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PremiumButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  magneticStrength?: number
  springConfig?: { stiffness: number; damping: number }
  rippleEffect?: boolean
  soundEffect?: boolean
}

export function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  disabled = false,
  magneticStrength = 0.3,
  springConfig = { stiffness: 400, damping: 30 },
  rippleEffect = true,
  soundEffect = false
}: PremiumButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  // Magnetic effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  // Scale and rotation effects
  const scale = useMotionValue(1)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springScale = useSpring(scale, { stiffness: 600, damping: 40 })
  const springRotateX = useSpring(rotateX, { stiffness: 600, damping: 40 })
  const springRotateY = useSpring(rotateY, { stiffness: 600, damping: 40 })

  // Gradient shift on mouse move
  const gradientX = useMotionValue(50)
  const gradientY = useMotionValue(50)
  const springGradientX = useSpring(gradientX, { stiffness: 300, damping: 30 })
  const springGradientY = useSpring(gradientY, { stiffness: 300, damping: 30 })

  // Sound effect function
  const playSound = () => {
    if (soundEffect && typeof window !== 'undefined') {
      // Create a subtle click sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }

  // Handle mouse movement for magnetic effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) * magneticStrength
    const distanceY = (e.clientY - centerY) * magneticStrength

    x.set(distanceX)
    y.set(distanceY)

    // 3D rotation effect
    const rotationX = (e.clientY - centerY) / rect.height * -10
    const rotationY = (e.clientX - centerX) / rect.width * 10

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    // Gradient shift
    const gradX = ((e.clientX - rect.left) / rect.width) * 100
    const gradY = ((e.clientY - rect.top) / rect.height) * 100
    gradientX.set(gradX)
    gradientY.set(gradY)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    gradientX.set(50)
    gradientY.set(50)
    setIsHovered(false)
  }

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (!disabled) {
      scale.set(1.05)
      setIsHovered(true)
    }
  }

  // Handle click with ripple effect
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return

    setIsPressed(true)
    scale.set(0.95)
    setTimeout(() => {
      scale.set(1.05)
      setIsPressed(false)
    }, 100)

    // Play sound
    playSound()

    // Create ripple effect
    if (rippleEffect && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const rippleX = e.clientX - rect.left
      const rippleY = e.clientY - rect.top
      const rippleId = Date.now()

      setRipples(prev => [...prev, { x: rippleX, y: rippleY, id: rippleId }])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== rippleId))
      }, 600)
    }

    onClick?.()
  }

  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-lg shadow-indigo-500/25',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 shadow-lg shadow-black/25',
    ghost: 'bg-transparent text-white border border-white/20 hover:border-white/40',
    destructive: 'bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-lg shadow-red-500/25'
  }

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const Component = href ? motion.a : motion.button
  const componentProps = href ? { href } : { onClick: handleClick }

  return (
    <Component
      ref={ref}
      {...componentProps}
      className={cn(
        'relative overflow-hidden rounded-lg font-medium transition-all duration-200 cursor-pointer select-none',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black',
        'transform-gpu will-change-transform',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        backgroundImage: variant === 'primary' && isHovered ?
          `radial-gradient(circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(255,255,255,0.2) 0%, transparent 70%)` :
          undefined
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      disabled={disabled}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: variant === 'primary'
            ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))'
            : 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(20px)',
          transform: 'scale(1.5)',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
        }}
        animate={isHovered ? {
          transform: 'translateX(100%)',
          opacity: [0, 1, 0],
        } : {}}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Noise texture overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </Component>
  )
}