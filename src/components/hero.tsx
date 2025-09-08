'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Name with elegant typography */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block">John Connor</span>
          </motion.h1>

          {/* Philosophy statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-relaxed">
              Building bridges between 
              <span className="font-semibold"> humanity</span> and 
              <span className="font-semibold"> technology</span>
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategist. Builder. Father. Creating systems that honor human values 
              while embracing transformation. Championing in-person connection in a digital age.
            </p>
          </motion.div>

          {/* Core belief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12 py-8 border-y border-border/30"
          >
            <blockquote className="text-lg sm:text-xl italic text-muted-foreground max-w-2xl mx-auto">
              "The human journey is transformative—individually and collectively. 
              We must conserve our humanity while building the future."
            </blockquote>
          </motion.div>

          {/* CTAs with refined styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-foreground text-background font-medium text-lg border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
              >
                View My Work
              </motion.button>
            </Link>
            
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-foreground/20 text-foreground font-medium text-lg hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                My Philosophy
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}