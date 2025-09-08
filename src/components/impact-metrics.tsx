'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DollarSign, Users, TrendingUp, Clock, Briefcase } from 'lucide-react'

interface CounterProps {
  from: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
}

function Counter({ from, to, duration = 2, prefix = '', suffix = '' }: CounterProps) {
  const [value, setValue] = useState(from)
  const count = useMotionValue(from)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const controls = animate(count, to, { duration })
    rounded.onChange(v => setValue(v))
    return controls.stop
  }, [count, to, duration, rounded])

  return (
    <span>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

const metrics = [
  {
    label: 'Grant Allocations Managed',
    value: 2000000,
    prefix: '$',
    suffix: '+',
    icon: DollarSign,
    description: 'At Thrive Protocol',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    label: 'Monthly Active Users',
    value: 200000,
    icon: Users,
    description: 'Scaled at Upland',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    label: 'Capital Raised',
    value: 1000000,
    prefix: '$',
    suffix: '+',
    icon: TrendingUp,
    description: 'For Sparkblox NFT 2.0',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    label: 'Startups Advised',
    value: 30,
    suffix: '+',
    icon: Briefcase,
    description: 'Since 2018',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    label: 'Team Members Led',
    value: 18,
    icon: Users,
    description: 'Largest team at Sparkblox',
    color: 'from-yellow-500/20 to-amber-500/20'
  },
  {
    label: 'Years Experience',
    value: 15,
    suffix: '+',
    icon: Clock,
    description: 'Building at tech/community edge',
    color: 'from-indigo-500/20 to-blue-500/20'
  }
]

export function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verified metrics from my work across startups and enterprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl`} />
                <div className="relative p-8 border border-foreground/10 hover:border-primary/50 transition-all duration-300 rounded-lg bg-background/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 border border-foreground/20 rounded-lg group-hover:border-primary/50 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-3xl md:text-4xl font-bold text-foreground">
                      {isVisible ? (
                        <Counter
                          from={0}
                          to={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                        />
                      ) : (
                        <span>{metric.prefix}0{metric.suffix}</span>
                      )}
                    </p>
                    <p className="text-lg font-semibold">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}