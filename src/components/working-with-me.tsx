'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Layers, Code } from 'lucide-react'
import { useRef } from 'react'
import {
  sectionWithChildrenVariants,
  childVariants,
  viewportOnce,
  cardProps,
} from '@/lib/animation-config'

const services = [
  {
    icon: Brain,
    title: 'Product Strategy',
    description: 'Finding what to build and why. User research, market positioning, roadmap prioritization.',
  },
  {
    icon: Layers,
    title: 'Systems Design',
    description: "Architecture that scales cleanly. Data models, integrations, technical decisions that won't haunt you later.",
  },
  {
    icon: Code,
    title: 'Hands-On Building',
    description: 'Code, not just decks. I build alongside your team from prototype to production.',
  },
]

export function WorkingWithMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          {/* Decorative element */}
          <motion.div variants={childVariants} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path
                d="M12 2 L22 12 L12 22 L2 12 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.h2 variants={childVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            How I Help
          </motion.h2>
          <motion.p variants={childVariants} className="text-base sm:text-lg max-w-2xl mx-auto font-jost text-foreground/60">
            Strategy, architecture, and execution—from problem to production.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={sectionWithChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  {...cardProps(index)}
                  className="group"
                >
                  <div className="relative bg-background border border-border p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 font-jost text-foreground">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed font-jost text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
