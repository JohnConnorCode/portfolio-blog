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
  viewportOnce,
} from '@/lib/animation-config'
import { PROJECT_LINKS } from '@/lib/constants'

export default function SuperDebatePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  const projectStats = [
    { value: '15+', label: 'Cities Active', color: 'text-orange-400' },
    { value: '32', label: 'Championship Teams', color: 'text-amber-400' },
    { value: '1000+', label: 'Community Members', color: 'text-red-400' },
    { value: '100%', label: 'Passion-Driven', color: 'text-yellow-400' }
  ]

  const platformFeatures = [
    {
      title: "Adult Debate Clubs",
      description: "The only platform built specifically for grown-ups who want to sharpen their minds through structured discourse",
      icon: Users,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Live Events",
      description: "From intimate club nights to championship tournaments. Real people, real debates, real growth.",
      icon: Calendar,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Global Community",
      description: "Connect with debaters worldwide. Organize, compete, or judge from anywhere",
      icon: Globe,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Tournament Platform",
      description: "Complete tournament management from registration through final rankings and NFT trophies",
      icon: Trophy,
      gradient: "from-yellow-500 to-amber-500"
    }
  ]

  const myContributions = [
    {
      title: 'Product Vision',
      items: [
        'Designed the debate format system',
        'Created the tournament structure',
        'Built community engagement models',
        'Developed the championship concept'
      ],
      icon: Brain,
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'Platform Development',
      items: [
        'Architected the full-stack platform',
        'Built real-time tournament system',
        'Integrated Solana for NFT trophies',
        'Designed peer judging system'
      ],
      icon: Zap,
      color: 'from-amber-400 to-orange-400'
    },
    {
      title: 'Community Building',
      items: [
        'Organizing NYC events',
        'Planning Infinita Championship',
        'Building global chapter network',
        'Recruiting ambassadors'
      ],
      icon: Users,
      color: 'from-red-400 to-pink-400'
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, scale: scaleProgress }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-background to-red-950/20" />
          <motion.div
            className="absolute inset-0 bg-grid-pattern"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [-50, 50, -50],
              y: [-30, 30, -30],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [50, -50, 50],
              y: [30, -30, 30],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={pageHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 bg-orange-500/10 mb-8"
            >
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-mono text-orange-400">PORTFOLIO PROJECT • FOUNDER</span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-400">
                Super
              </span>
              <span className="text-foreground">Debate</span>
            </motion.h1>

            <motion.div
              variants={childVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                Bring Debate Back to Life
              </span>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12"
            >
              The only platform for adult debate clubs. Local meetups, global championships,
              and a community dedicated to <strong className="text-orange-400">the lost art of civil discourse</strong>.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href={PROJECT_LINKS.superDebate} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-primary-foreground text-lg font-semibold flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200">
                  <span className="relative z-10">Visit Platform</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                </button>
              </Link>

              <button
                className="px-10 py-5 border border-orange-500/30 text-orange-400 text-lg font-semibold hover:bg-orange-500/10 hover:border-orange-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
                onClick={() => {
                  document.getElementById('championship')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Infinita Championship
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
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What SuperDebate Is - Organize/Compete/Judge */}
      <section className="py-24 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-red-500/5"
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
              {[
                {
                  icon: Sparkles,
                  title: 'Organize',
                  description: 'Start a debate club in your city. We provide the format, tools, and community.',
                  color: 'orange'
                },
                {
                  icon: Swords,
                  title: 'Compete',
                  description: 'Join tournaments locally or globally. Track rankings. Find your voice.',
                  color: 'red'
                },
                {
                  icon: Scale,
                  title: 'Judge',
                  description: 'Shape the discourse. Our peer judging system rewards fair, thoughtful evaluation.',
                  color: 'amber'
                }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative h-full p-8 border border-border bg-background/80 backdrop-blur-xl group-hover:border-orange-500/30 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-colors">
                        <Icon className="w-7 h-7 text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Vision statement */}
            <motion.div
              variants={childVariants}
              className="mt-16 text-center"
            >
              <p className="text-xl text-foreground/50 italic max-w-2xl mx-auto">
                &ldquo;Restoring the agora, where citizens gather to challenge ideas and sharpen thinking.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">The Vision Behind </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">SuperDebate</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Building a new intellectual sport for the 21st century
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-red-500/20 p-8 h-full">
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Problem</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Public discourse has devolved into tribal shouting matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Adults have no structured way to practice argumentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Debate clubs exist only in schools, not for working professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>The art of persuasion and reasoning is being lost</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-green-500/20 p-8 h-full">
                <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Structured formats that reward listening and reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Local clubs meeting weekly in cities worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Championship events that celebrate intellectual achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Community that values civil discourse over winning at all costs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinita Championship Section */}
      <section id="championship" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-orange-950/10 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 bg-amber-500/10 mb-6"
            >
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-mono text-amber-400">FLAGSHIP EVENT • 2026</span>
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">The </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                Infinita
              </span>
              <span className="text-foreground"> Championship</span>
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-xl max-w-3xl mx-auto text-foreground/70"
            >
              February 18-20, 2026 in Roatán, Honduras. 32 two-person teams compete for glory,
              NFT trophies on Solana, and the title of world&apos;s best debaters.
            </motion.p>
          </motion.div>

          {/* Championship Details Card */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 via-amber-600/10 to-red-600/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative bg-background/60 backdrop-blur-2xl border border-orange-500/20 p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-orange-400" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">When</span>
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Feb 18-20, 2026</div>
                  <div className="text-sm text-foreground/60 mt-1">Three days of competition</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">Where</span>
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Roatán, Honduras</div>
                  <div className="text-sm text-foreground/60 mt-1">Caribbean island paradise</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-orange-400" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">Entry</span>
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">$150/Team</div>
                  <div className="text-sm text-foreground/60 mt-1">$80 individual entry</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Championship Features */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              {
                title: "32 Teams",
                description: "64 competitors from around the world battle through 6 preliminary rounds",
                icon: Users,
                color: 'text-orange-400'
              },
              {
                title: "Single Elimination",
                description: "Top 8 teams advance to knockout rounds. One shot. No second chances.",
                icon: Flame,
                color: 'text-red-400'
              },
              {
                title: "NFT Trophies",
                description: "Winners immortalized on Solana blockchain. Permanent proof of victory.",
                icon: Award,
                color: 'text-amber-400'
              },
              {
                title: "Peer Judging",
                description: "4-criteria system scored by fellow debaters. Fair, transparent, accountable.",
                icon: Scale,
                color: 'text-yellow-400'
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="relative bg-background/60 backdrop-blur-xl border border-border p-6 h-full hover:border-orange-500/30 transition-all duration-300">
                    <Icon className={`w-8 h-8 mb-4 ${item.color}`} />
                    <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Platform </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Features</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Everything you need to organize, compete, and grow as a debater
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {platformFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="relative h-full group"
                  >
                    <div className="relative bg-background/80 backdrop-blur-xl border border-border p-8 h-full hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
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

      {/* My Role & Contributions */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-orange-950/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Building </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">The Movement</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                My role as founder and builder
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {myContributions.map((contribution) => {
                const Icon = contribution.icon
                return (
                  <motion.div
                    key={contribution.title}
                    variants={itemVariants}
                    className="relative h-full group"
                  >
                    <div className="relative bg-background/60 backdrop-blur-xl border border-border p-8 h-full hover:border-orange-500/30 transition-all duration-300">
                      <div className="mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${contribution.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{contribution.title}</h3>
                      <ul className="space-y-2">
                        {contribution.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
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

      {/* Technical Implementation */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={childVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-foreground">Technical </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Implementation</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Modern infrastructure for a new kind of sport
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="relative mb-16">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 via-amber-600/10 to-red-600/10 blur-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-background/60 backdrop-blur-2xl border border-orange-500/20 p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4">
                      Full-Stack Platform
                    </div>
                    <p className="text-sm text-foreground/70">
                      React, TypeScript, real-time tournament management
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">
                      Solana Integration
                    </div>
                    <p className="text-sm text-foreground/70">
                      NFT trophies and on-chain achievement records
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
                      Peer Judging System
                    </div>
                    <p className="text-sm text-foreground/70">
                      4-criteria scoring with accountability mechanics
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-orange-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <motion.h2
              variants={childVariants}
              className="text-4xl sm:text-5xl font-bold mb-8"
            >
              <span className="text-foreground">The Vision: </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-400">
                Restore the Agora
              </span>
            </motion.h2>

            <motion.div
              variants={childVariants}
              className="space-y-6 text-lg text-foreground/70 max-w-3xl mx-auto mb-12"
            >
              <p>
                The ancient agora wasn&apos;t just a marketplace. It was where citizens
                debated, challenged, and governed themselves. <strong className="text-orange-400">We&apos;re bringing it back.</strong>
              </p>
              <p>
                SuperDebate is building a new intellectual sport for the 21st century.
                From Tuesday-night meetups to championship events in paradise, a global
                community dedicated to <strong className="text-foreground">listening, reasoning, and the belief that
                the best ideas should win.</strong>
              </p>
              <p>
                Join us. <strong className="text-orange-400">Bring debate back to life.</strong>
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href={PROJECT_LINKS.superDebate} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-primary-foreground text-lg font-semibold flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200">
                  <Flame className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Join SuperDebate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Link>

              <Link href="/work">
                <button className="px-10 py-5 border border-orange-500/30 text-orange-400 text-lg font-semibold hover:bg-orange-500/10 hover:border-orange-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
                  View More Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[Flame, Mic2, Trophy, Scale, MessageSquare, Swords].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 40 + 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          >
            <Icon className="w-6 h-6 text-orange-400/5" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
