'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Zap, Target, Users, Code, Rocket, Globe, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const coreCapabilities = [
  {
    icon: Brain,
    title: 'Systems Thinking',
    description: 'I see the connections others miss. Every product exists within systems of incentives, behaviors, and constraints.',
    color: 'text-purple-400',
    glow: 'rgba(168, 85, 247, 0.4)'
  },
  {
    icon: Zap,
    title: 'AI-Native Building',
    description: 'Not just using AI tools—architecting intelligent systems, automation pipelines, and ML-powered products.',
    color: 'text-cyan-400',
    glow: 'rgba(0, 212, 255, 0.4)'
  },
  {
    icon: Target,
    title: 'Zero-to-One Execution',
    description: 'From concept to shipped product. I don\'t just strategize—I build, ship, and iterate.',
    color: 'text-pink-500',
    glow: 'rgba(236, 72, 153, 0.4)'
  },
  {
    icon: Users,
    title: 'Human-Centered Design',
    description: 'Technology serves people, not the other way around. Every system I build puts humans first.',
    color: 'text-yellow-400',
    glow: 'rgba(250, 204, 21, 0.4)'
  },
]

const achievements = [
  { metric: '$20M+', label: 'Funding Enabled', detail: 'Through product-market fit' },
  { metric: '50+', label: 'Products Shipped', detail: 'From startups to enterprise' },
  { metric: '15+', label: 'Years Building', detail: 'Across AI, Web3, and civic tech' },
  { metric: '200+', label: 'Research Sessions', detail: 'Finding real problems' },
]

const technicalStack = [
  'React/Next.js', 'TypeScript', 'Supabase', 'AI/ML Pipelines',
  'Web3/Blockchain', 'Framer Motion', 'Tailwind', 'Serverless'
]

const journey = [
  {
    phase: 'Foundation',
    title: 'Debate & Human Development',
    description: 'Started in competitive debate instruction at Chicago Debates. Learned how people reason, argue, and change their minds. This foundation informs everything I build today.',
    color: 'border-purple-500/50'
  },
  {
    phase: 'Building',
    title: 'Marketplaces & Platforms',
    description: 'Founded HelpWith (skill-sharing marketplace) and Sparkblox (raised $1M+ for no-code NFT infrastructure). Learned to build platforms that connect people and scale social value.',
    color: 'border-cyan-500/50'
  },
  {
    phase: 'Scaling',
    title: 'Product Leadership',
    description: 'Product & Ops at Upland.me (Web3 virtual economy). Managed token economies, player dynamics, and transaction systems at scale.',
    color: 'border-pink-500/50'
  },
  {
    phase: 'Current',
    title: 'AI + Civic Innovation',
    description: 'Building SuperDebate (reinventing civic discourse) and Accelerate (Web3 builder intelligence). Combining AI automation with systems that serve human flourishing.',
    color: 'border-yellow-500/50'
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="1.5" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400/70 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Founder • Builder • Systems Thinker
            </motion.p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}
            >
              <span className="text-white">About </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Me
              </span>
            </h1>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              15+ years building products across AI, Web3, civic tech, and digital communities.
              I care about technology that makes people more capable, not more dependent.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-5 text-center group-hover:border-cyan-500/30 transition-all">
                  <p className="text-3xl sm:text-4xl font-black text-cyan-400" style={{ textShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}>
                    {item.metric}
                  </p>
                  <p className="text-white font-semibold text-sm mt-1">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Identity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                <span className="text-white">Background</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-gray-300"
              >
                <p>
                  I started in competitive debate—teaching people how to <strong className="text-white">reason, argue, and change minds</strong>.
                  That foundation shapes how I approach building: clarity over complexity, structure over chaos.
                </p>
                <p>
                  Since then, I&apos;ve built marketplaces, raised funding, scaled products to hundreds of thousands of users,
                  and worked across AI, Web3, and civic tech. I&apos;ve seen what works and what doesn&apos;t.
                </p>
                <p>
                  Now I&apos;m focused on SuperDebate (bringing structured debate back to adults) and
                  Accelerate (helping Web3 builders find funding and resources).
                </p>
              </motion.div>
            </div>

            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="text-cyan-400 font-semibold">AI-native builder</span>—architecting intelligent
                    systems, ML pipelines, and automation workflows. Not just prompting, but building the infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-white">Core </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Capabilities
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCapabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group"
                  >
                    <div
                      className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                      style={{ background: `radial-gradient(circle, ${capability.glow}, transparent 70%)` }}
                    />
                    <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full group-hover:border-white/20 transition-all">
                      <Icon className={`w-10 h-10 ${capability.color} mb-4`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                      <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-gray-400 text-sm">{capability.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="text-white">The </span>
            <span className="text-cyan-400">Journey</span>
          </motion.h2>

          <div className="space-y-6">
            {journey.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-black/40 backdrop-blur-xl border-l-4 ${phase.color} rounded-r-xl p-6`}
              >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{phase.phase}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">What I Care About</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The best ideas should win. Communities should form around shared purpose. Technology should make us more capable, not more dependent.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Human Development', desc: 'Tools that make people more capable, not more dependent' },
              { icon: Globe, title: 'Community Formation', desc: 'Platforms that connect people around shared purpose' },
              { icon: Sparkles, title: 'Transparent Value Flow', desc: 'Systems where incentives align with outcomes' },
              { icon: Rocket, title: 'Builder Enablement', desc: 'Infrastructure that accelerates creators and founders' },
              { icon: MessageSquare, title: 'Civic Capability', desc: 'Restoring reasoned discourse and democratic participation' },
              { icon: Brain, title: 'Decentralized Coordination', desc: 'New forms of governance and collective action' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-cyan-500/30 transition-all group"
                >
                  <Icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 20, 40, 0.9) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              boxShadow: '0 0 60px rgba(0, 212, 255, 0.15)'
            }}
          >
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl" />

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ready to Build Something Real?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Whether you need product strategy, technical architecture, or a co-builder who ships—let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 font-bold text-lg flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00ffff 100%)',
                    color: '#000',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                  }}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 font-bold text-lg text-white"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(0, 212, 255, 0.6)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                  }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
