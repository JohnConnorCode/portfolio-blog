'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface LoadingProgressProps {
  isLoading: boolean
  progress?: number
  variant?: 'linear' | 'circular' | 'dots' | 'pulse'
  size?: 'sm' | 'md' | 'lg'
  color?: string
  showPercentage?: boolean
  message?: string
  className?: string
}

interface CircularProgressProps {
  progress: number
  size: number
  strokeWidth: number
  color: string
  showPercentage: boolean
}

const CircularProgress = ({ progress, size, strokeWidth, color, showPercentage }: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`
          }}
        />
      </svg>

      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-sm font-bold"
            style={{ color }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      )}
    </div>
  )
}

const DotsLoader = ({ color, size }: { color: string; size: number }) => {
  const dotSize = size / 8
  const spacing = dotSize * 1.5

  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const PulseLoader = ({ color, size }: { color: string; size: number }) => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          backgroundColor: color,
        }}
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}

const sizeMap = {
  sm: { linear: 2, circular: 32, dots: 24, pulse: 24 },
  md: { linear: 3, circular: 48, dots: 32, pulse: 32 },
  lg: { linear: 4, circular: 64, dots: 40, pulse: 40 }
}

export function LoadingProgress({
  isLoading,
  progress = 0,
  variant = 'linear',
  size = 'md',
  color = '#06b6d4',
  showPercentage = false,
  message,
  className
}: LoadingProgressProps) {
  const dimensions = sizeMap[size]

  if (!isLoading) return null

  const renderLoader = () => {
    switch (variant) {
      case 'circular':
        return (
          <CircularProgress
            progress={progress}
            size={dimensions.circular}
            strokeWidth={3}
            color={color}
            showPercentage={showPercentage}
          />
        )

      case 'dots':
        return <DotsLoader color={color} size={dimensions.dots} />

      case 'pulse':
        return <PulseLoader color={color} size={dimensions.pulse} />

      case 'linear':
      default:
        return (
          <div className="w-full space-y-2">
            <div className="relative w-full bg-gray-800 rounded-full overflow-hidden" style={{ height: dimensions.linear }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {showPercentage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm font-medium"
                style={{ color }}
              >
                {Math.round(progress)}%
              </motion.div>
            )}
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      className={cn(
        'flex flex-col items-center justify-center space-y-4',
        className
      )}
    >
      {renderLoader()}

      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground text-center max-w-xs"
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  )
}

// Full-screen loading overlay
export function LoadingOverlay({
  isLoading,
  progress,
  variant = 'circular',
  message = 'Loading...',
  showProgress = true
}: {
  isLoading: boolean
  progress?: number
  variant?: LoadingProgressProps['variant']
  message?: string
  showProgress?: boolean
}) {
  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25
            }}
            className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl p-8 shadow-2xl max-w-sm mx-4"
          >
            <LoadingProgress
              isLoading={true}
              progress={progress}
              variant={variant}
              size="lg"
              showPercentage={showProgress}
              message={message}
              className="w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// Hook for managing loading states
export function useLoadingProgress(initialProgress = 0) {
  const [progress, setProgress] = useState(initialProgress)
  const [isLoading, setIsLoading] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const start = (targetProgress = 100, duration = 3000) => {
    setIsLoading(true)
    setProgress(0)

    const increment = targetProgress / (duration / 50)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          return targetProgress
        }
        return prev + increment
      })
    }, 50)
  }

  const complete = () => {
    setProgress(100)
    setTimeout(() => {
      setIsLoading(false)
      setProgress(0)
    }, 300)
  }

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsLoading(false)
    setProgress(0)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    progress,
    isLoading,
    start,
    complete,
    reset,
    setProgress
  }
}