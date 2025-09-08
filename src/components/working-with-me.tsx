'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Calendar, MessageSquare, Rocket, Target, Users, Brain, Eye, Zap, Unlock } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Working With Me
          </AnimatedText>
          <FadeInText delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to transformation that delivers quick wins while building for the long term
            </p>
          </FadeInText>
        </motion.div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">The Process</h3>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            {process.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 bg-background">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 border-2 border-primary bg-background rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{phase.phase}</h4>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
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
          <h3 className="text-2xl font-bold mb-8 text-center">My Principles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 border border-foreground/10 hover:border-foreground/30 transition-all rounded-lg"
              >
                <principle.icon className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold mb-2">{principle.title}</h4>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-lg border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Direct Access
              </h4>
              <p className="text-muted-foreground">
                Weekly calls, async communication, and rapid response times. I&apos;m embedded in your team.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Strategic Thinking
              </h4>
              <p className="text-muted-foreground">
                15+ years of pattern recognition across industries, applied to your specific challenges.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Execution Power
              </h4>
              <p className="text-muted-foreground">
                I don&apos;t just advise—I build, ship, and iterate alongside your team.
              </p>
            </div>
          </div>
        </motion.div>

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