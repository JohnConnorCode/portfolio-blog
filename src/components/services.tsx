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
    title: 'Technical Product Leadership',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Product Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                  <Icon className="w-10 h-10 mb-6 stroke-1" />
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">{service.description}</p>
                  
                  <p className="text-xs sm:text-sm italic text-muted-foreground/80 pt-4 border-t border-foreground/5">
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