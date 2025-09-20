'use client'

import { motion } from 'framer-motion'
import { Users, Brain, Lightbulb, Target, Layers, Compass } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Product Strategy & PMF',
    description: 'Finding product-market fit through deep user research and behavioral analysis.',
    philosophy: 'Great products solve real problems, not hypothetical ones.',
  },
  {
    icon: Users,
    title: 'User Research & Insights',
    description: 'Uncovering what users actually need through systematic research and testing.',
    philosophy: 'Users tell you everything, if you know how to listen.',
  },
  {
    icon: Target,
    title: 'Product Gap Analysis',
    description: 'Identifying and fixing usability issues that prevent product success.',
    philosophy: 'The gap between what users need and what products deliver is opportunity.',
  },
  {
    icon: Lightbulb,
    title: 'AI & Web3 Product Development',
    description: 'Leveraging cutting-edge technologies to solve complex product challenges.',
    philosophy: 'New technology should enhance human capability, not replace judgment.',
  },
  {
    icon: Layers,
    title: 'Technology Strategy & Leadership',
    description: 'Bridging technical complexity with business value for scalable solutions.',
    philosophy: 'Technical depth enables better product decisions.',
  },
  {
    icon: Compass,
    title: 'Behavioral Product Design',
    description: 'Applying economics and behavioral theory to create products that work with human nature.',
    philosophy: 'Understanding humans is the key to building products they actually use.',
  },
]

export function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Product Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            Technical product leadership grounded in philosophy, economics, and behavioral theory—
            from local businesses to $50M+ startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="h-full p-10 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 rounded-xl">
                  <Icon className="w-12 h-12 mb-8 stroke-1" />
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-base sm:text-lg text-gray-100 mb-6 leading-relaxed">{service.description}</p>
                  
                  <p className="text-sm sm:text-base italic text-gray-100/80 pt-6 border-t border-foreground/5">
                    &ldquo;{service.philosophy}&rdquo;
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}