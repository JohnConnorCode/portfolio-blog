'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface HeroContent {
  heroTitle?: string
  heroTagline?: string
  heroDescription?: string
  heroHighlight?: string
}

export function HeroCyberpunk({ content }: { content?: HeroContent }) {
  const heroContent = {
    heroTitle: content?.heroTitle || 'JOHN CONNOR',
    heroDescription: content?.heroDescription || 'Builder of systems that scale.',
    heroHighlight: content?.heroHighlight || 'From zero to product-market fit.'
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Refined gradient - subtle warmth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background to-background"
        style={{
          background: `
            radial-gradient(ellipse at 25% 25%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, hsl(var(--foreground) / 0.04) 0%, transparent 50%),
            hsl(var(--background))
          `
        }}
      />

      {/* Golden ratio grid - classical meets futuristic */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Fibonacci spiral suggestion */}
          <circle cx="1200" cy="540" r="300" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <circle cx="1200" cy="540" r="185" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <circle cx="1200" cy="540" r="115" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          {/* Horizontal lines */}
          <line x1="0" y1="405" x2="1920" y2="405" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          <line x1="0" y1="675" x2="1920" y2="675" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          {/* Vertical lines */}
          <line x1="740" y1="0" x2="740" y2="1080" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          <line x1="1180" y1="0" x2="1180" y2="1080" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        </svg>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Interactive glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 600px at ${mousePos.x}px ${mousePos.y}px,
            hsl(var(--primary) / 0.03),
            transparent 40%
          )`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 min-h-screen flex items-center px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content (7 columns) */}
            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
              {/* Classical decorative element - laurel-inspired */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hidden lg:flex items-center gap-4 mb-6"
              >
                <svg viewBox="0 0 60 20" className="w-14 h-5 text-primary">
                  <path d="M0 10 Q15 0 30 10 Q15 20 0 10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                  <path d="M10 10 Q20 3 30 10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                </svg>
                <div className="w-16 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-3 text-foreground font-jost"
                style={{ letterSpacing: '0.02em', lineHeight: 1 }}
              >
                {heroContent.heroTitle}
              </motion.h1>

              {/* Role - cross-functional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-8"
              >
                <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-jost font-medium">
                  Product
                </span>
                <span className="w-1 h-1 rounded-full bg-foreground/30" />
                <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-jost font-medium">
                  Engineering
                </span>
                <span className="w-1 h-1 rounded-full bg-foreground/30" />
                <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-jost font-medium">
                  Strategy
                </span>
              </motion.div>

              {/* Main philosophy - the hook */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0 text-foreground/90 font-jost font-light"
              >
                {heroContent.heroDescription}
              </motion.p>

              {/* Tagline - philosophical anchor */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl italic mb-10 max-w-xl mx-auto lg:mx-0 text-foreground/60 font-jost"
              >
                {heroContent.heroHighlight}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <motion.button
                    className="group relative px-8 py-4 font-semibold text-sm overflow-hidden bg-foreground text-background uppercase tracking-[0.12em] font-jost"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </motion.button>
                </Link>

                <Link href="/work">
                  <motion.button
                    className="px-8 py-4 font-medium text-sm transition-all duration-300 bg-transparent text-foreground border-[1.5px] border-foreground/30 hover:border-primary hover:text-primary uppercase tracking-[0.12em] font-jost"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    See the Proof
                  </motion.button>
                </Link>
              </motion.div>

              {/* Availability signal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-6 text-xs tracking-[0.15em] uppercase text-foreground/50 font-jost text-center lg:text-left"
              >
                Available for select engagements
              </motion.p>
            </div>

            {/* Right Column - Photo (5 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Outer geometric frame - Greek meets futuristic */}
                <div className="absolute -inset-4 sm:-inset-6">
                  <svg className="w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Corner brackets - architectural feel */}
                    <path d="M0 15 L0 0 L15 0" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M85 0 L100 0 L100 15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M100 85 L100 100 L85 100" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M15 100 L0 100 L0 85" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    {/* Subtle inner lines */}
                    <path d="M0 30 L5 30" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                    <path d="M95 70 L100 70" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                  </svg>
                </div>

                {/* Photo container */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-[340px] lg:h-[440px]">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/John-Connor-photo.jpg"
                      alt="John Connor"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 340px"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating accent - golden ratio diamond */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4"
                >
                  <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10 text-primary">
                    <path
                      d="M 20 4 L 36 20 L 20 36 L 4 20 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 20 10 L 30 20 L 20 30 L 10 20 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      opacity="0.5"
                    />
                  </svg>
                </motion.div>

                {/* Top right accent */}
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4"
                >
                  <div className="w-full h-full border border-primary rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-jost">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
