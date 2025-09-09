'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Users, Rocket, ArrowRight } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
import Link from 'next/link'

const packages = [
  {
    name: 'AI & Automation Sprints',
    description: 'Identify bottlenecks and design intelligent systems that replace busywork with automation.',
    icon: Zap,
    highlights: ['Bottleneck Analysis', 'Intelligent System Design', 'Automation Implementation'],
    color: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    name: 'Web3 & Tokenomics Advisory',
    description: 'Create sustainable token economies and grant frameworks rooted in transparency and real value.',
    icon: Globe,
    highlights: ['Token Economy Design', 'Grant Frameworks', 'Transparency Systems'],
    color: 'from-purple-500/10 to-pink-500/10'
  },
  {
    name: 'Ecosystem & Community Design',
    description: 'Build infrastructures that empower communities and align incentives across stakeholders.',
    icon: Users,
    highlights: ['Community Infrastructure', 'Incentive Alignment', 'Stakeholder Mapping'],
    color: 'from-green-500/10 to-emerald-500/10'
  },
  {
    name: 'Product & Growth Accelerators',
    description: 'Rapid-fire workshops to refine product strategy, validate ideas, and accelerate go-to-market plans.',
    icon: Rocket,
    highlights: ['Product Strategy', 'Idea Validation', 'Go-to-Market Planning'],
    color: 'from-orange-500/10 to-red-500/10'
  }
]

export function ConsultingPackages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Consulting & Strategy Packages
          </AnimatedText>
          <FadeInText delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to achieve more in less time? I offer bespoke strategy packages tailored for companies, 
              startups and individuals. Each engagement is structured for quick wins and long-term 
              resilience—drawing on a decade of experience turning emerging technologies into real-world solutions.
            </p>
          </FadeInText>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                <div className="relative p-10 border border-foreground/10 hover:border-primary/50 transition-all duration-300 rounded-xl h-full backdrop-blur-sm">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 border border-foreground/20 group-hover:border-primary/50 transition-colors rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{pkg.name}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                        {pkg.description}
                      </p>
                      <div className="space-y-3">
                        {pkg.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm sm:text-base text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-3 text-base font-medium text-primary group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 font-medium text-base sm:text-lg"
            >
              Solve Your Product Problems
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}