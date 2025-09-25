'use client'

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FloatingParticle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  direction: number
}

interface FloatingParticlesProps {
  /** Number of particles */
  count?: number
  /** Particle size range */
  sizeRange?: [number, number]
  /** Particle colors */
  colors?: string[]
  /** Animation speed multiplier */
  speed?: number
  /** Custom className */
  className?: string
  /** Whether particles should interact with mouse */
  interactive?: boolean
}

export function FloatingParticles({
  count = 50,
  sizeRange = [1, 4],
  colors = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b'],
  speed = 1,
  className,
  interactive = true,
}: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<FloatingParticle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Initialize particles
  useEffect(() => {
    const newParticles: FloatingParticle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
      })
    }
    setParticles(newParticles)
  }, [count, sizeRange])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: colors[index % colors.length],
            opacity: particle.opacity,
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + Math.cos(particle.direction) * 20}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + Math.sin(particle.direction) * 20}%`,
              `${particle.y}%`,
            ],
          }}
          transition={{
            duration: (20 - particle.speed * 10) / speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Mouse interaction effect */}
          {interactive && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors[index % colors.length]}40 0%, transparent 70%)`,
                transform: 'scale(3)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

interface GradientOrbsProps {
  /** Number of orbs */
  count?: number
  /** Orb size range */
  sizeRange?: [number, number]
  /** Gradient colors */
  gradients?: string[][]
  /** Animation duration range */
  durationRange?: [number, number]
  /** Custom className */
  className?: string
  /** Blur amount */
  blur?: number
}

export function GradientOrbs({
  count = 3,
  sizeRange = [200, 400],
  gradients = [
    ['#06b6d4', '#3b82f6'],
    ['#a855f7', '#ec4899'],
    ['#f59e0b', '#ef4444'],
  ],
  durationRange = [20, 40],
  className,
  blur = 80,
}: GradientOrbsProps) {
  const [orbs, setOrbs] = useState<any[]>([])

  useEffect(() => {
    const newOrbs = []
    for (let i = 0; i < count; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        gradient: gradients[i % gradients.length],
        duration: Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0],
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
      })
    }
    setOrbs(newOrbs)
  }, [count, sizeRange, gradients, durationRange])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {orbs.map((orb, index) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.gradient[0]} 0%, ${orb.gradient[1]} 100%)`,
            filter: `blur(${blur}px)`,
          }}
          animate={{
            x: [
              `${orb.initialX}%`,
              `${(orb.initialX + 30) % 100}%`,
              `${(orb.initialX + 60) % 100}%`,
              `${orb.initialX}%`,
            ],
            y: [
              `${orb.initialY}%`,
              `${(orb.initialY + 20) % 100}%`,
              `${(orb.initialY + 40) % 100}%`,
              `${orb.initialY}%`,
            ],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 2,
          }}
        />
      ))}
    </div>
  )
}

interface MovingGrainProps {
  /** Grain density (0-1) */
  density?: number
  /** Animation speed */
  speed?: number
  /** Grain size */
  size?: number
  /** Custom className */
  className?: string
}

export function MovingGrain({
  density = 0.5,
  speed = 1,
  size = 1,
  className,
}: MovingGrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawGrain = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const grainCount = (canvas.width * canvas.height * density) / 10000

      for (let i = 0; i < grainCount; i++) {
        const x = (Math.random() * canvas.width + time * speed * 0.1) % canvas.width
        const y = (Math.random() * canvas.height + time * speed * 0.05) % canvas.height

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`
        ctx.fillRect(x, y, size, size)
      }

      animationId = requestAnimationFrame(drawGrain)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animationId = requestAnimationFrame(drawGrain)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [density, speed, size])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none opacity-20", className)}
    />
  )
}

interface LightRaysProps {
  /** Number of rays */
  count?: number
  /** Ray colors */
  colors?: string[]
  /** Animation duration */
  duration?: number
  /** Custom className */
  className?: string
  /** Ray width */
  width?: number
}

export function LightRays({
  count = 3,
  colors = ['#06b6d4', '#a855f7', '#ec4899'],
  duration = 8,
  className,
  width = 200,
}: LightRaysProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            width: `${width}px`,
            height: '200%',
            background: `linear-gradient(45deg, transparent 0%, ${colors[i % colors.length]}40 50%, transparent 100%)`,
            transform: 'rotate(45deg)',
          }}
          initial={{
            x: '-200px',
            y: '-50%',
          }}
          animate={{
            x: 'calc(100vw + 200px)',
            y: '-50%',
          }}
          transition={{
            duration: duration + Math.random() * 4,
            repeat: Infinity,
            ease: 'linear',
            delay: i * (duration / count) + Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

interface AmbientBackgroundProps {
  /** Background variant */
  variant?: 'particles' | 'orbs' | 'grain' | 'rays' | 'all'
  /** Animation intensity (0-1) */
  intensity?: number
  /** Custom className */
  className?: string
  /** Custom colors */
  colors?: string[]
  /** Whether to include interactive elements */
  interactive?: boolean
}

export function AmbientBackground({
  variant = 'all',
  intensity = 0.5,
  className,
  colors = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b'],
  interactive = true,
}: AmbientBackgroundProps) {
  const shouldRender = (component: string) => {
    return variant === 'all' || variant === component
  }

  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      {shouldRender('particles') && (
        <FloatingParticles
          count={Math.floor(50 * intensity)}
          colors={colors}
          interactive={interactive}
        />
      )}

      {shouldRender('orbs') && (
        <GradientOrbs
          count={Math.floor(3 * intensity) + 1}
          gradients={colors.map((color, i) => [color, colors[(i + 1) % colors.length]])}
        />
      )}

      {shouldRender('grain') && (
        <MovingGrain
          density={intensity * 0.5}
          speed={intensity}
        />
      )}

      {shouldRender('rays') && (
        <LightRays
          count={Math.floor(3 * intensity) + 1}
          colors={colors}
          duration={8 / intensity}
        />
      )}
    </div>
  )
}

// Preset configurations
export const AmbientBackgroundPresets = {
  /** Minimal floating particles */
  minimal: {
    variant: 'particles' as const,
    intensity: 0.3,
    colors: ['#64748b', '#475569'],
    interactive: false,
  },

  /** Rich atmospheric effect */
  atmospheric: {
    variant: 'all' as const,
    intensity: 0.7,
    colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'],
    interactive: true,
  },

  /** Subtle grain overlay */
  subtle: {
    variant: 'grain' as const,
    intensity: 0.4,
    interactive: false,
  },

  /** Dynamic orbs */
  dynamic: {
    variant: 'orbs' as const,
    intensity: 0.8,
    colors: ['#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'],
  },

  /** Light rays only */
  rays: {
    variant: 'rays' as const,
    intensity: 0.6,
    colors: ['#fbbf24', '#f59e0b', '#d97706'],
    interactive: false,
  },

  /** Cyberpunk theme */
  cyberpunk: {
    variant: 'all' as const,
    intensity: 0.9,
    colors: ['#00ff00', '#ff00ff', '#00ffff', '#ffff00'],
    interactive: true,
  }
} as const

// Helper component for easy preset usage
interface AmbientBackgroundPresetProps extends Omit<AmbientBackgroundProps, keyof typeof AmbientBackgroundPresets[keyof typeof AmbientBackgroundPresets]> {
  preset: keyof typeof AmbientBackgroundPresets
}

export function AmbientBackgroundWithPreset({ preset, ...props }: AmbientBackgroundPresetProps) {
  const presetConfig = AmbientBackgroundPresets[preset]
  return <AmbientBackground {...presetConfig} {...props} />
}