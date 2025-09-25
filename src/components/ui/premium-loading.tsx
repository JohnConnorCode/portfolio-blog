'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface LiquidProgressBarProps {
  /** Progress value (0-100) */
  value: number
  /** Bar height */
  height?: number
  /** Liquid color */
  color?: string
  /** Background color */
  backgroundColor?: string
  /** Show percentage text */
  showPercentage?: boolean
  /** Animation duration */
  duration?: number
  /** Custom className */
  className?: string
}

export function LiquidProgressBar({
  value,
  height = 8,
  color = '#06b6d4',
  backgroundColor = '#374151',
  showPercentage = true,
  duration = 1.5,
  className,
}: LiquidProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          height: `${height}px`,
          backgroundColor,
        }}
      >
        {/* Liquid fill */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            backgroundColor: color,
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${animatedValue}%` }}
          transition={{
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Liquid wave effect */}
        <motion.div
          className="absolute top-0 h-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
            width: '20%',
          }}
          animate={{
            left: ['-20%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Bubble effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [height, -height],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Percentage text */}
      {showPercentage && (
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(animatedValue)}%
        </motion.div>
      )}
    </div>
  )
}

interface PulsingDotsProps {
  /** Number of dots */
  count?: number
  /** Dot size */
  size?: number
  /** Animation speed */
  speed?: number
  /** Dot color */
  color?: string
  /** Custom className */
  className?: string
}

export function PulsingDots({
  count = 3,
  size = 8,
  speed = 0.6,
  color = 'currentColor',
  className,
}: PulsingDotsProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: speed * 2,
            repeat: Infinity,
            delay: i * speed * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

interface OrbitingDotsProps {
  /** Center dot size */
  centerSize?: number
  /** Orbiting dot size */
  orbitSize?: number
  /** Orbit radius */
  radius?: number
  /** Animation speed */
  speed?: number
  /** Number of orbiting dots */
  count?: number
  /** Custom className */
  className?: string
}

export function OrbitingDots({
  centerSize = 12,
  orbitSize = 6,
  radius = 24,
  speed = 2,
  count = 3,
  className,
}: OrbitingDotsProps) {
  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{
        width: radius * 2 + orbitSize,
        height: radius * 2 + orbitSize,
      }}
    >
      {/* Center dot */}
      <motion.div
        className="absolute bg-current rounded-full"
        style={{
          width: centerSize,
          height: centerSize,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting dots */}
      {[...Array(count)].map((_, i) => {
        const angle = (i / count) * 360
        return (
          <motion.div
            key={i}
            className="absolute bg-current rounded-full opacity-70"
            style={{
              width: orbitSize,
              height: orbitSize,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: speed * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: (i / count) * speed * 0.5,
            }}
            transformTemplate={({ rotate }) => {
              return `rotate(${rotate}) translateX(${radius}px) rotate(-${rotate})`
            }}
          />
        )
      })}
    </div>
  )
}

interface SpinnerProps {
  /** Spinner variant */
  variant?: 'ring' | 'dots' | 'bars' | 'pulse' | 'orbit'
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Color */
  color?: string
  /** Custom className */
  className?: string
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
}

export function PremiumSpinner({
  variant = 'ring',
  size = 'md',
  color = 'currentColor',
  className,
}: SpinnerProps) {
  const spinnerSize = sizeMap[size]

  if (variant === 'dots') {
    return (
      <PulsingDots
        count={3}
        size={spinnerSize / 4}
        color={color}
        className={className}
      />
    )
  }

  if (variant === 'orbit') {
    return (
      <OrbitingDots
        centerSize={spinnerSize / 3}
        orbitSize={spinnerSize / 6}
        radius={spinnerSize / 2}
        className={className}
      />
    )
  }

  if (variant === 'bars') {
    return (
      <div className={cn("flex items-end space-x-1", className)}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-sm"
            style={{
              width: spinnerSize / 8,
              backgroundColor: color,
            }}
            animate={{
              height: [spinnerSize / 4, spinnerSize, spinnerSize / 4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn("rounded-full", className)}
        style={{
          width: spinnerSize,
          height: spinnerSize,
          backgroundColor: color,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    )
  }

  // Default ring spinner
  return (
    <motion.div
      className={cn("rounded-full border-2", className)}
      style={{
        width: spinnerSize,
        height: spinnerSize,
        borderColor: `${color}20`,
        borderTopColor: color,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

interface BlurInImageProps {
  src: string
  alt: string
  /** Custom className */
  className?: string
  /** Blur amount during loading */
  blurAmount?: number
  /** Animation duration */
  duration?: number
  /** Placeholder color */
  placeholderColor?: string
}

export function BlurInImage({
  src,
  alt,
  className,
  blurAmount = 20,
  duration = 0.8,
  placeholderColor = '#374151',
}: BlurInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: placeholderColor }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <PremiumSpinner variant="ring" size="md" />
        </motion.div>
      )}

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{
          opacity: 0,
          filter: `blur(${blurAmount}px)`,
          scale: 1.1,
        }}
        animate={
          isLoaded
            ? {
                opacity: 1,
                filter: 'blur(0px)',
                scale: 1,
              }
            : {}
        }
        transition={{
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />

      {/* Error state */}
      {isError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <div className="mb-2">📷</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

interface LoadingOverlayProps {
  /** Whether the overlay is visible */
  isVisible: boolean
  /** Loading message */
  message?: string
  /** Spinner variant */
  spinnerVariant?: SpinnerProps['variant']
  /** Custom className */
  className?: string
  /** Background blur amount */
  blurAmount?: number
}

export function LoadingOverlay({
  isVisible,
  message = 'Loading...',
  spinnerVariant = 'ring',
  className,
  blurAmount = 8,
}: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "bg-black/30 backdrop-blur-sm",
            className
          )}
          style={{
            backdropFilter: `blur(${blurAmount}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-background/90 rounded-lg p-8 shadow-2xl text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <PremiumSpinner
              variant={spinnerVariant}
              size="lg"
              className="mb-4 mx-auto"
            />
            <p className="text-muted-foreground">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Preset configurations
export const PremiumLoadingPresets = {
  /** Quick liquid progress */
  quickProgress: {
    duration: 1,
    height: 6,
    color: '#06b6d4',
  },

  /** Elegant progress with waves */
  elegantProgress: {
    duration: 2,
    height: 12,
    color: '#a855f7',
    showPercentage: true,
  },

  /** Minimal dots */
  minimalDots: {
    count: 3,
    size: 6,
    speed: 0.5,
  },

  /** Vibrant orbiting */
  vibrantOrbit: {
    centerSize: 16,
    orbitSize: 8,
    radius: 28,
    speed: 1.5,
    count: 4,
  },

  /** Smooth blur-in image */
  smoothImage: {
    blurAmount: 15,
    duration: 1.2,
    placeholderColor: '#1f2937',
  }
} as const