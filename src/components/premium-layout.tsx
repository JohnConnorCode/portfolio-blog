'use client'

import { useEffect, ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'
import { useMomentumScroll } from '@/components/smooth-scroll'

interface PremiumLayoutProps {
  children: ReactNode
}

export function PremiumLayout({ children }: PremiumLayoutProps) {
  // Enable keyboard shortcuts
  useKeyboardShortcuts()

  // Enable momentum scrolling on mobile
  useMomentumScroll()

  // Scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Add premium performance optimizations
  useEffect(() => {
    // Add will-change optimizations
    const main = document.querySelector('main')
    if (main) {
      main.style.willChange = 'transform'
    }

    // Preload critical resources
    const preloadLinks = [
      { href: '/api/fonts/alata', as: 'font', type: 'font/woff2' },
      { href: '/api/fonts/jetbrains-mono', as: 'font', type: 'font/woff2' }
    ]

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link')
      linkElement.rel = 'preload'
      linkElement.href = link.href
      linkElement.as = link.as
      linkElement.type = link.type
      linkElement.crossOrigin = 'anonymous'
      document.head.appendChild(linkElement)
    })

    // Enable GPU acceleration for smooth animations
    document.documentElement.style.transform = 'translateZ(0)'

    return () => {
      if (main) {
        main.style.willChange = 'auto'
      }
      document.documentElement.style.transform = ''
    }
  }, [])

  // Add reduced motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.setAttribute('data-reduced-motion', e.matches ? 'true' : 'false')
    }

    // Set initial state
    document.documentElement.setAttribute('data-reduced-motion', mediaQuery.matches ? 'true' : 'false')

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      {/* Premium scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50 shadow-lg shadow-indigo-500/30"
        style={{ scaleX }}
      />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault()
          const main = document.getElementById('main-content')
          if (main) {
            main.focus()
            main.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        Skip to main content
      </a>

      {/* Main content wrapper with premium effects */}
      <div
        id="main-content"
        className="relative"
        tabIndex={-1}
        style={{
          // Subtle performance optimizations
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {children}
      </div>

      {/* Premium ambient particles (optional) */}
      <AmbientParticles />
    </>
  )
}

// Ambient particle system for premium feel
function AmbientParticles() {
  useEffect(() => {
    // Only show particles on non-mobile devices to preserve performance
    if (window.innerWidth < 768) return

    const canvas = document.createElement('canvas')
    canvas.className = 'fixed inset-0 pointer-events-none z-0'
    canvas.style.opacity = '0.3'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: ['#6366f1', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)]
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.remove()
    }
  }, [])

  return null
}

// Premium CSS-in-JS styles for reduced motion
export const premiumStyles = `
  /* Reduced motion styles */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* GPU acceleration for premium animations */
  .premium-animate {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: transform;
  }

  /* Premium focus styles */
  .premium-focus:focus-visible {
    outline: 2px solid rgb(99 102 241);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgb(99 102 241 / 0.2);
    border-radius: 0.375rem;
  }

  /* Smooth page transitions */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 300ms ease-out, transform 300ms ease-out;
  }

  .page-transition-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-20px) scale(1.02);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
`