'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'

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
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  
  // Grid becomes more focused as you scroll
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.7])
  const gridBlur = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Twinkling stars effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Create stars
    const stars: Array<{
      x: number
      y: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinklePhase: number
    }> = []
    
    const starCount = 150
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      })
    }
    
    let animationId: number
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw stars
      stars.forEach(star => {
        star.twinklePhase += star.twinkleSpeed
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5
        const currentBrightness = star.brightness * twinkle
        
        // Adjust star color based on theme
        const starColor = isDark 
          ? `rgba(200, 220, 255, ${currentBrightness})`
          : `rgba(100, 120, 150, ${currentBrightness * 0.6})`
        
        ctx.fillStyle = starColor
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add subtle glow to brighter stars
        if (currentBrightness > 0.7) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 3
          )
          const glowColor = isDark
            ? `rgba(150, 200, 255, ${currentBrightness * 0.3})`
            : `rgba(100, 150, 200, ${currentBrightness * 0.2})`
          gradient.addColorStop(0, glowColor)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(star.x - star.size * 3, star.y - star.size * 3, star.size * 6, star.size * 6)
        }
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reposition stars
      stars.forEach(star => {
        star.x = Math.random() * canvas.width
        star.y = Math.random() * canvas.height
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
    <section ref={containerRef} className={`relative min-h-screen overflow-hidden -mt-24 pt-24 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Twinkling stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: isDark ? 0.8 : 0.4 }}
      />
      
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark ? `
            radial-gradient(ellipse at top, 
              rgba(10, 20, 40, 0.5) 0%, 
              rgba(0, 0, 0, 0.9) 100%
            )
          ` : `
            radial-gradient(ellipse at top, 
              rgba(240, 245, 250, 0.8) 0%, 
              rgba(200, 210, 220, 0.9) 100%
            )
          `
        }}
      />
      
      {/* Perspective grid */}
      <motion.div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(0, 200, 255, 0.15)' : 'rgba(0, 150, 200, 0.2)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(0, 200, 255, 0.15)' : 'rgba(0, 150, 200, 0.2)'} 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center',
            transform: 'perspective(1000px) rotateX(60deg) translateZ(-100px)',
            transformOrigin: 'center 100%',
            opacity: gridOpacity,
            filter: `blur(${gridBlur}px)`,
          }}
        />
        
        {/* Distance blur overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: isDark ? `linear-gradient(to top, 
              transparent 0%, 
              transparent 60%, 
              rgba(0, 0, 0, 0.4) 80%, 
              rgba(0, 0, 0, 0.8) 100%
            )` : `linear-gradient(to top, 
              transparent 0%, 
              transparent 60%, 
              rgba(255, 255, 255, 0.4) 80%, 
              rgba(255, 255, 255, 0.8) 100%
            )`,
            backdropFilter: gridBlur,
            WebkitBackdropFilter: gridBlur,
          }}
        />
      </motion.div>
      
      {/* Nebula-like color accents */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, 
              ${isDark ? 'rgba(50, 100, 200, 0.2)' : 'rgba(100, 150, 255, 0.15)'} 0%, 
              transparent 40%
            ),
            radial-gradient(ellipse at 70% 60%, 
              ${isDark ? 'rgba(150, 50, 200, 0.15)' : 'rgba(200, 100, 255, 0.1)'} 0%, 
              transparent 40%
            )
          `,
          animation: 'nebulaPulse 10s ease-in-out infinite',
        }}
      />
      
      {/* Interactive glow that follows mouse */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 600px at ${mousePos.x}px ${mousePos.y}px,
            ${isDark ? 'rgba(0, 150, 255, 0.08)' : 'rgba(0, 100, 200, 0.05)'},
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
              : 'linear-gradient(to top, rgba(0, 100, 200, 0.1), transparent)',
            animation: 'pulseUp 4s ease-in-out infinite',
          }}
        />
      </div>
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated title with permanent glow and floating effect */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 relative"
            whileHover={{
              textShadow: isDark 
                ? '0 0 30px rgba(0, 200, 255, 0.8), 0 0 60px rgba(0, 200, 255, 0.5)'
                : '0 0 20px rgba(0, 150, 255, 0.6), 0 0 40px rgba(0, 150, 255, 0.3)',
              transition: { duration: 0.3 }
            }}
            style={{ 
              lineHeight: 1.1,
              paddingBottom: '0.1em',
              // Permanent glow and floating shadow
              textShadow: isDark ? `
                0 0 20px rgba(0, 200, 255, 0.5),
                0 0 40px rgba(0, 150, 255, 0.3),
                0 0 60px rgba(0, 100, 255, 0.2),
                0 10px 20px rgba(0, 0, 0, 0.8)
              ` : `
                0 0 15px rgba(0, 150, 255, 0.4),
                0 0 30px rgba(0, 100, 200, 0.2),
                0 5px 15px rgba(0, 0, 0, 0.3)
              `,
              filter: isDark 
                ? 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.5))'
                : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
              transform: 'translateZ(50px)',
              color: isDark ? 'white' : '#111827'
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
                    duration: 0.7,
                    delay: index * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    y: -5,
                    color: isDark ? 'rgb(0, 255, 255)' : 'rgb(0, 150, 255)',
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          {/* Tagline with smooth fade and slide - better mobile sizing */}
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
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground uppercase tracking-wider font-medium"
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '0.1em', opacity: 1 }}
              transition={{ 
                delay: titleLetters.length * 0.03 + 0.4,
                duration: 1,
                ease: "easeOut"
              }}
              style={{
                letterSpacing: '0.1em'
              }}
            >
              {heroContent.heroTagline}
            </motion.p>
          </motion.div>
          
          {/* Description with word-by-word fade - prevent awkward breaks */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: titleLetters.length * 0.03 + 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              className="block"
            >
              {heroContent.heroDescription}
            </motion.span>
          </motion.div>
          
          {/* Highlight text with gradient reveal - better mobile layout */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: titleLetters.length * 0.03 + 1,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto px-4"
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold inline-block leading-relaxed"
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
          
          {/* CTA Buttons with stagger animation - stack on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: titleLetters.length * 0.03 + 1.5
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/work">
                <motion.button 
                  className={`px-8 py-4 font-semibold rounded-lg transition-all w-full sm:w-auto ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: isDark 
                      ? '0 0 30px rgba(255, 255, 255, 0.3)' 
                      : '0 0 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/philosophy">
                <motion.button 
                  className={`px-8 py-4 font-semibold rounded-lg border-2 transition-all w-full sm:w-auto ${
                    isDark 
                      ? 'border-white/30 text-white hover:bg-white/10' 
                      : 'border-gray-900/30 text-gray-900 hover:bg-gray-900/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  My Philosophy
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
        transition={{ delay: titleLetters.length * 0.03 + 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-gray-900/30'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-white/50' : 'bg-gray-900/50'
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