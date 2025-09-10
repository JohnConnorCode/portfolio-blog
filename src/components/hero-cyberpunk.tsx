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
  
  // Sacred geometry animation with golden ratio and dynamic interactions
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let animationId: number
    let time = 0
    
    // Golden ratio
    const PHI = 1.618033988749
    const goldenAngle = Math.PI * 2 / (PHI * PHI)
    
    // Smooth mouse tracking with momentum
    let smoothMouseX = canvas.width / 2
    let smoothMouseY = canvas.height / 2
    let mouseVelocityX = 0
    let mouseVelocityY = 0
    
    const draw = () => {
      // Semi-transparent clear for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time += 0.003
      
      // Mouse physics with momentum
      const targetX = mousePos.x
      const targetY = mousePos.y
      mouseVelocityX += (targetX - smoothMouseX) * 0.03
      mouseVelocityY += (targetY - smoothMouseY) * 0.03
      mouseVelocityX *= 0.92 // Damping
      mouseVelocityY *= 0.92
      smoothMouseX += mouseVelocityX
      smoothMouseY += mouseVelocityY
      
      // Sacred geometry center point
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Draw Fibonacci spiral with mouse interaction
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      
      for (let i = 0; i < 100; i++) {
        const angle = i * goldenAngle
        const radius = Math.sqrt(i) * 15
        
        // Mouse influence on spiral
        const mouseDistance = Math.hypot(smoothMouseX - centerX, smoothMouseY - centerY)
        const mouseAngle = Math.atan2(smoothMouseY - centerY, smoothMouseX - centerX)
        const influence = Math.max(0, 1 - mouseDistance / 500)
        
        const x = centerX + Math.cos(angle + time + mouseAngle * influence) * radius
        const y = centerY + Math.sin(angle + time + mouseAngle * influence) * radius
        
        // Dynamic size based on position in spiral and mouse proximity
        const distToMouse = Math.hypot(x - smoothMouseX, y - smoothMouseY)
        const sizeMult = 1 + (1 - Math.min(distToMouse / 200, 1)) * 2
        const size = (3 + Math.sin(time * 3 + i * 0.1) * 2) * sizeMult
        
        // Color based on golden ratio position
        const hue = (i * PHI * 10 + time * 30) % 360
        const lightness = 50 + Math.sin(time * 2 + i * 0.05) * 20
        
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        gradient.addColorStop(0, `hsla(${hue}, 100%, ${lightness}%, 0.8)`)
        gradient.addColorStop(0.5, `hsla(${hue}, 100%, ${lightness}%, 0.3)`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size * 3, 0, Math.PI * 2)
        ctx.fill()
      }
      
      // Metatron's Cube / Sacred geometry grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 1
      
      const gridPoints = []
      const hexagonRadius = 150 + Math.sin(time) * 20
      
      // Create hexagonal grid points
      for (let ring = 0; ring < 3; ring++) {
        const numPoints = ring === 0 ? 1 : 6 * ring
        for (let i = 0; i < numPoints; i++) {
          const angle = ring === 0 ? 0 : (i / numPoints) * Math.PI * 2
          const r = ring * hexagonRadius / 2
          const x = centerX + Math.cos(angle + time * 0.5) * r + 
                   (smoothMouseX - centerX) * 0.1
          const y = centerY + Math.sin(angle + time * 0.5) * r + 
                   (smoothMouseY - centerY) * 0.1
          gridPoints.push({ x, y })
        }
      }
      
      // Connect points with sacred geometry patterns
      gridPoints.forEach((point1, i) => {
        gridPoints.forEach((point2, j) => {
          if (j > i) {
            const dist = Math.hypot(point2.x - point1.x, point2.y - point1.y)
            if (dist < hexagonRadius * 1.2) {
              const opacity = (1 - dist / (hexagonRadius * 1.2)) * 0.3
              ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`
              ctx.beginPath()
              ctx.moveTo(point1.x, point1.y)
              ctx.lineTo(point2.x, point2.y)
              ctx.stroke()
            }
          }
        })
      })
      
      // Flower of Life pattern around mouse
      const flowerRadius = 80 + Math.sin(time * 2) * 20
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2
        const x = smoothMouseX + Math.cos(angle) * flowerRadius
        const y = smoothMouseY + Math.sin(angle) * flowerRadius
        
        ctx.strokeStyle = `rgba(255, 100, 200, 0.2)`
        ctx.beginPath()
        ctx.arc(x, y, flowerRadius, 0, Math.PI * 2)
        ctx.stroke()
      }
      
      // Central mandala at mouse position
      ctx.strokeStyle = `rgba(255, 255, 255, 0.15)`
      ctx.beginPath()
      ctx.arc(smoothMouseX, smoothMouseY, flowerRadius, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.restore()
      
      // Energy field visualization
      const fieldStrength = Math.sin(time * 2) * 0.5 + 0.5
      const fieldGradient = ctx.createRadialGradient(
        smoothMouseX, smoothMouseY, 0,
        smoothMouseX, smoothMouseY, 300 + fieldStrength * 100
      )
      fieldGradient.addColorStop(0, `rgba(0, 255, 255, ${0.1 * fieldStrength})`)
      fieldGradient.addColorStop(0.5, `rgba(100, 100, 255, ${0.05 * fieldStrength})`)
      fieldGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = fieldGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
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
      {/* Sacred geometry canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.9 }}
      />
      
      {/* Dynamic gradient overlay that responds to mouse */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none mix-blend-color-dodge"
        style={{
          background: `
            radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(100,50,255,0.2), transparent 60%),
            linear-gradient(135deg, rgba(0,100,200,0.2) 0%, transparent 50%, rgba(200,0,100,0.1) 100%)
          `,
        }}
      />
      
      {/* Sacred geometry grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(60deg, transparent, transparent 100px, rgba(255, 200, 100, 0.1) 100px, rgba(255, 200, 100, 0.1) 101px),
            repeating-linear-gradient(-60deg, transparent, transparent 100px, rgba(100, 200, 255, 0.1) 100px, rgba(100, 200, 255, 0.1) 101px)
          `,
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