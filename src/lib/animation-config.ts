import { Variants } from 'framer-motion'

// Consistent animation timings across the site
export const ANIMATION_DURATION = {
  instant: 0.2,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.0
} as const

export const ANIMATION_DELAY = {
  none: 0,
  minimal: 0.05,
  stagger: 0.1,
  staggerSlow: 0.15,
  section: 0.2,
  sectionLong: 0.3
} as const

// Sequential delays for home page sections
// Hero completes at ~2s, so sections start after that
export const SECTION_DELAYS = {
  hero: 0,           // Starts immediately
  impact: 0.2,       // After hero completes (~2.2s)
  superDebate: 0.4,  // +0.2s
  accelerate: 0.6,   // +0.2s
  workingWithMe: 0.8, // +0.2s
  writings: 1.0,     // +0.2s
  callToAction: 1.2  // +0.2s
} as const

// Easing functions
export const EASING = {
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275]
} as const

// Standard fade in animations for all content
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: "easeOut"
    }
  }
}

// Fade in with custom delay per index
export const fadeInUpDelayed: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay: custom * ANIMATION_DELAY.stagger,
      ease: EASING.smooth
    }
  })
}

export const fadeInScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: "easeOut"
    }
  }
}

// Stagger children animations - properly configured
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: ANIMATION_DELAY.stagger,
      delayChildren: 0
    }
  }
}

// Stagger with slower timing
export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: ANIMATION_DELAY.staggerSlow,
      delayChildren: 0
    }
  }
}

// Header animations
export const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: ANIMATION_DURATION.normal }
}

// Card hover animations
export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

// Mobile-safe animations (reduced motion)
export const getMobileAnimation = (isDesktop: boolean) => {
  if (!isDesktop) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: ANIMATION_DURATION.fast }
    }
  }
  return headerAnimation
}