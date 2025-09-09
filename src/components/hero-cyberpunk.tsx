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
    heroTagline: content?.heroTagline || 'Product Strategist · Growth Catalyst',
    heroDescription: content?.heroDescription || 'Transforming ideas into scalable products through strategic iteration.',
    heroHighlight: content?.heroHighlight || 'AI-powered building. Strategic consulting. Rapid growth.'
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  
  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charArray = chars.split('')
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
    
    let animationId: number
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#00ffff'
      ctx.font = fontSize + 'px monospace'
      
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
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
  }, [])
  
  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24" style={{ background: 'var(--black)' }}>
      {/* Matrix rain background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />
      
      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glowing orbs that follow mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Glitch text effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6"
          >
            <span className="tracking-tight text-white">
              {heroContent.heroTitle}
            </span>
          </motion.h1>
          
          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 animate-pulse" />
              <p className="relative text-lg sm:text-xl md:text-2xl font-mono uppercase tracking-wider backdrop-blur" style={{ color: 'var(--cyan-400)', padding: 'var(--space-2) var(--space-4)', background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
                {heroContent.heroTagline}
              </p>
            </div>
          </motion.div>
          
          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-mono"
          >
            {heroContent.heroDescription}
            <br />
            <span className="text-cyan-400">{heroContent.heroHighlight}</span>
          </motion.p>
          
          {/* CTA Buttons with brutal design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
            
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                My Philosophy
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Scrolling indicator with glitch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 font-mono text-sm uppercase tracking-widest"
            >
              <div className="glitch" data-text="[ SCROLL ]">[ SCROLL ]</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Corner accents */}
      <div className="absolute top-24 left-0 w-24 h-24" style={{ borderLeft: 'var(--border-thin) solid rgba(0, 212, 255, 0.3)', borderTop: 'var(--border-thin) solid rgba(0, 212, 255, 0.3)' }} />
      <div className="absolute top-24 right-0 w-24 h-24" style={{ borderRight: 'var(--border-thin) solid rgba(0, 212, 255, 0.3)', borderTop: 'var(--border-thin) solid rgba(0, 212, 255, 0.3)' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-cyan-400" />
    </section>
  )
}