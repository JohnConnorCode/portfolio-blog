'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, DollarSign, Users, Brain, Rocket, Shield, Search,
  MessageCircle, BookOpen, Globe, Target, TrendingUp,
  ArrowRight, ChevronRight, ExternalLink, Database,
  Code2, Layers, Award, BarChart3, FileCheck, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function AcceleratePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 500])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const coreFeatures = [
    {
      title: "Funding Discovery & Management",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      features: [
        "Curated database of Web3 grants, accelerators, and VCs",
        "Smart filtering by amount, deadline, category, eligibility",
        "Application tracking with status and deadlines",
        "AI matching with GPT-5 powered recommendations"
      ]
    },
    {
      title: "Project Showcase & Discovery",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Comprehensive project profiles with team and tech stack",
        "Category organization: DeFi, NFT, Infrastructure, Gaming",
        "Growth metrics tracking and milestone monitoring",
        "Domain validation for verified ownership"
      ]
    },
    {
      title: "Talent Marketplace",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "Builder profiles with skills, experience, and portfolio",
        "Skill matching for developers, designers, marketers",
        "Gamified profile optimization (0-100% score)",
        "Bio filtering for meaningful connections"
      ]
    },
    {
      title: "AI-Powered Intelligence",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      features: [
        "Collaborative filtering with matrix factorization",
        "Neural collaborative filtering for recommendations",
        "Thompson Sampling for explore/exploit balance",
        "Predictive insights and success likelihood scores"
      ]
    }
  ]

  const techStack = [
    { category: "Frontend", items: ["React 18 + TypeScript", "Vite", "TanStack Query", "Framer Motion", "Tailwind CSS + shadcn/ui"] },
    { category: "Backend", items: ["Supabase (PostgreSQL)", "Edge Functions (Deno)", "Resend API", "GPT-5-nano ($0.05/1M tokens)"] },
    { category: "Infrastructure", items: ["Vercel Deployment", "Sentry Monitoring", "GitHub Actions CI/CD", "Husky Pre-commit"] }
  ]

  const targetUsers = [
    { icon: Rocket, title: "Web3 Builders", description: "Find funding, team members, and resources" },
    { icon: DollarSign, title: "Investors/VCs", description: "Discover promising projects early" },
    { icon: Code2, title: "Developers", description: "Find Web3 jobs and collaborate" },
    { icon: Award, title: "Grant Programs", description: "Reach qualified applicants" },
    { icon: BookOpen, title: "Educators", description: "Share knowledge and tools" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
              y: [-30, 30, -30],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [50, -50, 50],
              y: [30, -30, 30],
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400">ACCELERATEWITH.US</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                The Complete Web3
              </span>
              <br />
              <span className="text-foreground">Ecosystem </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Platform
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              LinkedIn meets ProductHunt meets AngelList for Web3—powered by AI intelligence
              to accelerate blockchain innovation through community collaboration
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Features
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">607+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">433+</div>
                <div className="text-sm text-muted-foreground">Funding Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">363+</div>
                <div className="text-sm text-muted-foreground">Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">100s</div>
                <div className="text-sm text-muted-foreground">Active Builders</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Core Features Section */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Comprehensive Platform
              </span>
              <span className="text-foreground"> Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed in Web3, powered by cutting-edge AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
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
                    className="relative h-full group"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity`} />

                    <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                      </div>

                      <div className="space-y-3">
                        {feature.features.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Intelligence Deep Dive */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-cyan-950/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-mono text-purple-400">AI-POWERED</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Revolutionary </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Intelligence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art machine learning algorithms powering intelligent matching and recommendations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-background/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  Recommendation Engine Architecture
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Collaborative Filtering</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Matrix factorization techniques identify patterns in user behavior to predict preferences
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Content-Based Filtering</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      TF-IDF and BERT embeddings analyze project descriptions for semantic similarity matching
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Thompson Sampling</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Optimal explore/exploit balance ensures users discover new opportunities while getting relevant matches
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Graph-Based Recommendations</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Network analysis identifies connections and relationships within the Web3 ecosystem
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-pink-400">Neural Collaborative Filtering</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep learning models capture non-linear patterns for highly accurate predictions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-background/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-xl font-bold">AI Chat Assistant</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategic advisor powered by GPT-5 providing personalized guidance for Web3 builders
                </p>
                <div className="text-2xl font-mono text-cyan-400">$0.05/1M tokens</div>
              </div>

              <div className="bg-background/60 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-green-400" />
                  <h4 className="text-xl font-bold">Smart Matching</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Project-to-funding matching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Talent-to-project pairing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Resource recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-background/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <h4 className="text-xl font-bold">Predictive Analytics</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Success likelihood scores
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Funding fit analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Growth predictions
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Built with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Modern Tech Stack
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade architecture for reliability and scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/60 backdrop-blur-xl border border-green-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Code2 className="w-4 h-4 text-green-400/60" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Verified Ecosystem</h4>
              <p className="text-xs text-muted-foreground">Domain validation & RLS security</p>
            </div>
            <div className="text-center">
              <FileCheck className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">100% Test Coverage</h4>
              <p className="text-xs text-muted-foreground">123/123 tests passing</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Global Access</h4>
              <p className="text-xs text-muted-foreground">Public pages without auth</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-pink-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Real-time Updates</h4>
              <p className="text-xs text-muted-foreground">Supabase realtime subscriptions</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-32 px-4 bg-gradient-to-b from-background via-blue-950/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Built for the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Entire Web3 Ecosystem
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetUsers.map((user, index) => {
              const Icon = user.icon

              return (
                <motion.div
                  key={user.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div
                    className="bg-background/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-6 h-full"
                    whileHover={{ y: -5, borderColor: 'rgb(59 130 246 / 0.4)' }}
                  >
                    <Icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              The Vision:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Accelerating Web3 Together</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <p>
                Accelerate is more than a platform—it's a movement to democratize access to Web3 resources
                and opportunities. We believe that the best ideas deserve funding, the best builders deserve
                to be discovered, and everyone deserves a chance to participate in the blockchain revolution.
              </p>
              <p>
                By combining AI intelligence with community collaboration, we're creating network effects
                that benefit everyone. More users mean better matches, better data means smarter AI,
                and smarter AI means more successful projects.
              </p>
              <p>
                Our goal is simple: become the definitive ecosystem platform where Web3 innovation happens,
                connections are made, and the future is built—together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-6 h-6" />
                  <span>Join Accelerate Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/">
                <motion.button
                  className="px-10 py-5 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 transition-colors"
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