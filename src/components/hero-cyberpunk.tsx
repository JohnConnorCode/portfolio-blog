'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

interface HeroContent {
  heroTitle?: string
  heroTagline?: string
  heroDescription?: string
  heroHighlight?: string
}

export function HeroCyberpunk({ content }: { content?: HeroContent }) {
  const heroContent = {
    heroTitle: content?.heroTitle || 'JOHN CONNOR',
    heroTagline: content?.heroTagline || 'Technology Strategist',
    heroDescription: content?.heroDescription || 'Building systems that serve humanity.',
    heroHighlight: content?.heroHighlight || 'Product strategy. Human-first technology. Real impact.'
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  
  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Dynamic flowing particle field animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Particles for dynamic movement
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
      speed: number
    }> = []
    
    // Create flowing particles
    const particleCount = 80
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 170, // Blue to purple range
        speed: Math.random() * 0.5 + 0.5
      })
    }
    
    // Smooth mouse tracking with easing
    let smoothMouseX = canvas.width / 2
    let smoothMouseY = canvas.height / 2
    
    let animationId: number
    let time = 0
    
    const draw = () => {
      // Clear with fade trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time += 0.01
      
      // Smooth mouse position with easing
      smoothMouseX += (mousePos.x - smoothMouseX) * 0.05
      smoothMouseY += (mousePos.y - smoothMouseY) * 0.05
      
      // Draw energy waves from mouse
      const waveRadius = 150 + Math.sin(time * 2) * 30
      const waveGradient = ctx.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, waveRadius
      )
      waveGradient.addColorStop(0, 'rgba(0, 200, 255, 0.1)')
      waveGradient.addColorStop(0.5, 'rgba(100, 0, 255, 0.05)')
      waveGradient.addColorStop(1, 'rgba(255, 0, 200, 0)')
      
      ctx.fillStyle = waveGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Organic flow movement
        particle.vx += Math.sin(time + i) * 0.01
        particle.vy += Math.cos(time + i * 0.5) * 0.01
        
        // Smooth mouse interaction
        const dx = smoothMouseX - particle.x
        const dy = smoothMouseY - particle.y
        const distance = Math.hypot(dx, dy)
        
        if (distance < 250) {
          const force = Math.pow((250 - distance) / 250, 2) // Smooth quadratic falloff
          particle.vx += (dx / distance) * force * 0.02 * particle.speed
          particle.vy += (dy / distance) * force * 0.02 * particle.speed
        }
        
        // Apply velocity with damping
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98
        particle.vy *= 0.98
        
        // Wrap around edges smoothly
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50
        
        // Draw connections to nearby particles
        particles.forEach((other, j) => {
          if (j > i) {
            const dist = Math.hypot(other.x - particle.x, other.y - particle.y)
            if (dist < 120) {
              const lineOpacity = (1 - dist / 120) * 0.3
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                other.x, other.y
              )
              gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${lineOpacity})`)
              gradient.addColorStop(1, `hsla(${other.hue}, 100%, 60%, ${lineOpacity})`)
              
              ctx.strokeStyle = gradient
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })
        
        // Draw particle with glow
        const pulse = Math.sin(time * 3 + i) * 0.3 + 0.7
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 6
        )
        glowGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity * pulse})`)
        glowGradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * 0.5 * pulse})`)
        glowGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2)
        ctx.fill()
        
        // Core particle
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity + pulse * 0.2})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [mousePos])
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Dynamic particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.7 }}
      />
      
      {/* Vibrant gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen"
        style={{
          background: `
            radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,255,0.15), transparent 50%),
            radial-gradient(circle 800px at ${mousePos.x * 0.8}px ${mousePos.y * 1.2}px, rgba(255,0,255,0.1), transparent 60%),
            radial-gradient(circle 1000px at 50% 50%, rgba(0,100,255,0.05), transparent 70%)
          `,
        }}
      />
      
      {/* Animated grid with perspective */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: `perspective(1000px) rotateX(60deg) translateZ(-100px) translateY(${mousePos.y * 0.01}px)`,
          transformOrigin: 'center center',
        }}
      />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Title with subtle glitch */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 relative"
          >
            <span className="relative">
              {/* Subtle glitch layers */}
              <span className="absolute inset-0 text-cyan-400 opacity-0 animate-glitch-1">
                {heroContent.heroTitle}
              </span>
              <span className="absolute inset-0 text-pink-400 opacity-0 animate-glitch-2">
                {heroContent.heroTitle}
              </span>
              <span className="relative text-foreground hover:animate-none">
                {heroContent.heroTitle}
              </span>
            </span>
          </motion.h1>
          
          {/* Simple tagline without glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground uppercase tracking-wider">
              {heroContent.heroTagline}
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            {heroContent.heroDescription}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
              {heroContent.heroHighlight}
            </span>
          </motion.p>
          
          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 overflow-hidden border-2 border-cyan-400"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,255,255,0.3), transparent)'
                  }}
                />
                <span className="relative font-semibold text-cyan-400 group-hover:text-foreground transition-colors">
                  View My Work
                </span>
              </motion.button>
            </Link>
            
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 border border-foreground/20 hover:border-purple-400/50 transition-all overflow-hidden"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168,85,247,0.2), transparent)'
                  }}
                />
                <span className="relative font-semibold">My Philosophy</span>
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Interactive scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

<style jsx>{`
  @keyframes glitch-1 {
    0%, 100% { 
      opacity: 0;
      transform: translate(0);
    }
    20% { 
      opacity: 0.8;
      transform: translate(-2px, 2px);
    }
  }
  
  @keyframes glitch-2 {
    0%, 100% { 
      opacity: 0;
      transform: translate(0);
    }
    25% { 
      opacity: 0.8;
      transform: translate(2px, -2px);
    }
  }
  
  .animate-glitch-1 {
    animation: glitch-1 2s infinite;
  }
  
  .animate-glitch-2 {
    animation: glitch-2 2s infinite;
    animation-delay: 0.1s;
  }
`}</style>