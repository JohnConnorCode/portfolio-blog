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
  
  // Subtle, refined animation with sacred geometry influences
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let animationId: number
    let time = 0
    
    // Golden ratio for natural proportions
    const PHI = 1.618033988749
    
    // Smooth mouse tracking
    let smoothMouseX = canvas.width / 2
    let smoothMouseY = canvas.height / 2
    
    const draw = () => {
      // Clear canvas completely for clean look
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 0.001 // Slower, more subtle
      
      // Very smooth mouse easing
      smoothMouseX += (mousePos.x - smoothMouseX) * 0.08
      smoothMouseY += (mousePos.y - smoothMouseY) * 0.08
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Subtle floating orbs at golden ratio positions
      const orbPositions = [
        { x: centerX - canvas.width * 0.309, y: centerY - canvas.height * 0.191 }, // Golden ratio positions
        { x: centerX + canvas.width * 0.191, y: centerY - canvas.height * 0.118 },
        { x: centerX + canvas.width * 0.118, y: centerY + canvas.height * 0.191 },
        { x: centerX - canvas.width * 0.191, y: centerY + canvas.height * 0.118 },
      ]
      
      // Draw subtle floating orbs
      orbPositions.forEach((pos, i) => {
        const floatX = pos.x + Math.sin(time + i * PHI) * 30
        const floatY = pos.y + Math.cos(time * 0.7 + i * PHI) * 20
        
        // Distance-based opacity
        const distToMouse = Math.hypot(floatX - smoothMouseX, floatY - smoothMouseY)
        const proximity = Math.max(0, 1 - distToMouse / 400)
        
        // Orb gradient
        const orbGradient = ctx.createRadialGradient(
          floatX, floatY, 0,
          floatX, floatY, 150
        )
        
        const baseOpacity = 0.03 + proximity * 0.05
        orbGradient.addColorStop(0, `rgba(100, 150, 255, ${baseOpacity})`)
        orbGradient.addColorStop(0.5, `rgba(150, 100, 255, ${baseOpacity * 0.5})`)
        orbGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = orbGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
      
      // Subtle grid lines that appear near mouse
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.03)'
      ctx.lineWidth = 1
      
      const gridSize = 100
      const mouseInfluenceRadius = 300
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dist = Math.hypot(x - smoothMouseX, y - smoothMouseY)
          if (dist < mouseInfluenceRadius) {
            const opacity = (1 - dist / mouseInfluenceRadius) * 0.1
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`
            
            // Draw subtle cross
            ctx.beginPath()
            ctx.moveTo(x - 20, y)
            ctx.lineTo(x + 20, y)
            ctx.moveTo(x, y - 20)
            ctx.lineTo(x, y + 20)
            ctx.stroke()
          }
        }
      }
      
      // Elegant glow that follows mouse
      const glowGradient = ctx.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, 250
      )
      
      glowGradient.addColorStop(0, 'rgba(0, 200, 255, 0.08)')
      glowGradient.addColorStop(0.3, 'rgba(100, 150, 255, 0.04)')
      glowGradient.addColorStop(0.6, 'rgba(150, 100, 255, 0.02)')
      glowGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Subtle rotating rays from mouse (very faint)
      const rayCount = 3
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2 + time * 0.5
        const rayLength = 1000
        
        const rayGradient = ctx.createLinearGradient(
          smoothMouseX, smoothMouseY,
          smoothMouseX + Math.cos(angle) * rayLength,
          smoothMouseY + Math.sin(angle) * rayLength
        )
        
        rayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.015)')
        rayGradient.addColorStop(0.2, 'rgba(100, 200, 255, 0.008)')
        rayGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = rayGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      // Single elegant circle that pulses at mouse position
      const pulseRadius = 100 + Math.sin(time * 3) * 10
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time * 3) * 0.05})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(smoothMouseX, smoothMouseY, pulseRadius, 0, Math.PI * 2)
      ctx.stroke()
      
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
      {/* Subtle animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Very subtle ambient gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0,100,200,0.05), transparent 70%),
            linear-gradient(135deg, rgba(0,50,100,0.1) 0%, transparent 60%, rgba(100,0,50,0.05) 100%)
          `,
        }}
      />
      
      {/* Minimal grid for texture */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 150, 200, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 150, 200, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
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
          
          {/* Simple tagline without glow */}
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