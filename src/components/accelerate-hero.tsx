'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, DollarSign, Users, ArrowRight, Globe, BookOpen } from 'lucide-react'
import { SECTION_DELAYS } from '@/lib/animation-config'
import Link from 'next/link'
import { useRef } from 'react'

export function AccelerateHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Globe,
      title: "Global Ecosystem",
      description: "Connect with builders, funders, and projects worldwide"
    },
    {
      icon: DollarSign,
      title: "Funding Discovery",
      description: "Find grants, accelerators, and investment opportunities"
    },
    {
      icon: Users,
      title: "Talent Network",
      description: "Match with developers, designers, and marketers"
    },
    {
      icon: BookOpen,
      title: "Resource Hub",
      description: "Access tools, guides, and strategic resources"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-16 px-4 overflow-hidden">
      {/* Futuristic tech background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated gradient spheres */}
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/40 rounded-full blur-[80px]"
            animate={{
              x: [0, -60, 0],
              y: [0, 100, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/40 rounded-full blur-[80px]"
            animate={{
              x: [0, 60, 0],
              y: [0, -100, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Digital grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            animate={{
              y: ["-100vh", "100vh"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
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
          transition={{ duration: 0.6, delay: SECTION_DELAYS.accelerate }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: SECTION_DELAYS.accelerate + 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">ACCELERATEWITH.US</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Where Web3 </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Builders Connect
            </span>
          </h2>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-6">
            The ecosystem platform connecting builders, investors, and resources for Web3 innovation
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: SECTION_DELAYS.accelerate + 0.3 }}
          >
            <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/accelerate">
              <motion.button
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Compact Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: SECTION_DELAYS.accelerate + 0.5 + (index * 0.1), duration: 0.5 }}
              >
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />

                  <div className="relative bg-background/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 h-full group-hover:border-cyan-400/60 transition-all duration-300 group-hover:bg-background/95">
                    <Icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-100">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: SECTION_DELAYS.accelerate + 0.9 }}
          className="relative max-w-4xl mx-auto mt-12"
        >
          <div className="relative bg-background/80 backdrop-blur-xl border border-cyan-500/40 rounded-xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold">Complete Web3 Ecosystem</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">607+</div>
                <div className="text-xs text-gray-100">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">433+</div>
                <div className="text-xs text-gray-100">Funding Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">363+</div>
                <div className="text-xs text-gray-100">Resources</div>
              </div>
            </div>

            <motion.div
              className="mt-6 p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg border border-cyan-500/40 relative overflow-hidden group"
              whileHover={{ scale: 1.03, borderColor: 'rgba(6, 182, 212, 0.6)' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <h4 className="text-base font-bold mb-2">Smart Matching Technology</h4>
              <p className="text-sm text-gray-100">
                AI-powered recommendations connect projects with the right funding, talent, and resources at the perfect time.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: SECTION_DELAYS.accelerate + 1.1 }}
          className="text-center mt-8"
        >
          <p className="text-base text-gray-100 mb-4">
            Join hundreds of Web3 builders accelerating their projects
          </p>
          <Link href="https://acceleratewith.us" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}