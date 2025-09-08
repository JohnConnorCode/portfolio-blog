'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Home, Shield, ArrowUpRight } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
import Link from 'next/link'

const ventures = [
  {
    name: 'Super Debate',
    description: 'An in-person debate platform for courage, growth and community.',
    category: 'Community Platform',
    icon: Users,
    link: '#super-debate',
    featured: true,
    impact: 'Strengthening communities through face-to-face intellectual discourse'
  },
  {
    name: 'Accelerate',
    description: 'An ecosystem builder connecting Web3 founders, investors, and communities.',
    category: 'Web3 Infrastructure',
    icon: Globe,
    link: '#accelerate',
    impact: 'Bridging builders with strategic resources and capital'
  },
  {
    name: 'ImpactCrew',
    description: 'Ecosystem growth programs focused on community building and strategic partnerships.',
    category: 'Growth Programs',
    icon: Users,
    link: '#impactcrew',
    impact: 'Scaling communities through strategic partnerships'
  },
  {
    name: 'AlphaTask',
    description: 'AI automation consulting to eliminate busywork through intelligent systems.',
    category: 'AI Automation',
    icon: Shield,
    link: '#alphatask',
    impact: 'Freeing humans for high-context creative work'
  },
  {
    name: 'Polyval',
    description: 'A modular, AI-powered grant-scoring engine that compresses weeks of review into minutes.',
    category: 'AI Tools',
    icon: Shield,
    link: '#polyval',
    impact: 'Transforming grant evaluation from weeks to minutes'
  }
]

export function Ventures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
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
            Current Focus & Recent Apps
          </AnimatedText>
          <FadeInText delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I build and launch experimental apps to explore how technology can serve humanity—tools for 
              collective decision-making, AI-driven matching, and community governance
            </p>
          </FadeInText>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {ventures.map((venture, index) => {
            const Icon = venture.icon
            return (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${
                  venture.featured ? 'md:col-span-2' : ''
                }`}
              >
                <Link href={venture.link}>
                  <div className={`p-8 border border-foreground/10 hover:border-primary/50 transition-all duration-300 h-full ${
                    venture.featured ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'hover:bg-muted/50'
                  }`}>
                    {venture.featured && (
                      <div className="absolute -top-3 -left-3 px-3 py-1 bg-foreground text-background text-xs font-semibold uppercase tracking-wider">
                        Featured Project
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 border border-foreground/20 group-hover:border-primary/50 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            {venture.name}
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {venture.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-4">
                      {venture.description}
                    </p>
                    
                    <p className="text-sm font-semibold text-primary">
                      {venture.impact}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}