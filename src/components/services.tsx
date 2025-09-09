'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Product Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical product leadership grounded in philosophy, economics, and behavioral theory—
            from local businesses to $50M+ startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="h-full p-10 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 rounded-xl">
                  <Icon className="w-12 h-12 mb-8 stroke-1" />
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <p className="text-sm sm:text-base italic text-muted-foreground/80 pt-6 border-t border-foreground/5">
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