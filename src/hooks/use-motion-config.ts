'use client'

import { useEffect, useState } from 'react'

export const useMotionConfig = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const springConfig = {
    type: 'spring',
    stiffness: prefersReducedMotion ? 300 : 150,
    damping: prefersReducedMotion ? 30 : 20,
    mass: 0.8,
  }

  const smoothSpring = {
    type: 'spring',
    stiffness: prefersReducedMotion ? 400 : 100,
    damping: prefersReducedMotion ? 40 : 25,
    restDelta: 0.001,
  }

  const bounceConfig = {
    type: 'spring',
    stiffness: prefersReducedMotion ? 500 : 260,
    damping: prefersReducedMotion ? 50 : 15,
    mass: 1,
  }

  return {
    prefersReducedMotion,
    isClient,
    springConfig,
    smoothSpring,
    bounceConfig,
    duration: {
      instant: 0,
      fast: prefersReducedMotion ? 0.1 : 0.2,
      normal: prefersReducedMotion ? 0.2 : 0.3,
      slow: prefersReducedMotion ? 0.3 : 0.5,
      slower: prefersReducedMotion ? 0.4 : 0.8,
    },
    easing: {
      smooth: [0.4, 0.0, 0.2, 1],
      bounce: [0.68, -0.55, 0.265, 1.55],
      elastic: [0.175, 0.885, 0.32, 1.275],
    },
  }
}