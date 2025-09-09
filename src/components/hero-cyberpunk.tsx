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
  
  // Interactive particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
    }> = []
    
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      })
    }
    
    let animationId: number
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        // Move particles
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Mouse interaction - particles move away from cursor
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx -= (dx / distance) * force * 0.2
          particle.vy -= (dy / distance) * force * 0.2
        }
        
        // Apply friction
        particle.vx *= 0.99
        particle.vy *= 0.99
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        
        // Draw particle
        ctx.fillStyle = particle.color + '40'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = otherParticle.x - particle.x
            const dy = otherParticle.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 150) {
              ctx.strokeStyle = particle.color + Math.floor((1 - distance / 150) * 20).toString(16)
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
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
      {/* Interactive particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Dynamic gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,255,0.2), transparent 70%)`,
        }}
      />
      
      {/* Animated grid that responds to scroll */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
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