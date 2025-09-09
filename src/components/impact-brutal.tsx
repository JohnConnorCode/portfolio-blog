'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, Code, Trophy } from 'lucide-react'

const impacts = [
  {
    number: "$50M+",
    label: "Funding Enabled",
    context: "Through product-market fit",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    number: "50+",
    label: "Product Problems Solved",
    context: "Usability & market fit issues",
    icon: Code,
    color: "text-cyan-400"
  },
  {
    number: "10+ Years",
    label: "Technical Product Leadership",
    context: "AI/Web3 & human-centered design",
    icon: Zap,
    color: "text-pink-500"
  },
  {
    number: "200+",
    label: "User Research Sessions",
    context: "Finding real product-market fit",
    icon: Users,
    color: "text-purple-500"
  }
]

export function ImpactBrutal() {
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
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Glowing accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="text-white">PROVEN</span>
            <span className="text-cyan-400 font-black neon-glow"> IMPACT</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light tracking-wide">
            Real outcomes from solving actual product problems
          </p>
        </motion.div>
        
        {/* Impact cards with brutal design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                {/* Card with brutal shadow */}
                <div className="card-glass hover:border-cyan-400/50 transition-all">
                  {/* Icon with neon glow */}
                  <div className={`mb-4 ${impact.color}`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  
                  {/* Number with glitch on hover */}
                  <div className="mb-2">
                    <motion.p 
                      className={`text-3xl sm:text-4xl font-black ${impact.color} group-hover:animate-pulse`}
                    >
                      {impact.number}
                    </motion.p>
                  </div>
                  
                  {/* Label */}
                  <p className="text-white font-bold text-base sm:text-lg mb-1">
                    {impact.label}
                  </p>
                  
                  {/* Context */}
                  <p className="text-gray-500 text-xs sm:text-sm font-mono">
                    {impact.context}
                  </p>
                  
                  {/* Hover accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom accent text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            Not growth theater. <span className="text-cyan-400">Product solutions.</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}