'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, Users, Code, Rocket, Globe, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import {
  pageHeaderVariants,
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  decoratorVariants,
  viewportOnce,
  cardHover,
} from '@/lib/animation-config'

const coreCapabilities = [
  {
    icon: Brain,
    title: 'Systems Thinking',
    description: 'I see the connections others miss. Every product exists within systems of incentives, behaviors, and constraints.',
  },
  {
    icon: Zap,
    title: 'AI-Native Building',
    description: 'Not just using AI tools—architecting intelligent systems, automation pipelines, and ML-powered products.',
  },
  {
    icon: Target,
    title: 'Zero-to-One Execution',
    description: 'From concept to shipped product. I don\'t just strategize—I build, ship, and iterate.',
  },
  {
    icon: Users,
    title: 'Human-Centered Design',
    description: 'Technology serves people, not the other way around. Every system I build puts humans first.',
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
  },
  {
    phase: 'Building',
    title: 'Marketplaces & Platforms',
    description: 'Founded HelpWith (skill-sharing marketplace) and Sparkblox (raised $1M+ for no-code NFT infrastructure). Learned to build platforms that connect people and scale social value.',
  },
  {
    phase: 'Scaling',
    title: 'Product Leadership',
    description: 'Product & Ops at Upland.me (Web3 virtual economy). Managed token economies, player dynamics, and transaction systems at scale.',
  },
  {
    phase: 'Current',
    title: 'AI + Civic Innovation',
    description: 'Building SuperDebate (restoring the values of the Greek agora) and Accelerate (Web3 builder intelligence). Combining AI automation with systems that serve human flourishing.',
  },
]

const values = [
  { icon: Users, title: 'Human Development', desc: 'Tools that make people more capable, not more dependent' },
  { icon: Globe, title: 'Community Formation', desc: 'Platforms that connect people around shared purpose' },
  { icon: Sparkles, title: 'Transparent Value Flow', desc: 'Systems where incentives align with outcomes' },
  { icon: Rocket, title: 'Builder Enablement', desc: 'Infrastructure that accelerates creators and founders' },
  { icon: MessageSquare, title: 'Civic Capability', desc: 'Restoring reasoned discourse and democratic participation' },
  { icon: Brain, title: 'Decentralized Coordination', desc: 'New forms of governance and collective action' },
]

export default function AboutPage() {
  return (
    <div className="bg-background font-jost">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={pageHeaderVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            {/* Decorative diamond element */}
            <motion.div
              variants={decoratorVariants}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                <path
                  d="M12 2 L22 12 L12 22 L2 12 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-xs tracking-[0.3em] uppercase mb-4 text-primary"
            >
              Founder • Builder • Systems Thinker
            </motion.p>
            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide text-foreground"
            >
              About <span className="text-primary">Me</span>
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light"
            >
              15+ years building products across AI, Web3, civic tech, and digital communities.
              I care about technology that makes people more capable, not more dependent.
            </motion.p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {achievements.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={cardHover}
                className="relative group"
              >
                <div className="relative bg-card rounded-xl p-5 text-center transition-all duration-300 border border-border">
                  <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b-2 border-r-2 border-primary" />

                  <p className="text-3xl sm:text-4xl font-black text-primary">
                    {item.metric}
                  </p>
                  <p className="text-foreground font-semibold text-sm mt-1">
                    {item.label}
                  </p>
                  <p className="text-foreground/50 text-xs mt-1">
                    {item.detail}
                  </p>
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
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={childVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Background
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I started in competitive debate—teaching people how to <strong className="text-foreground font-semibold">reason, argue, and change minds</strong>.
                  That foundation shapes how I approach building: clarity over complexity, structure over chaos.
                </p>
                <p>
                  Since then, I&apos;ve built marketplaces, raised funding, scaled products to hundreds of thousands of users,
                  and worked across AI, Web3, and civic tech. I&apos;ve seen what works and what doesn&apos;t.
                </p>
                <p>
                  Now I&apos;m focused on SuperDebate (restoring the values of the Greek agora) and
                  Accelerate (helping Web3 builders find funding and resources).
                </p>
              </div>
            </motion.div>

            {/* Technical Stack */}
            <motion.div
              variants={childVariants}
              className="relative group"
            >
              <div className="relative bg-card rounded-2xl p-8 transition-all duration-300 border border-border">
                <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b-2 border-r-2 border-primary" />

                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <Code className="w-5 h-5 text-primary" />
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm transition-all bg-foreground/5 border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-foreground/70">
                    <span className="text-primary font-semibold">AI-native builder</span>—architecting intelligent
                    systems, ML pipelines, and automation workflows. Not just prompting, but building the infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-20"
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl font-bold text-center mb-12 text-foreground"
            >
              Core <span className="text-primary">Capabilities</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCapabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <motion.div
                    key={capability.title}
                    variants={itemVariants}
                    whileHover={cardHover}
                    className="relative group"
                  >
                    <div className="relative bg-card rounded-xl p-6 h-full transition-all duration-300 border border-border">
                      <div className="absolute top-0 left-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t-2 border-l-2 border-primary" />
                      <div className="absolute bottom-0 right-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b-2 border-r-2 border-primary" />

                      <Icon className="w-10 h-10 mb-4 text-primary" />
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {capability.description}
                      </p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl font-bold text-center mb-12 text-foreground"
            >
              The <span className="text-primary">Journey</span>
            </motion.h2>

            <div className="space-y-6">
              {journey.map((phase) => (
                <motion.div
                  key={phase.phase}
                  variants={itemVariants}
                  className="relative bg-card rounded-r-xl p-6 border border-border border-l-4 border-l-primary"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-foreground/70">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Build For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={childVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                What I Care About
              </h2>
              <p className="max-w-2xl mx-auto text-foreground/70">
                The best ideas should win. Communities should form around shared purpose. Technology should make us more capable, not more dependent.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="bg-card rounded-xl p-5 transition-all group border border-border hover:border-primary/30"
                  >
                    <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform text-primary" />
                    <h3 className="font-semibold mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {item.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden group bg-card border-2 border-border"
          >
            <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t-[3px] border-l-[3px] border-primary rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b-[3px] border-r-[3px] border-primary rounded-br-2xl" />

            <motion.h2
              variants={childVariants}
              className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
            >
              See It in Action
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="mb-8 max-w-xl mx-auto text-foreground/70"
            >
              The proof is in the work.
            </motion.p>
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/work">
                <button className="px-8 py-4 font-bold text-lg flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 font-bold text-lg rounded-lg bg-transparent border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
