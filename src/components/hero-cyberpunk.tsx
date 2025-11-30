'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { PremiumText } from './ui/premium-text'
// import { LiquidButton } from './ui/premium-hover' // File was deleted

interface HeroContent {
  heroTitle?: string
  heroTagline?: string
  heroDescription?: string
  heroHighlight?: string
}

export function HeroCyberpunk({ content }: { content?: HeroContent }) {
  const heroContent = {
    heroTitle: content?.heroTitle || 'JOHN CONNOR',
    heroDescription: content?.heroDescription || 'Building systems that serve humanity.',
    heroHighlight: content?.heroHighlight || 'Product strategy. Human-first technology. Real impact.'
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  // Force dark mode - no theme checking
  const isDark = true
  
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
  
  // Enhanced twinkling stars effect with movement
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    
    // Create stars with enhanced properties
    const stars: Array<{
      x: number
      y: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinklePhase: number
      driftX: number
      driftY: number
      color: string
    }> = []
    
    const starCount = 350
    
    for (let i = 0; i < starCount; i++) {
      const colors = ['#FFFFFF', '#FFF8E7', '#E0E7FF', '#FFE0E0', '#E0FFE7']
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 0.3,
        brightness: Math.random() * 0.9 + 0.1,
        twinkleSpeed: Math.random() * 0.03 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.05,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    let animationId: number
    
    // Shooting stars
    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      angle: number
    }> = []
    
    let frameCount = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frameCount++
      
      // Draw and animate stars
      stars.forEach(star => {
        star.twinklePhase += star.twinkleSpeed
        star.x += star.driftX
        star.y += star.driftY
        
        // Wrap around edges
        if (star.x < 0) star.x = window.innerWidth
        if (star.x > window.innerWidth) star.x = 0
        if (star.y < 0) star.y = window.innerHeight
        if (star.y > window.innerHeight) star.y = 0
        
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5
        const currentBrightness = star.brightness * twinkle
        
        // Enhanced star rendering with color
        const alpha = isDark ? currentBrightness : currentBrightness * 0.7
        ctx.fillStyle = star.color + Math.floor(alpha * 255).toString(16).padStart(2, '0')
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Enhanced glow for bright stars
        if (currentBrightness > 0.6 && isDark) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 4
          )
          gradient.addColorStop(0, star.color + Math.floor(currentBrightness * 128).toString(16).padStart(2, '0'))
          gradient.addColorStop(0.5, star.color + '20')
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(star.x - star.size * 4, star.y - star.size * 4, star.size * 8, star.size * 8)
        }
      })
      
      // Add shooting stars occasionally
      if (frameCount % 180 === 0 && Math.random() > 0.3 && isDark) {
        shootingStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 4 + 2,
          opacity: 1,
          angle: Math.random() * 60 + 30
        })
      }
      
      // Draw and animate shooting stars
      shootingStars.forEach((star, index) => {
        star.x += star.speed * Math.cos((star.angle * Math.PI) / 180)
        star.y += star.speed * Math.sin((star.angle * Math.PI) / 180)
        star.opacity -= 0.02
        
        if (star.opacity > 0) {
          const gradient = ctx.createLinearGradient(
            star.x, star.y,
            star.x - star.length * Math.cos((star.angle * Math.PI) / 180),
            star.y - star.length * Math.sin((star.angle * Math.PI) / 180)
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
          gradient.addColorStop(1, 'transparent')
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(
            star.x - star.length * Math.cos((star.angle * Math.PI) / 180),
            star.y - star.length * Math.sin((star.angle * Math.PI) / 180)
          )
          ctx.stroke()
        } else {
          shootingStars.splice(index, 1)
        }
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      
      // Reposition stars
      stars.forEach(star => {
        star.x = Math.random() * window.innerWidth
        star.y = Math.random() * window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])
  
  // Split title into letters for animation
  const titleLetters = heroContent.heroTitle.split('')
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-black">
      {/* Enhanced twinkling stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          opacity: isDark ? 1 : 0.4,
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
      />
      
      {/* Deep space gradient background - Tron style for light mode */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark ? `
            radial-gradient(ellipse at top, 
              rgba(10, 20, 40, 0.5) 0%, 
              rgba(0, 0, 0, 0.9) 100%
            )
          ` : `
            linear-gradient(135deg, 
              rgba(0, 30, 60, 1) 0%, 
              rgba(0, 60, 120, 1) 50%,
              rgba(0, 100, 150, 1) 100%
            )
          `
        }}
      />
      
      {/* Tron Grid - CSS handles all styling with pseudo-elements */}
      <motion.div
        className="tron-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="grid-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="vaporwave-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
      />

      {/* Nebula-like color accents */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
        style={{
          background: isDark ? `
            radial-gradient(ellipse at 30% 40%,
              rgba(50, 100, 200, 0.2) 0%,
              transparent 40%
            ),
            radial-gradient(ellipse at 70% 60%,
              rgba(150, 50, 200, 0.15) 0%,
              transparent 40%
            )
          ` : 'transparent',
          animation: 'nebulaPulse 10s ease-in-out infinite',
        }}
      />

      {/* Vaporwave setting sun */}
      <motion.div
        className="vaporwave-sun"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }}
      />

      {/* Interactive glow that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 600px at ${mousePos.x}px ${mousePos.y}px,
            ${isDark ? 'rgba(0, 150, 255, 0.08)' : 'rgba(255, 255, 255, 0.1)'},
            transparent 40%
          )`,
          transition: 'background 0.3s ease-out',
        }}
      />
      
      {/* Clean pulse effect from bottom */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-0 left-0 right-0 h-96"
          style={{
            background: isDark 
              ? 'linear-gradient(to top, rgba(0, 150, 255, 0.15), transparent)'
              : 'transparent',
            animation: 'pulseUp 4s ease-in-out infinite',
          }}
        />
      </div>
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Greek-inspired decorative element above title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <defs>
                <linearGradient id="heroDecoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <path
                d="M 20 5 L 35 20 L 20 35 L 5 20 Z"
                fill="none"
                stroke="url(#heroDecoGradient)"
                strokeWidth="2"
              />
              <path
                d="M 20 12 L 28 20 L 20 28 L 12 20 Z"
                fill="rgba(212, 175, 55, 0.2)"
                stroke="url(#heroDecoGradient)"
                strokeWidth="1"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
          </motion.div>

          {/* Animated title with premium glow and floating effect */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-8 relative leading-[1.1] sm:leading-[1.05] lg:leading-[1.02] whitespace-nowrap"
            style={{
              fontFamily: "'Cinzel', serif",
              lineHeight: 0.9,
              letterSpacing: '0.05em',
              paddingBottom: '0.1em',
              textShadow: isDark ? `
                0 0 40px rgba(0, 212, 255, 0.5),
                0 0 80px rgba(0, 212, 255, 0.3),
                0 0 120px rgba(0, 212, 255, 0.15),
                0 10px 40px rgba(0, 0, 0, 0.8)
              ` : `
                0 2px 10px rgba(0, 0, 0, 0.1)
              `,
              filter: isDark
                ? 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.4))'
                : 'none',
              transform: 'translateZ(50px)',
              color: isDark ? 'white' : '#00d4ff'
            }}
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
                    duration: 1,
                    delay: index * 0.06 + 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    y: -5,
                    color: isDark ? 'rgb(0, 255, 255)' : '#00ffff',
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          {/* Classical tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: titleLetters.length * 0.06 + 1.2,
              duration: 1,
            }}
            className="mb-10"
          >
            <p
              className="text-sm sm:text-base tracking-[0.3em] uppercase"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#d4af37',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
              }}
            >
              Digital Architect · Product Philosopher · Builder
            </p>
          </motion.div>

          {/* Description - more prominent and elegant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: titleLetters.length * 0.06 + 1.5,
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="mb-12"
          >
            <p
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed max-w-4xl mx-auto ${
                isDark ? 'text-white/90' : 'text-cyan-100'
              }`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
              }}
            >
              {heroContent.heroDescription}
            </p>
          </motion.div>
          
          {/* Highlight text with gradient reveal - refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: titleLetters.length * 0.06 + 2.5,
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="mb-16 max-w-5xl mx-auto px-4"
          >
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: titleLetters.length * 0.06 + 2.8,
                duration: 1.5
              }}
            >
              <span className="font-bold inline-block leading-relaxed"
              style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4))'
              }}>
                {heroContent.heroHighlight}
              </span>
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons with stagger animation - stack on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: titleLetters.length * 0.06 + 3.5
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/work">
                <motion.button
                  className="relative px-10 py-4 font-bold text-lg rounded-none transition-all w-full sm:w-auto overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00ffff 50%, #00d4ff 100%)',
                    color: '#000',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em'
                  }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/philosophy">
                <motion.button
                  className="relative px-10 py-4 font-bold text-lg rounded-none transition-all w-full sm:w-auto overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: 'transparent',
                    color: '#d4af37',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.1)',
                    border: '2px solid rgba(212, 175, 55, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em'
                  }}
                >
                  <span className="relative z-10">My Philosophy</span>
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%)' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator with better visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: titleLetters.length * 0.06 + 4.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-cyan-400/60'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-white/50' : 'bg-cyan-400/80'
            }`}
          />
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes pulseUp {
          0%, 100% { transform: translateY(100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  )
}