'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, TrendingUp, Code, Briefcase } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'

const experiences = [
  {
    role: 'Ecosystem Specialist',
    company: 'Thrive Protocol',
    period: '2025–Present',
    description: 'Managed $2M+ grant allocations across multiple chains, trained AI models to evaluate grants, and became head of ecosystem management in under two months.',
    icon: Users,
    metrics: ['$2M+ Managed', 'AI Grant Scoring', 'Head of Ecosystem'],
    current: true
  },
  {
    role: 'Founder & Product Lead',
    company: 'Sparkblox',
    period: '2021–2024',
    description: 'Raised over $1M for NFT 2.0 infrastructure, forged partnerships with Chainlink and Algorand, and built a cross-functional team of 18.',
    icon: Code,
    metrics: ['$1M+ Raised', '18 Team Members', 'Chainlink & Algorand']
  },
  {
    role: 'Product & Ops Manager',
    company: 'Upland',
    period: '2020–2021',
    description: 'Redesigned the game economy, launched the SPARK token, and scaled to 200K monthly active users with 15x revenue growth.',
    icon: TrendingUp,
    metrics: ['15x Revenue', '200K MAU', 'SPARK Token Launch']
  },
  {
    role: 'Technical Product Manager',
    company: 'Mode Mobile',
    period: '2019–2020',
    description: 'Built an earn-to-own device program that distributed 1M+ devices and returned $50M+ in value to users through tokenized rewards.',
    icon: Code,
    metrics: ['1M+ Devices', '$50M+ User Value', 'Tokenized Rewards']
  },
  {
    role: 'Founder',
    company: 'HelpWith.co',
    period: '2013–2018',
    description: 'Created a peer-to-peer skills economy that onboarded 3,000+ providers, facilitated $500K+ in transactions with zero platform fees, and pioneered community-governed dispute resolution.',
    icon: Users,
    metrics: ['$500K+ Transactions', '0% Platform Fees', 'Community Governance']
  },
  {
    role: 'Strategy Consultant',
    company: 'Independent',
    period: '2018–Present',
    description: 'Advised 30+ startups as a strategy consultant on product, growth, and ecosystem design.',
    icon: Briefcase,
    metrics: ['30+ Startups', 'Strategy & Growth', 'Ecosystem Design'],
    current: true
  }
]

export function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="text-white">BATTLE-TESTED</span>
            <span className="text-cyan-400 neon-glow"> EXPERIENCE</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono uppercase tracking-widest max-w-3xl mx-auto">
            15 years. Real impact. No bullshit.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative p-8 bg-black border-3 border-white brutal-shadow hover:border-cyan-400 transition-all group ${
                  exp.current ? 'border-cyan-400' : ''
                }`}
              >
                {exp.current && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                    Current
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 border border-foreground/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-foreground/80">{exp.company}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs border border-foreground/20 font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}