'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Users, Code, Trophy } from 'lucide-react'
import { useRef } from 'react'

const impacts = [
  {
    number: "15+",
    label: "Years Designing",
    context: "From architecture to scale",
    icon: Trophy,
  },
  {
    number: "$20M+",
    label: "Outcomes Enabled",
    context: "Strategy that compounds",
    icon: Code,
  },
  {
    number: "300K+",
    label: "Users Served",
    context: "Systems that work",
    icon: Zap,
  },
  {
    number: "50+",
    label: "Products Shipped",
    context: "AI, Web3, marketplaces",
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
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])
  const textX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textX2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <motion.section
      ref={containerRef}
      className="py-24 sm:py-32 px-4 bg-card relative overflow-hidden border-t border-border"
    >
      {/* Horizontal scrolling text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: textX }}
          className="absolute top-1/4 left-0 right-0 whitespace-nowrap"
        >
          <span className="text-[12vw] font-bold tracking-tight text-primary/[0.04] font-jost">
            SYSTEMS &nbsp; ARCHITECT &nbsp; DESIGNER &nbsp; SYSTEMS &nbsp; ARCHITECT &nbsp; DESIGNER
          </span>
        </motion.div>
        <motion.div
          style={{ x: textX2 }}
          className="absolute top-2/3 left-0 right-0 whitespace-nowrap"
        >
          <span className="text-[8vw] font-bold tracking-tight text-primary/[0.04] font-jost">
            STRATEGY &nbsp; BUILD &nbsp; COMPOUND &nbsp; STRATEGY &nbsp; BUILD &nbsp; COMPOUND
          </span>
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Systems at Scale
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto font-jost text-foreground/60">
            Not features shipped—systems designed, built, and scaled.
          </p>
        </motion.div>

        {/* Impact cards with staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-card border border-border p-6 sm:p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Number with count-up effect styling */}
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
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-jost text-foreground/40">
            The best systems <span className="text-primary">disappear into how things just work</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
