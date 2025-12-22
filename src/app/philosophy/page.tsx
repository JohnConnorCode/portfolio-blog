'use client'

import { motion } from 'framer-motion'
import { Shield, Compass, ArrowRight, Eye, Scale, Zap, Target, Lightbulb, Users } from 'lucide-react'
import Link from 'next/link'
import {
  pageHeaderVariants,
  decoratorVariants,
  titleVariants,
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  viewportOnce,
  cardHover
} from '@/lib/animation-config'

const principles = [
  {
    icon: Eye,
    title: 'Surface Reality',
    subtitle: 'Find the problem behind the problem',
    description: 'Most failures come from solving the wrong problem well. I stress-test assumptions with behavior, not surveys. Watch what users do, not what they say. The uncomfortable truth is always cheaper than the comfortable lie.',
    practices: [
      'Behavioral analysis over stated preferences',
      'Rapid hypothesis testing with real users',
      'Kill bad ideas fast, before they calcify'
    ]
  },
  {
    icon: Scale,
    title: 'Design Alignment',
    subtitle: 'Make incentives honest',
    description: 'The best products make user success and business success the same thing. No dark patterns. No manipulation. No growth hacks that extract value instead of creating it. Sustainable systems win.',
    practices: [
      'User wins = business wins architecture',
      'Transparent value exchange',
      'Sustainable growth over extraction'
    ]
  },
  {
    icon: Shield,
    title: 'Embrace Difficulty',
    subtitle: 'Hard conversations reveal what\'s broken',
    description: 'Conflict avoidance is a growth ceiling. The conversations nobody wants to have contain the insights everybody needs. I seek out the friction points—that\'s where the real problems hide.',
    practices: [
      'Proactive difficult conversations',
      'Root cause over symptom treatment',
      'Honest feedback loops'
    ]
  },
  {
    icon: Compass,
    title: 'Judge by Outcomes',
    subtitle: 'Metrics that survive contact with reality',
    description: 'Not vanity metrics. Not growth theater. I measure what compounds: retention over acquisition, revenue quality over quantity, user lifetime value over signup counts. What matters is what lasts.',
    practices: [
      'Retention > acquisition metrics',
      'Revenue quality over volume',
      'Compounding value indicators'
    ]
  }
]

const process = [
  {
    icon: Lightbulb,
    title: 'First Principles',
    description: 'Start from ground truth. Question every assumption. Understand the actual problem before proposing solutions.'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'Build fast, learn faster. Get something in front of users within days, not months. Real feedback beats hypotheticals.'
  },
  {
    icon: Target,
    title: 'Test & Iterate',
    description: 'Measure what matters. Kill what doesn\'t work. Double down on what does. Continuous improvement over big reveals.'
  },
  {
    icon: Users,
    title: 'Radical Transparency',
    description: 'No black boxes. You understand every system I build and own the IP. Weekly updates, open communication, no surprises.'
  }
]

export default function PhilosophyPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background font-jost">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={pageHeaderVariants}
          initial="hidden"
          animate="visible"
          className="mb-20 text-center"
        >
          <motion.div variants={decoratorVariants} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.p variants={childVariants} className="text-xs tracking-[0.3em] uppercase mb-4 text-primary">
            Philosophy
          </motion.p>

          <motion.h1 variants={titleVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide text-foreground">
            My <span className="text-primary">Approach</span>
          </motion.h1>

          <motion.p variants={childVariants} className="text-xl max-w-3xl mx-auto font-light text-foreground/80 leading-relaxed">
            Product strategy without execution is just opinion. Execution without strategy is just activity.
            <span className="text-primary font-medium"> I do both.</span>
          </motion.p>
        </motion.div>

        {/* Core Philosophy Statement */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.div variants={childVariants} className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl p-8 md:p-12 border border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-2xl" />

              <p className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
                The best products come from understanding real problems deeply.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Not from assumptions. Not from what users say they want. From watching behavior,
                testing hypotheses, and building systems where incentives actually align.
                I&apos;ve learned that <span className="text-primary">the uncomfortable truth is always cheaper
                than the comfortable lie</span>—so I start there.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Principles Section */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.div variants={childVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              The <span className="text-primary">Principles</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/70">
              Four ideas that guide how I approach product strategy, system design, and working with teams.
            </p>
          </motion.div>

          <div className="space-y-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="relative group"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-card rounded-xl p-8 h-full transition-colors duration-300 border border-border hover:border-primary/30">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Number */}
                      <div className="flex-shrink-0 flex items-start gap-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-lg">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <span className="text-6xl font-bold text-foreground/5 hidden md:block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 text-foreground">{principle.title}</h3>
                        <p className="text-sm text-primary mb-4 font-medium">{principle.subtitle}</p>
                        <p className="text-foreground/70 mb-6 leading-relaxed">{principle.description}</p>

                        {/* Practices */}
                        <div className="flex flex-wrap gap-2">
                          {principle.practices.map((practice) => (
                            <span
                              key={practice}
                              className="px-3 py-1 text-xs bg-primary/5 text-foreground/60 border border-primary/10 rounded-full"
                            >
                              {practice}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* How I Work Section */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.div variants={childVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              How I <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/70">
              Speed to first insight: 2 weeks, not 2 months. Build, measure, learn—repeat.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {process.map((step) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="relative group"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-card rounded-xl p-6 h-full transition-colors duration-300 border border-border hover:border-primary/30">
                    <Icon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Vision Statement */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.div variants={childVariants} className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed mb-8">
                &ldquo;Products that matter require the courage to face truth—about users,
                about markets, about ourselves. Technology should serve humans,
                not the other way around. <span className="text-primary font-medium">That&apos;s the work worth doing.</span>&rdquo;
              </p>
              <div className="w-16 h-px bg-primary mx-auto" />
            </div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden bg-card border border-border"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-2xl" />

          <motion.h2 variants={childVariants} className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Have a project in mind?
          </motion.h2>
          <motion.p variants={childVariants} className="mb-8 max-w-xl mx-auto text-foreground/70">
            I partner with teams building products that matter. Let&apos;s talk about
            what you&apos;re working on and whether I can help.
          </motion.p>
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work">
              <button className="px-8 py-4 font-bold rounded-lg transition-all bg-transparent border-2 border-primary text-foreground hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] duration-200">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 font-bold flex items-center justify-center gap-2 rounded-lg transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] duration-200">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}
