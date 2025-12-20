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
    heroDescription: content?.heroDescription || 'Building systems that serve humanity.',
    heroHighlight: content?.heroHighlight || 'AI & Blockchain Strategist. Builder. Founder.'
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  // Track mouse for subtle interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Split title into letters for animation
  const titleLetters = heroContent.heroTitle.split('')

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden -mt-24 pt-24 bg-[#faf9f7]">
      {/* Subtle warm gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(201, 162, 39, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(26, 39, 68, 0.04) 0%, transparent 50%),
            linear-gradient(180deg, #faf9f7 0%, #f5f3ef 100%)
          `
        }}
      />

      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #1a2744 1px, transparent 1px),
            linear-gradient(180deg, #1a2744 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Refined decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

      {/* Subtle interactive glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 400px at ${mousePos.x}px ${mousePos.y}px,
            rgba(201, 162, 39, 0.03),
            transparent 40%
          )`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Refined decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c9a227]/50" />
            <svg viewBox="0 0 40 40" className="w-5 h-5">
              <path
                d="M 20 5 L 35 20 L 20 35 L 5 20 Z"
                fill="none"
                stroke="#c9a227"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c9a227]/50" />
          </motion.div>

          {/* Main title - Playfair Display serif */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-wide mb-6 relative"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '0.08em',
              color: '#1a2744',
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
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    }
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05 + 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle with refined styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: titleLetters.length * 0.05 + 1,
              duration: 0.8,
            }}
            className="mb-12"
          >
            <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-[#1a2744]/50 font-light">
              Founder · Builder · Systems Thinker
            </p>
          </motion.div>

          {/* Main description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: titleLetters.length * 0.05 + 1.3,
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="mb-8"
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed max-w-3xl mx-auto text-[#1a2744]/80"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {heroContent.heroDescription}
            </p>
          </motion.div>

          {/* Highlight text with gold accent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: titleLetters.length * 0.05 + 1.8,
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="mb-16"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#c9a227]">
              {heroContent.heroHighlight}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: titleLetters.length * 0.05 + 2.3
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/work">
                <motion.button
                  className="px-10 py-4 font-medium text-base transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#1a2744',
                    color: '#faf9f7',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                  }}
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link href="/philosophy">
                <motion.button
                  className="px-10 py-4 font-medium text-base transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'transparent',
                    color: '#1a2744',
                    border: '1px solid #1a2744',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                  }}
                >
                  My Philosophy
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Refined scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: titleLetters.length * 0.05 + 3, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 border border-[#1a2744]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#c9a227]/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
