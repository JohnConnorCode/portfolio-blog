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
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Animated cyber grid background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 200, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-drift 30s linear infinite',
        }}
      />
      
      {/* Diagonal grid for depth */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(100, 200, 255, 0.02) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(200, 100, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'grid-drift-reverse 40s linear infinite',
        }}
      />
      
      {/* Floating orbs with fade in/out animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left orb */}
        <motion.div
          className="absolute w-96 h-96 -top-48 -left-48"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl" />
        </motion.div>
        
        {/* Bottom right orb */}
        <motion.div
          className="absolute w-96 h-96 -bottom-48 -right-48"
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-purple-400/20 to-transparent blur-3xl" />
        </motion.div>
        
        {/* Center floating orb */}
        <motion.div
          className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-transparent blur-2xl" />
        </motion.div>
      </div>
      
      {/* Interactive gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, 
              rgba(0, 150, 255, 0.08), 
              rgba(100, 50, 255, 0.04) 40%, 
              transparent 70%
            )
          `,
        }}
      />
      
      {/* Hover-activated accent lines */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: mousePos.y < 200 ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </motion.div>
      
      {/* Subtle scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.3) 2px,
            rgba(0, 255, 255, 0.3) 4px
          )`,
          animation: 'scanline 8s linear infinite'
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
          
          {/* Simple tagline */}
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
      
      <style jsx>{`
        @keyframes grid-drift {
          0% { 
            transform: translate(0, 0);
          }
          100% { 
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes grid-drift-reverse {
          0% { 
            transform: translate(0, 0);
          }
          100% { 
            transform: translate(-80px, -80px);
          }
        }
        
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
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
    </section>
  )
}