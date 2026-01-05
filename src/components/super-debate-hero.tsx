'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, Users, ArrowRight, Scale, Mic, Calendar, Flame } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { reveal } from '@/lib/animation-config'

// =============================================================================
// THEME CONFIG - Matches SuperDebate page for consistency
// =============================================================================
const THEME = {
  // Text colors
  text: {
    primary: 'text-violet-400',
    secondary: 'text-purple-400',
    muted: 'text-foreground/60',
  },
  // Gradients
  gradients: {
    text: 'from-violet-400 via-purple-500 to-indigo-400',
    button: 'from-violet-500 to-purple-600',
    section: 'from-violet-950/30 via-background to-purple-950/30',
    glow: 'from-violet-600/10 via-purple-600/10 to-indigo-600/10',
  },
  // Borders
  borders: {
    primary: 'border-violet-500/30',
    hover: 'hover:border-violet-500/50',
  },
  // Backgrounds
  bg: {
    primary: 'bg-violet-500/10',
    card: 'bg-background/80 backdrop-blur-sm',
  },
  // Orbs
  orbs: {
    primary: 'bg-violet-600/15',
    secondary: 'bg-purple-600/15',
  },
} as const

export function SuperDebateHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30])

  const features = [
    { icon: Mic, title: "Live Debates", description: "In-person events with structured rounds" },
    { icon: Users, title: "Local Clubs", description: "NYC, Austin, LA, Chicago, and more" },
    { icon: Scale, title: "Peer Judging", description: "4-criteria scoring system" },
    { icon: Calendar, title: "Tournaments", description: "From club nights to championships" },
  ]

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-background border-t border-border"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${THEME.gradients.section}`} />

        {/* Animated gradient orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-[400px] h-[400px] ${THEME.orbs.primary} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.2, 1], x: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${THEME.orbs.secondary} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.15, 1], x: [30, -30, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top accent line - purple gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <motion.div
        style={{ opacity, y, willChange: 'transform, opacity' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div {...reveal()} className="text-center mb-16">
          {/* Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className={`flex items-center gap-2 px-4 py-2 ${THEME.borders.primary} border ${THEME.bg.primary} rounded-full`}>
              <Flame className={`w-4 h-4 ${THEME.text.primary}`} />
              <span className={`text-xs font-semibold uppercase tracking-[0.15em] font-jost ${THEME.text.primary}`}>
                Main Venture
              </span>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-violet-500/50" />
          </div>

          {/* Title - matching superdebate.org style */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-jost leading-tight">
            <span className="text-foreground">Bring Debate</span>
            <br />
            <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>
              Back to Life
            </span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-4 font-jost text-foreground/80 font-medium`}>
            A platform for adult debate clubs.
          </p>

          <p className={`text-base max-w-2xl mx-auto mb-10 font-jost ${THEME.text.muted}`}>
            Find or start a debate club in your city. Live events in NYC, Austin, LA, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/super-debate">
              <button className={`px-8 py-4 bg-gradient-to-r ${THEME.gradients.button} text-white font-semibold flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200`}>
                <Users className="w-4 h-4" />
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
              <button className={`px-8 py-4 ${THEME.borders.primary} border ${THEME.text.primary} font-semibold ${THEME.borders.hover} hover:bg-violet-500/10 transition-all duration-200`}>
                Visit Platform
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} {...reveal(index)} className="relative group">
                <div className={`relative ${THEME.bg.card} border border-border p-6 h-full transition-all duration-300 group-hover:border-violet-500/30 group-hover:-translate-y-1`}>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-violet-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-violet-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className={`w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-purple-500/30 transition-colors`}>
                    <Icon className={`w-6 h-6 ${THEME.text.primary}`} />
                  </div>
                  <h3 className="text-base font-bold mb-2 font-jost text-foreground">{feature.title}</h3>
                  <p className="text-sm font-jost text-foreground/50">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Format Showcase */}
        <motion.div {...reveal()} className="relative max-w-4xl mx-auto">
          <motion.div
            className={`absolute -inset-4 bg-gradient-to-r ${THEME.gradients.glow} blur-2xl opacity-50`}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className={`relative ${THEME.bg.card} ${THEME.borders.primary} border p-8`}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500/50" />

            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className={`w-6 h-6 ${THEME.text.primary}`} />
              <h3 className="text-xl font-bold font-jost text-foreground">
                How It Works
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-base font-semibold mb-2 font-jost ${THEME.text.primary}`}>
                  Configurable Format
                </h4>
                <p className="text-sm leading-relaxed font-jost text-foreground/60">
                  Set speech lengths, rounds, and scoring criteria per event
                </p>
              </div>
              <div>
                <h4 className={`text-base font-semibold mb-2 font-jost ${THEME.text.primary}`}>
                  City Chapters
                </h4>
                <p className="text-sm leading-relaxed font-jost text-foreground/60">
                  Each city runs its own club with local organizers
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  )
}
