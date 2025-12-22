'use client'

import { motion } from 'framer-motion'
import { Shield, Compass, ArrowRight, Eye, Scale } from 'lucide-react'
import Link from 'next/link'
import {
  pageHeaderVariants,
  decoratorVariants,
  titleVariants,
  sectionVariants,
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  viewportOnce,
  cardHover
} from '@/lib/animation-config'

const methods = [
  {
    icon: Eye,
    title: 'Surface Reality',
    description: 'Name assumptions clearly. Stress test them. Most failures come from solving the wrong problem well. We find the real problem first.',
  },
  {
    icon: Scale,
    title: 'Design Alignment',
    description: 'Incentives matter more than intentions. Build systems where what\'s good for users is good for the business. No manipulation required.',
  },
  {
    icon: Shield,
    title: 'Embrace Difficulty',
    description: 'The hard conversations reveal what\'s broken. We don\'t avoid them—we seek them out. That\'s where the insights hide.',
  },
  {
    icon: Compass,
    title: 'Judge by Outcomes',
    description: 'Not vanity metrics. Not growth theater. We measure what compounds. Durable value that holds up when exposed to reality.',
  }
]

export default function PhilosophyPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background font-jost">
      <div className="max-w-4xl mx-auto">
        {/* Header - Single animation group */}
        <motion.div
          variants={pageHeaderVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
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

          <motion.p variants={childVariants} className="text-lg max-w-2xl mx-auto font-light text-foreground/80">
            The principles and methods that guide how I build products and systems.
          </motion.p>
        </motion.div>

        {/* Core Insight - Single section animation */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <div className="rounded-r-lg pl-6 py-6 border-l-4 border-primary bg-primary/5">
            <p className="text-xl font-medium text-foreground mb-4">
              The best products come from understanding real problems deeply.
            </p>
            <p className="text-foreground/70">
              Not from assumptions. Not from what users say they want. From watching behavior, testing hypotheses, and building systems where incentives actually align.
            </p>
          </div>
        </motion.section>

        {/* Principles - Container with staggered children */}
        <motion.section
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.h2 variants={childVariants} className="text-3xl font-bold mb-4 text-center text-foreground">
            The <span className="text-primary">Principles</span>
          </motion.h2>
          <motion.p variants={childVariants} className="text-center mb-10 max-w-xl mx-auto text-foreground/70">
            Four ideas that guide how I approach product strategy and system design.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {methods.map((method) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="relative group"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-card rounded-xl p-6 h-full transition-colors duration-300 border border-border hover:border-primary/30">
                    <Icon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-sm text-foreground/70">{method.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* CTA - Single section animation */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden bg-card border border-border"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-2xl" />

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Have a project in mind?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-foreground/70">
            I partner with teams building products that matter. See the work or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </motion.section>
      </div>
    </section>
  )
}
