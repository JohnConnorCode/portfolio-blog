'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Shield, Compass, Brain, Users, ArrowRight, Sparkles, Eye, Scale } from 'lucide-react'
import Link from 'next/link'
import { SectionDivider } from '@/components/section-divider'

const methods = [
  {
    icon: Eye,
    title: 'Surface Reality',
    description: 'Name assumptions clearly. Stress test them. Expose every idea to conditions that can break it. Most failures come from solving the wrong problem well.',
    color: 'cyan'
  },
  {
    icon: Scale,
    title: 'Design Alignment',
    description: 'Incentives matter more than intentions. Build systems where what\'s good for users is good for the business. No manipulation required.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Embrace Difficulty',
    description: 'Risk, conflict, and error in public are not threats—they\'re conditions for growth. Create environments where people must face them.',
    color: 'pink'
  },
  {
    icon: Compass,
    title: 'Judge by Outcomes',
    description: 'Don\'t mistake appearance for achievement. The test is whether something produces durable, compounding value when exposed to the world.',
    color: 'yellow'
  }
]

const intellectualInfluences = [
  { name: 'Systems Theory', area: 'How structures shape behavior' },
  { name: 'Game Theory', area: 'Incentive engineering' },
  { name: 'Civic Republicanism', area: 'Democratic participation' },
  { name: 'Behavioral Economics', area: 'Decision-making' },
]

const ventures = [
  {
    name: 'SuperDebate',
    description: 'Built on the conviction that growth requires confrontation. Creates rooms where people risk themselves in public, test their ideas, and leave sharper. The first large-scale adult debate ecosystem since ancient times.',
    color: 'purple'
  },
  {
    name: 'Accelerate',
    description: 'Redesigning how ecosystems fund builders. Milestone-based funding, transparent evaluation, aligned with actual delivery. Not promises—outcomes.',
    color: 'cyan'
  },
  {
    name: 'Earlier Ventures',
    description: 'Sparkblox (NFT infrastructure), Upland (virtual economies), HelpWith (skill-sharing marketplace)—each revealed truths that only reality can teach.',
    color: 'pink'
  }
]

export default function PhilosophyPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400/70 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Worldview • Method • Practice
          </motion.p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Philosophy
          </h1>
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            I build systems that expose reality, reward integrity, and make people stronger.
            Not polish. Not spectacle. What compounds.
          </p>
        </motion.div>

        {/* Formation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            <span className="text-white">The </span>
            <span className="text-cyan-400">Formation</span>
          </motion.h2>

          <div className="space-y-4 text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I began as a debater. Debate was my first laboratory for truth—you stood in public,
              risked humiliation, and sharpened your thinking through confrontation. <strong className="text-white">Losing was painful,
              but it revealed what was real.</strong>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I moved from competing to teaching at Chicago Debates. I organized programs where younger
              students learned to test themselves through intellectual conflict. I also worked with
              decentralized community groups in education and civic organizing.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              These grassroots projects were chaotic—but they showed me how fragile trust can be,
              how easily cooperation unravels, and <strong className="text-cyan-400">how much stronger people become when they
              take responsibility together.</strong>
            </motion.p>
          </div>
        </motion.section>

        <SectionDivider variant="dots" />

        {/* Orientation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            <span className="text-white">The </span>
            <span className="text-purple-400">Orientation</span>
          </motion.h2>

          <div className="space-y-4 text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Those experiences shaped my orientation. I'm drawn to work that <strong className="text-white">cannot hide
              behind appearances</strong>—environments where illusions collapse, outcomes are visible,
              and participation makes people stronger.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I'm not motivated by novelty. <strong className="text-purple-400">I'm motivated by leverage.</strong> By designs
              that compound value over time—not by avoiding reality but by exposing it. By tools
              and institutions that make people more capable of perceiving clearly, deciding wisely,
              and acting with conviction.
            </motion.p>
          </div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 border-l-4 border-purple-500/50 pl-6 py-4 bg-purple-500/5 rounded-r-lg"
          >
            <p className="text-lg text-white font-medium italic">
              "Confrontation clarifies. Comfort dulls. Ideas matter only when embodied.
              Nothing is ever finished. Everything is in the process of becoming."
            </p>
          </motion.div>
        </motion.section>

        <SectionDivider variant="geometric" />

        {/* Method */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-center"
          >
            <span className="text-white">The </span>
            <span style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Method</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
          >
            A way of working refined across debate, community organizing, startups, and ecosystem design.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {methods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${
                    method.color === 'cyan' ? 'bg-cyan-500/20' :
                    method.color === 'purple' ? 'bg-purple-500/20' :
                    method.color === 'pink' ? 'bg-pink-500/20' :
                    'bg-yellow-500/20'
                  }`} />
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full group-hover:border-white/20 transition-all">
                    <Icon className={`w-8 h-8 mb-4 ${
                      method.color === 'cyan' ? 'text-cyan-400' :
                      method.color === 'purple' ? 'text-purple-400' :
                      method.color === 'pink' ? 'text-pink-400' :
                      'text-yellow-400'
                    }`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                    <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Intellectual Influences */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-gray-400 mb-4"
          >
            Intellectual Influences
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {intellectualInfluences.map((influence, index) => (
              <motion.div
                key={influence.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 hover:border-cyan-500/30 transition-all"
              >
                <span className="text-white font-medium">{influence.name}</span>
                <span className="text-gray-500 text-sm ml-2">• {influence.area}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="wave" />

        {/* In Practice */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-white">In </span>
            <span className="text-pink-400">Practice</span>
          </motion.h2>

          <div className="space-y-4">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-l-4 pl-6 py-4 rounded-r-lg transition-all hover:bg-white/5 ${
                  venture.color === 'purple' ? 'border-purple-500/50 hover:border-purple-500' :
                  venture.color === 'cyan' ? 'border-cyan-500/50 hover:border-cyan-500' :
                  'border-pink-500/50 hover:border-pink-500'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${
                  venture.color === 'purple' ? 'text-purple-400' :
                  venture.color === 'cyan' ? 'text-cyan-400' :
                  'text-pink-400'
                }`}>{venture.name}</h3>
                <p className="text-gray-400">{venture.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Today */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            <span className="text-cyan-400">Today</span>
          </motion.h2>

          <div className="space-y-4 text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm a technologist and product strategist. My work is to imagine better futures
              and build the scaffolding that makes them real. Sometimes that means designing
              platforms that reward integrity. Sometimes it means creating communities where
              people confront ideas directly. Sometimes it means helping founders articulate
              and execute their visions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white font-medium text-lg"
            >
              The common thread: I build with an eye on what compounds, what holds up under
              pressure, and what makes people stronger.
            </motion.p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 0, 40, 0.9) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.15)'
          }}
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50 rounded-br-2xl" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Build Something That Matters
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            If this resonates—if you're building something that needs more than surface-level
            strategy—let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 font-bold text-white"
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(0, 212, 255, 0.6)',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #00ffff 100%)',
                  color: '#000',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                }}
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
