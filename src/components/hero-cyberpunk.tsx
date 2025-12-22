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
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Simpler parallax - less layers, better performance
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  useEffect(() => {
    // Check for mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Mouse tracking only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePos({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Gradient background - simple parallax on desktop only */}
      <motion.div
        style={isMobile ? {} : { y: bgY, willChange: 'transform' }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/3 rounded-full blur-[80px] md:blur-[120px]" />
      </motion.div>

      {/* Grid background - static for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] md:opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Interactive glow - desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle 400px at ${mousePos.x}px ${mousePos.y}px,
              hsl(var(--primary) / 0.06),
              transparent 50%
            )`
          }}
        />
      )}

      {/* Floating geometric accents - desktop only for performance */}
      <motion.div
        style={isMobile ? {} : { y: floatY, willChange: 'transform' }}
        className="absolute top-20 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 opacity-10 md:opacity-20 hidden sm:block"
      >
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 100 100"
          className="w-full h-full text-primary"
        >
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-8 md:left-16 w-16 md:w-24 h-16 md:h-24 opacity-10 hidden sm:block"
      >
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 100 100"
          className="w-full h-full text-primary"
        >
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </motion.div>

      {/* Main content wrapper with parallax */}
      <motion.div
        style={isMobile ? { opacity: heroOpacity } : { y: heroY, opacity: heroOpacity, willChange: 'transform, opacity' }}
        className="relative z-20 min-h-screen flex items-center px-6 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photo Column with its own parallax */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={isMobile ? {} : { y: photoY, willChange: 'transform' }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing backdrop */}
                <motion.div
                  style={isMobile ? {} : { scale: glowScale }}
                  className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
                />

                {/* Photo frame with accent */}
                <div className="relative">
                  {/* Corner accents */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary" />
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-primary" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-primary" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary" />

                  {/* Photo */}
                  <div className="relative w-44 h-56 sm:w-52 sm:h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden">
                    <Image
                      src="/John-Connor-photo.jpg"
                      alt="John Connor"
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      priority
                      sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 360px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Floating diamond accent */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6"
                  >
                    <div className="w-12 h-12 border-2 border-primary rotate-45 bg-background" />
                  </motion.div>

                  {/* Small accent */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-4 h-4 bg-primary"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column with staggered parallax */}
            <motion.div
              style={isMobile ? {} : { y: textY, willChange: 'transform' }}
              className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
            >

              {/* Name - BOLD and distinctive */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative mb-6"
              >
                <span
                  className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight text-foreground font-jost"
                  style={{ lineHeight: 0.9 }}
                >
                  JOHN
                </span>
                <span
                  className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight font-jost bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent"
                  style={{ lineHeight: 0.9 }}
                >
                  CONNOR
                </span>
              </motion.h1>

              {/* Role badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
              >
                {['Product', 'Engineering', 'Strategy'].map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="px-4 py-2 text-xs tracking-[0.2em] uppercase border border-primary/30 text-primary font-jost bg-primary/5 backdrop-blur-sm"
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0 text-foreground/90 font-jost font-light"
              >
                {heroContent.heroDescription}
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 text-primary font-jost font-medium"
              >
                {heroContent.heroHighlight}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <button className="group relative px-10 py-5 font-semibold text-sm overflow-hidden bg-primary text-background uppercase tracking-[0.15em] font-jost hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                    <span className="relative z-10">Get in Touch</span>
                    <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      Get in Touch
                    </span>
                  </button>
                </Link>

                <Link href="/work">
                  <button className="px-10 py-5 font-semibold text-sm bg-transparent text-foreground border-2 border-foreground/20 hover:border-primary hover:text-primary uppercase tracking-[0.15em] font-jost transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    See the Work
                  </button>
                </Link>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
