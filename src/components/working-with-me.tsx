'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, ArrowRight, Calendar, MessageSquare, Rocket, Target, Users, Brain, Eye, Zap, Unlock, Code } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
import { AnimatedBorderBox } from '@/components/animated-border-box'
import { fadeInUp, headerAnimation, cardHover, staggerContainer, ANIMATION_DELAY, SECTION_DELAYS } from '@/lib/animation-config'
import Link from 'next/link'
import { useRef } from 'react'

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
    title: 'No Vendor Lock-in',
    description: 'Open systems you can maintain and evolve without me.',
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
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: SECTION_DELAYS.workingWithMe }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            {...headerAnimation}
            className="heading-section mb-6"
          >
            <span style={{ color: '#ffffff', fontWeight: 300 }}>ADVISORY </span>
            <span style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              display: 'inline-block'
            }}>SERVICES</span>
          </motion.h2>
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
            className="text-lg font-light tracking-wide max-w-3xl mx-auto"
            style={{ color: 'var(--gray-400)' }}
          >
            AI and blockchain strategy. From vision to working product.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={fadeInUp}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h3
              {...headerAnimation}
              className="text-3xl font-bold mb-4"
            >
              <span style={{ color: '#ffffff', fontWeight: 300 }}>THE </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                display: 'inline-block'
              }}>PROCESS</span>
            </motion.h3>
            <motion.p
              {...headerAnimation}
              transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
              className="text-lg font-light tracking-wide max-w-2xl mx-auto"
              style={{ color: 'var(--gray-400)' }}
            >
              From discovery to scale in 8 weeks.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            {/* Removed confusing connection line */}

            {process.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  variants={fadeInUp}
                  {...cardHover}
                  className="relative group"
                >
                  <div className="relative z-10 bg-background p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/30 transition-all duration-300">
                    <motion.div
                      variants={fadeInUp}
                      className="flex items-center gap-4 mb-6"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <motion.h4
                          variants={fadeInUp}
                          className="font-bold text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                        >
                          {phase.phase}
                        </motion.h4>
                        <motion.p
                          variants={fadeInUp}
                          className="text-sm text-gray-400 font-mono"
                        >
                          {phase.duration}
                        </motion.p>
                      </div>
                    </motion.div>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-3"
                    >
                      {phase.activities.map((activity, activityIndex) => (
                        <motion.li
                          key={activity}
                          variants={fadeInUp}
                          className="flex items-start gap-3 text-sm text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {activity}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Working Principles */}
        <motion.div
          variants={fadeInUp}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h3
              {...headerAnimation}
              className="text-3xl font-bold mb-4"
            >
              <span style={{ color: '#ffffff', fontWeight: 300 }}>MY </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                display: 'inline-block'
              }}>PRINCIPLES</span>
            </motion.h3>
            <motion.p
              {...headerAnimation}
              transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
              className="text-lg font-light tracking-wide max-w-2xl mx-auto"
              style={{ color: 'var(--gray-400)' }}
            >
              Core values that guide every engagement.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <AnimatedBorderBox
                    delay={index * 0.1}
                    className="p-6 rounded-xl hover:bg-foreground/5 transition-all duration-300 h-full"
                    borderColor={index % 2 === 0 ? "rgba(0, 200, 255, 0.3)" : "rgba(147, 51, 234, 0.3)"}
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <motion.h4
                          variants={fadeInUp}
                          className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                        >
                          {principle.title}
                        </motion.h4>
                        <motion.p
                          variants={fadeInUp}
                          className="text-gray-400 leading-relaxed"
                        >
                          {principle.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatedBorderBox>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* What You Get */}
        <motion.div
          variants={fadeInUp}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h3
              {...headerAnimation}
              className="text-3xl font-bold mb-4"
            >
              <span style={{ color: '#ffffff', fontWeight: 300 }}>HOW I </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                display: 'inline-block'
              }}>HELP</span>
            </motion.h3>
            <motion.p
              {...headerAnimation}
              transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
              className="text-lg font-light tracking-wide max-w-2xl mx-auto"
              style={{ color: 'var(--gray-400)' }}
            >
              Helping companies build with AI and blockchain—strategy through implementation.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Brain,
                title: 'AI Strategy & Implementation',
                description: 'From proof-of-concept to production. Cutting through hype to build AI that actually works for your business.',
                color: 'text-cyan-400'
              },
              {
                icon: Zap,
                title: 'Blockchain Architecture',
                description: 'Token economics, smart contracts, decentralized systems—built for real utility, not speculation.',
                color: 'text-purple-400'
              },
              {
                icon: Rocket,
                title: 'End-to-End Delivery',
                description: 'Not just strategy decks. I build alongside your team from architecture through launch.',
                color: 'text-pink-500'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <AnimatedBorderBox
                    delay={index * 0.15}
                    className="p-8 rounded-xl hover:bg-foreground/5 transition-all duration-300 h-full"
                    borderColor={index === 0 ? "rgba(0, 200, 255, 0.3)" : index === 1 ? "rgba(147, 51, 234, 0.3)" : "rgba(236, 72, 153, 0.3)"}
                  >
                    <motion.div
                      variants={staggerContainer}
                      className="flex flex-col h-full"
                    >
                      <motion.div
                        variants={fadeInUp}
                        className="mb-6"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                      </motion.div>

                      <motion.h4
                        variants={fadeInUp}
                        className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                      >
                        {item.title}
                      </motion.h4>

                      <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 leading-relaxed flex-grow"
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </AnimatedBorderBox>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.p
            {...headerAnimation}
            className="text-lg text-gray-400 mb-6"
          >
            Interested in working together?
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}