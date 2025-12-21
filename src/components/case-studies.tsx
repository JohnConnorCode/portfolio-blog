'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, TrendingUp, Brain, Layers } from 'lucide-react'
import Link from 'next/link'

const caseStudies = [
  {
    id: 'thrive-protocol',
    title: 'Thrive Protocol',
    subtitle: 'AI-Powered Grant Evaluation',
    description: 'Built an AI system that reduced grant review time by 90% while maintaining human oversight for critical decisions.',
    challenge: 'Manual review of thousands of grant applications was taking weeks and creating bottlenecks in ecosystem funding.',
    solution: 'Developed Polyval, an AI-powered scoring engine that evaluates applications based on multiple criteria while flagging edge cases for human review.',
    results: [
      '$2M+ in grants efficiently allocated',
      '90% reduction in review time',
      '100+ projects funded',
      'Maintained human judgment for final decisions'
    ],
    technologies: ['AI/ML', 'Natural Language Processing', 'Python', 'Decision Trees'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    metrics: {
      efficiency: '+90%',
      accuracy: '95%',
      scale: '1000+ applications'
    }
  },
  {
    id: 'upland',
    title: 'Upland',
    subtitle: 'Virtual Property Platform Scaling',
    description: 'Scaled a virtual property game from 1K to 200K+ monthly active users through product-market fit discovery.',
    challenge: 'The platform was struggling with user retention and needed to find sustainable growth mechanisms.',
    solution: 'Conducted extensive user research, redesigned onboarding, implemented behavioral economics principles, and launched the SPARK token economy.',
    results: [
      '200K+ monthly active users',
      '15x growth in user engagement',
      'Successfully launched SPARK token',
      'Created sustainable virtual economy'
    ],
    technologies: ['Web3', 'Token Economics', 'Behavioral Design', 'React'],
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-500',
    metrics: {
      growth: '200x',
      retention: '+45%',
      revenue: '+300%'
    }
  },
  {
    id: 'sparkblox',
    title: 'Sparkblox',
    subtitle: 'NFT 2.0 Infrastructure',
    description: 'Founded and led development of next-generation NFT infrastructure with major blockchain partnerships.',
    challenge: 'NFTs were limited to simple ownership. We needed to create programmable, interoperable digital assets.',
    solution: 'Built universal NFT standards, created cross-chain compatibility layers, and established partnerships with Chainlink and Algorand.',
    results: [
      '$1M+ in funding raised',
      'Partnerships with Chainlink & Algorand',
      'Team of 18 people',
      'POCs on multiple blockchains'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'Solidity', 'Cross-chain'],
    icon: Layers,
    color: 'from-green-500 to-emerald-500',
    metrics: {
      funding: '$1M+',
      team: '18 people',
      chains: '3 blockchains'
    }
  },
  {
    id: 'local-business',
    title: 'Local Business Transformation',
    subtitle: 'From Hummus Shop to Digital Success',
    description: 'Helped local businesses compete digitally through user research and practical product improvements.',
    challenge: 'Local businesses were losing customers to digital-first competitors but lacked resources for major tech investments.',
    solution: 'Conducted customer interviews, identified key friction points, implemented simple but effective digital solutions.',
    results: [
      '40% increase in repeat customers',
      'Reduced order friction by 60%',
      'Improved customer satisfaction scores',
      'Created sustainable growth model'
    ],
    technologies: ['User Research', 'Product Strategy', 'Simple Tech Stack', 'Analytics'],
    icon: Users,
    color: 'from-orange-500 to-red-500',
    metrics: {
      retention: '+40%',
      efficiency: '+60%',
      NPS: '+35'
    }
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Detailed <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Real problems, real solutions, real impact. From local businesses to high-growth startups.
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${study.color} text-white`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                            <p className="text-gray-100">{study.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg mb-6">{study.description}</p>
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-background/50 rounded-lg">
                              <p className="text-2xl font-bold text-primary">{value}</p>
                              <p className="text-xs text-gray-100 capitalize">{key}</p>
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
                      
                      {/* Right Side - Details */}
                      <div className="space-y-6">
                        {/* Challenge */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-gray-100 uppercase tracking-wider">
                            The Challenge
                          </h4>
                          <p className="text-foreground/80">{study.challenge}</p>
                        </div>
                        
                        {/* Solution */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-gray-100 uppercase tracking-wider">
                            The Solution
                          </h4>
                          <p className="text-foreground/80">{study.solution}</p>
                        </div>
                        
                        {/* Results */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm text-gray-100 uppercase tracking-wider">
                            The Results
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-foreground/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-100 mb-6">
            Every project starts with understanding the real problem
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center gap-2 mx-auto"
            >
              Let&apos;s Solve Your Product Challenge
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}