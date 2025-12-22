'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Users, MessageSquare, ArrowRight, Globe, ChevronRight, ExternalLink, Calendar, MapPin, Flame, Award, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import {
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  pageHeaderVariants,
  viewportOnce,
} from '@/lib/animation-config'

export default function SuperDebatePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const platformFeatures = [
    {
      title: "Adult Debate Clubs",
      description: "The only platform built specifically for grown-ups who want to sharpen their minds through structured discourse",
      icon: Users,
    },
    {
      title: "Live Events",
      description: "From intimate club nights to championship tournaments—real people, real debates, real growth",
      icon: Calendar,
    },
    {
      title: "Global Community",
      description: "Connect with debaters worldwide. Organize, compete, or judge from anywhere",
      icon: Globe,
    },
    {
      title: "Tournament Platform",
      description: "Complete tournament management from registration through final rankings and NFT trophies",
      icon: Trophy,
    }
  ]

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground font-jost"
    >
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(hsl(var(--foreground)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Subtle geometric ornaments */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-[radial-gradient(circle,hsl(var(--primary))_0%,transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-[radial-gradient(circle,hsl(var(--primary))_0%,transparent_70%)]"
            animate={{
              scale: [1, 1.15, 1],
              x: [30, -30, 30],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-primary/30 bg-primary/5"
            >
              <Flame className="w-5 h-5 text-primary" />
              <span className="text-sm font-jost text-primary">STARTUP • FOUNDER</span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight overflow-visible text-foreground font-jost"
              style={{ lineHeight: 1.1 }}
            >
              <span className="text-foreground">Super </span>
              <span className="text-primary">Debate</span>
            </motion.h1>

            <motion.div
              variants={childVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-tight overflow-visible text-primary font-jost"
              style={{ lineHeight: 1.2 }}
            >
              Bring Debate Back to Life
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 text-foreground/70 font-jost"
            >
              The only platform for adult debate clubs. Local meetups, global championships,
              and a community dedicated to <strong className="text-primary">the lost art of civil discourse</strong>.
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 text-lg font-semibold rounded-xl flex items-center gap-3 group bg-primary text-primary-foreground font-jost hover:scale-105 active:scale-95 transition-transform duration-200">
                  <span>Visit Platform</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>

              <button
                className="px-10 py-5 text-lg font-semibold rounded-xl transition-all border border-primary/30 text-primary bg-transparent hover:bg-primary/5 font-jost hover:scale-105 active:scale-95 duration-200"
                onClick={() => {
                  document.getElementById('championship')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Infinita Championship
              </button>
            </motion.div>
          </motion.div>

          {/* What SuperDebate Is */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-24 max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: 'Organize',
                  description: 'Start a debate club in your city. We provide the format, tools, and community.'
                },
                {
                  icon: MessageSquare,
                  title: 'Compete',
                  description: 'Join tournaments locally or globally. Track rankings. Find your voice.'
                },
                {
                  icon: Award,
                  title: 'Judge',
                  description: 'Shape the discourse. Our peer judging system rewards fair, thoughtful evaluation.'
                }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative h-full">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                      <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground font-jost mb-2">{item.title}</h3>
                        <p className="text-sm text-foreground/60 font-jost leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Vision statement */}
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <p className="text-lg text-foreground/50 font-jost italic">
                &ldquo;Restoring the agora—where citizens gather to challenge ideas and sharpen thinking.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Infinita Championship Section */}
      <section id="championship" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-primary/30 bg-primary/5"
            >
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-jost text-primary">FLAGSHIP EVENT</span>
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost"
            >
              The Infinita
              <span className="text-primary"> Championship</span>
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost"
            >
              February 18-20, 2026 in Roatán, Honduras. 32 two-person teams compete for glory,
              NFT trophies on Solana, and the title of world&apos;s best debaters.
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                title: "32 Teams",
                description: "64 competitors from around the world battle through 6 preliminary rounds",
                icon: Users,
              },
              {
                title: "Single Elimination",
                description: "Top 8 teams advance to knockout rounds. One shot. No second chances.",
                icon: Flame,
              },
              {
                title: "NFT Trophies",
                description: "Winners immortalized on Solana blockchain. Permanent proof of victory.",
                icon: Award,
              },
              {
                title: "Peer Judging",
                description: "4-criteria system scored by fellow debaters. Fair, transparent, accountable.",
                icon: MessageSquare,
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-6 h-full transition-all duration-300 bg-card border border-border hover:border-primary/30 font-jost">
                      <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary" />
                      </div>

                      <Icon className="w-8 h-8 mb-4 text-primary" />
                      <h3 className="text-lg font-bold mb-2 text-foreground font-jost">{item.title}</h3>
                      <p className="text-sm text-foreground/70 font-jost">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Championship Details Card */}
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative rounded-2xl p-8 md:p-12 bg-card/60 backdrop-blur-xl border border-primary/20 font-jost">
              <div className="absolute -inset-4 rounded-2xl blur-3xl opacity-20 bg-[radial-gradient(ellipse,hsl(var(--primary)/0.2)_0%,transparent_70%)]" />

              <div className="relative grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">When</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">Feb 18-20, 2026</div>
                  <div className="text-sm text-foreground/60 mt-1">Three days of competition</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">Where</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">Roatán, Honduras</div>
                  <div className="text-sm text-foreground/60 mt-1">Caribbean island paradise</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm uppercase tracking-wider text-foreground/60">Format</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">$150/Team</div>
                  <div className="text-sm text-foreground/60 mt-1">$80 individual entry</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              The
              <span className="text-primary"> Platform</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              Everything you need to organize, compete, and grow as a debater
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8"
          >
            {platformFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card border border-border hover:border-primary/30 font-jost">
                      <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-full h-0.5 bg-primary" />
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary" />
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 mb-3 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground font-jost">{feature.title}</h3>
                          <p className="text-foreground/70 font-jost">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Three Ways to Participate */}
      <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.03] to-background">
        <div
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(hsl(var(--foreground)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              Join the
              <span className="text-primary"> Movement</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              Three ways to be part of the debate renaissance
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Organize',
                description: 'Start a club in your city. We provide the format, platform, and community support.',
                items: [
                  'Access to debate formats',
                  'Tournament management tools',
                  'Marketing materials',
                  'Community of organizers'
                ],
                icon: Sparkles,
              },
              {
                title: 'Debate',
                description: 'Compete locally or globally. Build your skills through structured practice.',
                items: [
                  'Join local clubs',
                  'Enter tournaments',
                  'Track your rankings',
                  'Connect with partners'
                ],
                icon: MessageSquare,
              },
              {
                title: 'Judge',
                description: 'Shape the discourse. Fair judging is the backbone of great debate.',
                items: [
                  'Peer judging system',
                  '4-criteria scoring',
                  'Build reputation',
                  'Earn recognition'
                ],
                icon: Award,
              }
            ].map((role) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.title}
                  variants={itemVariants}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 font-jost">
                      <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-full h-0.5 bg-primary" />
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-primary" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary" />
                      </div>

                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground font-jost">{role.title}</h3>
                      <p className="text-foreground/70 mb-4 font-jost">{role.description}</p>
                      <ul className="space-y-2">
                        {role.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground/70 font-jost"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* NYC Events Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              NYC
              <span className="text-primary"> Events</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              SuperDebate at NeueHouse Madison Square. Where ideas clash in style.
            </motion.p>
          </motion.div>

          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative rounded-2xl p-8 md:p-12 bg-card/60 backdrop-blur-xl border border-primary/20 font-jost">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">NeueHouse Madison Square</h3>
                  <p className="text-foreground/70 mb-6">
                    Our NYC home base. A creative workspace turned battleground for ideas.
                    Regular debate nights, special events, and the energy of Manhattan&apos;s
                    sharpest minds going head-to-head.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
                      Monthly Events
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
                      Premium Venue
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
                      Feb 2026
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-xl p-6 bg-background/50 border border-border">
                    <div className="text-3xl font-bold text-primary">NYC</div>
                    <div className="text-sm text-foreground/60 mt-1">Home Base</div>
                  </div>
                  <div className="rounded-xl p-6 bg-background/50 border border-border">
                    <div className="text-3xl font-bold text-primary">2026</div>
                    <div className="text-sm text-foreground/60 mt-1">Season Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Role Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.03] to-background">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              My Role as
              <span className="text-primary"> Founder</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              Building the infrastructure for a new intellectual sport
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Product Vision',
                items: [
                  'Designed the debate format system',
                  'Created the tournament structure',
                  'Built community engagement models',
                  'Developed the championship concept'
                ],
              },
              {
                title: 'Platform Development',
                items: [
                  'Architected the full-stack platform',
                  'Built real-time tournament system',
                  'Integrated Solana for NFT trophies',
                  'Designed peer judging system'
                ],
              },
              {
                title: 'Community Building',
                items: [
                  'Organizing NYC events',
                  'Planning Infinita Championship',
                  'Building global chapter network',
                  'Recruiting ambassadors'
                ],
              }
            ].map((role) => (
              <motion.div
                key={role.title}
                variants={itemVariants}
              >
                <motion.div
                  className="relative h-full group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 font-jost">
                    <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-foreground font-jost">{role.title}</h3>
                    <ul className="space-y-2">
                      {role.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/70 font-jost"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
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
              className="text-4xl sm:text-5xl font-bold mb-8 text-foreground font-jost"
            >
              The Vision:
              <span className="text-primary"> Restore the Agora</span>
            </motion.h2>

            <motion.div
              variants={childVariants}
              className="space-y-6 text-lg max-w-3xl mx-auto mb-12 text-foreground/70 font-jost"
            >
              <p>
                The ancient agora wasn&apos;t just a marketplace—it was where citizens
                debated, challenged, and governed themselves. <strong className="text-primary">We&apos;re bringing it back.</strong>
              </p>
              <p>
                SuperDebate is building a new intellectual sport for the 21st century.
                From Tuesday-night meetups to championship events in paradise—a global
                community dedicated to <strong className="text-foreground">listening, reasoning, and the belief that
                the best ideas should win.</strong>
              </p>
              <p>
                Join us. <strong className="text-primary">Bring debate back to life.</strong>
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden bg-primary text-primary-foreground font-jost hover:scale-105 active:scale-95 transition-transform duration-200">
                  <Flame className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Join SuperDebate</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Link>

              <Link href="/work">
                <button className="px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-200 border border-primary/30 text-primary bg-transparent hover:bg-primary/5 font-jost hover:scale-105 active:scale-95">
                  View More Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
