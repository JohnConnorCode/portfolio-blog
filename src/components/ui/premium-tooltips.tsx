'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
  variant?: 'default' | 'dark' | 'light' | 'glass' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  delay?: number
  interactive?: boolean
  maxWidth?: string
  arrow?: boolean
  className?: string
  contentClassName?: string
  disabled?: boolean
}

type Position = {
  x: number
  y: number
  placement: 'top' | 'bottom' | 'left' | 'right'
}

const variants = {
  default: 'bg-gray-900 text-white border-gray-700',
  dark: 'bg-black text-white border-gray-800',
  light: 'bg-white text-gray-900 border-gray-200',
  glass: 'bg-black/80 text-white border-white/20 backdrop-blur-xl',
  gradient: 'bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground border-primary/30',
}

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

export function Tooltip({
  content,
  children,
  placement = 'auto',
  variant = 'glass',
  size = 'md',
  delay = 200,
  interactive = false,
  maxWidth = '200px',
  arrow = true,
  className = '',
  contentClassName = '',
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, placement: 'top' })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const calculatePosition = (triggerEl: HTMLElement): Position => {
    const triggerRect = triggerEl.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const tooltipWidth = 200 // Approximate width
    const tooltipHeight = 60 // Approximate height
    const offset = 12

    let finalPlacement = placement
    let x = 0
    let y = 0

    // Auto placement logic
    if (placement === 'auto') {
      const spaceTop = triggerRect.top
      const spaceBottom = viewportHeight - triggerRect.bottom
      const spaceLeft = triggerRect.left
      const spaceRight = viewportWidth - triggerRect.right

      if (spaceTop >= tooltipHeight + offset) {
        finalPlacement = 'top'
      } else if (spaceBottom >= tooltipHeight + offset) {
        finalPlacement = 'bottom'
      } else if (spaceLeft >= tooltipWidth + offset) {
        finalPlacement = 'left'
      } else {
        finalPlacement = 'right'
      }
    }

    // Calculate position based on final placement
    switch (finalPlacement) {
      case 'top':
        x = triggerRect.left + triggerRect.width / 2
        y = triggerRect.top - offset
        break
      case 'bottom':
        x = triggerRect.left + triggerRect.width / 2
        y = triggerRect.bottom + offset
        break
      case 'left':
        x = triggerRect.left - offset
        y = triggerRect.top + triggerRect.height / 2
        break
      case 'right':
        x = triggerRect.right + offset
        y = triggerRect.top + triggerRect.height / 2
        break
    }

    return { x, y, placement: finalPlacement }
  }

  const showTooltip = () => {
    if (disabled || !triggerRef.current) return

    const newPosition = calculatePosition(triggerRef.current)
    setPosition(newPosition)
    setIsVisible(true)
  }

  const hideTooltip = () => {
    if (!interactive) {
      setIsVisible(false)
    }
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(showTooltip, delay)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(hideTooltip, interactive ? 100 : 0)
  }

  const handleTooltipMouseEnter = () => {
    if (interactive) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleTooltipMouseLeave = () => {
    if (interactive) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  // Update position on scroll or resize
  useEffect(() => {
    if (!isVisible || !triggerRef.current) return

    const updatePosition = () => {
      if (triggerRef.current) {
        const newPosition = calculatePosition(triggerRef.current)
        setPosition(newPosition)
      }
    }

    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isVisible, placement])

  const getTransformOrigin = (placement: string) => {
    switch (placement) {
      case 'top': return 'bottom center'
      case 'bottom': return 'top center'
      case 'left': return 'right center'
      case 'right': return 'left center'
      default: return 'center'
    }
  }

  const getArrowPosition = (placement: string) => {
    switch (placement) {
      case 'top':
        return 'bottom-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent'
      case 'bottom':
        return 'top-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent'
      case 'left':
        return 'right-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent'
      case 'right':
        return 'left-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent'
      default:
        return ''
    }
  }

  const TooltipContent = () => (
    <AnimatePresence>
      {isVisible && typeof window !== 'undefined' && (
        createPortal(
          <motion.div
            ref={tooltipRef}
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              filter: 'blur(2px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
              mass: 0.5,
            }}
            style={{
              position: 'fixed',
              left: position.placement === 'left' ? position.x : position.placement === 'right' ? position.x : position.x,
              top: position.placement === 'top' ? position.y : position.placement === 'bottom' ? position.y : position.y,
              transform: position.placement === 'left' ? 'translateX(-100%)' :
                        position.placement === 'right' ? 'translateX(0%)' :
                        position.placement === 'top' ? 'translate(-50%, -100%)' :
                        'translate(-50%, 0%)',
              transformOrigin: getTransformOrigin(position.placement),
              maxWidth,
              zIndex: 9999,
            }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            className={cn(
              'relative rounded-lg border shadow-2xl',
              'backdrop-blur-xl',
              variants[variant],
              sizes[size],
              'animate-in fade-in-0 zoom-in-95 duration-200',
              className
            )}
          >
            {/* Arrow */}
            {arrow && (
              <div
                className={cn(
                  'absolute w-3 h-3 rotate-45 border',
                  variants[variant].includes('bg-black') ? 'bg-black' :
                  variants[variant].includes('bg-white') ? 'bg-white' :
                  variants[variant].includes('bg-gray-900') ? 'bg-gray-900' :
                  'bg-black/80',
                  getArrowPosition(position.placement)
                )}
                style={{
                  borderColor: variant === 'glass' ? 'rgba(255, 255, 255, 0.2)' :
                             variant === 'light' ? 'rgb(229, 231, 235)' :
                             'rgb(55, 65, 81)',
                }}
              />
            )}

            {/* Content */}
            <div className={cn('relative z-10', contentClassName)}>
              {content}
            </div>

            {/* Glow effect for premium variants */}
            {(variant === 'gradient' || variant === 'glass') && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 -z-10 blur-xl"
              />
            )}
          </motion.div>,
          document.body
        )
      )}
    </AnimatePresence>
  )

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn('inline-block', className)}
      >
        {children}
      </div>
      <TooltipContent />
    </>
  )
}

// Pre-built tooltip variants
export function InfoTooltip({ content, children, ...props }: Omit<TooltipProps, 'variant'>) {
  return (
    <Tooltip
      content={content}
      variant="glass"
      placement="top"
      {...props}
    >
      {children}
    </Tooltip>
  )
}

export function HelpTooltip({ content, children, ...props }: Omit<TooltipProps, 'variant' | 'interactive'>) {
  return (
    <Tooltip
      content={content}
      variant="dark"
      placement="auto"
      interactive={true}
      delay={100}
      {...props}
    >
      {children}
    </Tooltip>
  )
}

export function PremiumTooltip({ content, children, ...props }: Omit<TooltipProps, 'variant'>) {
  return (
    <Tooltip
      content={content}
      variant="gradient"
      placement="auto"
      arrow={true}
      {...props}
    >
      {children}
    </Tooltip>
  )
}

// Tooltip with rich content
export function RichTooltip({
  title,
  description,
  children,
  ...props
}: Omit<TooltipProps, 'content'> & {
  title: string
  description?: string
}) {
  const content = (
    <div className="space-y-1">
      <div className="font-semibold">{title}</div>
      {description && (
        <div className="text-xs opacity-80 leading-relaxed">{description}</div>
      )}
    </div>
  )

  return (
    <Tooltip
      content={content}
      variant="glass"
      size="md"
      maxWidth="250px"
      {...props}
    >
      {children}
    </Tooltip>
  )
}