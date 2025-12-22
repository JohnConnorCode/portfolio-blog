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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Interactive glow follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            circle 400px at ${mousePos.x}px ${mousePos.y}px,
            hsl(var(--primary) / 0.08),
            transparent 50%
          )`
        }}
      />

      {/* Floating geometric accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-16 w-24 h-24 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 min-h-screen flex items-center px-6 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">

              {/* Accent line */}
              <div className="hidden lg:flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-primary" />
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-jost">
                  Product Strategist
                </span>
              </div>

              {/* Name - BOLD and distinctive */}
              <h1 className="relative mb-6">
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
              </h1>

              {/* Role badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                {['Product', 'Engineering', 'Strategy'].map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 text-xs tracking-[0.2em] uppercase border border-primary/30 text-primary font-jost bg-primary/5 backdrop-blur-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0 text-foreground/90 font-jost font-light">
                {heroContent.heroDescription}
              </p>

              {/* Tagline */}
              <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 text-primary font-jost font-medium">
                {heroContent.heroHighlight}
              </p>

              {/* CTA Buttons - more impactful */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <motion.button
                    className="group relative px-10 py-5 font-semibold text-sm overflow-hidden bg-primary text-background uppercase tracking-[0.15em] font-jost"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      Get in Touch
                    </span>
                  </motion.button>
                </Link>

                <Link href="/work">
                  <motion.button
                    className="px-10 py-5 font-semibold text-sm bg-transparent text-foreground border-2 border-foreground/20 hover:border-primary hover:text-primary uppercase tracking-[0.15em] font-jost transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    See the Work
                  </motion.button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-foreground/10">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '300K+', label: 'Users' },
                  { value: '$20M+', label: 'Funded' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-primary font-jost">{stat.value}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 font-jost">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />

                {/* Photo frame with accent */}
                <div className="relative">
                  {/* Corner accents */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary" />
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-primary" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-primary" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary" />

                  {/* Photo */}
                  <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-[360px] md:h-[480px] overflow-hidden">
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
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-jost">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
