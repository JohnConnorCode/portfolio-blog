'use client'

import { motion } from 'framer-motion'
import { FadeInText } from '@/components/animated-text'

// Since we can't use actual logos without permission, we'll use text-based representations
// In production, replace these with actual logo images
const clients = [
  { name: 'Chainlink', category: 'Web3' },
  { name: 'Algorand', category: 'Blockchain' },
  { name: 'Thrive Protocol', category: 'DeFi' },
  { name: 'Upland', category: 'Gaming' },
  { name: 'Mode Mobile', category: 'FinTech' },
  { name: 'Karma Circle', category: 'Social' },
  { name: 'Work+Shelter', category: 'Impact' },
  { name: '30+ Startups', category: 'Various' },
]

export function ClientLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <FadeInText>
          <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by innovators across Web3, AI, and community platforms
          </p>
        </FadeInText>
        
        <div className="relative">
          {/* Gradient masks for smooth scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling logos container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the array for seamless loop */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
                      {client.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {client.category}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-muted-foreground">Cities Active</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">20+</p>
            <p className="text-sm text-muted-foreground">Debates Hosted</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}