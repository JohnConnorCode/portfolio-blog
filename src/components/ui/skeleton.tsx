'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'default' | 'text' | 'circular' | 'rounded'
  animation?: 'pulse' | 'wave' | 'shimmer'
}

export function Skeleton({
  className,
  variant = 'default',
  animation = 'shimmer'
}: SkeletonProps) {
  const variants = {
    default: 'rounded-md',
    text: 'rounded-sm h-4',
    circular: 'rounded-full',
    rounded: 'rounded-lg'
  }

  const baseClasses = cn(
    'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800',
    'relative overflow-hidden',
    variants[variant],
    className
  )

  if (animation === 'pulse') {
    return (
      <motion.div
        className={baseClasses}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  if (animation === 'wave') {
    return (
      <motion.div
        className={baseClasses}
        animate={{
          background: [
            'linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)',
            'linear-gradient(90deg, #4b5563 25%, #6b7280 50%, #4b5563 75%)',
            'linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    )
  }

  return (
    <div className={baseClasses}>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 0.5
        }}
      />
    </div>
  )
}

// Preset skeleton layouts
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-3 p-6', className)}>
      <Skeleton className="h-48 w-full" variant="rounded" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" variant="text" />
        <Skeleton className="h-4 w-1/2" variant="text" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" variant="text" />
        <Skeleton className="h-3 w-5/6" variant="text" />
        <Skeleton className="h-3 w-4/6" variant="text" />
      </div>
    </div>
  )
}

export function SkeletonProfile({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center space-x-4 p-4', className)}>
      <Skeleton className="w-16 h-16" variant="circular" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-5 w-32" variant="text" />
        <Skeleton className="h-4 w-24" variant="text" />
        <Skeleton className="h-3 w-48" variant="text" />
      </div>
    </div>
  )
}

export function SkeletonBlogPost({ className }: { className?: string }) {
  return (
    <article className={cn('space-y-6 p-8', className)}>
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-4/5" variant="text" />
        <div className="flex items-center space-x-4">
          <Skeleton className="w-10 h-10" variant="circular" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" variant="text" />
            <Skeleton className="h-3 w-32" variant="text" />
          </div>
        </div>
      </div>

      {/* Featured image */}
      <Skeleton className="h-64 w-full" variant="rounded" />

      {/* Content */}
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-full" variant="text" />
            <Skeleton className="h-4 w-5/6" variant="text" />
            <Skeleton className="h-4 w-4/5" variant="text" />
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-6 w-16"
            variant="rounded"
          />
        ))}
      </div>
    </article>
  )
}

export function SkeletonGrid({
  items = 6,
  className
}: {
  items?: number
  className?: string
}) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {[...Array(items)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: 'easeOut'
          }}
        >
          <SkeletonCard />
        </motion.div>
      ))}
    </div>
  )
}

export function SkeletonTable({
  rows = 5,
  columns = 4,
  className
}: {
  rows?: number
  columns?: number
  className?: string
}) {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {[...Array(columns)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-full" variant="text" />
        ))}
      </div>

      {/* Rows */}
      {[...Array(rows)].map((_, i) => (
        <motion.div
          key={i}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {[...Array(columns)].map((_, j) => (
            <Skeleton key={j} className="h-5 w-full" variant="text" />
          ))}
        </motion.div>
      ))}
    </div>
  )
}