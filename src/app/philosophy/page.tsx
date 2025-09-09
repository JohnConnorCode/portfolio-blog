'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Brain, Mountain, Book } from 'lucide-react'
import Link from 'next/link'
import { AnimatedText, AnimatedLetters, FadeInText } from '@/components/animated-text'
import { SectionDivider } from '@/components/section-divider'

const principles = [
  {
    icon: Users,
    title: 'Community First',
    description: 'Technology should bring us together, not apart. Real growth happens in person, through challenge and vulnerability.',
  },
  {
    icon: Heart,
    title: 'Humanity at the Core',
    description: 'Every system, every strategy must honor human values and needs. We are not machines to be optimized.',
  },
  {
    icon: Brain,
    title: 'Thoughtful Innovation',
    description: 'Progress without wisdom is dangerous. We must think deeply about the futures we&apos;re creating.',
  },
  {
    icon: Mountain,
    title: 'Embrace Challenge',
    description: 'Growth requires discomfort. We must be willing to fail, to be embarrassed, to transform.',
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
              I&apos;ve spent twenty years thinking about how humans and technology intersect—since I was sixteen, 
              standing at debate podiums, arguing about product decisions and market forces that didn&apos;t yet exist.
            </p>
            
            <p className="text-xl leading-relaxed">
              What I&apos;ve learned is this: great products aren&apos;t just built, they&apos;re discovered. 
              Through deep user research, behavioral economics, and philosophical inquiry into what humans 
              actually need versus what they think they want.
            </p>
          </div>
        </motion.div>

        {/* About / Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <AnimatedText 
            as="h2" 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          >
            Technical Product Philosophy
          </AnimatedText>
          
          <FadeInText delay={0.3}>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                I grew up debating ideas, reading philosophers like Nietzsche, and studying behavioral economists 
                like Daniel Kahneman. That blend of rigorous argument, philosophical depth, and behavioral insight 
                shapes my product work today. I&apos;ve worked with everyone from local hummus companies to startups 
                with $50M+ funding, solving real product problems through user research and market analysis. 
                Every project reinforces a core principle: understand the human first, then build the solution.
              </p>
            </div>
          </FadeInText>
          
          <AnimatedText 
            as="h3" 
            className="text-2xl sm:text-3xl font-bold mb-6 text-center mt-12"
            delay={0.4}
          >
            My Product Approach
          </AnimatedText>
          
          <FadeInText delay={0.5}>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Great products emerge from understanding both technical constraints and human behavior. I combine 
                deep technical knowledge (AI, Web3, systems architecture) with behavioral economics and user 
                research to find what users actually need. This isn&apos;t about building features—it&apos;s about 
                solving real problems that create genuine value.
              </p>
            </div>
          </FadeInText>
          
          <AnimatedText 
            as="h3" 
            className="text-2xl sm:text-3xl font-bold mb-6 text-center mt-12"
            delay={0.6}
          >
            My approach
          </AnimatedText>
          
          <FadeInText delay={0.7}>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Talk to users extensively—behavioral insights beat assumptions every time.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Find the product gaps—identify what&apos;s preventing user adoption and business growth.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Apply technical depth—use AI and Web3 thoughtfully, not because they&apos;re trendy.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Solve real problems—focus on what users actually need, not what we think they should want.
                </p>
              </div>
            </div>
          </FadeInText>
        </motion.div>

        <SectionDivider variant="organic" />

        {/* Core Belief */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 py-12 border-y border-foreground/10"
        >
          <blockquote className="text-2xl sm:text-3xl font-light text-center leading-relaxed">
            &ldquo;We must be humans <em>with</em> technology,<br />
            not humans <em>against</em> technology,<br />
            and never humans <em>replaced by</em> technology.&rdquo;
          </blockquote>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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

        {/* Super Debate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20 p-8 border border-foreground/10"
        >
          <h2 className="text-3xl font-bold mb-6">Product Philosophy in Practice</h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Every product decision I make is grounded in understanding human behavior. 
            This means extensive user interviews, behavioral analysis, and testing 
            assumptions against real-world usage patterns.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            Whether it&apos;s a local business trying to understand their customers or a 
            high-growth startup building AI products, the fundamentals are the same: 
            solve real problems for real people, guided by data and human insight.
          </p>
          
          <Link href="/work#super-debate">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              See My Product Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Influences */}
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
        </motion.div>

        {/* The Future */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Building the Future</h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m idealistic enough to believe we can build a better world, 
            and experienced enough to know it must be grounded in human reality.
          </p>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every project I take on, every system I build, is guided by this question: 
            <span className="block mt-4 font-semibold text-foreground">
              Does this make us more human, or less?
            </span>
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
              >
                See My Work
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-foreground/20 hover:border-foreground transition-all duration-300"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}