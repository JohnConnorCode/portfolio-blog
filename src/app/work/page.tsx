'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Code, Trophy, Target, Shield, TrendingUp, Globe, Rocket, Brain, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    company: 'Upland.me',
    role: 'Product & Operations Manager',
    period: '2021-2022',
    description: 'Led product and growth for a Web3 virtual economy. Found product-market fit through user research and incentive design.',
    achievements: [
      'Scaled from 13K to 200K monthly active users (15x growth)',
      'Designed SPARK token economics and launch strategy',
      'Built onboarding flows improving D7 retention by 40%',
      'Identified the ONE insight that unlocked growth'
    ],
    impact: 'The Outcome: From struggling platform to 15x user growth in 12 months.',
    tags: ['PMF', 'Growth', 'Token Design', 'User Research']
  },
  {
    company: 'Mode Mobile',
    role: 'Product Manager',
    period: '2020-2021',
    description: 'Inherited a failing product. Found the real problem through user research. Pivoted to PMF.',
    achievements: [
      'Pivoted struggling product to achieve product-market fit',
      'Increased revenue 3x through strategic feature development',
      'Reduced churn by 50% through user research',
      'Killed features users said they wanted but didn\'t use'
    ],
    impact: 'The Outcome: Saved a product by finding what users actually needed.',
    tags: ['PMF', 'Product Turnaround', 'User Research', 'Analytics']
  },
  {
    company: 'Sparkblox',
    role: 'Founder & CEO',
    period: '2022-2023',
    description: 'Built no-code NFT infrastructure from zero. Raised capital, hired team, shipped product.',
    achievements: [
      'Raised over $1M in funding',
      'Built and led team of 18 engineers',
      'Shipped modular deployers, metadata tools, storefronts',
      'Learned what kills startups: building before validating'
    ],
    impact: 'The Outcome: Hard lessons on when to pivot vs. persist.',
    tags: ['Zero-to-One', 'Fundraising', 'Team Leadership', 'Web3']
  },
  {
    company: 'HelpWith',
    role: 'Founder & Product Lead',
    period: '2018-2019',
    description: 'Built an early skill-sharing marketplace. First experience taking an idea from zero to users.',
    achievements: [
      'Launched in 3 cities with 500+ service providers',
      'Built trust system reducing disputes by 80%',
      'Designed matching algorithm that actually worked',
      'Learned that incentive design is everything'
    ],
    impact: 'The Outcome: Foundation for all future product thinking.',
    tags: ['Zero-to-One', 'Marketplace', 'Trust Systems', 'Community']
  }
]

const shippedProducts = [
  {
    name: 'SuperDebate',
    role: 'Built & Launched',
    description: 'Built the first large-scale adult debate ecosystem. Local clubs in 15+ cities, AI-powered judging, national tournaments. Shipped end-to-end.',
    status: 'Shipped • 15+ Cities',
    link: '/super-debate',
    external: 'https://superdebate.org',
    icon: MessageSquare
  },
  {
    name: 'Accelerate',
    role: 'Built & Launched',
    description: 'Built a modular platform for builder profiles, funding programs, and intelligent matching. 607 projects evaluated, 433 funding programs indexed.',
    status: 'Shipped • 600+ Projects',
    link: '/accelerate',
    external: 'https://acceleratewith.us',
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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase mb-4 text-primary font-jost"
          >
            Work & Experience
          </motion.p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide"
            style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}
          >
            <span className="text-foreground">The </span>
            <span className="text-primary">
              Work
            </span>
          </h1>
          <p
            className="text-lg max-w-3xl mx-auto text-foreground/70 font-jost"
          >
            Products shipped, companies built, systems scaled.
          </p>
        </motion.div>

        {/* Shipped Products */}
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
            style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}
          >
            <span className="text-foreground">Products </span>
            <span className="text-primary">Shipped</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {shippedProducts.map((project, index) => {
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
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
                  </div>
                  <div className="absolute top-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-full h-0.5 bg-primary" />
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-primary" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-primary" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary" />
                  </div>

                  <div
                    className="relative rounded-xl p-6 h-full transition-all border bg-card border-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="text-xl font-bold text-primary font-jost">{project.name}</h3>
                          <span className="text-sm text-foreground/60 font-jost">{project.role}</span>
                        </div>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded text-primary bg-primary/10 font-jost"
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="mb-4 text-foreground/80 font-jost">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <Link href={project.link} className="text-sm font-semibold flex items-center gap-1 transition-opacity hover:opacity-70 text-primary font-jost">
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-opacity hover:opacity-70 text-foreground/60 font-jost">
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
            className="text-xl font-bold mb-6 text-foreground/60 font-jost"
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
                className="rounded-lg p-4 border transition-all hover:border-primary/30 bg-card border-border"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground font-jost">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-opacity hover:opacity-70 text-primary font-jost">
                      Visit <Globe className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-sm mb-2 text-foreground/70 font-jost">{project.description}</p>
                <span className="text-xs text-primary/80 font-jost">{project.tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-primary/30" />
        </div>

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
            style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}
          >
            <span className="text-foreground">Experience </span>
            <span className="text-primary">Timeline</span>
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-r-xl p-6 transition-all border-l-4 bg-card border-l-primary"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary font-jost">{exp.company}</h3>
                    <span className="text-foreground font-jost">{exp.role}</span>
                  </div>
                  <span className="text-sm mt-2 sm:mt-0 text-foreground/50 font-jost">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="mb-4 text-foreground/80 font-jost">{exp.description}</p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Zap className="w-3 h-3 mt-1 flex-shrink-0 text-primary" />
                      <span style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div
                  className="p-3 rounded-lg mb-4 border bg-primary/5 border-primary/20"
                >
                  <p className="text-sm font-medium text-primary font-jost">→ {exp.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded border transition-all hover:border-foreground/30 text-foreground/70 bg-foreground/5 border-foreground/10 font-jost"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-primary/30" />
        </div>

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
            style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}
          >
            <span className="text-foreground">By the </span>
            <span className="text-primary">Numbers</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Trophy, value: '15+', label: 'Years in Product' },
              { icon: Code, value: '$20M+', label: 'Funding Enabled' },
              { icon: Users, value: '300K+', label: 'Users Scaled' },
              { icon: TrendingUp, value: '50+', label: 'Products Shipped' }
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
                    className="relative rounded-xl p-6 text-center transition-all border bg-card border-border"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-black mb-1 text-primary font-jost">{metric.value}</p>
                    <p className="text-sm text-foreground/60 font-jost">{metric.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-primary/30" />
        </div>

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
            style={{ fontFamily: "'Jost', 'Futura', sans-serif" }}
          >
            <span className="text-foreground">How I </span>
            <span className="text-primary">Work</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Surface Reality',
                description: 'Most failures come from solving the wrong problem. I start by naming assumptions and testing them against reality.'
              },
              {
                icon: Shield,
                title: 'Design Alignment',
                description: 'Incentives matter. I build systems where what\'s good for users is good for the business—no manipulation required.'
              },
              {
                icon: Brain,
                title: 'Judge by Outcomes',
                description: 'Ideas are cheap. I measure success by durable, compounding value—not vanity metrics or growth theater.'
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
                  className="rounded-xl p-6 transition-all border bg-card border-border"
                >
                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2 text-foreground font-jost">{approach.title}</h3>
                  <p className="text-sm text-foreground/70 font-jost">{approach.description}</p>
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
          className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden border bg-card border-primary/30"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl border-primary/50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl border-primary/50" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground font-jost">
            What are you building?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-foreground/80 font-jost">
            I partner with founders and teams shipping products that matter.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 font-bold flex items-center justify-center gap-2 rounded bg-primary text-primary-foreground font-jost mx-auto"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </section>
  )
}
