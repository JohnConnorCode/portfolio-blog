'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.98,
          filter: 'blur(10px)'
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)'
        }}
        exit={{
          opacity: 0,
          y: -20,
          scale: 1.02,
          filter: 'blur(5px)'
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          scale: {
            duration: 0.3,
          },
          filter: {
            duration: 0.2,
          }
        }}
        className="min-h-screen"
      >
        <AnimatePresence>
          {isLoading && <PageLoader />}
        </AnimatePresence>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background/90 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Premium loading animation */}
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 border-2 border-border rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 border-2 border-indigo-500 rounded-full border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute inset-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 text-muted-foreground text-sm tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}

// Optimized transitions for specific page types
export function BlogTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={pathname}
        initial={{
          opacity: 0,
          x: 50,
          rotateY: -15
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotateY: 0
        }}
        exit={{
          opacity: 0,
          x: -50,
          rotateY: 15
        }}
        transition={{
          duration: 0.5,
          ease: [0.23, 1, 0.320, 1],
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.article>
    </AnimatePresence>
  )
}

export function ModalTransition({
  children,
  isOpen
}: {
  children: ReactNode
  isOpen: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 50,
              rotateX: -15
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              rotateX: 0
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: 50,
              rotateX: 15
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            className="relative z-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Staggered list transitions
export function ListTransition({
  children,
  className
}: {
  children: ReactNode[]
  className?: string
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Tab transition
export function TabTransition({
  children,
  activeTab
}: {
  children: ReactNode
  activeTab: string
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{
          opacity: 0,
          y: 10,
          scale: 0.98
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: -10,
          scale: 1.02
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}