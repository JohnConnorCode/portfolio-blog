'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Search, RefreshCw } from 'lucide-react'
import { IconDraw } from '@/components/ui/icon-draw'
import { PremiumButton } from '@/components/ui/premium-button'
import { useSoundEffect } from '@/components/ui/sound-system'

// Floating particles animation
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 100,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Glitch text effect
const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={className}
      animate={
        isGlitching
          ? {
              x: [0, -2, 2, -1, 1, 0],
              textShadow: [
                '0 0 0 transparent',
                '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                '1px 0 0 #ff0000, -1px 0 0 #00ffff',
                '0 0 0 transparent',
              ],
            }
          : {}
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// Animated 404 number
const Animated404 = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }, [controls])

  return (
    <motion.div
      animate={controls}
      className="relative text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none"
      style={{
        background: 'linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))',
      }}
    >
      <span className="inline-block">4</span>
      <motion.span
        className="inline-block"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        0
      </motion.span>
      <span className="inline-block">4</span>

      {/* Glowing rings around the 0 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-32 h-32 border-4 border-primary/30 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1.2, 1.6, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <div className="w-40 h-40 border-2 border-primary/20 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

export default function NotFound() {
  const playSound = useSoundEffect()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    playSound('error')
  }, [playSound])

  const handleSearch = () => {
    playSound('click')
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleRefresh = () => {
    playSound('whoosh')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <Animated404 />
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 0.5,
          }}
          className="mb-12 max-w-2xl"
        >
          <GlitchText className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Oops! Page Not Found
          </GlitchText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            The page you're looking for seems to have vanished into the digital void.
            Don't worry, even the best systems have their mysteries.
          </motion.p>
        </motion.div>

        {/* Search box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 1,
          }}
          className="mb-12 w-full max-w-md"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for something..."
              className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
            <motion.div
              className="absolute left-3 top-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <IconDraw
                icon={Search}
                size="sm"
                drawSpeed={1}
                triggerOnHover={true}
                autoPlay={false}
                className="w-5 h-5 text-white/60"
              />
            </motion.div>
            {searchQuery && (
              <motion.button
                onClick={handleSearch}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-primary rounded-lg text-white text-sm font-medium transition-colors"
              >
                Go
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 1.2,
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <PremiumButton
            variant="primary"
            size="lg"
            href="/"
            magneticStrength={0.3}
            rippleEffect={true}
            className="flex items-center space-x-2"
          >
            <IconDraw
              icon={Home}
              size="sm"
              drawSpeed={1}
              triggerOnHover={true}
              autoPlay={false}
              className="w-5 h-5"
            />
            <span>Go Home</span>
          </PremiumButton>

          <PremiumButton
            variant="ghost"
            size="lg"
            onClick={handleRefresh}
            magneticStrength={0.3}
            rippleEffect={true}
            className="flex items-center space-x-2"
          >
            <IconDraw
              icon={RefreshCw}
              size="sm"
              drawSpeed={1}
              triggerOnHover={true}
              autoPlay={false}
              className="w-5 h-5"
            />
            <span>Try Again</span>
          </PremiumButton>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 1.5,
          }}
          className="mt-16"
        >
          <p className="text-sm text-gray-400 mb-4">Perhaps you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/work', label: 'My Work' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.7 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 backdrop-blur-xl"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-20 text-center"
        >
          <p className="text-xs text-gray-500">
            "Every error is an opportunity to build something better." - JTC
          </p>
        </motion.div>
      </div>
    </div>
  )
}