'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Brain, Mountain, Book, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { AnimatedText, AnimatedLetters, FadeInText } from '@/components/animated-text'
import { SectionDivider } from '@/components/section-divider'

const principles = [
  {
    icon: Users,
    title: 'Humans First, Always',
    description: 'Technology should amplify human capability, not replace human judgment. Every system must honor human values.',
  },
  {
    icon: Brain,
    title: 'Behavioral Understanding',
    description: 'Great products emerge from understanding how humans actually behave, not how we think they should.',
  },
  {
    icon: Lightbulb,
    title: 'Solve Real Problems',
    description: 'Focus on what users actually need through research and testing, not assumptions and wishful thinking.',
  },
  {
    icon: Mountain,
    title: 'Embrace Hard Truths',
    description: 'Growth requires facing uncomfortable realities about products, markets, and human nature.',
  },
]

const influences = [
  { author: 'Daniel Kahneman', work: 'Behavioral economics and decision-making' },
  { author: 'Clayton Christensen', work: 'Jobs-to-be-done theory' },
  { author: 'Friedrich Nietzsche', work: 'On becoming who you are' },
  { author: 'Richard Thaler', work: 'Nudge theory and behavioral insights' },
]

export default function PhilosophyPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <AnimatedLetters 
            text="Philosophy" 
            className="text-5xl sm:text-6xl font-bold mb-8 text-center block"
            as="h1"
          />
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl leading-relaxed mb-6">
              Twenty years of thinking about how humans and technology intersect—from debate podiums 
              at sixteen to building products that actually work at scale.
            </p>
            
            <p className="text-xl leading-relaxed">
              What I&apos;ve learned: great products aren&apos;t built, they&apos;re discovered. 
              Through user research, behavioral economics, and understanding what humans 
              actually need versus what they think they want.
            </p>
          </div>
        </motion.div>

        {/* Core Belief */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 py-12 border-y border-foreground/10"
        >
          <blockquote className="text-2xl sm:text-3xl font-light text-center leading-relaxed">
            &ldquo;We must be humans <em>with</em> technology,<br />
            not humans <em>against</em> technology,<br />
            and never humans <em>replaced by</em> technology.&rdquo;
          </blockquote>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <AnimatedText 
            as="h2" 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          >
            How I Work
          </AnimatedText>
          
          <FadeInText delay={0.4}>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                I combine deep technical knowledge (AI, Web3, systems architecture) with behavioral economics 
                and philosophy. This isn&apos;t about building features—it&apos;s about solving real problems 
                that create genuine value.
              </p>
              
              <p className="text-lg leading-relaxed">
                From local businesses to $50M+ startups, the process is always the same: extensive user research, 
                behavioral analysis, and testing assumptions against reality. Because understanding the human 
                comes before building the solution.
              </p>
            </div>
          </FadeInText>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Guiding Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-foreground/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <SectionDivider variant="organic" />

        {/* Intellectual Foundations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Intellectual Foundations</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {influences.map((influence, index) => (
              <motion.div
                key={influence.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-4 border-l-2 border-foreground/10"
              >
                <Book className="w-5 h-5 mt-1 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{influence.author}</p>
                  <p className="text-sm text-muted-foreground italic">{influence.work}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground mt-8 text-center">
            These thinkers shaped how I approach product problems—always grounded in human behavior, 
            economic reality, and philosophical depth.
          </p>
        </motion.div>

        {/* Philosophy in Practice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20 p-8 border border-foreground/10"
        >
          <h2 className="text-3xl font-bold mb-6">Philosophy in Practice</h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            My work with Super Debate exemplifies this philosophy: creating spaces where people grow 
            through intellectual challenge, vulnerability, and genuine human connection—not digital metrics.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            Whether advising on AI strategy or fixing product-market fit, I apply the same principle: 
            technology should make us more human, not less.
          </p>
          
          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              See My Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Build Something Real?</h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            If you&apos;re solving real problems for real people—and want someone who thinks deeply 
            about both technology and humanity—let&apos;s talk.
          </p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}