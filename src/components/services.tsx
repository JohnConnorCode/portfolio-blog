'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Lightbulb, Mountain, Layers, Compass } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Community Architecture',
    description: 'Building systems that foster real human connection and local engagement.',
    philosophy: 'Technology should bring us together, not isolate us.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Foresight',
    description: 'Guiding organizations through transformation with wisdom and long-term thinking.',
    philosophy: 'The future requires both innovation and conservation.',
  },
  {
    icon: Heart,
    title: 'Human-Centered Systems',
    description: 'Designing technology that amplifies humanity rather than replacing it.',
    philosophy: 'Every system should make us more human, not less.',
  },
  {
    icon: Mountain,
    title: 'Transformative Challenges',
    description: 'Creating frameworks for growth through deliberate difficulty and community support.',
    philosophy: 'Comfort is the enemy of growth.',
  },
  {
    icon: Layers,
    title: 'Creator Economics',
    description: 'Building sustainable value systems that honor creator autonomy and dignity.',
    philosophy: 'Creators are humans first, content producers second.',
  },
  {
    icon: Compass,
    title: 'Philosophical Consulting',
    description: 'Helping organizations align technology with timeless human values.',
    philosophy: 'Modern problems require ancient wisdom.',
  },
]

export function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How I Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every engagement is rooted in a deep understanding of both 
            human nature and technological possibility.
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
                className="group"
              >
                <div className="h-full p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                  <Icon className="w-10 h-10 mb-6 stroke-1" />
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <p className="text-sm italic text-muted-foreground/80 pt-4 border-t border-foreground/5">
                    "{service.philosophy}"
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}