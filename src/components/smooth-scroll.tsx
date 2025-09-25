'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
  className?: string
}

export function SmoothScroll({ children, className }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentScroll = 0
    let targetScroll = 0
    let animationId: number

    const smoothScrolling = () => {
      // Smooth interpolation with momentum
      const ease = 0.08
      const diff = targetScroll - currentScroll
      currentScroll += diff * ease

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${currentScroll}px)`
      }

      // Continue animation if there's still movement
      if (Math.abs(diff) > 0.1) {
        animationId = requestAnimationFrame(smoothScrolling)
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // Update target scroll position
      targetScroll += e.deltaY * 1.2

      // Get document height for rubber band effect
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      // Rubber band effect at boundaries
      if (targetScroll < 0) {
        targetScroll = targetScroll * 0.5 // Rubber band at top
      } else if (targetScroll > docHeight) {
        const overflow = targetScroll - docHeight
        targetScroll = docHeight + overflow * 0.3 // Rubber band at bottom
      }

      // Start smooth scrolling animation
      cancelAnimationFrame(animationId)
      smoothScrolling()
    }

    const handleScroll = () => {
      // Sync with native scroll for other scroll triggers
      if (!animationId) {
        targetScroll = window.scrollY
        currentScroll = targetScroll
      }
    }

    // Add event listeners with passive: false for preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      document.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={className}>
      <div ref={containerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}

// Custom hook for smooth scroll to element
export function useSmoothScrollTo() {
  const smoothScrollTo = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = Math.min(Math.abs(distance) * 0.5, 1000) // Max 1 second
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)

      // Easing function for smooth animation
      const ease = (t: number) => t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      window.scrollTo(0, startPosition + distance * ease(progress))

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return smoothScrollTo
}

// Momentum scroll hook for mobile
export function useMomentumScroll() {
  useEffect(() => {
    let isScrolling = false
    let velocity = 0
    let lastY = 0
    let lastTime = 0

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      lastY = touch.clientY
      lastTime = Date.now()
      velocity = 0
      isScrolling = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const currentY = touch.clientY
      const currentTime = Date.now()

      const deltaY = lastY - currentY
      const deltaTime = currentTime - lastTime

      if (deltaTime > 0) {
        velocity = deltaY / deltaTime
      }

      lastY = currentY
      lastTime = currentTime
      isScrolling = true
    }

    const handleTouchEnd = () => {
      if (isScrolling && Math.abs(velocity) > 0.1) {
        // Apply momentum scrolling
        let currentVelocity = velocity * 20 // Scale factor
        const deceleration = 0.95

        const momentumScroll = () => {
          window.scrollBy(0, currentVelocity)
          currentVelocity *= deceleration

          if (Math.abs(currentVelocity) > 0.5) {
            requestAnimationFrame(momentumScroll)
          }
        }

        requestAnimationFrame(momentumScroll)
      }

      isScrolling = false
    }

    // Only apply to touch devices
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', handleTouchStart)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])
}