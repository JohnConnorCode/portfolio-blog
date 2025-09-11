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
    
    const starCount = 250
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.3,
        brightness: Math.random() * 0.8 + 0.2,
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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-black">
      {/* Twinkling stars canvas - only in dark mode */}
      {isDark && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ opacity: 0.8 }}
        />
      )}
      
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
            linear-gradient(135deg, 
              #667eea 0%, 
              #764ba2 100%
            )
          `
        }}
      />
      
      {/* Cyberpunk Grid - properly extends and moves toward horizon */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <div 
          className="absolute -left-1/2 -right-1/2 -bottom-1/2"
          style={{
            width: '200%',
            height: '200%',
            top: '30%',
            backgroundImage: `
              linear-gradient(to right, ${isDark ? 'rgba(0, 255, 255, 0.5)' : 'rgba(147, 51, 234, 0.4)'} 1.5px, transparent 1.5px),
              linear-gradient(to bottom, ${isDark ? 'rgba(0, 255, 255, 0.5)' : 'rgba(147, 51, 234, 0.4)'} 1.5px, transparent 1.5px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center 0px',
            opacity: isDark ? 0.4 : 0.3,
            transform: 'perspective(800px) rotateX(70deg)',
            transformOrigin: 'center 80%',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 50%, black 100%)',
            animation: 'gridScroll 10s linear infinite',
          }}
        />
      </div>
      
      {/* Nebula-like color accents */}
      <div 
        className="absolute inset-0 opacity-30"
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
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated title with permanent glow and floating effect */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12 relative"
            // Remove whole text hover effect
            style={{ 
              lineHeight: 1.1,
              paddingBottom: '0.1em',
              // Simple shadow only
              textShadow: isDark ? `
                0 10px 20px rgba(0, 0, 0, 0.8)
              ` : `
                0 2px 10px rgba(0, 0, 0, 0.1)
              `,
              filter: isDark 
                ? 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.5))'
                : 'none',
              transform: 'translateZ(50px)',
              color: 'white'
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
                    color: isDark ? 'rgb(0, 255, 255)' : 'white',
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
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
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-medium inline-block leading-relaxed">
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
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/work">
                <motion.button 
                  className={`px-8 py-4 font-semibold rounded-lg transition-all w-full sm:w-auto ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-white/90 text-purple-900 hover:bg-white backdrop-blur-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: isDark 
                      ? '0 0 30px rgba(255, 255, 255, 0.3)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.1)'
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
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/philosophy">
                <motion.button 
                  className={`px-8 py-4 font-semibold rounded-lg border-2 transition-all w-full sm:w-auto ${
                    isDark 
                      ? 'border-white/30 text-white hover:bg-white/10' 
                      : 'border-white/50 text-white hover:bg-white/20 backdrop-blur-sm'
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
        transition={{ delay: titleLetters.length * 0.06 + 4.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-white/40'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-white/50' : 'bg-white/60'
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