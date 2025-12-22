'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Users, TrendingUp, Code, Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Automation Consultant',
    company: 'Thrive Protocol',
    period: '2025 – Present',
    description: 'Managed $2M+ grant allocations, built AI-powered evaluation systems achieving 90% time savings in grant review process.',
    icon: Users,
    metrics: ['$2M+ Managed', 'AI Grant Scoring', '90% Time Savings'],
    current: true
  },
  {
    role: 'Founder & Product Lead',
    company: 'Sparkblox',
    period: 'Feb 2021 – Mar 2024',
    description: 'Raised over $1M for NFT 2.0 infrastructure, forged partnerships with Chainlink and Algorand, and built a cross-functional team to design and refine an advanced Web3 platform.',
    icon: Code,
    metrics: ['$1M+ Raised', '20+ Artist Partners', 'Chainlink & Algorand']
  },
  {
    role: 'Product & Ops Manager',
    company: 'Upland',
    period: 'Jul 2020 – Aug 2021',
    description: 'Designed a growth strategy that increased revenue 15x, scaled to 300,000+ monthly active users, and launched the SPARK token on EOS.',
    icon: TrendingUp,
    metrics: ['15x Revenue', '300K+ MAU', 'SPARK Token Launch']
  },
  {
    role: 'Technical Product Manager',
    company: 'Mode Mobile',
    period: 'Sep 2019 – Jul 2020',
    description: 'Led product strategy and managed a 15-person team to develop the Earning app and Earn Phone, driving engagement and unlocking new revenue streams.',
    icon: Code,
    metrics: ['15-Person Team', 'AI-Powered Suggestions', 'New Revenue Streams']
  },
  {
    role: 'Product Strategy Consultant',
    company: 'BusinessOfAI',
    period: 'Sep 2018 – Present',
    description: 'Provided strategic product consulting to 30+ tech startups, advising on market positioning, product validation, and go-to-market strategies.',
    icon: Briefcase,
    metrics: ['30+ Startups', 'Karma Circle', 'Work+Shelter'],
    current: true
  },
  {
    role: 'Founder & Product Lead',
    company: 'HelpWith.co',
    period: 'Sep 2013 – May 2018',
    description: 'Founded and scaled a skill-sharing marketplace, attracting 3,000+ service providers and implementing an AI-powered recommendation engine.',
    icon: Users,
    metrics: ['3,000+ Providers', 'AI Recommendations', 'Peer-to-Peer Network']
  }
]

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        style={{ opacity, y }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            <span style={{ color: 'var(--white)', fontWeight: 300 }}>BATTLE-TESTED</span>
            <span className="text-gradient" style={{ fontWeight: 700 }}> EXPERIENCE</span>
          </h2>
          <p className="text-base sm:text-lg font-light tracking-wide max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
            15 years. Real impact. No bullshit.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`card-brutal group ${
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
                    <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                    <p className="text-base sm:text-lg text-foreground/80">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-xs border border-foreground/20 font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}