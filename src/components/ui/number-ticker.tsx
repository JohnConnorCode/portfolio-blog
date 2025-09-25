'use client'

import { motion, useSpring, useTransform, MotionValue } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  /** Format the number (e.g., with commas, currency, etc) */
  format?: (value: number) => string
  /** Animation duration in seconds */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Whether to use slot machine effect */
  slotMachine?: boolean
  /** Custom className */
  className?: string
  /** Direction of counting */
  direction?: 'up' | 'down'
  /** Whether to animate on mount */
  animateOnMount?: boolean
  /** Preserve trailing zeros in decimals */
  preserveDecimals?: boolean
  /** Currency symbol */
  currency?: string
  /** Percentage symbol */
  showPercentage?: boolean
  /** Custom prefix */
  prefix?: string
  /** Custom suffix */
  suffix?: string
  /** Separator for thousands */
  separator?: string
  /** Whether to stagger digit animations */
  staggerDigits?: boolean
}

const defaultFormatter = (value: number): string => {
  return Math.round(value).toLocaleString()
}

const currencyFormatter = (value: number, currency: string = '$'): string => {
  return `${currency}${Math.round(value).toLocaleString()}`
}

const percentageFormatter = (value: number): string => {
  return `${value}%`
}

// Custom hook for slot machine digit animation
function useSlotMachineDigit(finalDigit: number, delay: number = 0) {
  const [currentDigit, setCurrentDigit] = useState(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    const startTime = Date.now() + delay * 1000
    const duration = 1500 // 1.5 seconds

    const animate = () => {
      const elapsed = Date.now() - startTime
      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)

      if (progress < 1) {
        // Create slot machine effect with random digits
        const randomDigit = Math.floor(Math.random() * 10)
        const easedProgress = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        const targetProgress = easedProgress * finalDigit

        if (progress < 0.8) {
          setCurrentDigit(randomDigit)
        } else {
          setCurrentDigit(Math.round(targetProgress))
        }

        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCurrentDigit(finalDigit)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [finalDigit, delay])

  return currentDigit
}

// Component for individual slot machine digits
function SlotMachineDigit({ digit, delay = 0, className }: { digit: number, delay?: number, className?: string }) {
  const animatedDigit = useSlotMachineDigit(digit, delay)

  return (
    <motion.span
      key={animatedDigit}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn("inline-block tabular-nums", className)}
    >
      {animatedDigit}
    </motion.span>
  )
}

// Component for separator animation (commas, dots, etc.)
function AnimatedSeparator({ separator, delay = 0, className }: { separator: string, delay?: number, className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className={cn("inline-block", className)}
    >
      {separator}
    </motion.span>
  )
}

export function NumberTicker({
  value,
  format = defaultFormatter,
  duration = 2,
  delay = 0,
  slotMachine = false,
  className,
  direction = 'up',
  animateOnMount = true,
  preserveDecimals = false,
  currency,
  showPercentage = false,
  prefix,
  suffix,
  separator = ',',
  staggerDigits = true,
}: NumberTickerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (animateOnMount) {
      setMounted(true)
    }
  }, [animateOnMount])

  // Create spring animation for smooth counting
  const spring = useSpring(direction === 'up' ? 0 : value, {
    stiffness: 50,
    damping: 30,
    mass: 1,
  })

  const animatedValue = useTransform(spring, (latest) => latest)

  useEffect(() => {
    if (!mounted) return

    const timeout = setTimeout(() => {
      spring.set(direction === 'up' ? value : 0)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [mounted, value, direction, delay, spring])

  // Format number with custom formatting
  const formatNumber = (num: number): string => {
    if (currency) {
      return currencyFormatter(num, currency)
    }
    if (showPercentage) {
      return percentageFormatter(num)
    }
    if (format !== defaultFormatter) {
      return format(num)
    }

    const formatted = preserveDecimals ? num.toFixed(2) : Math.round(num).toString()

    // Add thousand separators
    const parts = formatted.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)

    return parts.join('.')
  }

  if (slotMachine) {
    const formattedValue = formatNumber(value)
    const digits: (string | number)[] = []
    let digitIndex = 0

    // Parse the formatted string and separate digits from separators
    for (let i = 0; i < formattedValue.length; i++) {
      const char = formattedValue[i]
      if (/\d/.test(char)) {
        digits.push(parseInt(char))
      } else {
        digits.push(char)
      }
    }

    return (
      <span className={cn("font-mono tabular-nums", className)}>
        {prefix && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 0.3 }}
            className="mr-1"
          >
            {prefix}
          </motion.span>
        )}

        {currency && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: delay + 0.1,
              duration: 0.4,
              type: "spring",
              stiffness: 200
            }}
            className="mr-0.5"
          >
            {currency}
          </motion.span>
        )}

        {digits.map((item, index) => {
          if (typeof item === 'number') {
            const digitDelay = staggerDigits
              ? delay + (digitIndex * 0.05)
              : delay + 0.2
            digitIndex++

            return (
              <SlotMachineDigit
                key={`${index}-${item}`}
                digit={item}
                delay={digitDelay}
                className={className}
              />
            )
          } else {
            // It's a separator
            return (
              <AnimatedSeparator
                key={`sep-${index}`}
                separator={item}
                delay={delay + 0.3}
                className={className}
              />
            )
          }
        })}

        {showPercentage && (
          <motion.span
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              delay: delay + 0.5,
              duration: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="ml-0.5"
          >
            %
          </motion.span>
        )}

        {suffix && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.4, duration: 0.3 }}
            className="ml-1"
          >
            {suffix}
          </motion.span>
        )}
      </span>
    )
  }

  // Standard spring animation
  return (
    <span className={cn("font-mono tabular-nums", className)}>
      {prefix && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay, duration: 0.3 }}
          className="mr-1"
        >
          {prefix}
        </motion.span>
      )}

      {currency && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: delay + 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 200
          }}
          className="mr-0.5"
        >
          {currency}
        </motion.span>
      )}

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.3 }}
      >
        {mounted ? (
          <motion.span>
            {formatNumber(useTransform(animatedValue, formatNumber).get())}
          </motion.span>
        ) : (
          formatNumber(direction === 'up' ? 0 : value)
        )}
      </motion.span>

      {showPercentage && (
        <motion.span
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            delay: delay + 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="ml-0.5"
        >
          %
        </motion.span>
      )}

      {suffix && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.4, duration: 0.3 }}
          className="ml-1"
        >
          {suffix}
        </motion.span>
      )}
    </span>
  )
}

// Preset configurations
export const NumberTickerPresets = {
  /** Currency with slot machine effect */
  currency: {
    slotMachine: true,
    currency: '$',
    staggerDigits: true,
  },

  /** Percentage with animated symbol */
  percentage: {
    showPercentage: true,
    slotMachine: true,
  },

  /** Large numbers with separators */
  largeNumber: {
    slotMachine: true,
    separator: ',',
    staggerDigits: true,
  },

  /** Smooth spring animation */
  smooth: {
    slotMachine: false,
    duration: 2.5,
  },

  /** Quick slot machine */
  quickSlot: {
    slotMachine: true,
    duration: 1,
    staggerDigits: false,
  },

  /** Elegant long animation */
  elegant: {
    slotMachine: true,
    duration: 3,
    staggerDigits: true,
    delay: 0.5,
  }
} as const