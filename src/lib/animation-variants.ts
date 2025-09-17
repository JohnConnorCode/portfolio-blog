import { Variants } from 'framer-motion'

// Reusable animation variants - DRY principle
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
  }
}

export const staggerContainer: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

export const scaleIn: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 20 }
  }
}

export const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 25 }
  }
}

export const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 25 }
  }
}

// 3D Card flip animation
export const card3D: Variants = {
  initial: {
    rotateY: -15,
    scale: 0.9,
    opacity: 0
  },
  animate: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
      duration: 0.8
    }
  },
  hover: {
    rotateY: 5,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  }
}

// Morphing shape animation for dividers
export const morphPath: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.4, 0.0, 0.2, 1] }
  }
}

// Glow pulse for highlights
export const glowPulse: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Text reveal with blur
export const textReveal: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 10
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
}

// Optimized parallax layers
export const parallaxLayer = (speed: number = 0.5): Variants => ({
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: { duration: 0 }
  }
})

// Button interactions - modern ripple effect
export const buttonRipple: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: [0, 0.3, 0],
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Skeleton loading animation
export const shimmer: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear'
    }
  }
}