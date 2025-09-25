'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'pulse' | 'wave' | 'shimmer'
  speed?: 'slow' | 'normal' | 'fast'
}

const skeletonVariants = {
  pulse: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },
  wave: {
    background: [
      'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
    ],
    backgroundPosition: ['-100%', '100%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear'
    }
  },
  shimmer: {
    background: [
      'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%)',
    ],
    backgroundSize: ['20px 20px'],
    backgroundPosition: ['0 0', '20px 20px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

const speedMap = {
  slow: 3,
  normal: 2,
  fast: 1
}

export function Skeleton({
  className,
  variant = 'pulse',
  speed = 'normal'
}: SkeletonProps) {
  const duration = speedMap[speed]

  return (
    <motion.div
      animate={{
        ...skeletonVariants[variant],
        transition: {
          ...skeletonVariants[variant].transition,
          duration
        }
      }}
      className={cn(
        'bg-muted/20 rounded-md backdrop-blur-sm',
        variant === 'wave' && 'bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]',
        className
      )}
      style={variant === 'wave' ? {
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        backgroundSize: '200% 100%',
      } : undefined}
    />
  )
}

// Specialized skeleton components
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4 p-6 rounded-xl border border-border/20 bg-card/5 backdrop-blur-sm', className)}>
      <Skeleton className="h-4 w-3/4" variant="shimmer" />
      <Skeleton className="h-4 w-1/2" variant="shimmer" />
      <Skeleton className="h-32 w-full" variant="wave" />
      <div className="flex space-x-4">
        <Skeleton className="h-10 w-20" variant="pulse" />
        <Skeleton className="h-10 w-24" variant="pulse" />
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-border/20 bg-card/5 backdrop-blur-sm overflow-hidden"
    >
      <Skeleton className="h-48 w-full" variant="wave" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" variant="shimmer" />
        <Skeleton className="h-4 w-full" variant="pulse" />
        <Skeleton className="h-4 w-2/3" variant="pulse" />
        <div className="flex justify-between items-center pt-4">
          <div className="flex space-x-2">
            <Skeleton className="h-6 w-16 rounded-full" variant="pulse" />
            <Skeleton className="h-6 w-20 rounded-full" variant="pulse" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" variant="shimmer" />
        </div>
      </div>
    </motion.div>
  )
}

export function BlogPostSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Skeleton className="h-8 w-3/4" variant="wave" />
        <Skeleton className="h-4 w-1/2" variant="pulse" />
      </div>

      <Skeleton className="h-64 w-full rounded-lg" variant="shimmer" />

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" variant="pulse" />
        <Skeleton className="h-4 w-full" variant="pulse" />
        <Skeleton className="h-4 w-3/4" variant="pulse" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" variant="pulse" />
        <Skeleton className="h-4 w-5/6" variant="pulse" />
        <Skeleton className="h-4 w-4/5" variant="pulse" />
      </div>
    </motion.div>
  )
}

export function NavbarSkeleton() {
  return (
    <div className="flex items-center justify-between h-16 px-4">
      <Skeleton className="h-8 w-32" variant="pulse" />
      <div className="hidden md:flex space-x-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-16" variant="wave" />
        ))}
      </div>
      <Skeleton className="h-8 w-8 rounded-full" variant="shimmer" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <Skeleton className="h-16 w-3/4 mx-auto" variant="wave" />
          <Skeleton className="h-16 w-2/3 mx-auto" variant="wave" />
        </div>

        <Skeleton className="h-6 w-full max-w-2xl mx-auto" variant="pulse" />
        <Skeleton className="h-6 w-4/5 max-w-2xl mx-auto" variant="pulse" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Skeleton className="h-12 w-40 rounded-lg" variant="shimmer" />
          <Skeleton className="h-12 w-40 rounded-lg" variant="shimmer" />
        </div>
      </div>
    </motion.div>
  )
}

export function ContactFormSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 p-8 rounded-xl border border-border/20 bg-card/5 backdrop-blur-sm"
    >
      <div className="space-y-4">
        <Skeleton className="h-6 w-48" variant="shimmer" />
        <Skeleton className="h-4 w-3/4" variant="pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" variant="pulse" />
          <Skeleton className="h-12 w-full rounded-lg" variant="wave" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" variant="pulse" />
          <Skeleton className="h-12 w-full rounded-lg" variant="wave" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-24" variant="pulse" />
        <Skeleton className="h-32 w-full rounded-lg" variant="shimmer" />
      </div>

      <Skeleton className="h-12 w-32 rounded-lg" variant="pulse" />
    </motion.div>
  )
}

// Loading state wrapper
export function LoadingWrapper({
  isLoading,
  fallback,
  children,
  className
}: {
  isLoading: boolean
  fallback: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {fallback}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

// Staggered skeleton list
export function SkeletonList({
  count = 3,
  component: Component = CardSkeleton,
  className
}: {
  count?: number
  component?: React.ComponentType<any>
  className?: string
}) {
  return (
    <div className={cn('space-y-6', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  )
}