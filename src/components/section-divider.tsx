'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'geometric' | 'organic' | 'dots' | 'wave' | 'greek' | 'deco' | 'agora'
  className?: string
}

export function SectionDivider({ variant = 'geometric', className = '' }: SectionDividerProps) {
  const dividers = {
    geometric: (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
        </div>
        <svg viewBox="0 0 1200 60" className="w-full h-12" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0)" />
              <stop offset="50%" stopColor="rgba(0, 212, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,30 L300,5 L600,30 L900,5 L1200,30"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    ),

    // Greek Key / Meander Pattern
    greek: (
      <div className="relative py-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/30" />
          <motion.svg
            viewBox="0 0 120 24"
            className="w-32 h-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <defs>
              <linearGradient id="greekGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
            {/* Greek Key Pattern */}
            <path
              d="M0,12 H10 V4 H20 V12 H30 V4 H40 V12 H50 V4 H60 V20 H50 V12 H40 V20 H30 V12 H20 V20 H10 V12 H0"
              fill="none"
              stroke="url(#greekGradient)"
              strokeWidth="2"
            />
            <path
              d="M60,12 H70 V4 H80 V12 H90 V4 H100 V12 H110 V4 H120 V20 H110 V12 H100 V20 H90 V12 H80 V20 H70 V12 H60"
              fill="none"
              stroke="url(#greekGradient)"
              strokeWidth="2"
            />
          </motion.svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/30" />
        </div>
      </div>
    ),

    // Art Deco Sunburst
    deco: (
      <div className="relative py-6">
        <div className="flex items-center justify-center">
          <motion.svg
            viewBox="0 0 200 40"
            className="w-48 h-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <defs>
              <linearGradient id="decoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
                <stop offset="50%" stopColor="rgba(212, 175, 55, 0.8)" />
                <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
              </linearGradient>
            </defs>
            {/* Art Deco Rays */}
            {[...Array(9)].map((_, i) => (
              <motion.line
                key={i}
                x1="100"
                y1="20"
                x2={100 + Math.cos((i - 4) * 0.2) * 80}
                y2={20 - Math.abs(Math.sin((i - 4) * 0.3)) * 15}
                stroke="url(#decoGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
            {/* Central Diamond */}
            <motion.path
              d="M100,10 L108,20 L100,30 L92,20 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
            {/* Horizontal Lines */}
            <line x1="0" y1="20" x2="85" y2="20" stroke="url(#decoGradient)" strokeWidth="1" />
            <line x1="115" y1="20" x2="200" y2="20" stroke="url(#decoGradient)" strokeWidth="1" />
          </motion.svg>
        </div>
      </div>
    ),

    // Agora - Fusion of Greek + Cyber
    agora: (
      <div className="relative py-8">
        <div className="flex items-center justify-center gap-6">
          {/* Left Column */}
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />

          {/* Left Meander */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg viewBox="0 0 40 20" className="w-10 h-5">
              <path
                d="M0,10 H8 V2 H16 V10 H24 V2 H32 V18 H24 V10 H16 V18 H8 V10 H0"
                fill="none"
                stroke="rgba(212, 175, 55, 0.6)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* Center Element - Laurel + Diamond */}
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg viewBox="0 0 60 40" className="w-16 h-10">
              <defs>
                <linearGradient id="agoraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#d4af37" />
                </linearGradient>
              </defs>
              {/* Left Laurel */}
              <path
                d="M10,20 Q5,15 8,10 M10,20 Q3,20 5,15 M10,20 Q5,25 8,30"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.6"
              />
              {/* Right Laurel */}
              <path
                d="M50,20 Q55,15 52,10 M50,20 Q57,20 55,15 M50,20 Q55,25 52,30"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.6"
              />
              {/* Central Diamond */}
              <path
                d="M30,8 L40,20 L30,32 L20,20 Z"
                fill="none"
                stroke="url(#agoraGradient)"
                strokeWidth="2"
              />
              {/* Inner Diamond */}
              <path
                d="M30,14 L35,20 L30,26 L25,20 Z"
                fill="rgba(0, 212, 255, 0.2)"
                stroke="rgba(0, 212, 255, 0.6)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Right Meander */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg viewBox="0 0 40 20" className="w-10 h-5">
              <path
                d="M40,10 H32 V2 H24 V10 H16 V2 H8 V18 H16 V10 H24 V18 H32 V10 H40"
                fill="none"
                stroke="rgba(212, 175, 55, 0.6)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    ),

    organic: (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
        </div>
        <svg viewBox="0 0 1200 80" className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,40 Q300,10 600,40 T1200,40"
            stroke="url(#organicGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <motion.circle
            cx="600"
            cy="40"
            r="4"
            fill="#a855f7"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))' }}
          />
        </svg>
      </div>
    ),

    dots: (
      <div className="flex justify-center items-center space-x-8 py-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: i === 2 ? 'linear-gradient(135deg, #d4af37, #00d4ff)' : 'rgba(255, 255, 255, 0.3)',
                boxShadow: i === 2 ? '0 0 15px rgba(212, 175, 55, 0.8)' : 'none'
              }}
            />
            {i === 2 && (
              <div
                className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
                style={{ background: 'rgba(212, 175, 55, 0.4)' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    ),

    wave: (
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent blur-sm" />
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1200 60" className="w-full h-8" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
                <stop offset="50%" stopColor="rgba(236, 72, 153, 0.8)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30"
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>
    ),
  }

  return (
    <div className={`py-8 ${className}`}>
      {dividers[variant]}
    </div>
  )
}
