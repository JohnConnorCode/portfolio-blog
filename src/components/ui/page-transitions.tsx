'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

interface LoadingProgressProps {
  progress: number
  isVisible: boolean
}

const LoadingProgress = ({ progress, isVisible }: LoadingProgressProps) => {
  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gradient-to-r from-primary/20 to-primary/20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="h-full bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/50"
            style={{
              boxShadow: '0 0 10px currentColor'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

const pageVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    scale: 0.98,
    filter: 'blur(4px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    scale: 1.02,
    filter: 'blur(4px)',
    transition: {
      duration: 0.4,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  }),
}

const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState(0)
  const [prevPath, setPrevPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== prevPath) {
      setIsLoading(true)
      setProgress(0)

      // Determine direction based on path complexity/hierarchy
      const pathDepth = pathname.split('/').length
      const prevDepth = prevPath.split('/').length
      setDirection(pathDepth > prevDepth ? 1 : -1)

      // Simulate loading with realistic progress
      const progressSteps = [10, 30, 60, 80, 95, 100]
      const timings = [50, 100, 200, 150, 100, 50]

      let currentStep = 0
      const updateProgress = () => {
        if (currentStep < progressSteps.length) {
          setProgress(progressSteps[currentStep])
          currentStep++
          setTimeout(updateProgress, timings[currentStep - 1] || 50)
        } else {
          setTimeout(() => {
            setIsLoading(false)
            setProgress(0)
            setPrevPath(pathname)
          }, 100)
        }
      }

      updateProgress()
    }
  }, [pathname, prevPath])

  return (
    <>
      <LoadingProgress progress={progress} isVisible={isLoading} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
        >
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

// Enhanced page wrapper for consistent animations
export function AnimatedPage({
  children,
  className = '',
  staggerDelay = 0.1
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          }
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered reveal for sections
export function StaggeredReveal({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: 30,
          scale: 0.98,
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }
        },
        exit: {
          opacity: 0,
          y: -20,
          scale: 1.02,
          transition: {
            duration: 0.3,
            ease: [0.55, 0.06, 0.68, 0.19],
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Route transition trigger hook
export function usePageTransition() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  return { isTransitioning, pathname }
}