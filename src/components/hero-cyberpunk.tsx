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
        
        ctx.fillStyle = `rgba(200, 220, 255, ${currentBrightness})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add subtle glow to brighter stars
        if (currentBrightness > 0.7) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 3
          )
          gradient.addColorStop(0, `rgba(150, 200, 255, ${currentBrightness * 0.3})`)
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
  }, [])
  
  // Split title into letters for animation
  const titleLetters = heroContent.heroTitle.split('')
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-black">
      {/* Twinkling stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, 
              rgba(10, 20, 40, 0.5) 0%, 
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />
      
      {/* Animated perspective grid with distance blur */}
      <div 
        className="absolute inset-0" 
        style={{ 
          perspective: '1000px',
          transform: typeof window !== 'undefined' 
            ? `translateX(${(mousePos.x - window.innerWidth / 2) * 0.01}px)` 
            : 'translateX(0)'
        }}
      >
        {/* Main grid plane */}
        <div 
          className="absolute inset-0"
          style={{
            transform: 'rotateX(70deg) translateZ(0)',
            transformOrigin: 'center 100%',
          }}
        >
          {/* Animated grid lines with distance fade */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 150, 255, 0.25) 1.5px, transparent 1.5px),
                linear-gradient(90deg, rgba(0, 150, 255, 0.25) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridScroll 8s linear infinite',
              maskImage: `linear-gradient(to top, 
                black 0%, 
                rgba(0,0,0,0.8) 30%, 
                rgba(0,0,0,0.3) 60%, 
                transparent 85%
              )`,
              WebkitMaskImage: `linear-gradient(to top, 
                black 0%, 
                rgba(0,0,0,0.8) 30%, 
                rgba(0,0,0,0.3) 60%, 
                transparent 85%
              )`,
              filter: 'blur(0px)',
            }}
          />
          
          {/* Distance blur overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, 
                transparent 0%, 
                transparent 60%, 
                rgba(0, 0, 0, 0.4) 80%, 
                rgba(0, 0, 0, 0.8) 100%
              )`,
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
          />
        </div>
      </div>
      
      {/* Nebula-like color accents */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, 
              rgba(50, 100, 200, 0.2) 0%, 
              transparent 40%
            ),
            radial-gradient(ellipse at 70% 60%, 
              rgba(150, 50, 200, 0.15) 0%, 
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
            rgba(0, 150, 255, 0.08),
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
            background: 'linear-gradient(to top, rgba(0, 150, 255, 0.15), transparent)',
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 relative"
            whileHover={{
              textShadow: '0 0 30px rgba(0, 200, 255, 0.8), 0 0 60px rgba(0, 200, 255, 0.5)',
              transition: { duration: 0.3 }
            }}
            style={{ 
              lineHeight: 1.2,
              paddingBottom: '0.1em',
              // Permanent glow and floating shadow
              textShadow: `
                0 0 20px rgba(0, 200, 255, 0.5),
                0 0 40px rgba(0, 150, 255, 0.3),
                0 0 60px rgba(0, 100, 255, 0.2),
                0 10px 20px rgba(0, 0, 0, 0.8)
              `,
              filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.5))',
              transform: 'translateZ(50px)',
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
                    duration: 0.5,
                    delay: index * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    y: -5,
                    color: 'rgb(0, 255, 255)',
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
        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
        }
        
        @keyframes pulseUp {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-20px) scaleY(1.1);
          }
        }
        
        @keyframes nebulaPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}