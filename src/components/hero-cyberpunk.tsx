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
  
  // Subtle particle network animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Fewer, subtler particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      targetOpacity: number
    }> = []
    
    const particleCount = 30 // Reduced for less intensity
    const connectionDistance = 120
    
    // Initialize particles randomly across screen
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: 1 + Math.random() * 1.5, // Smaller particles
        opacity: 0,
        targetOpacity: 0.15 + Math.random() * 0.15 // Much lower opacity
      })
    }
    
    let animationId: number
    let smoothMouseX = canvas.width / 2
    let smoothMouseY = canvas.height / 2
    
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Very smooth mouse tracking
      smoothMouseX += (mousePos.x - smoothMouseX) * 0.02 // Much slower tracking
      smoothMouseY += (mousePos.y - smoothMouseY) * 0.02
      
      // Update and draw particles
      particles.forEach((particle) => {
        // Simple drift motion
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Wrap around edges smoothly
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50
        
        // Smooth opacity transitions
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.02
        
        // Very subtle mouse influence
        const dx = smoothMouseX - particle.x
        const dy = smoothMouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 300 && distance > 50) {
          const force = (1 - distance / 300) * 0.005 // Very gentle force
          particle.x += dx * force
          particle.y += dy * force
        }
        
        // Draw particle (simple dot)
        ctx.fillStyle = `rgba(100, 180, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Draw very subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.08 // Very faint lines
            ctx.strokeStyle = `rgba(100, 180, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    // Fade in particles gradually
    setTimeout(() => {
      particles.forEach(p => {
        p.targetOpacity = 0.15 + Math.random() * 0.15
      })
    }, 500)
    
    animate()
    
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
  
  // Split title into letters for animation
  const titleLetters = heroContent.heroTitle.split('')
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Perspective grid moving toward horizon */}
      <div className="absolute inset-0" style={{ perspective: '800px' }}>
        <div 
          className="absolute inset-0"
          style={{
            transform: 'rotateX(75deg) translateZ(-100px)',
            transformOrigin: 'center bottom',
            backgroundImage: `
              linear-gradient(rgba(0, 200, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 200, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 10s linear infinite',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
        />
        
        {/* Secondary grid layer for depth */}
        <div 
          className="absolute inset-0"
          style={{
            transform: 'rotateX(75deg) translateZ(-200px)',
            transformOrigin: 'center bottom',
            backgroundImage: `
              linear-gradient(rgba(100, 150, 255, 0.04) 2px, transparent 2px),
              linear-gradient(90deg, rgba(100, 150, 255, 0.04) 2px, transparent 2px)
            `,
            backgroundSize: '160px 160px',
            animation: 'gridMove 20s linear infinite',
            maskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
          }}
        />
      </div>
      
      {/* Pulse wave overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, 
              rgba(0, 200, 255, 0.1) 0%, 
              transparent 50%
            )
          `,
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      
      {/* Subtle particle network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.3 }} // Further reduced opacity
      />
      
      {/* Very subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0, 100, 200, 0.03) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(100, 0, 200, 0.03) 0%, transparent 40%)
          `
        }}
      />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated title with letter-by-letter reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 relative overflow-hidden"
          >
            <span className="relative inline-block">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="relative inline-block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      rotateX: -90,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03, // Sequential reveal
                    ease: [0.215, 0.61, 0.355, 1], // Smooth cubic bezier
                  }}
                  whileHover={{
                    y: -5,
                    color: 'rgb(0, 200, 255)',
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          {/* Tagline with smooth fade and slide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: titleLetters.length * 0.03 + 0.2,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="mb-8"
          >
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground uppercase tracking-wider"
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '0.15em', opacity: 1 }}
              transition={{ 
                delay: titleLetters.length * 0.03 + 0.4,
                duration: 1,
                ease: "easeOut"
              }}
            >
              {heroContent.heroTagline}
            </motion.p>
          </motion.div>
          
          {/* Description with word-by-word fade */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: titleLetters.length * 0.03 + 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            {heroContent.heroDescription.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Highlight text with gradient reveal */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: titleLetters.length * 0.03 + 1,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold inline-block"
              initial={{ backgroundPosition: '200% center' }}
              animate={{ backgroundPosition: '0% center' }}
              transition={{ 
                delay: titleLetters.length * 0.03 + 1.2,
                duration: 1.5,
                ease: "easeInOut"
              }}
              style={{ 
                backgroundSize: '200% auto',
              }}
            >
              {heroContent.heroHighlight}
            </motion.span>
          </motion.p>
          
          {/* CTA Buttons with stagger animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: titleLetters.length * 0.03 + 1.5
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/work">
                <motion.button
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-3 overflow-hidden border-2 border-cyan-400 transition-all duration-300"
                >
                  <motion.div 
                    className="absolute inset-0 bg-cyan-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ opacity: 0.1 }}
                  />
                  <span className="relative font-semibold text-cyan-400 group-hover:text-foreground transition-colors duration-300">
                    View My Work
                  </span>
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/philosophy">
                <motion.button
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-3 border border-foreground/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-purple-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ opacity: 0.1 }}
                  />
                  <span className="relative font-semibold">My Philosophy</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator with fade in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: titleLetters.length * 0.03 + 2,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors duration-300">
                <motion.div
                  animate={{ 
                    y: [2, 12, 2],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 80px;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}