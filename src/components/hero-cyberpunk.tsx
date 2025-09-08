'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export function HeroCyberpunk() {
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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
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
            className="text-6xl md:text-8xl font-black mb-6"
          >
            <span className="tracking-tight">
              <span className="text-white font-light">JOHN</span>
              <span className="text-cyan-400 neon-glow font-black"> CONNOR</span>
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
              <p className="relative text-xl md:text-2xl font-mono uppercase tracking-wider text-cyan-400 px-8 py-4 bg-black/90 backdrop-blur border border-cyan-400/30">
                System Architect · Future Builder
              </p>
            </div>
          </motion.div>
          
          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-mono"
          >
            Building sophisticated systems that redefine what's possible.
            <br />
            <span className="text-cyan-400">Precision engineering. Strategic vision. Real impact.</span>
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
                className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-lg tracking-wide shadow-2xl hover:shadow-cyan-400/50 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
            
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-black/50 backdrop-blur border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg tracking-wide hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
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
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-cyan-400" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-cyan-400" />
    </section>
  )
}