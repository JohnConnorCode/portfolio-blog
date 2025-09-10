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
  
  // Smooth gradient mesh animation with aurora effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let animationId: number
    let time = 0
    
    // Smooth mouse tracking
    let smoothMouseX = canvas.width / 2
    let smoothMouseY = canvas.height / 2
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 0.002
      
      // Smooth mouse position with gentle easing
      smoothMouseX += (mousePos.x - smoothMouseX) * 0.02
      smoothMouseY += (mousePos.y - smoothMouseY) * 0.02
      
      // Create multiple gradient layers for depth
      const gradients = [
        {
          x: canvas.width * 0.3 + Math.sin(time * 0.5) * 100,
          y: canvas.height * 0.3 + Math.cos(time * 0.3) * 100,
          radius: 400 + Math.sin(time) * 50,
          colors: ['rgba(0, 100, 255, 0.15)', 'rgba(0, 200, 255, 0.05)', 'transparent']
        },
        {
          x: canvas.width * 0.7 + Math.cos(time * 0.4) * 150,
          y: canvas.height * 0.6 + Math.sin(time * 0.6) * 100,
          radius: 350 + Math.cos(time * 1.2) * 40,
          colors: ['rgba(255, 0, 150, 0.1)', 'rgba(150, 0, 255, 0.05)', 'transparent']
        },
        {
          x: smoothMouseX,
          y: smoothMouseY,
          radius: 300,
          colors: ['rgba(0, 255, 255, 0.08)', 'rgba(0, 150, 255, 0.03)', 'transparent']
        }
      ]
      
      // Draw gradient meshes
      gradients.forEach((grad, index) => {
        const gradient = ctx.createRadialGradient(
          grad.x, grad.y, 0,
          grad.x, grad.y, grad.radius
        )
        
        grad.colors.forEach((color, i) => {
          gradient.addColorStop(i / (grad.colors.length - 1), color)
        })
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
      
      // Aurora borealis wave effect
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      
      for (let i = 0; i < 3; i++) {
        const waveGradient = ctx.createLinearGradient(
          0, canvas.height * 0.3,
          canvas.width, canvas.height * 0.7
        )
        
        const hue1 = 180 + Math.sin(time + i) * 30
        const hue2 = 280 + Math.cos(time + i * 0.5) * 30
        
        waveGradient.addColorStop(0, `hsla(${hue1}, 100%, 50%, 0)`)
        waveGradient.addColorStop(0.5, `hsla(${(hue1 + hue2) / 2}, 100%, 60%, ${0.1 + Math.sin(time * 2 + i) * 0.05})`)
        waveGradient.addColorStop(1, `hsla(${hue2}, 100%, 50%, 0)`)
        
        ctx.fillStyle = waveGradient
        
        // Create wave path
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height * 0.5 + 
                   Math.sin((x / canvas.width) * Math.PI * 2 + time * 2 + i) * 100 +
                   Math.sin((x / canvas.width) * Math.PI * 4 + time * 3) * 50
          ctx.lineTo(x, y)
        }
        
        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      }
      
      ctx.restore()
      
      // Subtle light rays from mouse
      const rayCount = 5
      for (let i = 0; i < rayCount; i++) {
        const angle = (Math.PI * 2 / rayCount) * i + time
        const length = 800
        
        const rayGradient = ctx.createLinearGradient(
          smoothMouseX, smoothMouseY,
          smoothMouseX + Math.cos(angle) * length,
          smoothMouseY + Math.sin(angle) * length
        )
        
        rayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)')
        rayGradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.01)')
        rayGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = rayGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
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
      {/* Smooth gradient mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Subtle ambient gradient */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `
            linear-gradient(135deg, rgba(0,50,100,0.3) 0%, transparent 50%, rgba(100,0,100,0.2) 100%)
          `,
        }}
      />
      
      {/* Minimal grid for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 150, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 150, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
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