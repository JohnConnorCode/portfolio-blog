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
  { author: 'Friedrich Nietzsche', work: 'On becoming who you are' },
  { author: 'Ray Kurzweil', work: 'The acceleration of technology' },
  { author: 'Marshall McLuhan', work: 'Understanding media as extensions of man' },
  { author: 'Viktor Frankl', work: 'The search for meaning' },
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
              I&apos;ve spent twenty years thinking about the future—since I was sixteen, 
              standing at a debate podium, arguing about worlds that didn&apos;t yet exist.
            </p>
            
            <p className="text-xl leading-relaxed">
              What I&apos;ve learned is this: the current moment is just a moment. Culture, 
              meaning, values—they&apos;re all in flux. We are becoming something different, 
              always. The question is: what do we choose to conserve?
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
            Human-first futurism
          </AnimatedText>
          
          <FadeInText delay={0.3}>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                I grew up debating ideas and reading philosophers like Nietzsche while studying futurists like Ray Kurzweil. 
                That blend of rigorous argument and expansive vision shapes my work today. I&apos;ve launched startups, 
                raised millions, led high-growth teams and advised dozens of tech companies. Every project—whether 
                launching an NFT 2.0 platform or running grant programs—has reinforced a simple principle: automation 
                should free humans for high-context work, and open systems compound faster than walled gardens.
              </p>
            </div>
          </FadeInText>
          
          <AnimatedText 
            as="h3" 
            className="text-2xl sm:text-3xl font-bold mb-6 text-center mt-12"
            delay={0.4}
          >
            Why I created Super Debate
          </AnimatedText>
          
          <FadeInText delay={0.5}>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Super Debate is a live, in-person debate platform built on the belief that growth comes from challenges. 
                It&apos;s about choosing courage over perfection, learning through mistakes and embarrassment, and 
                strengthening communities by talking face-to-face. This ethos guides all my work: technology must 
                empower human judgment, not replace it.
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
                  Build systems that reward delivered value.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Design processes that eliminate busywork so people can focus on creative, high-impact work.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Create open frameworks where communities own and govern their infrastructure.
                </p>
              </div>
              <div className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all">
                <p className="text-lg leading-relaxed">
                  Make complexity simple—AI models that reduce weeks of grant evaluation to hours, or token 
                  economies that bring transparency and fairness to games and marketplaces.
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
          <h2 className="text-3xl font-bold mb-6">Super Debate: A Manifestation</h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Super Debate isn&apos;t just a project—it&apos;s a philosophy made real. 
            In a world increasingly mediated by screens, it brings people together 
            in person to engage with ideas that matter.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            It&apos;s about challenging yourself, being vulnerable in community, 
            and growing stronger through the discomfort of public discourse. 
            It&apos;s about preserving the ancient art of rhetoric in a digital age.
          </p>
          
          <Link href="/work#super-debate">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Learn About Super Debate
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