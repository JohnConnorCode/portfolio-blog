'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Code, Trophy } from 'lucide-react'

const impacts = [
  {
    number: "$50M+",
    label: "Capital Raised",
    context: "For portfolio companies",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    number: "10,000+",
    label: "Developers Enabled",
    context: "Through ecosystem programs",
    icon: Code,
    color: "text-cyan-400"
  },
  {
    number: "15 Years",
    label: "Building Systems",
    context: "From startups to Fortune 500",
    icon: Zap,
    color: "text-pink-500"
  },
  {
    number: "3 Cities",
    label: "Community Networks",
    context: "SF, Austin, NYC debate clubs",
    icon: Users,
    color: "text-purple-500"
  }
]

export function ImpactBrutal() {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
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
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">
            <span className="text-white">PROVEN</span>
            <span className="text-cyan-400 font-black neon-glow"> IMPACT</span>
          </h2>
          <p className="text-lg text-gray-400 font-light tracking-wide">
            Metrics that demonstrate real-world transformation
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
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Card with brutal shadow */}
                <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-gray-800 p-8 shadow-2xl hover:border-cyan-400/50 hover:shadow-cyan-400/20 transition-all duration-300">
                  {/* Icon with neon glow */}
                  <div className={`mb-4 ${impact.color}`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  
                  {/* Number with glitch on hover */}
                  <div className="mb-2">
                    <motion.p 
                      className={`text-4xl font-black ${impact.color} group-hover:animate-pulse`}
                    >
                      {impact.number}
                    </motion.p>
                  </div>
                  
                  {/* Label */}
                  <p className="text-white font-bold text-lg mb-1">
                    {impact.label}
                  </p>
                  
                  {/* Context */}
                  <p className="text-gray-500 text-sm font-mono">
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
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            Not just metrics. <span className="text-cyan-400">Actual outcomes.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}