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
  
  // Elegant particle network animation inspired by modern implementations
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Particle system with sacred geometry influence
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      angle: number
      angleSpeed: number
      orbitRadius: number
      centerX: number
      centerY: number
      opacity: number
      fadeDirection: number
    }> = []
    
    const PHI = 1.618033988749 // Golden ratio
    const particleCount = 50 // Balanced count for performance and visual impact
    const connectionDistance = 150
    
    // Initialize particles in sacred geometry patterns
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const orbitRadius = 100 + (i % 3) * 100 // Multiple orbit rings
      
      particles.push({
        x: canvas.width / 2 + Math.cos(angle) * orbitRadius,
        y: canvas.height / 2 + Math.sin(angle) * orbitRadius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 2,
        angle: angle,
        angleSpeed: 0.001 + Math.random() * 0.002,
        orbitRadius: orbitRadius,
        centerX: canvas.width / 2,
        centerY: canvas.height / 2,
        opacity: 0.3 + Math.random() * 0.4,
        fadeDirection: Math.random() > 0.5 ? 1 : -1
      })
    }
    
    let animationId: number
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Smooth mouse tracking
      mouseX += (mousePos.x - mouseX) * 0.05
      mouseY += (mousePos.y - mouseY) * 0.05
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Orbital motion with drift
        particle.angle += particle.angleSpeed
        particle.centerX += particle.vx
        particle.centerY += particle.vy
        
        // Keep centers within bounds
        if (particle.centerX < 0 || particle.centerX > canvas.width) particle.vx *= -1
        if (particle.centerY < 0 || particle.centerY > canvas.height) particle.vy *= -1
        
        // Calculate position based on orbit
        particle.x = particle.centerX + Math.cos(particle.angle) * particle.orbitRadius
        particle.y = particle.centerY + Math.sin(particle.angle) * particle.orbitRadius
        
        // Gentle fade in/out effect
        particle.opacity += particle.fadeDirection * 0.003
        if (particle.opacity > 0.7 || particle.opacity < 0.1) {
          particle.fadeDirection *= -1
        }
        
        // Mouse influence - subtle attraction
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) {
          const force = (1 - distance / 200) * 0.02
          particle.centerX += dx * force
          particle.centerY += dy * force
        }
        
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        )
        gradient.addColorStop(0, `rgba(0, 200, 255, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(0, 150, 255, ${particle.opacity * 0.5})`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw particle core
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.15)'
      ctx.lineWidth = 1
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      
      // Draw sacred geometry overlay - Flower of Life pattern (subtle)
      const time = Date.now() * 0.0001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const baseRadius = 150
      
      ctx.strokeStyle = `rgba(100, 200, 255, 0.05)`
      ctx.lineWidth = 1
      
      // Central circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2)
      ctx.stroke()
      
      // Six surrounding circles (Seed of Life)
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + time
        const x = centerX + Math.cos(angle) * baseRadius
        const y = centerY + Math.sin(angle) * baseRadius
        
        ctx.beginPath()
        ctx.arc(x, y, baseRadius, 0, Math.PI * 2)
        ctx.stroke()
      }
      
      // Mouse position indicator - subtle sacred geometry symbol
      const mouseGradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 100
      )
      mouseGradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)')
      mouseGradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.01)')
      mouseGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = mouseGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Recalculate particle positions
      particles.forEach(particle => {
        particle.centerX = canvas.width / 2
        particle.centerY = canvas.height / 2
      })
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [mousePos])
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Elegant particle network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.7 }}
      />
      
      {/* Subtle CSS grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 200, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Gradient overlay for atmosphere */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 100, 200, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(100, 0, 200, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 50, 150, 0.05) 0%, transparent 70%)
          `
        }}
      />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Title with subtle glitch */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
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
          
          {/* Simple tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
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
            transition={{ 
              delay: 0.4,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            {heroContent.heroDescription}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.6,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
              {heroContent.heroHighlight}
            </span>
          </motion.p>
          
          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.8,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            transition={{ 
              delay: 1,
              duration: 0.8,
              ease: "easeOut"
            }}
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
    </section>
  )
}