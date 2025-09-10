'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Code, Trophy, Target, Shield, TrendingUp, Globe } from 'lucide-react'
import Link from 'next/link'
import { AnimatedLetters } from '@/components/animated-text'
import { SectionDivider } from '@/components/section-divider'
import { AnimatedBorderBox } from '@/components/animated-border-box'

const experiences = [
  {
    company: 'ThriveProtocol',
    role: 'Ecosystem Specialist',
    period: '2024',
    description: 'Managing retroactive grant allocations and building autonomous evaluation tools.',
    achievements: [
      'Distributed $2M+ in grants using custom evaluation frameworks',
      'Saved the team 20+ hours weekly through process automation',
      'Built Telegram and Slack bots to streamline ecosystem operations',
      'Created milestone-based funding mechanisms that improved accountability'
    ],
    impact: 'Made ecosystem funding transparent and aligned with actual delivery.',
    tags: ['Grant Management', 'Process Automation', 'Web3', 'AI Tools']
  },
  {
    company: 'Sparkblox',
    role: 'Founder & Product Lead',
    period: '2022-2023',
    description: 'Created NFT 2.0 infrastructure with dynamic assets that evolve based on user behavior.',
    achievements: [
      'Raised $1M+ in funding and built team of 18 engineers',
      'Secured major partnerships with Chainlink and Algorand',
      'Designed tokenomics model with sustainable revenue streams',
      'Built proof-of-concept that attracted institutional interest'
    ],
    impact: 'Demonstrated how NFTs could be more than static JPEGs.',
    tags: ['Web3', 'Product Strategy', 'Fundraising', 'Team Building']
  },
  {
    company: 'Upland',
    role: 'Product & Operations Manager',
    period: '2021-2022',
    description: 'Scaled virtual property game from 13K to 200K monthly active users.',
    achievements: [
      'Led product strategy for 15x user growth in 12 months',
      'Designed SPARK token economics and launch strategy',
      'Built onboarding flows that improved D7 retention by 40%',
      'Managed cross-functional team of designers and engineers'
    ],
    impact: 'Proved virtual economies work when aligned with player interests.',
    tags: ['Gaming', 'Token Design', 'Growth', 'Product Management']
  },
  {
    company: 'Mode Mobile',
    role: 'Product Manager',
    period: '2020-2021',
    description: 'Transformed ad-tech product into sustainable business model.',
    achievements: [
      'Pivoted failing product to achieve product-market fit',
      'Increased revenue 3x through strategic feature development',
      'Reduced churn by 50% through user research and iteration',
      'Built analytics dashboard that revealed critical user insights'
    ],
    impact: 'Saved a struggling product by listening to actual users.',
    tags: ['Product Turnaround', 'User Research', 'Analytics', 'Mobile']
  },
  {
    company: 'Business of AI',
    role: 'Lead Product Researcher',
    period: '2019-2020',
    description: 'Built AI strategy framework for Fortune 500 companies.',
    achievements: [
      'Created decision framework used by 10+ enterprises',
      'Conducted 50+ executive interviews on AI adoption',
      'Published research reaching 100K+ industry professionals',
      'Advised startups on practical AI implementation'
    ],
    impact: 'Helped companies cut through AI hype to find real value.',
    tags: ['AI Strategy', 'Research', 'Enterprise', 'Thought Leadership']
  },
  {
    company: 'HelpWith',
    role: 'Product Lead',
    period: '2018-2019',
    description: 'Created marketplace for local services that prioritized human connection.',
    achievements: [
      'Launched in 3 cities with 500+ service providers',
      'Built trust system that reduced disputes by 80%',
      'Designed matching algorithm prioritizing quality over speed',
      'Created community features that increased repeat usage 2x'
    ],
    impact: 'Proved marketplaces work better when they foster relationships.',
    tags: ['Marketplace', 'Community', 'Trust Systems', 'Local Commerce']
  }
]

const currentProjects = [
  {
    name: 'Super Debate',
    role: 'Founder',
    description: 'Platform for in-person intellectual discourse. Creating spaces where people confront ideas directly.',
    status: 'Active in 3 cities',
    link: 'https://superdebate.com'
  },
  {
    name: 'Accelerate',
    role: 'Advisor',
    description: 'Redesigning how ecosystems fund builders. Pay-for-delivery model with transparent milestones.',
    status: 'In development',
    link: null
  }
]

export default function WorkPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <AnimatedLetters 
            text="Work" 
            className="text-5xl sm:text-6xl font-black mb-8 text-center block"
            as="h1"
          />
          <motion.p 
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            15 years building products that solve real problems. Not growth theater.
          </motion.p>
        </motion.div>

        {/* Current Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-cyan-400"
          >
            Current Focus
          </motion.h2>
          
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <AnimatedBorderBox
                key={project.name}
                delay={index * 0.15}
                className="p-6 rounded-xl hover:bg-foreground/5 transition-colors"
                borderColor="rgba(0, 200, 255, 0.3)"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-cyan-400">{project.name}</h3>
                  <span className="text-sm text-muted-foreground">{project.role}</span>
                </div>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-cyan-400/70">{project.status}</span>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      Visit <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </AnimatedBorderBox>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="organic" />

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-purple-400"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-foreground/10" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-5 top-3 w-3 h-3 bg-cyan-400 rounded-full" />
                
                {/* Content */}
                <div className="pl-12">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{exp.role}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <Zap className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <p className="text-lg font-semibold text-purple-400 mb-4 italic">
                    {exp.impact}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs border border-foreground/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="geometric" />

        {/* Key Metrics */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Impact by Numbers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, value: '$50M+', label: 'Funding Enabled', color: 'text-yellow-400' },
              { icon: Code, value: '50+', label: 'Products Shipped', color: 'text-cyan-400' },
              { icon: Users, value: '200K+', label: 'Users Served', color: 'text-purple-400' },
              { icon: TrendingUp, value: '15x', label: 'Best Growth Rate', color: 'text-green-400' }
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                  </motion.div>
                  <p className={`text-3xl font-black ${metric.color} mb-2`}>{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <SectionDivider variant="wave" />

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-cyan-400"
          >
            How I Work
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Find the Real Problem',
                description: 'Most failures come from solving the wrong problem well. I start by understanding what actually needs fixing.'
              },
              {
                icon: Shield,
                title: 'Test Against Reality',
                description: 'Ideas are cheap. I build quickly, test with real users, and let the market tell us what works.'
              },
              {
                icon: Globe,
                title: 'Design for Durability',
                description: 'Growth hacks die. I build systems that compound value over time through aligned incentives.'
              }
            ].map((approach, index) => {
              const Icon = approach.icon
              return (
                <AnimatedBorderBox
                  key={approach.title}
                  delay={index * 0.2}
                  className="p-6 rounded-xl"
                  borderColor="rgba(147, 51, 234, 0.3)"
                >
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </AnimatedBorderBox>
              )
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 border border-foreground/10 rounded-lg bg-gradient-to-br from-cyan-400/5 to-purple-400/5"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Real?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I work with teams that care more about solving problems than following trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/philosophy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-3 border-2 border-purple-400 hover:bg-purple-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-semibold">Read My Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-semibold"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </section>
  )
}