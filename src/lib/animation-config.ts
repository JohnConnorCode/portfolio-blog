import { Variants } from 'framer-motion'

// Consistent animation timings across the site
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const

export const ANIMATION_DELAY = {
  none: 0,
  stagger: 0.1,
  section: 0.2,
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

// Stagger children animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: ANIMATION_DELAY.stagger
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