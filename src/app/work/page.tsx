'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Zap, Users, Code, Trophy, Target, Shield, TrendingUp, Globe, Rocket, Brain, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const bgTextX = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const bgTextX2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={containerRef} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Large scrolling background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          style={{ x: bgTextX }}
          className="absolute top-[15%] left-0 whitespace-nowrap"
        >
          <span className="text-[12vw] font-bold tracking-tight text-foreground/[0.02] font-jost">
            WORK • EXPERIENCE • PRODUCTS • SHIPPED •
          </span>
        </motion.div>
        <motion.div
          style={{ x: bgTextX2 }}
          className="absolute top-[55%] left-0 whitespace-nowrap"
        >
          <span className="text-[12vw] font-bold tracking-tight text-foreground/[0.02] font-jost">
            BUILD • SCALE • ITERATE • GROW •
          </span>
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - CSS animations */}
        <div className="mb-16 text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-in delay-0">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-primary font-jost animate-in delay-1">
            Work & Experience
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide font-jost animate-in delay-2">
            <span className="text-foreground">The </span>
            <span className="text-primary">Work</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-foreground/70 font-jost animate-in delay-3">
            Products shipped, companies built, systems scaled.
          </p>
        </div>

        {/* Shipped Products */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-jost animate-in delay-4">
            <span className="text-foreground">Products </span>
            <span className="text-primary">Shipped</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {shippedProducts.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={project.name}
                  className="relative group animate-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
                    <div className="flex items-center gap-4">
                      <Link href={project.link} className="text-sm font-semibold flex items-center gap-1 transition-colors hover:text-primary/70 text-primary font-jost">
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 transition-colors hover:text-foreground text-foreground/60 font-jost">
                        Visit Site <Globe className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-20">
          <h2 className="text-xl font-bold mb-6 text-foreground/60 font-jost animate-in delay-6">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.name}
                className="p-4 border transition-all hover:border-primary/30 bg-card border-border animate-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
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
              </div>
            ))}
          </div>
        </section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center font-jost animate-in delay-8">
            <span className="text-foreground">Experience </span>
            <span className="text-primary">Timeline</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative p-6 transition-all border-l-4 bg-card border-l-primary hover:bg-card/80 animate-in"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
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
              </div>
            ))}
          </div>
        </section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Key Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center font-jost animate-in delay-10">
            <span className="text-foreground">By the </span>
            <span className="text-primary">Numbers</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Trophy, value: '15+', label: 'Years in Product' },
              { icon: Code, value: '$20M+', label: 'Funding Enabled' },
              { icon: Users, value: '300K+', label: 'Users Scaled' },
              { icon: TrendingUp, value: '50+', label: 'Products Shipped' }
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="relative group animate-in"
                  style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                >
                  <div className="relative p-6 text-center transition-all border bg-card border-border hover:border-primary/30 hover:-translate-y-1 duration-300">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-black mb-1 text-primary font-jost">{metric.value}</p>
                    <p className="text-sm text-foreground/60 font-jost">{metric.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Approach */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 font-jost animate-in" style={{ animationDelay: '1.5s' }}>
            <span className="text-foreground">How I </span>
            <span className="text-primary">Work</span>
          </h2>

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
                <div
                  key={approach.title}
                  className="p-6 transition-all border bg-card border-border hover:border-primary/30 hover:-translate-y-1 duration-300 animate-in"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2 text-foreground font-jost">{approach.title}</h3>
                  <p className="text-sm text-foreground/70 font-jost">{approach.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative p-8 sm:p-12 text-center overflow-hidden border bg-card border-primary/30 animate-in"
          style={{ animationDelay: '1.9s' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground font-jost">
            What are you building?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-foreground/80 font-jost">
            I partner with founders and teams shipping products that matter.
          </p>
          <Link href="/contact">
            <button className="group relative px-10 py-5 font-semibold text-sm overflow-hidden bg-primary text-background uppercase tracking-[0.15em] font-jost hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </section>
      </div>
    </section>
  )
}
