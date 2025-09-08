'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Users, Target, BarChart3, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Systems Architecture',
    description: 'Design and implement scalable systems that grow with your business needs.',
    features: ['Scalable Infrastructure', 'API Design', 'Performance Optimization'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to accelerate user acquisition and revenue growth.',
    features: ['Market Analysis', 'Growth Metrics', 'Conversion Optimization'],
  },
  {
    icon: Users,
    title: 'Creator Economy',
    description: 'Build platforms and tools that empower creators to monetize their content.',
    features: ['Monetization Systems', 'Creator Tools', 'Community Building'],
  },
  {
    icon: Target,
    title: 'Operations Excellence',
    description: 'Streamline operations to reduce costs and improve efficiency.',
    features: ['Process Automation', 'Cost Reduction', 'Team Optimization'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Transform data into actionable insights that drive decision making.',
    features: ['Data Strategy', 'KPI Development', 'Reporting Systems'],
  },
  {
    icon: Briefcase,
    title: 'Strategic Consulting',
    description: 'High-level advisory to help navigate complex business challenges.',
    features: ['Executive Advisory', 'Market Entry', 'Digital Transformation'],
  },
]

export function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I Can <span className="text-gradient">Help You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:bg-primary/5 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}