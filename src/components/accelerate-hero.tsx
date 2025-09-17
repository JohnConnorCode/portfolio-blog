'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, DollarSign, Users, BarChart3, ArrowRight, Globe, Target, TrendingUp, Brain, Rocket, Shield, Search, MessageCircle, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function AccelerateHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const stats = [
    { label: 'Projects', value: '607+', icon: Rocket, color: 'text-cyan-400' },
    { label: 'Funding Programs', value: '433+', icon: DollarSign, color: 'text-green-400' },
    { label: 'Resources', value: '363+', icon: BookOpen, color: 'text-purple-400' },
    { label: 'Active Builders', value: '100s', icon: Users, color: 'text-blue-400' }
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "GPT-5 powered recommendations connecting projects with perfect funding, talent, and resources"
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Find grants, accelerators, and funding opportunities with intelligent filtering and deadlines"
    },
    {
      icon: Shield,
      title: "Verified Ecosystem",
      description: "Domain validation and community verification for trusted connections"
    },
    {
      icon: Users,
      title: "Talent Marketplace",
      description: "Connect developers, designers, and marketers with Web3 projects that need them"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-background via-cyan-950/10 to-background">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Cyan glow orbs */}
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">ACCELERATEWITH.US</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Where Web3 </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Builders Accelerate
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The AI-powered Web3 ecosystem platform connecting builders, investors, and resources through intelligent matching and community-driven collaboration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply for Funding</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.button
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Funded Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Live Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />

                  <div className="relative bg-background/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6">
                    <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                    <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Platform Capabilities Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl blur-3xl" />

          <div className="relative bg-background/60 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">The Complete Web3 Ecosystem</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Funding Discovery</h4>
                <p className="text-sm text-muted-foreground">
                  Curated database of grants, accelerators, and VCs with AI-powered matching
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Talent Marketplace</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with verified developers, designers, and marketers for your project
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Project Showcase</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive profiles with metrics, milestones, and community validation
                </p>
              </div>
            </div>

            {/* AI Features Highlight */}
            <div className="border-t border-cyan-500/20 pt-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-cyan-400" />
                <h4 className="text-2xl font-bold">Powered by AI Intelligence</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Smart Recommendations</p>
                    <p className="text-xs text-muted-foreground">Collaborative filtering with neural networks and graph-based matching</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Predictive Analytics</p>
                    <p className="text-xs text-muted-foreground">Success likelihood scores and funding fit analysis</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">AI Chat Advisor</p>
                    <p className="text-xs text-muted-foreground">Strategic guidance for Web3 builders powered by GPT-5</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">Intelligent Matching</p>
                    <p className="text-xs text-muted-foreground">Thompson Sampling for optimal explore/exploit balance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/accelerate">
                <motion.button
                  className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Full Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>
    </section>
  )
}