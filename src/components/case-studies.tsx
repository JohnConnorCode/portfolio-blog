'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Brain, Layers } from 'lucide-react'
import Link from 'next/link'
import {
  sectionWithChildrenVariants,
  childVariants,
  itemVariants,
  viewportOnce,
} from '@/lib/animation-config'

const caseStudies = [
  {
    id: 'upland',
    title: 'Upland',
    subtitle: 'From Struggling to 15x Growth',
    description: 'Found product-market fit for a Web3 virtual economy. The ONE insight that changed everything.',
    stuck: 'Upland had users but couldn\'t keep them. Retention was falling. The token felt like a gimmick.',
    insight: 'Users didn\'t want to BUY value—they wanted to EARN it. We redesigned the entire economy around achievement, not speculation.',
    outcome: '13K → 300K users. 15x growth. 40% better D7 retention.',
    results: [
      '300K+ monthly active users',
      '15x growth in user engagement',
      '40% improvement in D7 retention',
      'SPARK token launched successfully'
    ],
    technologies: ['Token Economics', 'User Research', 'Behavioral Design'],
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-500',
    metrics: {
      before: '13K users',
      after: '300K users',
      growth: '15x'
    }
  },
  {
    id: 'mode-mobile',
    title: 'Mode Mobile',
    subtitle: 'Saved a Failing Product',
    description: 'Inherited a product that was dying. Found the real problem. Pivoted to PMF.',
    stuck: 'Revenue was declining. Users said they loved features they never used. The team was building the wrong things.',
    insight: 'We stopped listening to what users said and started watching what they did. The data told a different story.',
    outcome: '3x revenue. 50% less churn. Product saved.',
    results: [
      '3x revenue increase',
      '50% reduction in churn',
      'Killed features users "wanted" but didn\'t use',
      'Found the real value proposition'
    ],
    technologies: ['User Research', 'Analytics', 'Product Strategy'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    metrics: {
      revenue: '3x',
      churn: '-50%',
      time: '6 months'
    }
  },
  {
    id: 'sparkblox',
    title: 'Sparkblox',
    subtitle: 'Zero to Funded Startup',
    description: 'Built a company from scratch. Raised capital. Shipped product. Learned hard lessons.',
    stuck: 'NFT infrastructure was fragmented. Brands wanted to use NFTs but couldn\'t build custom experiences.',
    insight: 'The market wasn\'t ready. We built beautiful tech for a problem that wasn\'t urgent enough. A $1M lesson.',
    outcome: '$1M raised. 18-person team. Partnerships with Chainlink & Algorand. Then: honest pivot.',
    results: [
      '$1M+ in funding raised',
      'Partnerships with Chainlink & Algorand',
      'Team of 18 engineers',
      'Hard lessons on timing vs. product'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'Team Building'],
    icon: Layers,
    color: 'from-green-500 to-emerald-500',
    metrics: {
      funding: '$1M+',
      team: '18 people',
      lesson: 'Timing matters'
    }
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.h2 variants={childVariants} className="text-3xl sm:text-4xl font-bold mb-4">
            Case <span className="text-gradient">Studies</span>
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-foreground/90 max-w-3xl mx-auto">
            Real problems, real solutions, real outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-24"
        >
          {caseStudies.map((study) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Case Study Card */}
                <div className="glass rounded-2xl p-8 sm:p-12 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${study.color} opacity-10 blur-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Overview */}
                      <div>
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${study.color} text-primary-foreground`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                            <p className="text-foreground/90">{study.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg mb-6">{study.description}</p>
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-background/50 rounded-lg">
                              <p className="text-2xl font-bold text-primary">{value}</p>
                              <p className="text-xs text-muted-foreground capitalize">{key}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side - Transformation Narrative */}
                      <div className="space-y-6">
                        {/* The Stuck */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                            The Stuck
                          </h4>
                          <p className="text-foreground/80">{study.stuck}</p>
                        </div>

                        {/* The Insight */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-primary uppercase tracking-wider">
                            The Insight
                          </h4>
                          <p className="text-foreground/90 font-medium">{study.insight}</p>
                        </div>

                        {/* The Outcome */}
                        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <h4 className="font-semibold mb-2 text-sm text-primary uppercase tracking-wider">
                            The Outcome
                          </h4>
                          <p className="text-lg font-bold text-foreground">{study.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <motion.p variants={childVariants} className="text-lg text-foreground/90 mb-6">
            Have a project in mind?
          </motion.p>
          <motion.div variants={childVariants}>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 flex items-center gap-2 mx-auto">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}