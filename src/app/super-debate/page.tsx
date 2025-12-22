'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Users, MessageSquare, ArrowRight, Globe, ChevronRight, ExternalLink, Calendar, MapPin, UserCheck, Brain, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, ANIMATION_DELAY, ANIMATION_DURATION } from '@/lib/animation-config'

export default function SuperDebatePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const projectHighlights = [
    {
      title: "Founded 2024",
      description: "Built from my national debate champion background to democratize critical thinking",
      icon: Trophy,
    },
    {
      title: "Bali Workshops",
      description: "Currently running workshops and events in Bali, building a thriving debate community",
      icon: MapPin,
    },
    {
      title: "Chicago Flagship Event",
      description: "Planning first major event with 1871, Chicago's biggest incubator and coworking space",
      icon: Calendar,
    },
    {
      title: "Global Vision",
      description: "Expanding from online platform to in-person chapters in major cities worldwide",
      icon: Globe,
    }
  ]

  const platformFeatures = [
    {
      title: "Structured Debates",
      description: "One modular format that adapts to any topic, skill level, or community need",
      icon: MessageSquare,
    },
    {
      title: "Tournament Platform",
      description: "Complete tournament management from registration to final rankings",
      icon: Trophy,
    },
    {
      title: "AI Training Tools",
      description: "Practice debates with AI opponents and receive instant feedback",
      icon: Brain,
    },
    {
      title: "Judge Feedback System",
      description: "Learn from expert judges through our online course platform",
      icon: UserCheck,
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: ANIMATION_DURATION.normal }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-primary/30 bg-primary/5"
            >
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-jost text-primary">PORTFOLIO PROJECT • FOUNDER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight overflow-visible text-foreground font-jost"
              style={{ lineHeight: 1.1 }}
            >
              <span className="text-foreground">Super </span>
              <span className="text-primary">Debate</span>
              <span className="text-foreground"> Club</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-tight overflow-visible text-primary font-jost"
              style={{ lineHeight: 1.2 }}
            >
              Make Arguing Fun Again
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger * 2 }}
              className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 text-foreground/70 font-jost"
            >
              The first large-scale adult debate ecosystem since ancient times.
              Local clubs, national tournaments, AI-powered judging. <strong className="text-primary">Reinventing civic discourse.</strong>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 text-lg font-semibold rounded-xl flex items-center gap-3 group bg-primary text-primary-foreground font-jost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                className="px-10 py-5 text-lg font-semibold rounded-xl transition-colors border border-primary/30 text-primary bg-transparent hover:bg-primary/5 font-jost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                How It Works
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 'Bali', label: 'Current Location' },
                { value: 'Chicago', label: '2025 Flagship' },
                { value: '1871', label: 'Partner Space' },
                { value: 'Global', label: 'Vision' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: ANIMATION_DURATION.normal }}
                >
                  <motion.div className="text-3xl font-bold text-primary font-jost">
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-foreground/60 font-jost">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* My Vision Section */}
      <section id="vision" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal }}
            >
              Why I Built
              <span className="text-primary"> SuperDebate</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
              className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost"
            >
              From running workshops in Bali to planning our Chicago flagship event with 1871,
              we&apos;re building a global movement to make critical thinking accessible to everyone
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {projectHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  variants={fadeInUp}
                  custom={index}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card border border-border hover:border-primary/30 font-jost">
                      {/* Corner accents - visible on hover */}
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
                          <h3 className="text-xl font-bold mb-2 text-foreground font-jost">{highlight.title}</h3>
                          <p className="text-foreground/70 font-jost">{highlight.description}</p>
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

      {/* Platform Features Section */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              Platform
              <span className="text-primary"> Features</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              Combining technology with debate expertise to create the ultimate training platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  custom={index}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card border border-border hover:border-primary/30 font-jost">
                      {/* Corner accents */}
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

      {/* Technical Implementation Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.03] to-background">
        {/* Subtle tech grid background */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(hsl(var(--foreground)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              Technical
              <span className="text-primary"> Implementation</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              Built with modern technologies for scale and performance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="relative mb-16"
          >
            <div className="absolute -inset-4 rounded-2xl blur-3xl opacity-20 bg-[radial-gradient(ellipse,hsl(var(--primary)/0.2)_0%,transparent_70%)]" />

            <div className="relative rounded-2xl p-8 md:p-12 bg-card/60 backdrop-blur-xl border border-primary/20 font-jost">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-mono font-bold mb-4 text-primary font-jost">
                    Next.js + TypeScript
                  </div>
                  <p className="text-sm text-foreground/70 font-jost">
                    Modern React framework with full-stack capabilities and edge functions
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-mono font-bold mb-4 text-primary font-jost">
                    AI Integration
                  </div>
                  <p className="text-sm text-foreground/70 font-jost">
                    Custom AI training tools and automated debate analysis systems
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-mono font-bold mb-4 text-primary font-jost">
                    Scalable Architecture
                  </div>
                  <p className="text-sm text-foreground/70 font-jost">
                    Built to handle tournaments with thousands of concurrent users
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Current Initiatives */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            className="grid md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { metric: 'Workshops', value: 'Active', period: 'In Bali' },
              { metric: 'Chicago Event', value: '2025', period: 'With 1871' },
              { metric: 'Platform', value: 'Live', period: 'superdebate.org' },
              { metric: 'Vision', value: 'Global', period: 'City Chapters' }
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl p-6 text-center transition-all duration-300 bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 font-jost"
              >
                <div className="text-2xl font-bold text-primary font-jost">
                  {item.value}
                </div>
                <div className="text-sm font-semibold mt-2 text-foreground font-jost">{item.metric}</div>
                <div className="text-xs mt-1 text-foreground/60 font-jost">{item.period}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Role & Contributions Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground font-jost">
              My Role as
              <span className="text-primary"> Founder & Builder</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground/70 font-jost">
              From vision to execution, leading every aspect of the platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Product Strategy',
                items: [
                  'Designed the modular debate format system',
                  'Created AI training methodology',
                  'Built community engagement models',
                  'Developed monetization strategy'
                ],
                icon: Brain,
              },
              {
                title: 'Technical Leadership',
                items: [
                  'Architected the full-stack platform',
                  'Implemented AI debate analysis',
                  'Built real-time tournament system',
                  'Optimized for scale and performance'
                ],
                icon: TrendingUp,
              },
              {
                title: 'Community Building',
                items: [
                  'Running workshops in Bali',
                  'Planning Chicago flagship with 1871',
                  'Building global city chapters',
                  'Creating educational content'
                ],
                icon: Users,
              }
            ].map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.title}
                  variants={fadeInUp}
                  custom={index}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative rounded-2xl p-8 h-full transition-all duration-300 bg-card/60 backdrop-blur-xl border border-border hover:border-primary/30 font-jost">
                      {/* Corner accents */}
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
                      <h3 className="text-xl font-bold mb-4 text-foreground font-jost">{role.title}</h3>
                      <ul className="space-y-2">
                        {role.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-foreground/70 font-jost"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                            <span>{item}</span>
                          </motion.li>
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

      {/* Vision Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-foreground font-jost"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal }}
            >
              The Future:
              <span className="text-primary"> Scaling Impact</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.stagger }}
              className="space-y-6 text-lg max-w-3xl mx-auto mb-12 text-foreground/70 font-jost"
            >
              <p>
                SuperDebate is <strong className="text-primary">one of the most original civic ventures</strong> launched
                in the US in the last decade. From Tuesday-night meetups to UFC-level championship events—a sport-like
                ecosystem that teaches listening, argumentation, reasoning, and intellectual humility.
              </p>
              <p>
                Built on a conviction that <strong className="text-foreground">growth requires confrontation</strong>. Creates rooms
                where people risk themselves in public, test their ideas against opposition, and leave sharper for it.
              </p>
              <p>
                The strategic aim: create a global, positive alternative to online outrage.
                <strong className="text-primary"> Restore civic integrity. Rebuild the world&apos;s capacity for reasoned discourse.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.section }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden bg-primary text-primary-foreground font-jost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trophy className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Visit Live Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>
              </Link>

              <Link href="/work">
                <motion.button
                  className="px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 border border-primary/30 text-primary bg-transparent hover:bg-primary/5 font-jost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
