'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Premium Page Loader
export function PremiumPageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background"
        >
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />

          {/* Loading Animation */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 border-2 border-cyan-400/30 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            className="fixed bottom-10 left-0 right-0 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-muted-foreground font-mono">
              Loading Premium Experience...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Premium Scroll Progress
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 z-50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="relative h-32 w-1 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-400 to-purple-400"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.p
          className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground"
          style={{ transform: `translateY(-50%) rotate(-90deg)` }}
        >
          {Math.round(scrollProgress)}%
        </motion.p>
      </motion.div>
    </>
  )
}

// Premium Selection Styles
export function PremiumSelection() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      ::selection {
        background: linear-gradient(135deg, #00c8ff 0%, #9333ea 100%);
        color: white;
        text-shadow: 0 0 20px rgba(0, 200, 255, 0.5);
      }

      ::-moz-selection {
        background: linear-gradient(135deg, #00c8ff 0%, #9333ea 100%);
        color: white;
        text-shadow: 0 0 20px rgba(0, 200, 255, 0.5);
      }

      /* Premium Scrollbar */
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #00c8ff 0%, #9333ea 100%);
        border-radius: 10px;
        border: 2px solid transparent;
        background-clip: padding-box;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #00a8ff 0%, #8333ea 100%);
        background-clip: padding-box;
      }

      /* Premium Focus States */
      *:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 200, 255, 0.2),
                    0 0 20px rgba(0, 200, 255, 0.2);
      }

      /* Premium Link Hover */
      a {
        position: relative;
        transition: all 0.3s ease;
      }

      a:hover {
        text-shadow: 0 0 20px currentColor;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

// Premium Cursor Trail
export function PremiumCursorTrail() {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let id = 0
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: id++,
      }

      setTrail(prev => [...prev.slice(-20), newDot])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTrail(prev => prev.slice(1))
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Trail */}
      {trail.map((dot, index) => (
        <motion.div
          key={dot.id}
          className="fixed w-2 h-2 pointer-events-none z-40"
          initial={{ x: dot.x - 4, y: dot.y - 4, opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{ opacity: (index / trail.length) * 0.5 }}
          />
        </motion.div>
      ))}
    </>
  )
}

// Premium Navigation Indicator
export function NavigationIndicator({ currentPath }: { currentPath: string }) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const currentIndex = navItems.findIndex(item => item.path === currentPath)

  return (
    <motion.div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      {navItems.map((item, index) => (
        <motion.a
          key={item.path}
          href={item.path}
          className="relative group"
          whileHover={{ x: 10 }}
        >
          <motion.div
            className={`w-12 h-0.5 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                : 'bg-foreground/20'
            }`}
            animate={{
              width: index === currentIndex ? 48 : 24,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-16 top-1/2 -translate-y-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  )
}

// Export all polish components
export function PremiumPolish({ currentPath = '/' }: { currentPath?: string }) {
  return (
    <>
      <PremiumPageLoader />
      <ScrollProgress />
      <PremiumSelection />
      <PremiumCursorTrail />
      <NavigationIndicator currentPath={currentPath} />
    </>
  )
}