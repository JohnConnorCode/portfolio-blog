'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Users, Code, Trophy } from 'lucide-react'
import { fadeInUp, headerAnimation, cardHover, staggerContainer, ANIMATION_DELAY } from '@/lib/animation-config'
import { useRef } from 'react'

const impacts = [
  {
    number: "$20M+",
    label: "Funding Enabled",
    context: "Through product-market fit",
    icon: Trophy,
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    number: "50+",
    label: "Product Problems Solved",
    context: "Usability & market fit issues",
    icon: Code,
    color: "text-cyan-600 dark:text-cyan-400"
  },
  {
    number: "15 Years",
    label: "Technology Strategy",
    context: "AI/Web3 & human-centered design",
    icon: Zap,
    color: "text-pink-600 dark:text-pink-500"
  },
  {
    number: "200+",
    label: "User Research Sessions",
    context: "Finding real product-market fit",
    icon: Users,
    color: "text-purple-600 dark:text-purple-500"
  }
]

export function ImpactBrutal() {
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
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Glowing accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section title with glitch effect */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            {...headerAnimation}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4"
          >
            <span className="text-foreground">PROVEN</span>
            <span className="text-primary dark:text-cyan-400 font-black neon-glow"> IMPACT</span>
          </motion.h2>
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
            className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 font-light tracking-wide"
          >
            Real outcomes from solving actual product problems
          </motion.p>
        </motion.div>
        
        {/* Impact cards with brutal design */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.label}
                variants={fadeInUp}
                custom={index}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                {...cardHover}
                className="relative group"
              >
                {/* Card with brutal shadow */}
                <div className="card-glass hover:border-cyan-400/50 transition-all">
                  {/* Icon with neon glow */}
                  <motion.div
                    variants={fadeInUp}
                    className={`mb-4 ${impact.color}`}
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>

                  {/* Number with glitch on hover */}
                  <motion.div
                    variants={fadeInUp}
                    className="mb-2"
                  >
                    <motion.p
                      className={`text-3xl sm:text-4xl font-black ${impact.color} group-hover:animate-pulse`}
                    >
                      {impact.number}
                    </motion.p>
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    variants={fadeInUp}
                    className="text-foreground font-bold text-base sm:text-lg mb-1"
                  >
                    {impact.label}
                  </motion.p>

                  {/* Context */}
                  <motion.p
                    variants={fadeInUp}
                    className="text-muted-foreground dark:text-gray-500 text-xs sm:text-sm font-mono"
                  >
                    {impact.context}
                  </motion.p>

                  {/* Hover accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Bottom accent text */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.section }}
            className="text-muted-foreground dark:text-gray-500 font-mono text-sm uppercase tracking-widest"
          >
            Building what <span className="text-primary dark:text-cyan-400">actually works</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}