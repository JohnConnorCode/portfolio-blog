'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Calendar, MessageSquare, Rocket, Target, Users, Brain, Eye, Zap, Unlock } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
import { AnimatedBorderBox } from '@/components/animated-border-box'
import Link from 'next/link'

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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            <span style={{ color: 'var(--white)', fontWeight: 300 }}>WORKING</span>
            <span className="text-gradient" style={{ fontWeight: 700 }}> WITH ME</span>
          </h2>
          <p className="text-lg font-light tracking-wide max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
            Structured transformation. Quick wins. Long-term impact.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span style={{ color: 'var(--white)', fontWeight: 300 }}>THE</span>
              <span className="text-gradient" style={{ fontWeight: 700 }}> PROCESS</span>
            </h3>
            <p className="text-lg font-light tracking-wide max-w-2xl mx-auto" style={{ color: 'var(--gray-400)' }}>
              From discovery to scale in 8 weeks.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Removed confusing connection line */}
            
            {process.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="relative group"
                >
                  <div className="relative z-10 bg-background p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                          {phase.phase}
                        </h4>
                        <p className="text-sm text-muted-foreground font-mono">
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <motion.li 
                          key={activity} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + activityIndex * 0.05,
                            duration: 0.4
                          }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {activity}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Working Principles */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span style={{ color: 'var(--white)', fontWeight: 300 }}>MY</span>
              <span className="text-gradient" style={{ fontWeight: 700 }}> PRINCIPLES</span>
            </h3>
            <p className="text-lg font-light tracking-wide max-w-2xl mx-auto" style={{ color: 'var(--gray-400)' }}>
              Core values that guide every engagement.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="group"
                >
                  <AnimatedBorderBox
                    delay={index * 0.1}
                    className="p-6 rounded-xl hover:bg-foreground/5 transition-all duration-300 h-full"
                    borderColor={index % 2 === 0 ? "rgba(0, 200, 255, 0.3)" : "rgba(147, 51, 234, 0.3)"}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                          {principle.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedBorderBox>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span style={{ color: 'var(--white)', fontWeight: 300 }}>WHAT YOU</span>
              <span className="text-gradient" style={{ fontWeight: 700 }}> GET</span>
            </h3>
            <p className="text-lg font-light tracking-wide max-w-2xl mx-auto" style={{ color: 'var(--gray-400)' }}>
              Direct partnership. Strategic insight. Tangible results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Direct Access',
                description: 'Weekly calls, async communication, and rapid response times. I\'m embedded in your team.',
                color: 'text-cyan-400'
              },
              {
                icon: Brain,
                title: 'Strategic Thinking',
                description: '15 years of pattern recognition across industries, applied to your specific challenges.',
                color: 'text-purple-400'
              },
              {
                icon: Rocket,
                title: 'Execution Power',
                description: 'I don\'t just advise—I build, ship, and iterate alongside your team.',
                color: 'text-pink-500'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="group"
                >
                  <AnimatedBorderBox
                    delay={index * 0.15}
                    className="p-8 rounded-xl hover:bg-foreground/5 transition-all duration-300 h-full"
                    borderColor={index === 0 ? "rgba(0, 200, 255, 0.3)" : index === 1 ? "rgba(147, 51, 234, 0.3)" : "rgba(236, 72, 153, 0.3)"}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedBorderBox>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your organization?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 font-medium text-lg flex items-center gap-2"
              >
                Schedule Discovery Call
                <Calendar className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#case-studies">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium text-lg flex items-center gap-2"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}