'use client'

import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CustomCursorProps {
  /** Cursor size */
  size?: number
  /** Trail length */
  trailLength?: number
  /** Whether cursor is enabled */
  enabled?: boolean
  /** Custom className */
  className?: string
}

export function CustomCursor({
  size = 20,
  trailLength = 5,
  enabled = true,
  className,
}: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  const cursorRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (!enabled) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - size / 2)
      cursorY.set(e.clientY - size / 2)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true)
        setCursorVariant('pointer')
      } else if (target.matches('input, textarea, [data-cursor="text"]')) {
        setCursorVariant('text')
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [enabled, cursorX, cursorY, size])

  if (!enabled) return null

  const getCursorStyle = () => {
    switch (cursorVariant) {
      case 'pointer':
        return {
          width: size * 1.5,
          height: size * 1.5,
          backgroundColor: 'rgba(6, 182, 212, 0.3)',
          border: '2px solid #06b6d4',
        }
      case 'text':
        return {
          width: 2,
          height: size,
          backgroundColor: '#06b6d4',
        }
      default:
        return {
          width: size,
          height: size,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }
    }
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        ref={cursorRef}
        className={cn("fixed pointer-events-none z-[9999] rounded-full mix-blend-difference", className)}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          ...getCursorStyle(),
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.15 },
        }}
      />

      {/* Cursor trail */}
      {[...Array(trailLength)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9998] rounded-full bg-white/20"
          style={{
            width: size * (0.8 - i * 0.1),
            height: size * (0.8 - i * 0.1),
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          transition={{
            x: { delay: i * 0.02 },
            y: { delay: i * 0.02 },
          }}
        />
      ))}
    </>
  )
}

interface SmoothScrollProps {
  children: ReactNode
  /** Scroll multiplier */
  multiplier?: number
  /** Whether to enable smooth scroll */
  enabled?: boolean
  /** Custom className */
  className?: string
}

export function SmoothScroll({
  children,
  multiplier = 1,
  enabled = true,
  className,
}: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  const { scrollYProgress } = useScroll()
  const smoothScrollY = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
    mass: 0.8,
  })

  useEffect(() => {
    if (!enabled) return

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScrollY(-latest * maxScroll * multiplier)
    })

    return unsubscribe
  }, [enabled, multiplier, scrollYProgress])

  if (!enabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={scrollRef}
      className={cn("will-change-transform", className)}
      style={{
        y: smoothScrollY,
      }}
    >
      {children}
    </motion.div>
  )
}

interface MomentumScrollProps {
  children: ReactNode
  /** Friction amount (0-1) */
  friction?: number
  /** Whether to enable rubber band effect at boundaries */
  rubberBand?: boolean
  /** Custom className */
  className?: string
}

export function MomentumScroll({
  children,
  friction = 0.92,
  rubberBand = true,
  className,
}: MomentumScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState(0)
  const [lastY, setLastY] = useState(0)

  const y = useMotionValue(0)
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.1) {
      const animate = () => {
        const newVelocity = velocity * friction
        setVelocity(newVelocity)
        y.set(y.get() + newVelocity)

        if (Math.abs(newVelocity) > 0.1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [velocity, isDragging, friction, y])

  return (
    <motion.div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      style={{ y: springY }}
      drag="y"
      dragConstraints={containerRef}
      dragElastic={rubberBand ? 0.2 : 0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(_, info) => {
        setIsDragging(false)
        setVelocity(info.velocity.y * 0.1)
      }}
      onDrag={(_, info) => {
        const deltaY = info.point.y - lastY
        setLastY(info.point.y)
        setVelocity(deltaY)
      }}
    >
      {children}
    </motion.div>
  )
}

interface PremiumInputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'textarea'
  /** Placeholder text */
  placeholder?: string
  /** Input value */
  value?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Custom className */
  className?: string
  /** Label text */
  label?: string
  /** Error message */
  error?: string
  /** Success message */
  success?: string
  /** Whether input is disabled */
  disabled?: boolean
}

export function PremiumInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  label,
  error,
  success,
  disabled,
}: PremiumInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    setHasValue(!!value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e.target.value)
  }

  const getBorderColor = () => {
    if (error) return '#ef4444'
    if (success) return '#22c55e'
    if (isFocused) return '#06b6d4'
    return '#374151'
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={cn("relative", className)}>
      {label && (
        <motion.label
          className="block text-sm font-medium mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
      )}

      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isFocused
              ? `0 0 0 2px ${getBorderColor()}20, 0 0 20px ${getBorderColor()}10`
              : 'none',
          }}
          transition={{ duration: 0.2 }}
        />

        <InputComponent
          ref={inputRef as any}
          type={type === 'textarea' ? undefined : type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-lg",
            "border-2 transition-all duration-200",
            "placeholder:text-gray-500 text-white",
            "focus:outline-none focus:ring-0",
            type === 'textarea' && "min-h-[120px] resize-none",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          style={{
            borderColor: getBorderColor(),
          }}
        />

        {/* Floating label effect */}
        {placeholder && (
          <motion.div
            className="absolute left-4 pointer-events-none text-gray-500"
            animate={{
              y: isFocused || hasValue ? -28 : 12,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused ? getBorderColor() : '#6b7280',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {placeholder}
          </motion.div>
        )}

        {/* Status indicator */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              className="absolute right-3 top-3"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {error && <span className="text-red-500">✕</span>}
              {success && <span className="text-green-500">✓</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error/Success message */}
      <AnimatePresence>
        {(error || success) && (
          <motion.div
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-500" : "text-green-500"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {error || success}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface SuccessAnimationProps {
  /** Animation type */
  type?: 'confetti' | 'sparkles' | 'checkmark' | 'celebration'
  /** Whether animation is visible */
  isVisible: boolean
  /** Animation duration */
  duration?: number
  /** Custom className */
  className?: string
  /** Success message */
  message?: string
}

export function SuccessAnimation({
  type = 'confetti',
  isVisible,
  duration = 3000,
  className,
  message,
}: SuccessAnimationProps) {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    if (isVisible && type === 'confetti') {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 4)],
          rotation: Math.random() * 360,
          size: Math.random() * 8 + 4,
        })
      }
      setParticles(newParticles)
    }
  }, [isVisible, type])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn("fixed inset-0 pointer-events-none z-50", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {type === 'confetti' && (
            <>
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute"
                  style={{
                    backgroundColor: particle.color,
                    width: particle.size,
                    height: particle.size,
                  }}
                  initial={{
                    x: `${particle.x}%`,
                    y: '-10%',
                    rotate: particle.rotation,
                  }}
                  animate={{
                    y: '110%',
                    rotate: particle.rotation + 360,
                  }}
                  transition={{
                    duration: duration / 1000,
                    ease: 'easeOut',
                    delay: Math.random() * 0.5,
                  }}
                />
              ))}
            </>
          )}

          {type === 'checkmark' && (
            <div className="flex items-center justify-center h-full">
              <motion.div
                className="bg-green-500 rounded-full p-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="text-white text-4xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ✓
                </motion.div>
              </motion.div>
            </div>
          )}

          {message && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-center">
                {message}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Preset configurations
export const MicroInteractionPresets = {
  /** Minimal cursor */
  minimalCursor: {
    size: 16,
    trailLength: 3,
    enabled: true,
  },

  /** Dramatic cursor */
  dramaticCursor: {
    size: 24,
    trailLength: 8,
    enabled: true,
  },

  /** Smooth scroll */
  smoothScroll: {
    multiplier: 0.8,
    enabled: true,
  },

  /** Momentum scroll */
  momentumScroll: {
    friction: 0.95,
    rubberBand: true,
  },

  /** Premium input */
  premiumInput: {
    type: 'text' as const,
  },

  /** Confetti celebration */
  confettiSuccess: {
    type: 'confetti' as const,
    duration: 3000,
  },

  /** Simple checkmark */
  checkmarkSuccess: {
    type: 'checkmark' as const,
    duration: 2000,
  }
} as const