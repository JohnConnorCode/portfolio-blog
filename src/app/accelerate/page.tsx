'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, DollarSign, Users, Brain, Rocket, Shield,
  TrendingUp, ArrowRight, ChevronRight, ExternalLink,
  Code2
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import {
  pageHeaderVariants,
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  viewportOnce,
} from '@/lib/animation-config'

export default function AcceleratePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])

  const projectStats = [
    { value: '607+', label: 'Projects Connected', color: 'text-cyan-400' },
    { value: '433+', label: 'Funding Programs', color: 'text-blue-400' },
    { value: '363+', label: 'Resources Available', color: 'text-purple-400' },
    { value: '95%', label: 'Match Success Rate', color: 'text-green-400' }
  ]

  const myContributions = [
    {
      title: 'Vision & Strategy',
      items: [
        'Recognized the need for ecosystem-wide founder connections',
        'Designed the intelligent matching system architecture',
        'Created the three-way connection model (founders/builders/funders)',
        'Developed the community-driven growth strategy'
      ],
      icon: Brain,
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Platform Development',
      items: [
        'Built with modern React and real-time capabilities',
        'Implemented smart matching algorithms',
        'Created resource curation and discovery system',
        'Developed progress tracking and analytics'
      ],
      icon: Code2,
      color: 'from-cyan-400 to-blue-400'
    },
    {
      title: 'Ecosystem Building',
      items: [
        'Connected 607+ projects across Web3 ecosystems',
        'Curated 433+ funding programs and opportunities',
        'Built network of 363+ valuable resources',
        'Fostered intelligent connections and ecosystem growth'
      ],
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-400'
    }
  ]

  const platformFeatures = [
    {
      title: "Smart Funding Discovery",
      description: "AI matches projects with perfect-fit grants, VCs, and accelerators from 500+ programs",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Talent Marketplace",
      description: "Connect builders with projects using skill-based matching and gamified profiles",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Project Showcase",
      description: "LinkedIn meets ProductHunt for Web3 - showcase your project to the right audience",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Intelligence Layer",
      description: "GPT-5 powered recommendations with collaborative filtering and predictive analytics",
      icon: Brain,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const impactMetrics = [
    { metric: 'Projects', value: '607+', period: 'Connected' },
    { metric: 'Programs', value: '433+', period: 'Funding sources' },
    { metric: 'Resources', value: '363+', period: 'Curated tools' },
    { metric: 'Success Rate', value: '95%', period: 'Match quality' }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section with Portfolio Focus */}
      <motion.section
        style={{ y: heroY, scale: scaleProgress }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20" />
          <motion.div
            className="absolute inset-0 bg-grid-pattern"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [50, -50, 50],
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
            variants={pageHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8"
            >
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400">PORTFOLIO PROJECT • FOUNDER</span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]"
            >
              <span className="text-foreground">Build Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                Team
              </span>
              <br />
              <span className="text-foreground">Get </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Funding
              </span>
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12"
            >
              A modular platform for builder profiles, funding programs, evaluation engines, and intelligent matching.
              Systems-level innovation for Web3 ecosystems.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-primary-foreground text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200">
                  <span className="relative z-10">Visit Platform</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                </button>
              </Link>

              <button
                className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
                onClick={() => {
                  document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Impact
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

      {/* Why I Built Accelerate Section */}
      <section id="impact" className="py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Accelerate</span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Growing Web3 ecosystems through intelligent connections
            </motion.p>
          </motion.div>

          {/* Problem & Solution */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Web3 founders struggle to find the right team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Funding opportunities are fragmented across ecosystems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Developers and funders lack visibility into quality projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Ecosystem growth happens in isolated silos</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Central hub connecting founders, developers, and funders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Intelligent matching based on skills, interests, and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Curated resources and funding opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Progress tracking and ecosystem growth metrics</span>
                  </li>
                </ul>
              </div>
            </motion.div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Features</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Connecting the Web3 ecosystem through intelligent founder-builder-funder relationships
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
                    <div className="relative bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 text-cyan-400 mb-3" />
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

      {/* My Role & Contributions Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-cyan-950/5 to-background relative overflow-hidden">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">The Ecosystem</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Connecting founders, builders, and funders across Web3
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
                    <div className="relative bg-background/60 backdrop-blur-xl border border-border rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{contribution.title}</h3>
                      <ul className="space-y-2">
                        {contribution.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
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

      {/* Technical Deep Dive */}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Implementation</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Modern technology stack enabling intelligent ecosystem connections
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="relative mb-16">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10 rounded-2xl blur-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-background/60 backdrop-blur-2xl border border-green-500/20 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-green-400 mb-4">
                      Modern Web Stack
                    </div>
                    <p className="text-sm text-foreground/70">
                      React, TypeScript, and real-time data synchronization
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-emerald-400 mb-4">
                      Smart Connections
                    </div>
                    <p className="text-sm text-foreground/70">
                      Intelligent matching between founders, builders, and funders
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-lime-400 mb-4">
                      Quality Assurance
                    </div>
                    <p className="text-sm text-foreground/70">
                      Comprehensive testing and deployment automation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              {impactMetrics.map((item) => (
                <motion.div
                  key={item.metric}
                  variants={itemVariants}
                  className="bg-background/60 backdrop-blur-xl border border-border rounded-xl p-6 text-center hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-2">{item.metric}</div>
                  <div className="text-xs text-foreground/70 mt-1">{item.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Future */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-blue-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-foreground">The Future: </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scaling Impact</span>
            </motion.h2>

            <motion.div
              variants={childVariants}
              className="space-y-6 text-lg text-foreground/70 max-w-3xl mx-auto mb-12"
            >
              <p>
                Accelerate is not just a Web3 tool. It&apos;s a <strong className="text-cyan-400">systems-level innovation</strong> for
                how ecosystems fund and support builders. Builder profiles, project objects, program metadata,
                evaluation engines, web scraping, and intelligent matching. All in one modular platform.
              </p>
              <p>
                Traditional grant systems reward promises over delivery. Accelerate flips that.
                <strong className="text-foreground"> Milestone-based funding. Transparent evaluation. Aligned incentives.</strong>
              </p>
              <p>
                With 607+ projects connected and 433+ funding programs integrated, we&apos;re building the infrastructure
                that creates <strong className="text-cyan-400">consistent, high-signal due diligence</strong> at scale.
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-primary-foreground text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden hover:scale-[1.05] active:scale-[0.95] transition-transform duration-200">
                  <Zap className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Visit Live Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Link>

              <Link href="/work">
                <button className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
                  View More Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[Zap, Brain, Rocket, Shield, Users, DollarSign].map((Icon, i) => (
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
            <Icon className="w-6 h-6 text-cyan-400/5" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
