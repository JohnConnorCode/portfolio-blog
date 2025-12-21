'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { fadeInUp, headerAnimation, staggerContainer, ANIMATION_DELAY, SECTION_DELAYS } from '@/lib/animation-config'

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: SECTION_DELAYS.callToAction }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="relative rounded-none p-8 sm:p-12 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 0 60px rgba(212, 175, 55, 0.1), inset 0 0 60px rgba(0, 212, 255, 0.03)'
          }}
        >
          {/* Animated background decoration */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Art Deco corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M0,0 L60,0 L60,8 L8,8 L8,60 L0,60 Z" fill="none" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
              <path d="M0,0 L20,0 L20,4 L4,4 L4,20 L0,20 Z" fill="rgba(212, 175, 55, 0.1)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 rotate-180">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M0,0 L60,0 L60,8 L8,8 L8,60 L0,60 Z" fill="none" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="1" />
              <path d="M0,0 L20,0 L20,4 L4,4 L4,20 L0,20 Z" fill="rgba(0, 212, 255, 0.1)" />
            </svg>
          </div>

          {/* Decorative diamond element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="rgba(212, 175, 55, 0.2)" stroke="#d4af37" strokeWidth="1" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </motion.div>

          <motion.h2
            {...headerAnimation}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s Talk
          </motion.h2>

          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.stagger }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
          >
            Have a project in mind? I&apos;d love to hear about it.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 sm:px-14 py-5 sm:py-6 font-bold text-lg sm:text-xl flex items-center justify-center gap-4 overflow-hidden uppercase tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 50%, #00d4ff 100%)',
                  color: '#000',
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Calendar className="w-6 h-6" />
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          <motion.p
            {...headerAnimation}
            transition={{ ...headerAnimation.transition, delay: ANIMATION_DELAY.section }}
            className="text-xs sm:text-sm text-gray-400 mt-8 tracking-widest uppercase"
          >
            Typical response time: Within 24 hours
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}