'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Trophy, MessageSquare, Users, ArrowRight, Scale, Mic, Calendar } from 'lucide-react'
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
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(180deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
            <div className="flex items-center gap-2 px-4 py-2 border border-primary/30">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] font-jost text-primary">
                SuperDebate.org
              </span>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost text-foreground tracking-wide">
            Bring Debate{' '}
            <span className="text-primary">Back to Life</span>
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 font-jost text-foreground/60">
            The first large-scale adult debate ecosystem since ancient times. Local clubs, live events, and a community where the best arguments win.
          </p>

          {/* CTA Button */}
          <Link href="/super-debate">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 font-semibold text-sm flex items-center justify-center gap-3 mx-auto overflow-hidden font-jost bg-foreground text-background tracking-widest uppercase"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="relative bg-card border border-border p-6 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-base font-bold mb-2 font-jost text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-jost text-foreground/50">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Format Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border p-8">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />

            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold font-jost text-foreground">
                One Format, Endless Adaptability
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base font-semibold mb-2 font-jost text-primary">
                  Flexible Structure
                </h4>
                <p className="text-sm leading-relaxed font-jost text-foreground/60">
                  Adapt speech lengths, rounds, and judging criteria to fit your community&apos;s needs and topics
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-2 font-jost text-primary">
                  City Chapters
                </h4>
                <p className="text-sm leading-relaxed font-jost text-foreground/60">
                  Each city runs its own debates with local flavor while maintaining consistent quality
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-jost text-foreground/40">
            Reviving the <span className="text-primary">Socratic tradition</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
