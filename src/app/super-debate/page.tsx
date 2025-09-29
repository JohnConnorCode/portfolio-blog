'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Users, MessageSquare, Zap, ArrowRight, Globe, ChevronRight, ExternalLink, Mic, Calendar, MapPin, UserCheck, Brain, Star, TrendingUp, Shield } from 'lucide-react'
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
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const projectHighlights = [
    {
      title: "Founded 2024",
      description: "Built from my national debate champion background to democratize critical thinking",
      icon: Trophy,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "1,250+ Users",
      description: "Growing community of debaters rating the platform 4.8/5 stars",
      icon: Star,
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "AI-Enhanced Training",
      description: "Leveraging technology to provide personalized debate coaching at scale",
      icon: Brain,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Global Vision",
      description: "Expanding from online platform to in-person chapters worldwide",
      icon: Globe,
      color: "from-orange-400 to-red-400"
    }
  ]

  const platformFeatures = [
    {
      title: "Structured Debates",
      description: "One modular format that adapts to any topic, skill level, or community need",
      icon: MessageSquare,
      color: "text-cyan-400"
    },
    {
      title: "Tournament Platform",
      description: "Complete tournament management from registration to final rankings",
      icon: Trophy,
      color: "text-purple-400"
    },
    {
      title: "AI Training Tools",
      description: "Practice debates with AI opponents and receive instant feedback",
      icon: Brain,
      color: "text-pink-400"
    },
    {
      title: "Judge Feedback System",
      description: "Learn from expert judges through our online course platform",
      icon: UserCheck,
      color: "text-yellow-400"
    }
  ]

  const meetupFeatures = [
    {
      icon: Mic,
      title: "Live In-Person Debates",
      description: "Face-to-face intellectual combat builds real connections and sharpens thinking"
    },
    {
      icon: Calendar,
      title: "Regular Meetups",
      description: "Weekly or monthly gatherings create consistent community engagement"
    },
    {
      icon: MapPin,
      title: "City Chapters",
      description: "Local organizers build debate communities tailored to their city's culture"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with debate communities worldwide, share best practices"
    }
  ]

  const cultureFeatures = [
    {
      title: "Intellectual Honesty",
      description: "Reward steel-manning opponents and acknowledging strong counterarguments"
    },
    {
      title: "Productive Disagreement",
      description: "Transform conflict into collaborative truth-seeking"
    },
    {
      title: "Skill Development",
      description: "Level up your critical thinking, public speaking, and argumentation"
    },
    {
      title: "Cross-Pollination",
      description: "Bring together diverse perspectives from different backgrounds and industries"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-background to-pink-950/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [50, -50, 50],
              y: [30, -30, 30],
            }}
            transition={{
              duration: 20,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8"
            >
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-mono text-purple-400">PORTFOLIO PROJECT • FOUNDER</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">Super </span>
              <span className="text-purple-400">Debate</span>
              <span className="text-white"> Club</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger * 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-pink-400"
            >
              Make Arguing Fun Again
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
              className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto mb-12"
            >
              The premier platform for structured debates, tournaments, and critical thinking development
              founded to democratize the skills that transformed my life
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                className="px-10 py-5 border border-purple-500/30 text-purple-400 text-lg font-semibold rounded-xl hover:bg-purple-500/10 transition-colors"
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
                { value: '1,250+', label: 'Active Users', color: 'text-purple-400' },
                { value: '4.8/5', label: 'User Rating', color: 'text-pink-400' },
                { value: '2024', label: 'Founded', color: 'text-purple-400' },
                { value: 'Growing', label: 'Community', color: 'text-pink-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    className={`text-3xl font-bold ${stat.color}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* My Vision Section */}
      <section id="vision" className="py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal }}
            >
              Why I Built
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> SuperDebate</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Leveraging my national debate championship experience to democratize critical thinking
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 text-purple-400 mb-3" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                          <p className="text-gray-100">{highlight.description}</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Platform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 text-purple-400 mb-3" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-100">{feature.description}</p>
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
      <section className="py-32 px-4 bg-gradient-to-b from-background via-purple-950/5 to-background relative overflow-hidden">
        {/* Animated tech grid background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
        >
          <div className="absolute inset-0 bg-grid-pattern" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Implementation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-cyan-600/10 rounded-2xl blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative bg-background/60 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-cyan-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Next.js + TypeScript
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    Modern React framework with full-stack capabilities and edge functions
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-purple-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    AI Integration
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    Custom AI training tools and automated debate analysis systems
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-pink-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Scalable Architecture
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    Built to handle tournaments with thousands of concurrent users
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            className="grid md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { metric: 'User Growth', value: '+250%', period: 'Last Quarter' },
              { metric: 'Engagement', value: '4.8/5', period: 'User Rating' },
              { metric: 'Tournaments', value: '50+', period: 'Hosted' },
              { metric: 'AI Training', value: '10K+', period: 'Debates Analyzed' }
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <motion.div
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {item.value}
                </motion.div>
                <div className="text-sm font-semibold text-foreground mt-2">{item.metric}</div>
                <div className="text-xs text-gray-100 mt-1">{item.period}</div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My Role as
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Founder & Builder</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                color: 'from-purple-400 to-pink-400'
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
                color: 'from-cyan-400 to-blue-400'
              },
              {
                title: 'Community Building',
                items: [
                  'Growing to 1,250+ active users',
                  'Launching city chapters',
                  'Creating educational content',
                  'Building partnership network'
                ],
                icon: Users,
                color: 'from-green-400 to-emerald-400'
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
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full hover:border-purple-500/30 transition-all duration-300">
                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{role.title}</h3>
                      <ul className="space-y-2">
                        {role.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-100"
                          >
                            <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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
      <section className="py-32 px-4 bg-gradient-to-b from-background via-purple-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal }}
            >
              The Future:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Scaling Impact</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.stagger }}
              className="space-y-6 text-lg text-gray-100 max-w-3xl mx-auto mb-12"
            >
              <p>
                As a national debate champion turned technologist, I'm uniquely positioned to bridge
                the gap between traditional debate excellence and modern technology platforms.
              </p>
              <p>
                SuperDebate represents my vision for democratizing the transformative power of debate
                the same skills that shaped my analytical thinking, public speaking, and leadership abilities.
              </p>
              <p>
                We're not just building a platform; we're creating a movement that makes critical thinking
                accessible, engaging, and fun for everyone, regardless of their background or experience.
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
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    animate={{
                      x: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  <Trophy className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Visit Live Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>
              </Link>

              <Link href="/work">
                <motion.button
                  className="px-10 py-5 border border-purple-500/30 text-purple-400 text-lg font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: 'rgb(168 85 247 / 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[Trophy, Shield, Brain, Users, MessageSquare, Zap].map((Icon, i) => (
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
            <Icon className="w-6 h-6 text-purple-400/5" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}