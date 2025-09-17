'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, Shield, Brain, Users, MessageSquare, Zap, ArrowRight, Scale, BookOpen, Target, Award, Globe, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function SuperDebatePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 500])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const debateFormats = [
    {
      title: "Quick Match",
      duration: "5 minutes",
      description: "Lightning-fast debates for instant intellectual stimulation",
      features: ["Auto-matching", "Rapid rounds", "Instant feedback"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Standard Debate",
      duration: "20-30 minutes",
      description: "Classic structured debate with full argumentation cycle",
      features: ["Opening statements", "Rebuttals", "Cross-examination", "Closing arguments"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Team Battles",
      duration: "45-60 minutes",
      description: "Collaborate with allies in strategic team debates",
      features: ["2v2 or 3v3 formats", "Team coordination", "Role specialization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Championship Mode",
      duration: "Tournament",
      description: "Compete in bracketed tournaments for ultimate glory",
      features: ["Ranked matches", "Elimination rounds", "Grand prizes", "Public spectating"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: "Training Data Generation",
      description: "Every debate contributes high-quality training data for next-generation language models"
    },
    {
      icon: Target,
      title: "Argument Quality Scoring",
      description: "AI analyzes argument structure, evidence quality, and logical consistency"
    },
    {
      icon: Shield,
      title: "Fact-Checking Integration",
      description: "Real-time verification of claims with cited sources required for evidence"
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description: "Detailed post-debate analysis to improve your argumentation skills"
    }
  ]

  const communityFeatures = [
    {
      title: "Reputation System",
      description: "Build credibility through consistent quality contributions and fair play"
    },
    {
      title: "Democratic Moderation",
      description: "Community-driven content moderation with transparent appeal processes"
    },
    {
      title: "Topic Proposals",
      description: "Suggest and vote on debate topics that matter to you"
    },
    {
      title: "Spectator Mode",
      description: "Watch live debates and learn from top debaters"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-mono text-purple-400">SUPERDEBATE.ORG</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-foreground">Where </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Ideas Compete
              </span>
              <br />
              <span className="text-foreground">and </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
                Truth Wins
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              The revolutionary platform transforming online discourse through structured debate,
              intellectual rigor, and gamified truth-seeking
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Enter the Arena</span>
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
                Explore Features
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
              <div>
                <div className="text-3xl font-bold text-purple-400">4</div>
                <div className="text-sm text-muted-foreground">Debate Formats</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">5+</div>
                <div className="text-sm text-muted-foreground">AI Training Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-muted-foreground">Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-sm text-muted-foreground">Live Debates</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Debate Formats Section */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Battle Format</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From quick intellectual sparring to epic tournament showdowns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {debateFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-full group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${format.color} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity`} />

                  <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{format.title}</h3>
                      <span className={`px-3 py-1 text-sm font-mono rounded-full bg-gradient-to-r ${format.color} text-white`}>
                        {format.duration}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6">{format.description}</p>

                    <div className="space-y-2">
                      {format.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Training Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-purple-950/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Train the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI of Tomorrow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your debates directly contribute to making AI more thoughtful, nuanced, and intellectually rigorous
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
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

          {/* AI Training Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl blur-3xl" />

            <div className="relative bg-background/60 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-8">How Your Debates Help AI</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Structured Arguments</h4>
                  <p className="text-sm text-muted-foreground">
                    Teach AI to construct logical, well-reasoned arguments with proper evidence
                  </p>
                </div>
                <div>
                  <Scale className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Balanced Perspectives</h4>
                  <p className="text-sm text-muted-foreground">
                    Help AI understand multiple viewpoints and nuanced positions on complex topics
                  </p>
                </div>
                <div>
                  <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Citation Standards</h4>
                  <p className="text-sm text-muted-foreground">
                    Train AI to properly source claims and distinguish fact from opinion
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Thriving Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where intellectual curiosity meets respectful discourse
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-background/60 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 h-full"
                  whileHover={{ y: -5, borderColor: 'rgb(34 197 94 / 0.4)' }}
                >
                  <h3 className="text-lg font-bold mb-3 text-green-400">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              The Vision:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Better Discourse for All</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <p>
                SuperDebate isn't just another social platform—it's a movement to elevate online discourse.
                We believe that structured debate, evidence-based reasoning, and intellectual honesty can
                transform how we engage with ideas and each other.
              </p>
              <p>
                By gamifying the pursuit of truth and rewarding intellectual rigor over rhetorical tricks,
                we're creating a space where the best ideas genuinely rise to the top—not just the loudest voices.
              </p>
              <p>
                Every debate on our platform contributes to a larger goal: training AI systems to be better
                reasoners, more balanced thinkers, and more helpful assistants to humanity's quest for knowledge and truth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://superdebate.org" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trophy className="w-6 h-6" />
                  <span>Join SuperDebate Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/">
                <motion.button
                  className="px-10 py-5 border border-purple-500/30 text-purple-400 text-lg font-semibold rounded-xl hover:bg-purple-500/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Portfolio
                </motion.button>
              </Link>
            </div>
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