'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CounterAnimationProps {
  value: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimalPlaces?: number
  separator?: string
}

export function CounterAnimation({
  value,
  delay = 0,
  className,
  prefix = '',
  suffix = '',
  decimalPlaces = 0,
  separator = ','
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const displayValue = useTransform(springValue, (latest) => {
    const num = latest.toFixed(decimalPlaces)
    const parts = num.split('.')
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return decimalPlaces > 0 ? `${integerPart}.${parts[1]}` : integerPart
  })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)
    }
  }, [isInView, value, delay, motionValue])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  )
}

// Preset counter components for common use cases
export function MetricCounter({
  value,
  label,
  description,
  className,
  icon,
  variant = 'default'
}: {
  value: number
  label: string
  description?: string
  className?: string
  icon?: React.ReactNode
  variant?: 'default' | 'gradient' | 'minimal'
}) {
  const variants = {
    default: 'bg-gray-800/50 border border-gray-700 p-6 rounded-xl',
    gradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 rounded-xl',
    minimal: 'p-4'
  }

  return (
    <motion.div
      className={cn(variants[variant], className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-10%' }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-2xl">{icon}</div>
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="space-y-2">
        <CounterAnimation
          value={value}
          duration={2.5}
          delay={0.5}
          className="text-3xl font-bold text-white"
          suffix="+"
        />
        <h3 className="text-lg font-semibold text-gray-200">{label}</h3>
        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export function ProgressCounter({
  current,
  target,
  label,
  className,
  showPercentage = true
}: {
  current: number
  target: number
  label: string
  className?: string
  showPercentage?: boolean
}) {
  const percentage = Math.min((current / target) * 100, 100)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={cn('space-y-3', className)}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-200">{label}</span>
        {showPercentage && (
          <CounterAnimation
            value={percentage}
            duration={2}
            delay={0.3}
            className="text-sm font-bold text-indigo-400"
            suffix="%"
            decimalPlaces={1}
          />
        )}
      </div>

      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${percentage}%` } : { width: '0%' }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: 'easeOut'
          }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '200%' } : { x: '-100%' }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <CounterAnimation
          value={current}
          duration={2}
          delay={0.3}
          separator=","
        />
        <span>{target.toLocaleString()}</span>
      </div>
    </motion.div>
  )
}

export function RotatingCounter({
  value,
  className,
  digits = 6
}: {
  value: number
  className?: string
  digits?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const valueString = value.toString().padStart(digits, '0')

  return (
    <div ref={ref} className={cn('flex space-x-1 font-mono', className)}>
      {valueString.split('').map((digit, index) => (
        <motion.div
          key={index}
          className="relative w-8 h-12 bg-gray-900 rounded border border-gray-700 overflow-hidden"
          initial={{ rotateX: 90 }}
          animate={isInView ? { rotateX: 0 } : { rotateX: 90 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: 'easeOut'
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Current digit */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
            initial={{ y: '100%' }}
            animate={isInView ? { y: '0%' } : { y: '100%' }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + 0.2,
              ease: 'easeOut'
            }}
          >
            {digit}
          </motion.div>

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />

          {/* Highlight effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: index * 0.1 + 1,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}