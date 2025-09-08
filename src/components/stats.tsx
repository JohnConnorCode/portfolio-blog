'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Zap, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  { icon: Code, label: 'Projects Completed', value: 50 },
  { icon: Coffee, label: 'Cups of Coffee', value: 1337 },
  { icon: Zap, label: 'Lines of Code', value: 100000 },
  { icon: Users, label: 'Happy Clients', value: 25 },
]

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Numbers That <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey and the impact I've made
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-bold mb-2">
                  <Counter value={stat.value} />
                  {stat.value >= 1000 && '+'}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}