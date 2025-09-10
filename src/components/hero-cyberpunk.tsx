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
  
  // Balanced sacred geometry animation - visible but refined
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
      // Semi-transparent clear for subtle trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time += 0.002 // Balanced speed
      
      // Smooth mouse easing with slight momentum
      smoothMouseX += (mousePos.x - smoothMouseX) * 0.1
      smoothMouseY += (mousePos.y - smoothMouseY) * 0.1
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Sacred geometry - Seed of Life pattern (visible but elegant)
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      
      // Central flower of life pattern
      const baseRadius = 120
      const numCircles = 7 // Seed of Life has 7 circles
      
      for (let i = 0; i < numCircles; i++) {
        const angle = i === 0 ? 0 : (i - 1) * Math.PI / 3
        const radius = i === 0 ? 0 : baseRadius
        
        const circleX = centerX + Math.cos(angle + time * 0.3) * radius
        const circleY = centerY + Math.sin(angle + time * 0.3) * radius
        
        // Mouse influence on position
        const mouseInfluence = 0.2
        const finalX = circleX + (smoothMouseX - centerX) * mouseInfluence * (i === 0 ? 1 : 0.5)
        const finalY = circleY + (smoothMouseY - centerY) * mouseInfluence * (i === 0 ? 1 : 0.5)
        
        // Draw circle outline
        ctx.strokeStyle = `rgba(0, 200, 255, ${0.15 + Math.sin(time * 2 + i) * 0.05})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(finalX, finalY, baseRadius, 0, Math.PI * 2)
        ctx.stroke()
        
        // Add gradient fill
        const gradient = ctx.createRadialGradient(
          finalX, finalY, 0,
          finalX, finalY, baseRadius
        )
        gradient.addColorStop(0, `rgba(0, 150, 255, ${0.02})`)
        gradient.addColorStop(0.7, `rgba(100, 50, 255, ${0.01})`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.fill()
      }
      
      ctx.restore()
      
      // Hexagonal grid based on sacred geometry
      const hexRadius = 60
      const hexHeight = hexRadius * Math.sqrt(3)
      
      for (let row = -2; row < canvas.height / hexHeight + 2; row++) {
        for (let col = -2; col < canvas.width / (hexRadius * 1.5) + 2; col++) {
          const x = col * hexRadius * 1.5
          const y = row * hexHeight + (col % 2) * hexHeight / 2
          
          const dist = Math.hypot(x - smoothMouseX, y - smoothMouseY)
          if (dist < 400) {
            const opacity = Math.max(0, 1 - dist / 400) * 0.15
            
            // Draw hexagon vertices as dots
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i
              const vx = x + Math.cos(angle) * hexRadius
              const vy = y + Math.sin(angle) * hexRadius
              
              ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`
              ctx.beginPath()
              ctx.arc(vx, vy, 2, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
      }
      
      // Dynamic glow with visible presence
      const glowGradient = ctx.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, 350
      )
      
      const glowIntensity = 0.15 + Math.sin(time * 2) * 0.05
      glowGradient.addColorStop(0, `rgba(0, 200, 255, ${glowIntensity})`)
      glowGradient.addColorStop(0.3, `rgba(100, 150, 255, ${glowIntensity * 0.6})`)
      glowGradient.addColorStop(0.6, `rgba(200, 100, 255, ${glowIntensity * 0.3})`)
      glowGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Geometric lines connecting to mouse (Metatron's cube inspired)
      const connectionPoints = []
      const pointRadius = 200
      
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + time * 0.2
        connectionPoints.push({
          x: smoothMouseX + Math.cos(angle) * pointRadius,
          y: smoothMouseY + Math.sin(angle) * pointRadius
        })
      }
      
      // Draw connections
      ctx.strokeStyle = `rgba(150, 100, 255, 0.08)`
      ctx.lineWidth = 1
      
      connectionPoints.forEach((point, i) => {
        connectionPoints.forEach((otherPoint, j) => {
          if (j > i) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
          }
        })
      }
      
      // Vesica Piscis at mouse (two overlapping circles)
      const vesicaRadius = 80 + Math.sin(time * 2) * 10
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.2})`
      ctx.lineWidth = 2
      
      ctx.beginPath()
      ctx.arc(smoothMouseX - vesicaRadius/2, smoothMouseY, vesicaRadius, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(smoothMouseX + vesicaRadius/2, smoothMouseY, vesicaRadius, 0, Math.PI * 2)
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
      {/* Balanced sacred geometry canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.85 }}
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