'use client'

import { motion } from 'framer-motion'
import { useViewportAnimation, useMobileAnimation } from '@/hooks/use-viewport-animation'
import { ReactNode } from 'react'

interface MobileOptimizedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverScale?: number
}

export function MobileOptimizedCard({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02
}: MobileOptimizedCardProps) {
  const { ref, isInViewport } = useViewportAnimation({ once: false, threshold: 0.3 })
  const { isMobile } = useMobileAnimation()
  
  // On mobile, trigger animation when in viewport center
  // On desktop, use hover
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    inView: {
      opacity: 1,
      y: 0,
      scale: isMobile && isInViewport ? 1.02 : 1,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: hoverScale,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }
  
  return (
    <motion.div
      ref={ref as any}
      variants={cardVariants}
      initial="initial"
      animate="inView"
      whileHover={!isMobile ? "hover" : undefined}
      whileTap={{ scale: 0.98 }}
      className={`${className} ${isMobile && isInViewport ? 'shadow-xl' : ''}`}
    >
      {children}
    </motion.div>
  )
}

// Optimized section wrapper with better mobile spacing
export function MobileSection({
  children,
  className = '',
  id
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}