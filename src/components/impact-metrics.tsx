'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DollarSign, Users, TrendingUp, Clock, Briefcase } from 'lucide-react'
import { GlassmorphismCard } from './ui/glassmorphism-card'
import { CounterAnimation, MetricCounter } from './ui/counter-animation'
import { TextReveal, HeroTextReveal } from './ui/text-reveal'
import { ScrollReveal, StaggeredReveal } from './ui/scroll-reveal'
import { IconDraw } from './ui/icon-draw'
import { NumberTicker } from './ui/number-ticker'
import { PremiumText } from './ui/premium-text'
import { Premium3DCard, MagneticHover } from './ui/premium-hover'

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
        <ScrollReveal variant="slide-up" className="text-center mb-16">
          <PremiumText
            variant="gradient"
            hoverEffect="gradient-shift"
            as="h2"
            className="text-4xl sm:text-5xl font-bold mb-6"
            gradientFrom="#06b6d4"
            gradientTo="#a855f7"
            gradientVia="#ec4899"
          >
            Track Record
          </PremiumText>
          <PremiumText
            variant="reveal"
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={0.3}
            wordDelay={0.1}
          >
            Verified metrics from my work across startups and enterprises
          </PremiumText>
        </ScrollReveal>

        <StaggeredReveal
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <MagneticHover
                key={metric.label}
                strength={0.3}
                maxDistance={60}
              >
                <Premium3DCard
                  tiltStrength={0.15}
                  shadowIntensity={0.4}
                  hoverScale={1.03}
                  className="h-full"
                >
                  <GlassmorphismCard
                    variant="intense"
                    tiltEffect={false} // Disable since we're using Premium3DCard
                    glowOnHover={true}
                    borderGlow={true}
                    className="p-8 group relative h-full"
                  >
                    {/* Background gradient glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <MagneticHover strength={0.5} maxDistance={30}>
                          <div className="p-3 border border-white/20 rounded-lg group-hover:border-primary/50 transition-colors bg-white/5">
                            <IconDraw
                              icon={Icon}
                              size="md"
                              drawSpeed={1.5}
                              staggerDelay={0.1}
                              fillAfterStroke={true}
                              triggerOnHover={true}
                              autoPlay={false}
                              className="text-primary"
                            />
                          </div>
                        </MagneticHover>

                        {/* Floating decoration */}
                        <motion.div
                          className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                      </div>

                      <div className="space-y-3">
                        <NumberTicker
                          value={metric.value}
                          duration={2.5}
                          delay={0.5 + index * 0.1}
                          className="text-3xl md:text-4xl font-bold text-white block"
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                          slotMachine={true}
                          staggerDigits={true}
                        />

                        <PremiumText
                          variant="blur-in"
                          delay={0.8 + index * 0.1}
                          className="text-lg font-semibold text-gray-200"
                          charDelay={0.02}
                        >
                          {metric.label}
                        </PremiumText>

                        <PremiumText
                          variant="blur-in"
                          delay={1 + index * 0.1}
                          className="text-sm text-gray-400"
                          charDelay={0.01}
                        >
                          {metric.description}
                        </PremiumText>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </Premium3DCard>
              </MagneticHover>
            )
          })}
        </StaggeredReveal>

      </div>
    </section>
  )
}