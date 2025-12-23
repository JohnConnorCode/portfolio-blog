'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import {
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  viewportOnce,
} from '@/lib/animation-config'

const timeline = [
  {
    period: '2013–2018',
    title: 'HelpWith',
    role: 'Founder',
    description: 'Built a peer-to-peer marketplace for local services. Grew to 3,000+ providers and designed an AI-powered recommendation engine to match people with the right help.'
  },
  {
    period: '2018–2020',
    title: 'Product Consulting',
    role: 'Strategy & Product',
    description: 'Advised 30+ tech startups on product strategy, including Karma Circle and Work+Shelter. Helped teams find product-market fit and scale sustainably.'
  },
  {
    period: '2019–2020',
    title: 'ModeMobile',
    role: 'Technical Product Manager',
    description: 'Led a team of 15 building AI-powered features. Developed opportunity suggestion systems that helped users make better decisions.'
  },
  {
    period: '2020–2021',
    title: 'Upland.me',
    role: 'Product & Operations',
    description: 'Designed growth strategy for a Web3 virtual economy. Scaled revenue 15x and grew to 300,000+ monthly active users. Managed token economics and player dynamics at scale.'
  },
  {
    period: '2021–2024',
    title: 'Sparkblox',
    role: 'Founder & CEO',
    description: 'Built no-code NFT infrastructure. Raised $1M+ and partnered with Chainlink and Algorand. Learned hard lessons about ecosystem funding and builder incentives.'
  },
  {
    period: '2024–Present',
    title: 'SuperDebate & Consulting',
    role: 'Founder & Advisor',
    description: 'Building SuperDebate, a vision two decades in the making to restore structured discourse. Consulting with innovative startups and advising Work+Shelter on product strategy.'
  }
]

export default function BioPage() {
  return (
    <div className="bg-background font-jost">
      {/* Hero Section - CSS animations for mount (no flicker) */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div>
            {/* Decorative element */}
            <div className="flex items-center gap-4 mb-8 animate-in delay-0">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Biography</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-wide text-foreground leading-tight animate-in delay-1">
              John Connor
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 animate-in delay-2">
              I build technology that makes people more capable. Over 15 years, I&apos;ve founded companies, scaled products to hundreds of thousands of users, and learned that the best systems serve human flourishing. Not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-foreground"
            >
              Where I Come From
            </motion.h2>

            <motion.div variants={childVariants} className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                I grew up on Chicago&apos;s South Side. At 15, I was captain of my high school football team while secretly reading philosophy. Nietzsche, Plato, anything I could find.
              </p>
              <p>
                A history teacher noticed I argued about everything and pointed me toward competitive debate. That decision changed my life. I went from a kid who channeled frustration into conflict to someone who learned to channel it into rigorous thinking. By senior year, I&apos;d won the city championship and earned a full scholarship to college.
              </p>
              <p>
                What debate taught me wasn&apos;t how to win arguments. It was how to stress-test ideas, analyze complex systems quickly, and genuinely understand people who see the world differently. Those skills have informed everything I&apos;ve built since.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Now */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-foreground"
            >
              What I&apos;m Building
            </motion.h2>

            <motion.div variants={childVariants} className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-12">
              <p>
                Today I&apos;m focused on a vision two decades in the making, and helping innovative teams build what matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">SuperDebate</h3>
                <p className="text-foreground/60 mb-4">
                  A vision two decades in the making. SuperDebate restores structured discourse for adults: running tournaments, supporting debate clubs worldwide, and hosting the Infinita Championship. The ability to engage with opposing ideas is a civic skill we&apos;ve lost.
                </p>
                <Link href="/super-debate" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">Consulting & Advisory</h3>
                <p className="text-foreground/60 mb-4">
                  Working with innovative startups on product strategy and systems design. Currently advising Work+Shelter on their mission to connect housing and employment solutions.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold mb-12 text-foreground"
            >
              Career Timeline
            </motion.h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="text-xs text-primary font-medium tracking-wider uppercase mb-1">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm text-foreground/50 mb-2">{item.role}</div>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Think */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-foreground"
            >
              How I Think About Building
            </motion.h2>

            <motion.div variants={childVariants} className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                I&apos;m a systems thinker. I see products as living within ecosystems of incentives, behaviors, and constraints. The best technology doesn&apos;t fight these systems. It works with them to create compounding value.
              </p>
              <p>
                I&apos;ve learned to be skeptical of metrics that look good but don&apos;t matter. After watching startups implode chasing vanity numbers, I focus on what actually indicates health: retention, organic referrals, and whether users come back without being prompted.
              </p>
              <p>
                I believe in building in public, debating decisions openly, and changing my mind when the evidence demands it. The best ideas emerge from collision, not consensus.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionWithChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold mb-4 text-foreground"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-foreground/60 mb-8 max-w-xl mx-auto"
            >
              I&apos;m always interested in connecting with people building things that matter.
            </motion.p>
            <motion.div variants={childVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
