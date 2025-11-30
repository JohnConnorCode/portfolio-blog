'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Code, Trophy, Target, Shield, TrendingUp, Globe, Rocket, Brain, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { SectionDivider } from '@/components/section-divider'

const experiences = [
  {
    company: 'Sparkblox',
    role: 'Founder & CEO',
    period: '2022-2023',
    description: 'Built no-code NFT infrastructure for brands and creators. Led full product architecture, engineering, and go-to-market.',
    achievements: [
      'Raised over $1M in funding',
      'Built and led team of 18 engineers',
      'Secured partnerships with Chainlink and Algorand',
      'Built modular deployers, dynamic metadata tools, and branded storefronts'
    ],
    impact: 'Demonstrated how to lead teams, raise capital, and ship complex Web3 products.',
    tags: ['Web3', 'Fundraising', 'Team Leadership', 'Product Architecture'],
    color: 'cyan'
  },
  {
    company: 'Upland.me',
    role: 'Product & Operations Manager',
    period: '2021-2022',
    description: 'Managed product flows, UX, operations, and game economy mechanics for a major Web3 virtual economy at scale.',
    achievements: [
      'Scaled from 13K to 200K monthly active users (15x growth)',
      'Designed SPARK token economics and launch strategy',
      'Built onboarding flows improving D7 retention by 40%',
      'Managed token economies, player dynamics, and transaction systems'
    ],
    impact: 'Learned how virtual economies work when aligned with player interests.',
    tags: ['Gaming', 'Token Design', 'Growth', 'Virtual Economies'],
    color: 'purple'
  },
  {
    company: 'Mode Mobile',
    role: 'Product Manager',
    period: '2020-2021',
    description: 'Transformed failing ad-tech product into sustainable business through user research and strategic pivots.',
    achievements: [
      'Pivoted struggling product to achieve product-market fit',
      'Increased revenue 3x through strategic feature development',
      'Reduced churn by 50% through user research',
      'Built analytics dashboard revealing critical insights'
    ],
    impact: 'Saved a product by listening to actual users instead of assumptions.',
    tags: ['Product Turnaround', 'User Research', 'Analytics', 'Mobile'],
    color: 'pink'
  },
  {
    company: 'Business of AI',
    role: 'Lead Product Researcher',
    period: '2019-2020',
    description: 'Created AI strategy frameworks helping enterprises cut through hype to find real value.',
    achievements: [
      'Decision framework used by 10+ enterprises',
      'Conducted 50+ executive interviews on AI adoption',
      'Published research reaching 100K+ professionals',
      'Advised startups on practical AI implementation'
    ],
    impact: 'Helped companies understand AI beyond the buzzwords.',
    tags: ['AI Strategy', 'Research', 'Enterprise', 'Thought Leadership'],
    color: 'yellow'
  },
  {
    company: 'HelpWith',
    role: 'Founder & Product Lead',
    period: '2018-2019',
    description: 'One of the early skill-sharing and task-help marketplaces. Built matching engine, UI, and community operations from scratch.',
    achievements: [
      'Launched in 3 cities with 500+ service providers',
      'Built trust system reducing disputes by 80%',
      'Designed matching algorithm prioritizing quality',
      'Created community features increasing repeat usage 2x'
    ],
    impact: 'Learned to build platforms that map incentives and scale social value.',
    tags: ['Marketplace', 'Community', 'Trust Systems', 'Zero-to-One'],
    color: 'cyan'
  },
  {
    company: 'Chicago Debates',
    role: 'Debate Instructor',
    period: 'Early Career',
    description: 'Competitive debate instruction that shaped how I think about reasoning, persuasion, and human development.',
    achievements: [
      'Trained students in argumentation and critical thinking',
      'Developed pedagogical frameworks for discourse',
      'Learned how people reason and change their minds',
      'Built foundation for all future product work'
    ],
    impact: 'This experience informs everything I build: clarity, rigor, structure.',
    tags: ['Education', 'Debate', 'Communication', 'Human Development'],
    color: 'purple'
  }
]

const currentProjects = [
  {
    name: 'SuperDebate',
    role: 'Founder',
    description: 'The first large-scale adult debate ecosystem since ancient times. Local clubs, national tournaments, AI-powered judging. Reinventing civic discourse.',
    status: 'Active • Chicago + Bali',
    link: '/super-debate',
    external: 'https://superdebate.org',
    color: 'purple',
    icon: MessageSquare
  },
  {
    name: 'Accelerate',
    role: 'Founder',
    description: 'Modular platform for builder profiles, funding programs, evaluation engines, and intelligent matching. Systems-level innovation for Web3 ecosystems.',
    status: 'Live • 600+ Projects',
    link: '/accelerate',
    external: 'https://acceleratewith.us',
    color: 'cyan',
    icon: Rocket
  }
]

const otherProjects = [
  {
    name: 'SmartStarts',
    description: 'AI-powered business planning platform helping entrepreneurs validate ideas and create actionable roadmaps.',
    tech: 'AI • Next.js • Business Strategy',
    link: 'https://www.smartstarts.xyz/'
  },
  {
    name: 'Proclosure',
    description: 'Full-stack real estate intelligence platform. Predictive analytics, CRM, automated workflows.',
    tech: 'AI • Supabase • Data Pipelines'
  }
]

export default function WorkPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto">
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
            15+ Years Building Products That Matter
          </motion.p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}
          >
            <span className="text-white">Work That </span>
            <span style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Ships
            </span>
          </h1>
          <p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Not growth theater. Real products solving real problems across AI, Web3,
            marketplaces, civic tech, and human development.
          </p>
        </motion.div>

        {/* Current Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-white">Current </span>
            <span className="text-cyan-400">Focus</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${project.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`} />
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full group-hover:border-white/20 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-8 h-8 ${project.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                        <div>
                          <h3 className={`text-xl font-bold ${project.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{project.name}</h3>
                          <span className="text-gray-500 text-sm">{project.role}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">{project.status}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <Link href={project.link} className={`text-sm font-semibold flex items-center gap-1 ${project.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' : 'text-purple-400 hover:text-purple-300'} transition-colors`}>
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                        Visit Site <Globe className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold mb-6 text-gray-400"
          >
            Other Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                      Visit <Globe className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                <span className="text-xs font-mono text-cyan-400/60">{project.tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="geometric" />

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            <span className="text-white">Experience </span>
            <span style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Timeline</span>
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-black/40 backdrop-blur-xl border-l-4 rounded-r-xl p-6 hover:bg-black/60 transition-all ${
                  exp.color === 'cyan' ? 'border-cyan-500/50' :
                  exp.color === 'purple' ? 'border-purple-500/50' :
                  exp.color === 'pink' ? 'border-pink-500/50' :
                  'border-yellow-500/50'
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      exp.color === 'cyan' ? 'text-cyan-400' :
                      exp.color === 'purple' ? 'text-purple-400' :
                      exp.color === 'pink' ? 'text-pink-400' :
                      'text-yellow-400'
                    }`}>{exp.company}</h3>
                    <span className="text-white">{exp.role}</span>
                  </div>
                  <span className="text-sm font-mono text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Zap className={`w-3 h-3 mt-1 flex-shrink-0 ${
                        exp.color === 'cyan' ? 'text-cyan-400' :
                        exp.color === 'purple' ? 'text-purple-400' :
                        exp.color === 'pink' ? 'text-pink-400' :
                        'text-yellow-400'
                      }`} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className={`p-3 rounded-lg mb-4 ${
                  exp.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20' :
                  exp.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/20' :
                  exp.color === 'pink' ? 'bg-pink-500/10 border border-pink-500/20' :
                  'bg-yellow-500/10 border border-yellow-500/20'
                }`}>
                  <p className={`text-sm font-medium ${
                    exp.color === 'cyan' ? 'text-cyan-400' :
                    exp.color === 'purple' ? 'text-purple-400' :
                    exp.color === 'pink' ? 'text-pink-400' :
                    'text-yellow-400'
                  }`}>→ {exp.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded hover:border-white/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="wave" />

        {/* Key Metrics */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            <span className="text-white">Impact by </span>
            <span className="text-cyan-400">Numbers</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Trophy, value: '$20M+', label: 'Funding Enabled', color: 'yellow', glow: 'rgba(250, 204, 21, 0.4)' },
              { icon: Code, value: '50+', label: 'Products Shipped', color: 'cyan', glow: 'rgba(0, 212, 255, 0.4)' },
              { icon: Users, value: '200K+', label: 'Users Served', color: 'purple', glow: 'rgba(168, 85, 247, 0.4)' },
              { icon: TrendingUp, value: '15x', label: 'Best Growth Rate', color: 'pink', glow: 'rgba(236, 72, 153, 0.4)' }
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div
                    className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                    style={{ background: `radial-gradient(circle, ${metric.glow}, transparent 70%)` }}
                  />
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group-hover:border-white/20 transition-all">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${
                      metric.color === 'yellow' ? 'text-yellow-400' :
                      metric.color === 'cyan' ? 'text-cyan-400' :
                      metric.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                    <p className={`text-3xl font-black mb-1 ${
                      metric.color === 'yellow' ? 'text-yellow-400' :
                      metric.color === 'cyan' ? 'text-cyan-400' :
                      metric.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`} style={{ textShadow: `0 0 30px ${metric.glow}` }}>{metric.value}</p>
                    <p className="text-sm text-gray-400">{metric.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <SectionDivider variant="organic" />

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-white">How I </span>
            <span className="text-purple-400">Work</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Surface Reality',
                description: 'Most failures come from solving the wrong problem. I start by naming assumptions and testing them against reality.',
                color: 'cyan'
              },
              {
                icon: Shield,
                title: 'Design Alignment',
                description: 'Incentives matter. I build systems where what\'s good for users is good for the business—no manipulation required.',
                color: 'purple'
              },
              {
                icon: Brain,
                title: 'Judge by Outcomes',
                description: 'Ideas are cheap. I measure success by durable, compounding value—not vanity metrics or growth theater.',
                color: 'pink'
              }
            ].map((approach, index) => {
              const Icon = approach.icon
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
                >
                  <Icon className={`w-8 h-8 mb-4 ${
                    approach.color === 'cyan' ? 'text-cyan-400' :
                    approach.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`} />
                  <h3 className="text-lg font-bold text-white mb-2">{approach.title}</h3>
                  <p className="text-gray-400 text-sm">{approach.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
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
            I work with teams that care more about solving problems than following trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 font-bold text-white"
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(168, 85, 247, 0.6)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                }}
              >
                Read My Philosophy
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #00ffff 100%)',
                  color: '#000',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
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
