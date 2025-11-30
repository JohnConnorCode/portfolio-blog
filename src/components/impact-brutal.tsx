'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Users, Code, Trophy } from 'lucide-react'
import { fadeInUp, fadeInUpDelayed, headerAnimation, cardHover, staggerContainer, ANIMATION_DELAY, ANIMATION_DURATION, SECTION_DELAYS } from '@/lib/animation-config'
import { useRef } from 'react'

const impacts = [
  {
    number: "$20M+",
    label: "Funding Enabled",
    context: "Through product-market fit",
    icon: Trophy,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
    glow: "rgba(250, 204, 21, 0.4)"
  },
  {
    number: "50+",
    label: "Product Problems Solved",
    context: "Usability & market fit issues",
    icon: Code,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
    glow: "rgba(0, 212, 255, 0.4)"
  },
  {
    number: "15 Years",
    label: "Technology Strategy",
    context: "AI/Web3 & human-centered design",
    icon: Zap,
    color: "text-pink-500",
    gradient: "from-pink-500/20 to-rose-500/20",
    glow: "rgba(236, 72, 153, 0.4)"
  },
  {
    number: "200+",
    label: "User Research Sessions",
    context: "Finding real product-market fit",
    icon: Users,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-violet-500/20",
    glow: "rgba(168, 85, 247, 0.4)"
  }
]

export function ImpactBrutal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: SECTION_DELAYS.impact }}
      className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Glowing accent lines - Greek/Art Deco fusion */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section title with Greek-inspired typography */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Decorative diamond element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500/50" />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            </svg>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500/50" />
          </motion.div>

          <motion.h2
            {...headerAnimation}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}
          >
            <span className="text-foreground font-light">TRACK</span>
            <span className="font-bold" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}> RECORD</span>
          </motion.h2>
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
            className="text-base sm:text-lg text-gray-400 dark:text-gray-400 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Results from building products that matter
          </motion.p>
        </motion.div>
        
        {/* Impact cards with premium design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.label}
                variants={fadeInUpDelayed}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                  style={{ background: `radial-gradient(circle, ${impact.glow}, transparent 70%)` }}
                />

                {/* Card */}
                <div className={`relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full group-hover:border-white/20 transition-all duration-300`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-5 ${impact.color}`}>
                      <Icon className="w-10 h-10" style={{ filter: `drop-shadow(0 0 10px currentColor)` }} />
                    </div>

                    {/* Number */}
                    <p
                      className={`text-4xl sm:text-5xl font-black mb-2 ${impact.color}`}
                      style={{ textShadow: `0 0 30px ${impact.glow}` }}
                    >
                      {impact.number}
                    </p>

                    {/* Label */}
                    <p className="text-white font-semibold text-lg mb-2">
                      {impact.label}
                    </p>

                    {/* Context */}
                    <p className="text-gray-400 text-sm font-light">
                      {impact.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom accent text */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.section }}
            className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-[0.25em]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Building what <span style={{ color: '#d4af37' }}>actually works</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}