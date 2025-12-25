'use client'

import { ArrowRight, Zap, Users, Code, Trophy, Target, Shield, TrendingUp, Globe, Rocket, Brain, MessageSquare, CheckSquare } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DiamondDivider, CornerAccents, SectionHeader, GlowOrb, GridBackground } from '@/components/ui/decorative'
import { sectionWithChildrenVariants, childVariants, viewportOnce, TIMING, EASE } from '@/lib/animation-config'

const experiences = [
  {
    company: 'Upland.me',
    role: 'Product & Operations Manager',
    period: 'Jul 2020 – Aug 2021',
    description: 'Led product and growth for a Web3 virtual economy. Found product-market fit through user research and incentive design.',
    achievements: [
      'Scaled from 13K to 300K monthly active users (15x growth)',
      'Designed SPARK token economics and launch strategy',
      'Built onboarding flows improving D7 retention by 40%',
      'Identified the ONE insight that unlocked growth'
    ],
    impact: 'The Outcome: From struggling platform to 15x user growth in 12 months.',
    tags: ['PMF', 'Growth', 'Token Design', 'User Research']
  },
  {
    company: 'Mode Mobile',
    role: 'Technical Product Manager',
    period: 'Sep 2019 – Jul 2020',
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
    role: 'Founder & Product Lead',
    period: 'Feb 2021 – Mar 2024',
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
    period: 'Sep 2013 – May 2018',
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
    description: 'Building a new intellectual sport for the 21st century. Local clubs in 15+ cities, AI-powered judging, national tournaments. Restoring the values of the Greek agora.',
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
  },
  {
    name: 'AlphaTask',
    role: 'Built & Using Daily',
    description: 'The operating system of my life. Unified task management, journaling, and wellness tracking—all structured for AI integration. Built because existing tools couldn\'t keep up.',
    status: 'Personal • Daily Driver',
    link: '/alphatask',
    external: 'https://alphatask.xyz',
    icon: CheckSquare
  }
]

const otherProjects = [
  {
    name: 'SmartStarts',
    description: 'AI-powered launch assistant for entrepreneurs. Generate business plans, validate ideas, and get actionable next steps in minutes.',
    tech: 'AI • Next.js • GPT-4',
    link: 'https://www.smartstarts.xyz/'
  }
]

export default function WorkPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <GridBackground opacity={0.04} />

      {/* Large background text - static for SSR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-[15%] left-0 whitespace-nowrap">
          <span className="text-[12vw] font-bold tracking-tight text-foreground/[0.02] font-jost">
            WORK • EXPERIENCE • PRODUCTS • SHIPPED •
          </span>
        </div>
        <div className="absolute top-[55%] left-0 whitespace-nowrap">
          <span className="text-[12vw] font-bold tracking-tight text-foreground/[0.02] font-jost">
            BUILD • SCALE • ITERATE • GROW •
          </span>
        </div>
      </div>

      <GlowOrb size="md" position="top-right" />
      <GlowOrb size="sm" position="bottom-left" color="accent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: TIMING.normal, ease: EASE }}
          className="mb-16"
        >
          <SectionHeader
            title="The"
            highlight="Work"
            subtitle="Products shipped, companies built, systems scaled."
          />
        </motion.div>

        {/* Featured Products */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={childVariants} className="text-2xl font-bold mb-8 font-jost">
            <span className="text-foreground">Featured </span>
            <span className="text-primary">Products</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {shippedProducts.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.name}
                  variants={childVariants}
                  custom={index}
                  className="relative group"
                >
                  <CornerAccents size="md" />

                  <div className="relative p-6 h-full transition-all border bg-card border-border hover:border-primary/30 hover:-translate-y-1 duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="text-xl font-bold text-primary font-jost">{project.name}</h3>
                          <span className="text-sm text-foreground/60 font-jost">{project.role}</span>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 text-primary bg-primary/10 font-jost">
                        {project.status}
                      </span>
                    </div>
                    <p className="mb-4 text-foreground/80 font-jost">{project.description}</p>
                    <div className="flex items-center gap-3">
                      <Link href={project.link} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-jost">
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-primary text-foreground/50 font-jost">
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
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={childVariants} className="text-xl font-bold mb-6 text-foreground/60 font-jost">
            Other Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={childVariants}
                custom={index}
                className="p-4 border transition-all hover:border-primary/30 bg-card border-border"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground font-jost">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-primary/70 text-primary font-jost">
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

        <DiamondDivider className="mb-16" />

        {/* Experience Timeline */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={childVariants} className="text-3xl font-bold mb-12 text-center font-jost">
            <span className="text-foreground">Experience </span>
            <span className="text-primary">Timeline</span>
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={childVariants}
                custom={index}
                className="relative p-6 transition-all border-l-4 bg-card border-l-primary hover:bg-card/80"
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
                      <span className="font-jost">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className="p-3 mb-4 border bg-primary/5 border-primary/20">
                  <p className="text-sm font-medium text-primary font-jost">→ {exp.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border transition-all hover:border-foreground/30 text-foreground/70 bg-foreground/5 border-foreground/10 font-jost"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <DiamondDivider className="mb-16" />

        {/* Key Metrics */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={childVariants} className="text-3xl font-bold mb-12 text-center font-jost">
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
                <motion.div key={metric.label} variants={childVariants} custom={index} className="relative group">
                  <div className="relative p-6 text-center transition-all border bg-card border-border hover:border-primary/30 hover:-translate-y-1 duration-300">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-black mb-1 text-primary font-jost">{metric.value}</p>
                    <p className="text-sm text-foreground/60 font-jost">{metric.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <DiamondDivider className="mb-16" />

        {/* Approach */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={childVariants} className="text-2xl font-bold mb-8 font-jost">
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
                description: 'Incentives matter. I build systems where what\'s good for users is good for the business. No manipulation required.'
              },
              {
                icon: Brain,
                title: 'Judge by Outcomes',
                description: 'Ideas are cheap. I measure success by durable, compounding value, not vanity metrics or growth theater.'
              }
            ].map((approach, index) => {
              const Icon = approach.icon
              return (
                <motion.div
                  key={approach.title}
                  variants={childVariants}
                  custom={index}
                  className="p-6 transition-all border bg-card border-border hover:border-primary/30 hover:-translate-y-1 duration-300"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: TIMING.normal, ease: EASE }}
          className="relative p-8 sm:p-12 text-center overflow-hidden border bg-card border-primary/30 no-shadow"
        >
          <CornerAccents size="lg" permanent />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground font-jost">
            What are you building?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-foreground/80 font-jost">
            I partner with founders and teams shipping products that matter.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="flex items-center gap-2 mx-auto">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.section>
      </div>
    </section>
  )
}
