'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Trophy, Zap, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const platforms = [
  {
    name: 'SuperDebate',
    url: 'https://superdebate.org',
    tagline: 'Make Arguing Fun Again',
    description: 'Building a global network of in-person debate communities that transform disagreement into productive dialogue and genuine connection.',
    stats: [
      { label: 'Modular Format', value: '1' },
      { label: 'City Chapters', value: '15+' },
      { label: 'Community', value: 'Growing' }
    ],
    features: [
      'In-person debate meetups',
      'One adaptable format',
      'Local chapter network',
      'Community-driven culture'
    ],
    icon: Trophy,
    color: 'from-purple-600 to-pink-600',
    glowColor: 'purple',
    pattern: 'debate-pattern'
  },
  {
    name: 'Accelerate',
    url: 'https://acceleratewith.us',
    tagline: 'Funding That Actually Ships',
    description: 'The premier grants management platform that connects builders with capital, tracking $50M+ in ecosystem funding with radical transparency.',
    stats: [
      { label: 'Funding Tracked', value: '$50M+' },
      { label: 'Programs Managed', value: '500+' },
      { label: 'Teams Funded', value: '2K+' }
    ],
    features: [
      'Milestone-based funding',
      'Transparent allocation',
      'Performance analytics',
      'Community oversight'
    ],
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan',
    pattern: 'accelerate-pattern'
  }
]

export function PlatformsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-background/50 to-background">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">FLAGSHIP PLATFORMS</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] sm:leading-[1.05] lg:leading-[1.02]">
            <span className="text-foreground">Building the </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Future
            </span>
          </h2>

          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Two platforms revolutionizing how we debate ideas and fund innovation
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon

            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${platform.color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />

                  {/* Card */}
                  <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 h-full">
                    {/* Platform header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <motion.div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>

                        <h3 className="text-3xl font-bold mb-2">{platform.name}</h3>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-r ${platform.color} font-semibold`}>
                          {platform.tagline}
                        </p>
                      </div>

                      <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className="p-3 rounded-full border border-foreground/20 hover:border-cyan-400/50 transition-colors group/btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:text-cyan-400 transition-colors" />
                        </motion.button>
                      </Link>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/90 mb-8">
                      {platform.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {platform.stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="text-center"
                        >
                          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-foreground/90">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {platform.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * i }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color}`} />
                          <span className="text-sm text-foreground/90">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div className="mt-8">
                      <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${platform.color} text-primary-foreground font-semibold flex items-center justify-center gap-2 group/cta`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Visit {platform.name}</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </motion.div>

                    {/* Animated accent lines */}
                    <motion.div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} rounded-t-2xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-foreground/90 mb-6">
            Want to build something revolutionary together?
          </p>
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk Strategy
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>
    </section>
  )
}