'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, MessageSquare, Users, ArrowRight, Scale, Mic, Calendar } from 'lucide-react'
import { SECTION_DELAYS } from '@/lib/animation-config'
import Link from 'next/link'
import { useRef } from 'react'

export function SuperDebateHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Mic,
      title: "Live Debates",
      description: "In-person events in cities worldwide"
    },
    {
      icon: Users,
      title: "Local Clubs",
      description: "Join debate communities in your city"
    },
    {
      icon: Scale,
      title: "Modular Format",
      description: "Adaptable to any topic or community"
    },
    {
      icon: Calendar,
      title: "Regular Meetups",
      description: "Weekly and monthly debate events"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-16 px-4 overflow-hidden">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-[100px]"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: SECTION_DELAYS.superDebate }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: SECTION_DELAYS.superDebate + 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">SUPERDEBATE.ORG</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Bring Debate </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Back to Life
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            The first large-scale adult debate ecosystem since ancient times. Local clubs, live events, and a community where the best arguments win.
          </p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: SECTION_DELAYS.superDebate + 0.3 }}
          >
            <Link href="/super-debate">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Compact Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: SECTION_DELAYS.superDebate + 0.5 + (index * 0.1), duration: 0.5 }}
              >
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-300" />

                  <div className="relative bg-background/90 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 h-full group-hover:border-purple-500/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Format Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: SECTION_DELAYS.superDebate + 0.9 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-background/60 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold">One Format, Endless Adaptability</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-bold text-purple-400 mb-2">Flexible Structure</h4>
                <p className="text-sm text-gray-400">
                  Adapt speech lengths, rounds, and judging criteria to fit your community's needs and topics
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold text-purple-400 mb-2">City Chapters</h4>
                <p className="text-sm text-gray-400">
                  Each city runs its own debates with local flavor while maintaining consistent quality
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}