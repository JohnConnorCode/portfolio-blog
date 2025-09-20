'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Shield, Compass, Code, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatedLetters } from '@/components/animated-text'
import { SectionDivider } from '@/components/section-divider'
import { AnimatedBorderBox } from '@/components/animated-border-box'

const methods = [
  {
    icon: Target,
    title: 'Surface reality',
    description: 'Name assumptions clearly. Stress test them. Expose every idea to conditions that can break it.'
  },
  {
    icon: Zap,
    title: 'Design alignment',
    description: 'Incentives matter more than intentions. Architectures shape behavior whether we admit it or not. Build so that valuable actions compound and noise collapses.'
  },
  {
    icon: Shield,
    title: 'Embrace difficulty',
    description: 'Risk, conflict, and error in public are not threats. They are conditions for growth. Create environments where people must face them.'
  },
  {
    icon: Compass,
    title: 'Judge by outcomes',
    description: 'Do not mistake appearance for achievement. The test is whether something produces durable, compounding value in the world.'
  }
]

const ventures = [
  {
    name: 'Super Debate',
    description: 'Built on the conviction that growth requires confrontation. Creates rooms where people risk themselves in public, test their ideas, and leave sharper for it.'
  },
  {
    name: 'Accelerate',
    description: 'Redesigning how ecosystems fund builders. Funds only when milestones are delivered. Transparent, accountable, aligned with integrity.'
  },
  {
    name: 'Earlier Ventures',
    description: 'Sparkblox, Upland, Mode Mobile, HelpWith — experiments in alignment at different scales. Each revealed truths that only reality can teach.'
  }
]

export default function PhilosophyPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <AnimatedLetters 
            text="Philosophy" 
            className="text-5xl sm:text-6xl font-black mb-8 text-center block leading-[1.1] sm:leading-[1.05]"
            as="h1"
          />
        </motion.div>

        {/* Formation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6 text-cyan-400"
          >
            Formation
          </motion.h2>
          
          <motion.div
            className="prose prose-lg mx-auto text-muted-foreground space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I began as a debater in high school. Debate was my first laboratory for truth. You stood in public and risked humiliation for the chance to sharpen your thinking. Losing was painful but it revealed what was real.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              I moved from competing to teaching. I organized programs where younger students learned to test themselves through conflict. I also worked with decentralized community groups in education and food distribution. These grassroots projects were chaotic but they showed me how fragile trust can be, how easily cooperation unravels, and how much stronger people become when they take responsibility together.
            </motion.p>
          </motion.div>
        </motion.section>

        <SectionDivider variant="organic" />

        {/* Orientation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6 text-purple-400"
          >
            Orientation
          </motion.h2>
          
          <motion.div
            className="prose prose-lg mx-auto text-muted-foreground space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Those experiences shaped my orientation. I am drawn to work that cannot hide behind appearances. I want environments where illusions collapse, where outcomes are visible, and where participation makes people stronger.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              I am not motivated by novelty. I am motivated by leverage. By designs that compound value over time, not by avoiding reality but by exposing it. By tools and institutions that make people more capable of perceiving clearly, deciding wisely, and acting with conviction.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Commitments */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6 text-cyan-400"
          >
            Commitments
          </motion.h2>
          
          <motion.div
            className="prose prose-lg mx-auto text-muted-foreground space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I do not accept claims that cannot be tested. I do not trust metrics that exist to flatter. The only measure that matters is whether something holds up under pressure and creates durable value when exposed to the world.
            </motion.p>
            <motion.p
              className="text-lg font-semibold text-foreground border-l-4 border-cyan-400 pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Confrontation clarifies. Comfort dulls. Ideas matter only when embodied. Nothing is ever finished. Everything is in the process of becoming.
            </motion.p>
          </motion.div>
        </motion.section>

        <SectionDivider variant="organic" />

        {/* Method */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Method
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Over the years I have refined a way of working that applies across debate, community organizing, startups, and ecosystems.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon
              return (
                <AnimatedBorderBox
                  key={method.title}
                  delay={index * 0.2}
                  className="p-6 rounded-xl hover:bg-foreground/5 transition-colors"
                  borderColor="rgba(0, 200, 255, 0.3)"
                >
                  <div className="flex gap-4">
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.4,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, ease: "easeOut" }}
                    >
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </motion.div>
                  </div>
                </AnimatedBorderBox>
              )
            })}
          </div>
        </motion.section>

        {/* In Practice */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-8 text-purple-400"
          >
            In Practice
          </motion.h2>
          
          <div className="space-y-6">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className="border-l-2 border-cyan-400/30 pl-6 hover:border-cyan-400 transition-colors"
              >
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, ease: "easeOut" }}
                  className="text-xl font-bold mb-2 text-cyan-400"
                >
                  {venture.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, ease: "easeOut" }}
                  className="text-muted-foreground"
                >
                  {venture.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SectionDivider variant="organic" />

        {/* Today */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6 text-cyan-400"
          >
            Today
          </motion.h2>
          
          <motion.div
            className="prose prose-lg mx-auto text-muted-foreground space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I am a technologist and a product strategist. My work is to imagine better futures and to build the scaffolding that makes them real. Sometimes that means designing platforms that reward integrity. Sometimes it means creating communities where people confront each other directly. Sometimes it means helping founders or ecosystems articulate and execute their own visions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="font-semibold text-foreground"
            >
              The common thread is this: I build with an eye on what compounds, what holds up under pressure, and what makes people stronger.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 p-8 border border-foreground/10 rounded-lg bg-gradient-to-br from-cyan-400/5 to-purple-400/5"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6"
          >
            Closing
          </motion.h2>
          
          <motion.div
            className="prose prose-lg mx-auto text-muted-foreground space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I do not build for polish or for spectacle. I build to expose what is real, to create structures that reward courage, and to shape futures that are worth inhabiting.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              That throughline runs from debate podiums to grassroots organizing to venture building and ecosystem design. It is the principle that connects my past and the role I play now — helping turn vision into reality.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-3 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-semibold">View My Work</span>
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
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}