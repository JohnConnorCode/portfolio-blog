'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { useMobileAnimation } from '@/hooks/use-viewport-animation'
import { HeroBackground } from './hero-background'
import { PremiumButton } from './ui/premium-button'
import { TextReveal, HeroTextReveal } from './ui/text-reveal'
import { ParallaxSection } from './ui/parallax-section'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useMobileAnimation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <ParallaxSection speed={0.3} enableTilt={!isMobile} className="relative min-h-screen">
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-0">
        {/* Animated network background */}
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline */}
          <HeroTextReveal className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]">
            Build systems that
          </HeroTextReveal>
          <HeroTextReveal className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02] text-gradient mt-2 block">
            serve humanity
          </HeroTextReveal>

          {/* Subheadline with manifesto */}
          <TextReveal
            variant="fade-up"
            delay={0.8}
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              John Thomas Connor is a product strategist, builder, and father who creates systems at the
              intersection of technology and community. For over 15 years he&apos;s been reading, writing,
              and building the future—focused on making technology work for people rather than replacing them.
            </p>
          </TextReveal>

          {/* Core belief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48 }}
            className="mb-8 sm:mb-12 py-6 sm:py-8 border-y border-border/30"
          >
            <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-100 max-w-2xl mx-auto">
              &ldquo;The human journey is transformative—individually and collectively. 
              We must conserve our humanity while building the future.&rdquo;
            </blockquote>
          </motion.div>

          {/* CTAs with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <PremiumButton
              variant="primary"
              size="lg"
              href="/contact"
              magneticStrength={0.4}
              rippleEffect={true}
              soundEffect={false}
              className="w-full sm:w-auto"
            >
              Start a Project
            </PremiumButton>

            <PremiumButton
              variant="ghost"
              size="lg"
              href="/work"
              magneticStrength={0.3}
              rippleEffect={true}
              className="w-full sm:w-auto"
            >
              Explore My Work
            </PremiumButton>
          </motion.div>
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.96, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-0"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-100"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
      </section>
    </ParallaxSection>
  )
}