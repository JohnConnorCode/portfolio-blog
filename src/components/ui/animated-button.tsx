'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useMotionConfig } from '@/hooks/use-motion-config'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost'
  ripple?: boolean
  glow?: boolean
}

export function AnimatedButton({
  children,
  className,
  variant = 'primary',
  ripple = true,
  glow = false,
  ...props
}: AnimatedButtonProps) {
  const { springConfig, duration } = useMotionConfig()
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()

      setRipples(prev => [...prev, { x, y, id }])
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id))
      }, 600)
    }

    props.onClick?.(e as any)
  }

  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
    secondary: 'border border-purple-500/30 text-purple-400',
    ghost: 'text-muted-foreground hover:text-foreground'
  }

  return (
    <motion.button
      className={cn(
        'relative px-8 py-4 font-semibold rounded-xl overflow-hidden',
        'transition-all duration-200',
        variants[variant],
        glow && 'shadow-[0_0_20px_rgba(168,85,247,0.4)]',
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springConfig}
      {...props}
    >
      {/* Ripple effect container */}
      {ripple && (
        <div className="absolute inset-0 pointer-events-none">
          {ripples.map(({ x, y, id }) => (
            <motion.span
              key={id}
              className="absolute bg-white/30 rounded-full"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{
                width: 200,
                height: 200,
                opacity: 0
              }}
              transition={{ duration: duration.slow, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      {/* Hover shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: duration.slow }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}