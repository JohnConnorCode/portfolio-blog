'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconDrawProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  /** Animation speed in seconds */
  drawSpeed?: number
  /** Stagger delay between paths in seconds */
  staggerDelay?: number
  /** Whether to animate fill after stroke */
  fillAfterStroke?: boolean
  /** Whether to loop the animation */
  loop?: boolean
  /** Whether to trigger animation on hover */
  triggerOnHover?: boolean
  /** Whether to start animation immediately */
  autoPlay?: boolean
  /** Custom stroke width */
  strokeWidth?: number
  /** Animation easing */
  ease?: string | number[]
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
}

const defaultEasing = [0.25, 0.46, 0.45, 0.94] // Custom easing curve for premium feel

export function IconDraw({
  icon: Icon,
  size = 'md',
  className,
  drawSpeed = 1.5,
  staggerDelay = 0.1,
  fillAfterStroke = true,
  loop = false,
  triggerOnHover = false,
  autoPlay = true,
  strokeWidth = 2,
  ease = defaultEasing,
}: IconDrawProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [pathLengths, setPathLengths] = useState<number[]>([])
  const controls = useAnimation()

  const iconSize = sizeMap[size]

  useEffect(() => {
    if (!svgRef.current) return

    // Get all paths and calculate their lengths
    const paths = svgRef.current.querySelectorAll('path')
    const lengths: number[] = []

    paths.forEach((path) => {
      const length = path.getTotalLength()
      lengths.push(length)

      // Set initial stroke-dasharray and stroke-dashoffset
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      // Initially hide fill if fillAfterStroke is enabled
      if (fillAfterStroke) {
        path.style.fill = 'transparent'
      }
    })

    setPathLengths(lengths)
  }, [fillAfterStroke])

  const animateIcon = async () => {
    if (!svgRef.current || pathLengths.length === 0) return

    const paths = svgRef.current.querySelectorAll('path')

    // Animate each path drawing
    const pathAnimations = Array.from(paths).map((path, index) => {
      const length = pathLengths[index]

      return new Promise<void>((resolve) => {
        // Animate stroke drawing
        const animation = path.animate([
          { strokeDashoffset: `${length}` },
          { strokeDashoffset: '0' }
        ], {
          duration: drawSpeed * 1000 * (length / 100), // Scale duration by path complexity
          delay: index * staggerDelay * 1000,
          easing: Array.isArray(ease)
            ? `cubic-bezier(${ease.join(', ')})`
            : ease as string,
          fill: 'forwards'
        })

        animation.onfinish = () => {
          // If fillAfterStroke is enabled, animate fill
          if (fillAfterStroke) {
            path.style.fill = 'currentColor'
            path.style.fillOpacity = '0'

            const fillAnimation = path.animate([
              { fillOpacity: '0' },
              { fillOpacity: '1' }
            ], {
              duration: 300,
              delay: 100,
              easing: 'ease-out',
              fill: 'forwards'
            })

            fillAnimation.onfinish = () => resolve()
          } else {
            resolve()
          }
        }
      })
    })

    await Promise.all(pathAnimations)

    // If loop is enabled, reset and restart
    if (loop) {
      setTimeout(() => {
        resetAnimation()
        setTimeout(animateIcon, 100)
      }, 1000)
    }
  }

  const resetAnimation = () => {
    if (!svgRef.current) return

    const paths = svgRef.current.querySelectorAll('path')
    paths.forEach((path, index) => {
      const length = pathLengths[index]
      path.style.strokeDashoffset = `${length}`
      if (fillAfterStroke) {
        path.style.fill = 'transparent'
        path.style.fillOpacity = '0'
      }
    })
  }

  useEffect(() => {
    if (pathLengths.length === 0) return

    if (triggerOnHover && isHovered) {
      resetAnimation()
      animateIcon()
    } else if (autoPlay && !triggerOnHover) {
      animateIcon()
    }
  }, [pathLengths, isHovered, triggerOnHover, autoPlay])

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (triggerOnHover) {
      setIsHovered(false)
    }
  }

  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: iconSize,
        height: iconSize
      }}
    >
      <Icon
        ref={svgRef}
        size={iconSize}
        strokeWidth={strokeWidth}
        style={{
          stroke: 'currentColor',
          fill: fillAfterStroke ? 'transparent' : 'currentColor'
        }}
      />
    </div>
  )
}

// Preset configurations for common use cases
export const IconDrawPresets = {
  /** Fast drawing animation for small icons */
  quick: {
    drawSpeed: 0.8,
    staggerDelay: 0.05,
    fillAfterStroke: true,
    ease: [0.4, 0, 0.2, 1]
  },

  /** Elegant drawing animation */
  elegant: {
    drawSpeed: 2,
    staggerDelay: 0.15,
    fillAfterStroke: true,
    ease: [0.25, 0.46, 0.45, 0.94]
  },

  /** Bouncy spring animation */
  spring: {
    drawSpeed: 1.5,
    staggerDelay: 0.1,
    fillAfterStroke: true,
    ease: [0.68, -0.55, 0.265, 1.55]
  },

  /** Slow, deliberate drawing */
  deliberate: {
    drawSpeed: 3,
    staggerDelay: 0.2,
    fillAfterStroke: true,
    ease: [0.25, 0.46, 0.45, 0.94]
  },

  /** Hover-triggered animation */
  hover: {
    drawSpeed: 1,
    staggerDelay: 0.05,
    fillAfterStroke: true,
    triggerOnHover: true,
    autoPlay: false,
    ease: [0.4, 0, 0.2, 1]
  }
} as const

// Helper component for easy preset usage
interface IconDrawPresetProps extends Omit<IconDrawProps, keyof typeof IconDrawPresets[keyof typeof IconDrawPresets]> {
  preset: keyof typeof IconDrawPresets
}

export function IconDrawWithPreset({ preset, ...props }: IconDrawPresetProps) {
  const presetConfig = IconDrawPresets[preset]

  return <IconDraw {...presetConfig} {...props} />
}