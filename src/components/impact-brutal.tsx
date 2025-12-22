'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Users, Code, Trophy } from 'lucide-react'
import { useRef } from 'react'

const impacts = [
  {
    number: "15+",
    label: "Years in Product",
    context: "Led product at top apps",
    icon: Trophy,
  },
  {
    number: "$20M+",
    label: "Funding Enabled",
    context: "Built and advised",
    icon: Code,
  },
  {
    number: "300K+",
    label: "Users Scaled",
    context: "From traction to growth",
    icon: Zap,
  },
  {
    number: "50+",
    label: "Products Shipped",
    context: "Web3, AI, marketplaces",
    icon: Users,
  }
]

export function ImpactBrutal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="py-24 sm:py-32 px-4 bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6">
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
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Track Record
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto font-jost text-foreground/60">
            Products built, companies scaled, systems shipped
          </p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-card border border-border p-6 sm:p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Number */}
                  <p className="text-3xl sm:text-4xl font-bold mb-2 font-jost text-foreground">
                    {impact.number}
                  </p>

                  {/* Label */}
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2 font-jost text-foreground">
                    {impact.label}
                  </p>

                  {/* Context */}
                  <p className="text-sm font-jost text-foreground/50">
                    {impact.context}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-jost text-foreground/40">
            Building what <span className="text-primary">actually works</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
