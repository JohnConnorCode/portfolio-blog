'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, DollarSign, Users, Brain, Rocket, Shield, Search,
  MessageCircle, BookOpen, Globe, Target, TrendingUp,
  ArrowRight, ChevronRight, ExternalLink, Database,
  Code2, Layers, Award, BarChart3, FileCheck, Sparkles, Star, GitBranch
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, ANIMATION_DELAY, ANIMATION_DURATION } from '@/lib/animation-config'

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">PORTFOLIO PROJECT • FOUNDER</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]"
          >
            <span className="text-white">Build Your </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Team
            </motion.span>
            <br />
            <span className="text-white">Get </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Funding
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
            className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto mb-12"
          >
            A modular platform for builder profiles, funding programs, evaluation engines, and intelligent matching.
            Systems-level innovation for Web3 ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger * 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
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
                <span className="relative z-10">Visit Platform</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
              </motion.button>
            </Link>

            <motion.button
              className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgb(6 182 212 / 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Impact
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {projectStats.map((stat, index) => (
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
      </motion.section>

      {/* Why I Built Accelerate Section */}
      <section id="impact" className="py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5"
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
              <span className="text-white">The Vision Behind </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Accelerate</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.stagger }}
              className="text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Growing Web3 ecosystems through intelligent connections
            </motion.p>
          </motion.div>

          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h3>
                <ul className="space-y-3 text-gray-100">
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

            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
                <ul className="space-y-3 text-gray-100">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Platform </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Features</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Connecting the Web3 ecosystem through intelligent founder-builder-funder relationships
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 text-cyan-400 mb-3" />
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

      {/* My Role & Contributions Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-cyan-950/5 to-background relative overflow-hidden">
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
              <span className="text-white">Building </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">The Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Connecting founders, builders, and funders across Web3
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {myContributions.map((contribution, index) => {
              const Icon = contribution.icon
              return (
                <motion.div
                  key={contribution.title}
                  variants={fadeInUp}
                  custom={index}
                >
                  <motion.div
                    className="relative h-full group"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{contribution.title}</h3>
                      <ul className="space-y-2">
                        {contribution.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-100"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
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

      {/* Technical Deep Dive */}
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
              <span className="text-white">Technical </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Implementation</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Modern technology stack enabling intelligent ecosystem connections
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
              className="absolute -inset-4 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10 rounded-2xl blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative bg-background/60 backdrop-blur-2xl border border-green-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-green-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Modern Web Stack
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    React, TypeScript, and real-time data synchronization
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-emerald-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    Smart Connections
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    Intelligent matching between founders, builders, and funders
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-mono font-bold text-lime-400 mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Quality Assurance
                  </motion.div>
                  <p className="text-sm text-gray-100">
                    Comprehensive testing and deployment automation
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
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { metric: 'Projects', value: '607+', period: 'Connected' },
              { metric: 'Programs', value: '433+', period: 'Funding sources' },
              { metric: 'Resources', value: '363+', period: 'Curated tools' },
              { metric: 'Success Rate', value: '95%', period: 'Match quality' }
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-xl p-6 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <motion.div
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
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

      {/* Vision & Future */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-blue-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.normal }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal }}
            >
              <span className="text-white">The Future: </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scaling Impact</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.stagger }}
              className="space-y-6 text-lg text-gray-100 max-w-3xl mx-auto mb-12"
            >
              <p>
                Accelerate is not just a Web3 tool—it&apos;s a <strong className="text-cyan-400">systems-level innovation</strong> for
                how ecosystems fund and support builders. Builder profiles, project objects, program metadata,
                evaluation engines, web scraping, and intelligent matching—all in one modular platform.
              </p>
              <p>
                Traditional grant systems reward promises over delivery. Accelerate flips that.
                <strong className="text-white"> Milestone-based funding. Transparent evaluation. Aligned incentives.</strong>
              </p>
              <p>
                With 607+ projects connected and 433+ funding programs integrated, we&apos;re building the infrastructure
                that creates <strong className="text-cyan-400">consistent, high-signal due diligence</strong> at scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.normal, delay: ANIMATION_DELAY.section }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
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
                  <Zap className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Visit Live Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>
              </Link>

              <Link href="/work">
                <motion.button
                  className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: 'rgb(6 182 212 / 0.5)' }}
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