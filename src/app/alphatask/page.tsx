'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  CheckSquare, Brain, Calendar, Heart, Target, Sparkles,
  ArrowRight, ChevronRight, Layers, Zap, BarChart3,
  Smartphone, Cloud, Lock, Workflow, LineChart
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import {
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  pageHeaderVariants,
  viewportOnce,
} from '@/lib/animation-config'

// =============================================================================
// STYLE CONFIG - Amber/Orange theme for productivity & energy
// =============================================================================
const THEME = {
  // Primary brand colors
  primary: 'amber',
  secondary: 'orange',
  tertiary: 'yellow',
  accent: 'rose',

  // Text colors
  text: {
    primary: 'text-amber-400',
    secondary: 'text-orange-400',
    tertiary: 'text-yellow-400',
    accent: 'text-rose-400',
    muted: 'text-foreground/70',
  },

  // Gradient definitions
  gradients: {
    primary: 'from-amber-500 to-orange-600',
    text: 'from-amber-400 via-orange-500 to-yellow-400',
    hero: 'from-amber-950/20 via-background to-orange-950/20',
    section: 'from-amber-500/5 via-transparent to-orange-500/5',
    sectionAlt: 'from-background via-amber-950/10 to-background',
    glow: 'from-amber-600/10 via-orange-600/10 to-yellow-600/10',
  },

  // Border colors
  borders: {
    primary: 'border-amber-500/30',
    secondary: 'border-amber-500/20',
    hover: 'hover:border-amber-500/30',
  },

  // Background colors
  bg: {
    primary: 'bg-amber-500/10',
    hover: 'hover:bg-amber-500/10',
    card: 'bg-background/80 backdrop-blur-xl',
    cardAlt: 'bg-background/60 backdrop-blur-xl',
  },

  // Orb colors for animated backgrounds
  orbs: {
    primary: 'bg-amber-600/20',
    secondary: 'bg-orange-600/20',
    tertiary: 'bg-yellow-600/10',
  },
} as const

// Helper to generate consistent button styles
const buttonStyles = {
  primary: `px-10 py-5 bg-gradient-to-r ${THEME.gradients.primary} text-primary-foreground text-lg font-semibold flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200 rounded-xl`,
  secondary: `px-10 py-5 ${THEME.borders.primary} border ${THEME.text.primary} text-lg font-semibold ${THEME.bg.hover} hover:border-amber-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 rounded-xl`,
}

// Helper to generate consistent card styles
const cardStyles = {
  base: `relative ${THEME.bg.card} border border-border rounded-2xl p-8 h-full ${THEME.borders.hover} transition-all duration-300`,
  alt: `relative ${THEME.bg.cardAlt} border border-border rounded-2xl p-8 h-full ${THEME.borders.hover} transition-all duration-300`,
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default function AlphaTaskPage() {
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
  const projectStats = [
    { value: '1', label: 'Unified Dashboard', color: THEME.text.primary },
    { value: '5+', label: 'Integrated Systems', color: THEME.text.secondary },
    { value: '100%', label: 'AI-Ready Data', color: THEME.text.tertiary },
    { value: '0', label: 'Context Switching', color: THEME.text.accent }
  ]

  const coreModules = [
    {
      icon: CheckSquare,
      title: 'Tasks',
      description: 'Hierarchical task management with contexts, projects, and intelligent prioritization.',
    },
    {
      icon: Calendar,
      title: 'Journal',
      description: 'Daily reflections, wins, and insights captured in a structured, searchable format.',
    },
    {
      icon: Heart,
      title: 'Wellness',
      description: 'Track sleep, energy, mood, and habits. Correlate wellness with productivity.',
    }
  ]

  const platformFeatures = [
    {
      title: "Task Hierarchy",
      description: "Projects, areas, contexts, and tags. GTD-inspired organization that actually works for complex lives.",
      icon: Layers,
    },
    {
      title: "Daily Reviews",
      description: "Structured morning and evening routines. Capture what worked, what didn't, and what's next.",
      icon: Target,
    },
    {
      title: "Wellness Tracking",
      description: "Sleep quality, energy levels, mood patterns. See how your body affects your productivity.",
      icon: Heart,
    },
    {
      title: "AI Integration",
      description: "Data structured for AI consumption. Ask questions about your patterns, get insights, plan better.",
      icon: Brain,
    }
  ]

  const painPoints = [
    'Notion is powerful but fragmented—too many clicks to see the full picture',
    'Task apps don\'t connect to journals, wellness, or life context',
    'Moving data between apps breaks the flow and loses insights',
    'No single dashboard shows how your whole life is performing',
  ]

  const solutions = [
    'One unified interface for tasks, journal, wellness, and goals',
    'Data structured from day one for AI analysis and queries',
    'Seamless context—see how sleep affects productivity',
    'Your life\'s operating system, not another app in the stack',
  ]

  const myContributions = [
    {
      title: 'System Architecture',
      items: ['Designed the unified data model', 'Built task hierarchy system', 'Created wellness correlation engine', 'Structured data for AI consumption'],
      icon: Workflow,
    },
    {
      title: 'Core Development',
      items: ['Built the full-stack platform', 'Implemented real-time sync', 'Created mobile-first interface', 'Developed analytics dashboard'],
      icon: Zap,
    },
    {
      title: 'Personal Use',
      items: ['Daily driver for 6+ months', 'Iterated based on real usage', 'Refined workflows continuously', 'Documented patterns and insights'],
      icon: Target,
    }
  ]

  const techStack = [
    { title: 'Unified Data Model', description: 'Tasks, journal, wellness—all interconnected and queryable' },
    { title: 'AI-First Architecture', description: 'Structured for natural language queries and pattern analysis' },
    { title: 'Mobile-Native', description: 'Capture anywhere, review everywhere, sync instantly' },
  ]

  const visionFeatures = [
    { icon: Smartphone, title: 'Capture Anywhere', description: 'Quick entry from any device, any context' },
    { icon: Cloud, title: 'Always Synced', description: 'Real-time sync across all your devices' },
    { icon: Lock, title: 'Your Data', description: 'Private, encrypted, under your control' },
    { icon: LineChart, title: 'Deep Insights', description: 'AI-powered analysis of your patterns' },
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
              <Sparkles className={`w-5 h-5 ${THEME.text.primary}`} />
              <span className={`text-sm font-mono ${THEME.text.primary}`}>PERSONAL PROJECT • CREATOR</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={childVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            >
              <span className="text-foreground">The Operating</span>
              <br />
              <span className={`italic text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>
                System of My Life
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mx-auto mb-4 font-medium"
            >
              Tasks. Journal. Wellness. All unified.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className={`text-lg ${THEME.text.muted} max-w-2xl mx-auto mb-10`}
            >
              Built because existing tools couldn&apos;t keep up. AlphaTask is a personal
              productivity system designed for AI integration from day one.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button
                className={buttonStyles.primary}
                onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Target className="w-5 h-5" />
                <span>See the Vision</span>
              </button>

              <button
                className={buttonStyles.secondary}
                onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Why I Built This</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {projectStats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className={THEME.text.muted}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== CORE MODULES SECTION ===== */}
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
            viewport={viewportOnce}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {coreModules.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} variants={itemVariants} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={cardStyles.base}>
                      <div className={`w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-colors`}>
                        <Icon className={`w-7 h-7 ${THEME.text.primary}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Vision statement */}
            <motion.div variants={childVariants} className="mt-16 text-center">
              <p className="text-xl text-foreground/50 italic max-w-2xl mx-auto">
                &ldquo;Not another app. An operating system for intentional living.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY I BUILT THIS SECTION ===== */}
      <section id="why" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Why I Built </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>AlphaTask</span>
            </motion.h2>
            <motion.p variants={childVariants} className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>
              The frustration with existing tools became the motivation
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Problem Card */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`${THEME.bg.card} border border-red-500/20 rounded-2xl p-8 h-full`}>
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Frustration</h3>
                <ul className="space-y-3 text-foreground/70">
                  {painPoints.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`${THEME.bg.card} border border-green-500/20 rounded-2xl p-8 h-full`}>
                <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
                <ul className="space-y-3 text-foreground/70">
                  {solutions.map((item, i) => (
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

      {/* ===== PLATFORM FEATURES SECTION ===== */}
      <section className={`py-32 px-4 relative overflow-hidden bg-gradient-to-b ${THEME.gradients.sectionAlt}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Core </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Features</span>
              </h2>
              <p className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>
                Everything interconnected, nothing siloed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon
                const gradients = [
                  'from-amber-500 to-orange-500',
                  'from-orange-500 to-yellow-500',
                  'from-yellow-500 to-amber-500',
                  'from-rose-500 to-orange-500',
                ]
                return (
                  <motion.div key={feature.title} variants={itemVariants} className="relative h-full group">
                    <div className={cardStyles.base}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Built By </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Doing</span>
              </h2>
              <p className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>
                Designed, developed, and used daily by me
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {myContributions.map((contribution, index) => {
                const Icon = contribution.icon
                const gradients = [
                  'from-amber-400 to-orange-400',
                  'from-orange-400 to-yellow-400',
                  'from-yellow-400 to-amber-400',
                ]
                return (
                  <motion.div key={contribution.title} variants={itemVariants} className="relative h-full group">
                    <div className={cardStyles.alt}>
                      <div className="mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center`}>
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
      <section className={`py-32 px-4 bg-gradient-to-b ${THEME.gradients.sectionAlt} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Technical </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Philosophy</span>
              </h2>
              <p className={`text-xl ${THEME.text.muted} max-w-3xl mx-auto`}>Built for the future of personal AI assistants</p>
            </motion.div>

            <motion.div variants={childVariants} className="relative mb-16">
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${THEME.gradients.glow} rounded-2xl blur-3xl`}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className={`relative ${THEME.bg.cardAlt} ${THEME.borders.secondary} border rounded-2xl p-8 md:p-12`}>
                <div className="grid md:grid-cols-3 gap-8">
                  {techStack.map((item, index) => {
                    const gradients = [THEME.gradients.text, 'from-orange-400 to-amber-400', 'from-yellow-400 to-amber-400']
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

            {/* Vision Features */}
            <motion.div
              variants={sectionWithChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-4 gap-6"
            >
              {visionFeatures.map((item, index) => {
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
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="vision" className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionWithChildrenVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-foreground">The Vision: </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.gradients.text}`}>Life as a System</span>
            </motion.h2>

            <motion.div variants={childVariants} className={`space-y-6 text-lg ${THEME.text.muted} max-w-3xl mx-auto mb-12`}>
              <p>
                We live in an age of infinite tools and zero integration. Your tasks live in one app,
                your journal in another, your health data scattered across devices. <strong className={THEME.text.primary}>Context is lost. Insights are impossible.</strong>
              </p>
              <p>
                AlphaTask unifies everything into a single, coherent system. When you ask your AI
                &ldquo;Why was last week so productive?&rdquo; it can see your tasks completed, your sleep quality,
                your journal entries, your energy levels. <strong className="text-foreground">The answer emerges from the whole picture.</strong>
              </p>
              <p>
                This isn&apos;t just task management. It&apos;s the foundation for <strong className={THEME.text.primary}>truly personal AI assistance</strong>—built
                on your real data, structured for understanding.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className={buttonStyles.primary}>
                  <BarChart3 className="w-6 h-6" />
                  <span>Interested? Let&apos;s Talk</span>
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
        {[CheckSquare, Brain, Calendar, Heart, Target, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            animate={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            transition={{ duration: Math.random() * 40 + 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            <Icon className={`w-6 h-6 text-amber-400/5`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
