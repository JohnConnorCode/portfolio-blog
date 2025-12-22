'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, ArrowRight, MessageSquare, Rocket, Target, Users, Brain, Eye, Zap, Unlock } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import {
  sectionWithChildrenVariants,
  staggerOrchestrator,
  childVariants,
  itemVariants,
  viewportOnce,
} from '@/lib/animation-config'

const process = [
  {
    phase: 'Discovery',
    duration: 'Week 1',
    icon: MessageSquare,
    activities: [
      'Initial strategy call',
      'Deep dive into your challenges',
      'Audit existing systems',
      'Define success metrics'
    ]
  },
  {
    phase: 'Design',
    duration: 'Week 2-3',
    icon: Brain,
    activities: [
      'Solution architecture',
      'Technology stack selection',
      'Team alignment sessions',
      'Roadmap creation'
    ]
  },
  {
    phase: 'Build',
    duration: 'Week 4-8',
    icon: Rocket,
    activities: [
      'Rapid prototyping',
      'Weekly progress reviews',
      'Continuous iteration',
      'Team training'
    ]
  },
  {
    phase: 'Scale',
    duration: 'Ongoing',
    icon: Target,
    activities: [
      'Performance optimization',
      'Growth strategy execution',
      'Knowledge transfer',
      'Long-term support'
    ]
  }
]

const principles = [
  {
    title: 'Radical Transparency',
    description: 'No black boxes. You understand every system we build and own the IP.',
    icon: Eye
  },
  {
    title: 'Speed to Value',
    description: 'First measurable impact within 2 weeks, not months.',
    icon: Zap
  },
  {
    title: 'Human-Centered',
    description: 'Technology serves your team, not the other way around.',
    icon: Users
  },
  {
    title: 'Holistic Solutions',
    description: 'Strategy, technology, and execution that work together—not siloed deliverables.',
    icon: Unlock
  }
]

export function WorkingWithMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          {/* Decorative element */}
          <motion.div variants={childVariants} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path
                d="M12 2 L22 12 L12 22 L2 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.h2 variants={childVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Working Together
          </motion.h2>
          <motion.p variants={childVariants} className="text-base sm:text-lg max-w-2xl mx-auto font-jost text-foreground/60">
            Product strategy, technology strategy, and hands-on execution.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.div variants={childVariants} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-jost text-foreground">
              The <span className="text-primary">Process</span>
            </h3>
            <p className="text-base font-jost text-foreground/50">
              From discovery to scale in 8 weeks.
            </p>
          </motion.div>

          <motion.div
            variants={staggerOrchestrator}
            className="grid md:grid-cols-4 gap-6"
          >
            {process.map((phase) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="relative bg-background border border-border p-6 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg font-jost text-foreground">
                          {phase.phase}
                        </h4>
                        <p className="text-xs uppercase tracking-wider font-jost text-primary">
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-sm font-jost text-foreground/60"
                        >
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Working Principles */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.div variants={childVariants} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-jost text-foreground">
              My <span className="text-primary">Principles</span>
            </h3>
            <p className="text-base font-jost text-foreground/50">
              Core values that guide every engagement.
            </p>
          </motion.div>

          <motion.div
            variants={staggerOrchestrator}
            className="grid md:grid-cols-2 gap-6"
          >
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative bg-background border border-border p-6 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary/10">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 font-jost text-foreground">
                          {principle.title}
                        </h4>
                        <p className="leading-relaxed font-jost text-foreground/60">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* How I Help */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.div variants={childVariants} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-jost text-foreground">
              How I <span className="text-primary">Help</span>
            </h3>
            <p className="text-base font-jost text-foreground/50">
              Strategy through implementation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerOrchestrator}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Brain,
                title: 'Product Strategy',
                description: 'Finding product-market fit. Cutting through noise to identify what actually matters for your users and business.',
              },
              {
                icon: Zap,
                title: 'Technology Strategy',
                description: 'Stack selection, MVP prototyping, build vs. buy decisions—the right technical choices at the right time.',
              },
              {
                icon: Rocket,
                title: 'Hands-On Execution',
                description: 'Not just strategy decks. I build alongside your team from architecture through launch.',
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative bg-background border border-border p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h4 className="text-xl font-bold mb-3 font-jost text-foreground">
                      {item.title}
                    </h4>

                    <p className="leading-relaxed font-jost text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={childVariants} className="text-lg mb-6 font-jost text-foreground/60">
            Interested in working together?
          </motion.p>
          <motion.div variants={childVariants}>
            <Link href="/contact">
              <button
                className="group relative px-10 py-5 font-semibold text-sm flex items-center justify-center gap-3 mx-auto overflow-hidden font-jost bg-foreground text-background tracking-widest uppercase hover:bg-primary transition-colors duration-300"
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
