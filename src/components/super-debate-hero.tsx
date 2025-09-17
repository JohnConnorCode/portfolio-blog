'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Shield, Brain, Users, MessageSquare, Zap, ArrowRight, Scale } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function SuperDebateHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  const features = [
    {
      icon: Trophy,
      title: "Competitive Debates",
      description: "4 unique formats from casual to championship"
    },
    {
      icon: Brain,
      title: "AI Training Arena",
      description: "Train LLMs through structured argumentation"
    },
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "Built-in fact-checking and source requirements"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Democratic moderation and reputation systems"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-background via-purple-950/10 to-background">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Purple glow orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
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
      </div>

      <motion.div
        style={{ opacity, scale }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">SUPERDEBATE.ORG</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Make </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Arguing Fun
            </span>
            <span className="text-foreground"> Again</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The ultimate platform for structured debate, intellectual competition, and collaborative truth-seeking
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Enter the Arena</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/super-debate">
              <motion.button
                className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />

                  <div className="relative bg-background/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 h-full">
                    <Icon className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Debate Formats Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-2xl blur-3xl" />

          <div className="relative bg-background/60 backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold">4 Unique Debate Formats</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Quick Match</h4>
                  <p className="text-muted-foreground">5-minute lightning rounds for rapid-fire exchanges</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Standard Debate</h4>
                  <p className="text-muted-foreground">Classic format with opening statements, rebuttals, and closings</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Team Battles</h4>
                  <p className="text-muted-foreground">Collaborate with allies in structured team debates</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Championship Mode</h4>
                  <p className="text-muted-foreground">Tournament-style competition with rankings and prizes</p>
                </div>
              </div>
            </div>

            {/* AI Training Highlight */}
            <motion.div
              className="mt-10 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-purple-400" />
                <h4 className="text-xl font-bold">Train Next-Gen AI</h4>
              </div>
              <p className="text-muted-foreground">
                Your debates help train large language models to reason better, argue more effectively, and understand nuanced perspectives. Every argument contributes to making AI more thoughtful and balanced.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join the intellectual arena where ideas compete and truth emerges
          </p>
          <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Scale className="w-5 h-5" />
              <span>Start Debating Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating debate icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          >
            <Icon className="w-8 h-8 text-purple-400/10" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}