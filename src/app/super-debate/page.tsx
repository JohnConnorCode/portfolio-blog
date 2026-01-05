'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Trophy, Users, MessageSquare, ArrowRight, Globe, ChevronRight, ExternalLink,
  Calendar, MapPin, Flame, Award, Sparkles, Mic2, Scale, Swords, Brain, Zap
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import {
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  pageHeaderVariants,
  viewport,
} from '@/lib/animation-config'
import { PROJECT_LINKS } from '@/lib/constants'

// =============================================================================
// STYLE CONFIG - Centralized colors and gradients for easy adjustment
// =============================================================================
const THEME = {
  // Primary brand colors
  primary: 'violet',
  secondary: 'purple',
  tertiary: 'indigo',
  accent: 'fuchsia',

  // Text colors
  text: {
    primary: 'text-violet-400',
    secondary: 'text-purple-400',
    tertiary: 'text-indigo-400',
    accent: 'text-fuchsia-400',
    muted: 'text-foreground/70',
  },

  // Gradient definitions
  gradients: {
    primary: 'from-violet-500 to-purple-600',
    text: 'from-violet-400 via-purple-500 to-indigo-400',
    hero: 'from-violet-950/20 via-background to-purple-950/20',
    section: 'from-violet-500/5 via-transparent to-purple-500/5',
    sectionAlt: 'from-background via-violet-950/10 to-background',
    glow: 'from-violet-600/10 via-purple-600/10 to-indigo-600/10',
  },

  // Border colors
  borders: {
    primary: 'border-violet-500/30',
    secondary: 'border-violet-500/20',
    hover: 'hover:border-violet-500/30',
  },

  // Background colors
  bg: {
    primary: 'bg-violet-500/10',
    hover: 'hover:bg-violet-500/10',
    card: 'bg-background/80 backdrop-blur-xl',
    cardAlt: 'bg-background/60 backdrop-blur-xl',
  },

  // Orb colors for animated backgrounds
  orbs: {
    primary: 'bg-violet-600/20',
    secondary: 'bg-purple-600/20',
    tertiary: 'bg-indigo-600/10',
  },
} as const

// Helper to generate consistent button styles
const buttonStyles = {
  primary: `px-10 py-5 bg-gradient-to-r ${THEME.gradients.primary} text-primary-foreground text-lg font-semibold flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200 rounded-xl`,
  secondary: `px-10 py-5 ${THEME.borders.primary} border ${THEME.text.primary} text-lg font-semibold ${THEME.bg.hover} hover:border-violet-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 rounded-xl`,
}

// Helper to generate consistent card styles
const cardStyles = {
  base: `relative ${THEME.bg.card} border border-border p-8 h-full ${THEME.borders.hover} transition-all duration-300`,
  alt: `relative ${THEME.bg.cardAlt} border border-border p-8 h-full ${THEME.borders.hover} transition-all duration-300`,
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default function SuperDebatePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  // =============================================================================
  // DATA CONFIGURATIONS
  // =============================================================================
  const coreActions = [
    {
      icon: Sparkles,
      title: 'Organize',
      description: 'Start a club, schedule events, manage members.',
    },
    {
      icon: Swords,
      title: 'Compete',
      description: 'Structured debates with peer judging and rankings.',
    },
    {
      icon: Scale,
      title: 'Judge',
      description: 'Score debates using a 4-criteria evaluation system.',
    }
  ]

  const platformFeatures = [
    {
      title: "Club Management",
      description: "Create clubs, invite members, schedule regular meetups",
      icon: Users,
    },
    {
      title: "Event System",
      description: "Host debates with structured rounds, topics, and scoring",
      icon: Calendar,
    },
    {
      title: "Multi-City",
      description: "Active clubs in NYC, Austin, LA, Chicago, Boston, and more",
      icon: Globe,
    },
    {
      title: "Tournaments",
      description: "Full bracket management with NFT trophies on Solana",
      icon: Trophy,
    }
  ]

  const championshipFeatures = [
    { title: "32 Teams", description: "Two-person teams compete through 6 preliminary rounds", icon: Users },
    { title: "Single Elimination", description: "Top 8 advance to knockout bracket", icon: Flame },
    { title: "NFT Trophies", description: "Victory recorded on Solana blockchain", icon: Award },
    { title: "Peer Judging", description: "4-criteria scoring system", icon: Scale },
  ]

  const myContributions = [
    {
      title: 'Product',
      items: ['Designed debate format and rules', 'Created tournament structure', 'Defined the peer judging criteria'],
      icon: Brain,
    },
    {
      title: 'Engineering',
      items: ['Full-stack platform (React, TypeScript)', 'Real-time tournament management', 'Solana integration for NFT trophies'],
      icon: Zap,
    },
    {
      title: 'Operations',
      items: ['Organizing NYC chapter events', 'Planning Infinita Championship', 'Recruiting city chapter leaders'],
      icon: Users,
    }
  ]

  const techStack = [
    { title: 'Full-Stack Platform', description: 'React, TypeScript, real-time tournament management' },
    { title: 'Solana Integration', description: 'NFT trophies and on-chain achievement records' },
    { title: 'Peer Judging System', description: '4-criteria scoring with accountability mechanics' },
  ]

  // =============================================================================
  // RENDER
  // =============================================================================
  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        style={{ y: heroY, scale: scaleProgress }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${THEME.gradients.hero}`} />
          <motion.div
            className="absolute inset-0 bg-grid-pattern"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${THEME.orbs.primary} rounded-full blur-3xl`}
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] ${THEME.orbs.secondary} rounded-full blur-3xl`}
            animate={{ scale: [1, 1.2, 1], x: [50, -50, 50], y: [30, -30, 30] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${THEME.orbs.tertiary} rounded-full blur-3xl`}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={pageHeaderVariants} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div
              variants={childVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 ${THEME.borders.primary} border ${THEME.bg.primary} mb-8 rounded-full`}
            >
              <Flame className={`w-5 h-5 ${THEME.text.primary}`} />
              <span className={`text-sm font-mono ${THEME.text.primary}`}>MAIN VENTURE • FOUNDER</span>
            </motion.div>

            {/* Main Title - Matching superdebate.org style */}
            <motion.h1
              variants={childVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            >
              <span className="text-foreground">Bring Debate</span>
              <br />
              <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>
                Back to Life
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mx-auto mb-4 font-medium"
            >
              A platform for adult debate clubs.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className={`text-lg ${THEME.text.muted} max-w-2xl mx-auto mb-10`}
            >
              Find or start a debate club in your city. Live events in NYC, Austin, LA, and more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href={PROJECT_LINKS.superDebate} target="_blank" rel="noopener noreferrer">
                <button className={buttonStyles.primary}>
                  <Users className="w-5 h-5" />
                  <span>Join a Club</span>
                </button>
              </Link>

              <button
                className={buttonStyles.secondary}
                onClick={() => document.getElementById('championship')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>See the Championship</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== CORE ACTIONS SECTION ===== */}
      <section className="py-24 px-4 relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b ${THEME.gradients.section}`}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {coreActions.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} variants={itemVariants} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${THEME.primary}-500/20 to-${THEME.secondary}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={cardStyles.base}>
                      <div className={`w-14 h-14 bg-gradient-to-br from-${THEME.primary}-500/20 to-${THEME.secondary}-500/20 flex items-center justify-center mb-6 group-hover:from-${THEME.primary}-500/30 group-hover:to-${THEME.secondary}-500/30 transition-colors`}>
                        <Icon className={`w-7 h-7 ${THEME.text.primary}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ===== PROBLEM/SOLUTION SECTION ===== */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Why </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>SuperDebate</span>
            </motion.h2>
            <motion.p variants={childVariants} className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>
              Debate clubs shouldn&apos;t end after school
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Problem Card - Intentionally red for contrast */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`${THEME.bg.card} border border-red-500/20 p-8 h-full`}>
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Gap</h3>
                <ul className="space-y-3 text-foreground/70">
                  {[
                    'Debate is taught in schools but disappears after graduation',
                    'No infrastructure for adults who want to practice argumentation',
                    'Online arguments lack structure and reward the loudest voices'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solution Card - Intentionally green for contrast */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`${THEME.bg.card} border border-green-500/20 p-8 h-full`}>
                <h3 className="text-2xl font-bold mb-4 text-green-400">What We Built</h3>
                <ul className="space-y-3 text-foreground/70">
                  {[
                    'Platform for finding and starting local debate clubs',
                    'Structured formats with peer judging',
                    'Tournament system with rankings and events'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CHAMPIONSHIP SECTION ===== */}
      <section id="championship" className={`py-32 px-4 relative overflow-hidden bg-gradient-to-b ${THEME.gradients.sectionAlt}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <motion.div
              variants={childVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 ${THEME.borders.primary} border ${THEME.bg.primary} mb-6 rounded-full`}
            >
              <Trophy className={`w-5 h-5 ${THEME.text.primary}`} />
              <span className={`text-sm font-mono ${THEME.text.primary}`}>FLAGSHIP EVENT • 2026</span>
            </motion.div>

            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">The </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Infinita</span>
              <span className="text-foreground"> Championship</span>
            </motion.h2>
            <motion.p variants={childVariants} className={`text-xl max-w-3xl mx-auto ${THEME.text.muted}`}>
              February 18-20, 2026 in Roatán, Honduras. 32 two-person teams compete for glory,
              NFT trophies on Solana, and the title of world&apos;s best debaters.
            </motion.p>
          </motion.div>

          {/* Championship Details Card */}
          <motion.div variants={childVariants} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 relative">
            <motion.div
              className={`absolute -inset-4 bg-gradient-to-r ${THEME.gradients.glow} blur-3xl`}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className={`relative ${THEME.bg.cardAlt} ${THEME.borders.secondary} border p-8 md:p-12`}>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { icon: Calendar, label: 'When', value: 'Feb 18-20, 2026', sub: 'Three days of competition' },
                  { icon: MapPin, label: 'Where', value: 'Roatán, Honduras', sub: 'Caribbean island paradise' },
                  { icon: Trophy, label: 'Entry', value: '$150/Team', sub: '$80 individual entry' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Icon className={`w-5 h-5 ${THEME.text.primary}`} />
                        <span className="text-sm uppercase tracking-wider text-foreground/60">{item.label}</span>
                      </div>
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>{item.value}</div>
                      <div className="text-sm text-foreground/60 mt-1">{item.sub}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Championship Features */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-4 gap-6"
          >
            {championshipFeatures.map((item, index) => {
              const Icon = item.icon
              const colors = [THEME.text.primary, THEME.text.secondary, THEME.text.tertiary, THEME.text.accent]
              return (
                <motion.div key={item.title} variants={itemVariants} className="relative group">
                  <div className={cardStyles.alt}>
                    <Icon className={`w-8 h-8 mb-4 ${colors[index]}`} />
                    <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PLATFORM FEATURES SECTION ===== */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Platform </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Features</span>
              </h2>
              <p className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>
                Everything you need to organize, compete, and grow as a debater
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon
                const gradients = [
                  `from-${THEME.primary}-500 to-${THEME.secondary}-500`,
                  `from-${THEME.secondary}-500 to-${THEME.tertiary}-500`,
                  `from-${THEME.tertiary}-500 to-${THEME.primary}-500`,
                  `from-${THEME.accent}-500 to-${THEME.secondary}-500`,
                ]
                return (
                  <motion.div key={feature.title} variants={itemVariants} className="relative h-full group">
                    <div className={cardStyles.base}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                          <p className="text-foreground/70">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MY CONTRIBUTIONS SECTION ===== */}
      <section className={`py-32 px-4 bg-gradient-to-b ${THEME.gradients.sectionAlt} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">My </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Role</span>
              </h2>
              <p className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>Founder and lead developer</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {myContributions.map((contribution, index) => {
                const Icon = contribution.icon
                const gradients = [
                  `from-${THEME.primary}-400 to-${THEME.secondary}-400`,
                  `from-${THEME.secondary}-400 to-${THEME.tertiary}-400`,
                  `from-${THEME.tertiary}-400 to-${THEME.primary}-400`,
                ]
                return (
                  <motion.div key={contribution.title} variants={itemVariants} className="relative h-full group">
                    <div className={cardStyles.alt}>
                      <div className="mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{contribution.title}</h3>
                      <ul className="space-y-2">
                        {contribution.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                            <ChevronRight className={`w-4 h-4 ${THEME.text.primary} mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TECHNICAL SECTION ===== */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Tech Stack</span>
              </h2>
            </motion.div>

            <motion.div variants={childVariants} className="relative mb-16">
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${THEME.gradients.glow} blur-3xl`}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className={`relative ${THEME.bg.cardAlt} ${THEME.borders.secondary} border p-8 md:p-12`}>
                <div className="grid md:grid-cols-3 gap-8">
                  {techStack.map((item, index) => {
                    const gradients = [THEME.gradients.text, `from-${THEME.secondary}-400 to-${THEME.primary}-400`, `from-${THEME.tertiary}-400 to-${THEME.primary}-400`]
                    return (
                      <div key={item.title} className="text-center">
                        <div className={`text-2xl sm:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradients[index]} mb-4`}>
                          {item.title}
                        </div>
                        <p className="text-sm text-foreground/70">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={`py-32 px-4 bg-gradient-to-b ${THEME.gradients.sectionAlt}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewport} className="text-center">
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-8">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Try It Out</span>
            </motion.h2>

            <motion.p variants={childVariants} className={`text-lg ${THEME.text.muted} max-w-2xl mx-auto mb-12`}>
              Find a club near you, or start one. The platform is live.
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href={PROJECT_LINKS.superDebate} target="_blank" rel="noopener noreferrer">
                <button className={buttonStyles.primary}>
                  <ExternalLink className="w-5 h-5" />
                  <span>Visit SuperDebate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/work">
                <button className={buttonStyles.secondary}>View More Projects</button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FLOATING ELEMENTS ===== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[Flame, Mic2, Trophy, Scale, MessageSquare, Swords].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            animate={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            transition={{ duration: Math.random() * 40 + 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            <Icon className={`w-6 h-6 ${THEME.text.primary}/5`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
