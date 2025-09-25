'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { IconDraw } from './icon-draw'
import { useSoundEffect } from './sound-system'

interface FloatingActionButtonProps {
  icon: LucideIcon
  onClick: () => void
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent'
  tooltip?: string
  magneticStrength?: number
  className?: string
  children?: React.ReactNode
  expandable?: boolean
  actions?: Array<{
    icon: LucideIcon
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'danger'
  }>
}

const positionClasses = {
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6',
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
}

const variantClasses = {
  primary: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-primary/25',
  secondary: 'bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-secondary/25',
  accent: 'bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-accent/25',
}

export function FloatingActionButton({
  icon: Icon,
  onClick,
  position = 'bottom-right',
  size = 'md',
  variant = 'primary',
  tooltip,
  magneticStrength = 0.3,
  className,
  children,
  expandable = false,
  actions = [],
}: FloatingActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const playSound = useSoundEffect()

  // Magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const y = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // Floating animation
  const floatingY = useTransform(
    useMotionValue(0),
    [0, 1],
    [0, -8]
  )

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!buttonRef.current || !isHovered) return

      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < 100) {
        mouseX.set(distanceX * magneticStrength)
        mouseY.set(distanceY * magneticStrength)
      } else {
        mouseX.set(0)
        mouseY.set(0)
      }
    }

    document.addEventListener('mousemove', updateMousePosition)
    return () => document.removeEventListener('mousemove', updateMousePosition)
  }, [isHovered, magneticStrength, mouseX, mouseY])

  const handleClick = () => {
    playSound('click')

    if (expandable && actions.length > 0) {
      setIsExpanded(!isExpanded)
    } else {
      onClick()
    }
  }

  const handleActionClick = (action: typeof actions[0]) => {
    playSound('click')
    action.onClick()
    setIsExpanded(false)
  }

  return (
    <div className={cn('fixed z-50', positionClasses[position])}>
      {/* Expanded actions */}
      {expandable && (
        <motion.div
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            scale: isExpanded ? 1 : 0.8,
            y: isExpanded ? 0 : 20,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          className={cn(
            'absolute mb-4',
            position.includes('bottom') ? 'bottom-full' : 'top-full',
            position.includes('right') ? 'right-0' : 'left-0',
            'flex flex-col space-y-3'
          )}
        >
          {actions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                scale: isExpanded ? 1 : 0.8,
              }}
              transition={{
                delay: index * 0.05,
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
              onClick={() => handleActionClick(action)}
              onMouseEnter={() => playSound('hover')}
              className={cn(
                'flex items-center space-x-2 px-4 py-2 rounded-full',
                'backdrop-blur-xl border border-border/20 shadow-xl',
                'hover:shadow-2xl transition-all duration-200',
                'text-sm font-medium',
                action.variant === 'danger'
                  ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20'
                  : 'bg-background/80 hover:bg-background/90 text-foreground'
              )}
              whileHover={{ scale: 1.05, x: position.includes('right') ? -5 : 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconDraw
                icon={action.icon}
                size="sm"
                drawSpeed={0.8}
                triggerOnHover={true}
                autoPlay={false}
                className="w-4 h-4"
              />
              <span className="whitespace-nowrap">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Main button */}
      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true)
          setShowTooltip(true)
          playSound('hover')
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          setShowTooltip(false)
          mouseX.set(0)
          mouseY.set(0)
        }}
        style={{ x, y }}
        animate={{
          y: [0, -4, 0],
          rotate: isExpanded ? 45 : 0,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          'flex items-center justify-center rounded-full',
          'shadow-2xl backdrop-blur-sm',
          'border border-white/10',
          'hover:shadow-3xl transition-all duration-300',
          'focus:outline-none focus:ring-4 focus:ring-primary/20',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        style={{
          filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))',
        }}
      >
        {/* Ripple effect */}
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={
            isHovered
              ? {
                  scale: [0, 1.5],
                  opacity: [1, 0],
                }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            duration: 0.6,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-current opacity-20"
        />

        {children || (
          <IconDraw
            icon={Icon}
            size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
            drawSpeed={1.2}
            triggerOnHover={true}
            autoPlay={false}
            className="relative z-10"
          />
        )}
      </motion.button>

      {/* Tooltip */}
      {tooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showTooltip ? 1 : 0,
            scale: showTooltip ? 1 : 0.8,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          className={cn(
            'absolute pointer-events-none z-10',
            'px-3 py-1.5 rounded-lg text-xs font-medium',
            'bg-black/90 text-white border border-white/10',
            'backdrop-blur-xl shadow-xl',
            'whitespace-nowrap',
            position.includes('right') ? 'right-full mr-3' : 'left-full ml-3',
            'top-1/2 -translate-y-1/2'
          )}
        >
          {tooltip}
          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 w-2 h-2',
              'bg-black/90 border rotate-45',
              position.includes('right')
                ? 'right-[-5px] border-l-transparent border-b-transparent'
                : 'left-[-5px] border-r-transparent border-t-transparent'
            )}
          />
        </motion.div>
      )}
    </div>
  )
}

// Preset configurations
export function ScrollToTopFAB() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <FloatingActionButton
      icon={({ className }) => (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      )}
      onClick={scrollToTop}
      position="bottom-right"
      tooltip="Back to top"
      variant="primary"
    />
  )
}