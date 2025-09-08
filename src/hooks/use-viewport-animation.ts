'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface UseViewportAnimationOptions {
  threshold?: number // 0-1, where 0.5 is middle of viewport
  once?: boolean // Only trigger once
  margin?: string // rootMargin for IntersectionObserver
}

type MarginString = `${string}` | `${string} ${string}` | `${string} ${string} ${string}` | `${string} ${string} ${string} ${string}`

export function useViewportAnimation({
  threshold = 0.5,
  once = false,
  margin = '-20% 0px -20% 0px' // Trigger when element is near middle
}: UseViewportAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInViewport, setIsInViewport] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  
  // Use framer-motion's useInView for better performance
  // @ts-ignore - Framer Motion types issue
  const isInView = useInView(ref, {
    margin: margin as any,
    amount: threshold,
    once: false
  })
  
  useEffect(() => {
    if (isInView && (!once || !hasTriggered)) {
      setIsInViewport(true)
      setHasTriggered(true)
    } else if (!isInView && !once) {
      setIsInViewport(false)
    }
  }, [isInView, once, hasTriggered])
  
  return {
    ref,
    isInViewport,
    isInView
  }
}

// Hook specifically for mobile touch animations
export function useMobileAnimation() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return { isMobile }
}