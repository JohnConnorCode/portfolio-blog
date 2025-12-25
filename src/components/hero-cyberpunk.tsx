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

  // Parallax transforms - applied universally, CSS handles optimization
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -30]) // Image moves opposite for layered effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  useEffect(() => {
    // Mouse tracking only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePos({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-background">
      {/* Gradient background with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 md:will-change-transform"
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

      {/* Interactive glow - hidden on mobile via CSS */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(
            circle 400px at ${mousePos.x}px ${mousePos.y}px,
            hsl(var(--primary) / 0.06),
            transparent 50%
          )`
        }}
      />

      {/* Floating geometric accents - hidden on mobile for performance */}
      <motion.div
        style={{ y: floatY }}
        whileHover={{ scale: 1.2, opacity: 0.4 }}
        className="absolute top-20 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 opacity-10 md:opacity-20 hidden sm:block md:will-change-transform cursor-pointer transition-opacity duration-300"
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
        whileHover={{ scale: 1.2, opacity: 0.3 }}
        className="absolute bottom-32 left-8 md:left-16 w-16 md:w-24 h-16 md:h-24 opacity-10 hidden sm:block cursor-pointer transition-opacity duration-300"
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
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 min-h-[calc(100vh-6rem)] sm:min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-8 md:will-change-transform"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Photo Column with its own parallax - CSS entrance + motion scroll */}
            <motion.div
              style={{ y: photoY }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end md:will-change-transform animate-in delay-1"
            >
              <div className="relative">
                {/* Glowing backdrop */}
                <motion.div
                  style={{ scale: glowScale }}
                  className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
                />

                {/* Photo frame with accent */}
                <div className="relative group/photo">
                  {/* Corner accents - expand on hover */}
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-primary transition-all duration-500 group-hover/photo:w-12 group-hover/photo:h-12 sm:group-hover/photo:w-16 sm:group-hover/photo:h-16 group-hover/photo:-top-3 group-hover/photo:-left-3 sm:group-hover/photo:-top-4 sm:group-hover/photo:-left-4" />
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-primary transition-all duration-500 group-hover/photo:w-12 group-hover/photo:h-12 sm:group-hover/photo:w-16 sm:group-hover/photo:h-16 group-hover/photo:-top-3 group-hover/photo:-right-3 sm:group-hover/photo:-top-4 sm:group-hover/photo:-right-4" />
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-primary transition-all duration-500 group-hover/photo:w-12 group-hover/photo:h-12 sm:group-hover/photo:w-16 sm:group-hover/photo:h-16 group-hover/photo:-bottom-3 group-hover/photo:-left-3 sm:group-hover/photo:-bottom-4 sm:group-hover/photo:-left-4" />
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-primary transition-all duration-500 group-hover/photo:w-12 group-hover/photo:h-12 sm:group-hover/photo:w-16 sm:group-hover/photo:h-16 group-hover/photo:-bottom-3 group-hover/photo:-right-3 sm:group-hover/photo:-bottom-4 sm:group-hover/photo:-right-4" />

                  {/* Photo */}
                  <div className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] overflow-hidden">
                    <motion.div
                      style={{ y: imageY }}
                      className="absolute inset-0 md:will-change-transform"
                    >
                      <Image
                        src="/John-Connor-photo.jpg"
                        alt="John Connor"
                        fill
                        className="object-cover object-top grayscale group-hover/photo:grayscale-0 transition-all duration-700 scale-110 group-hover/photo:scale-105"
                        priority
                        sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 360px"
                      />
                    </motion.div>
                    {/* Overlay gradient - fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover/photo:opacity-30 transition-opacity duration-500 z-10" />
                  </div>

                  {/* Floating diamond accent - frosted glass effect */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 group/diamond cursor-pointer"
                    whileHover={{ scale: 1.15, rotate: 90 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rotate-45 border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-300 group-hover/diamond:bg-white/20 group-hover/diamond:border-white/50 group-hover/diamond:shadow-primary/30" />
                  </motion.div>

                  {/* Small accent - pulses and grows on photo hover */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 bg-primary transition-all duration-300 group-hover/photo:w-4 group-hover/photo:h-4 sm:group-hover/photo:w-5 sm:group-hover/photo:h-5 group-hover/photo:-top-4 group-hover/photo:-right-4 sm:group-hover/photo:-top-5 sm:group-hover/photo:-right-5 group-hover/photo:shadow-lg group-hover/photo:shadow-primary/50"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column with staggered parallax */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left md:will-change-transform"
            >

              {/* Headline - BOLD and distinctive - CSS animation with cycling gradient */}
              <h1 className="relative mb-4 sm:mb-6 animate-in delay-0">
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-jost bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-cycle"
                  style={{ lineHeight: 1.1 }}
                >
                  JOHN CONNOR
                </span>
              </h1>

              {/* Role badges - CSS animations for stagger */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                {['Systems', 'Strategy', 'Product'].map((role, i) => (
                  <span
                    key={role}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase border border-primary/30 text-primary font-jost bg-primary/5 backdrop-blur-sm cursor-default hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 animate-in"
                    style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Description - CSS animation */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-3 sm:mb-4 max-w-2xl mx-auto lg:mx-0 text-foreground/90 font-jost font-light animate-in delay-4">
                {heroContent.heroDescription}
              </p>

              {/* Tagline - CSS animation */}
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 text-primary font-jost font-medium animate-in delay-5">
                {heroContent.heroHighlight}
              </p>

              {/* CTA Buttons - CSS animation */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-in delay-6">
                <Link href="/contact">
                  <button className="group relative px-8 sm:px-10 py-4 sm:py-5 font-semibold text-xs sm:text-sm overflow-hidden bg-primary text-background uppercase tracking-[0.12em] sm:tracking-[0.15em] font-jost hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                    <span className="relative z-10">Get in Touch</span>
                    <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      Get in Touch
                    </span>
                  </button>
                </Link>

                <Link href="/work">
                  <button className="px-8 sm:px-10 py-4 sm:py-5 font-semibold text-xs sm:text-sm bg-transparent text-foreground border-2 border-foreground/20 hover:border-primary hover:text-primary uppercase tracking-[0.12em] sm:tracking-[0.15em] font-jost transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    See the Work
                  </button>
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
