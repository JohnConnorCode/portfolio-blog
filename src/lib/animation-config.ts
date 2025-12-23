/**
 * UNIVERSAL ANIMATION CONFIG
 *
 * RULES TO PREVENT GLITCHY ANIMATIONS:
 * 1. Use simple initial/animate for hero content (animates once on mount)
 * 2. Use initial/whileInView with viewport={{ once: true }} for scroll content
 * 3. NEVER use nested staggerChildren - it causes propagation bugs
 * 4. NEVER animate same element with both animate AND whileInView
 * 5. Use staggered delays manually instead of staggerChildren
 */

// =============================================================================
// SIMPLE FADE ANIMATIONS - Use these everywhere
// =============================================================================

// For hero/above-fold content - use with `animate` prop
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// =============================================================================
// TIMING
// =============================================================================

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const

// Standard transition
export const transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
}

// =============================================================================
// VIEWPORT - ALWAYS use once: true
// =============================================================================

export const viewportOnce = { once: true }

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get props for hero content (animates on mount)
 * Usage: <motion.div {...heroProps(0.2)} />
 */
export const heroProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

/**
 * Get props for scroll-triggered content
 * Usage: <motion.div {...scrollProps(index * 0.1)} />
 */
export const scrollProps = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

/**
 * Get props for list items with staggered delays
 * Usage: {items.map((item, i) => <motion.div key={i} {...itemProps(i)} />)}
 */
export const itemProps = (index: number, baseDelay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: baseDelay + index * 0.1 },
})

// =============================================================================
// LEGACY EXPORTS (for backwards compatibility - use sparingly)
// =============================================================================

// These are simplified versions that don't use staggerChildren
export const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// Section with staggered children - use for groups of cards/items
export const sectionWithChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}
export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}
export const pageHeaderVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
export const decoratorVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}
export const titleVariants = childVariants
export const staggerOrchestrator = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0
    }
  }
}
export const fadeInUpDelayed = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}
export const fadeInUp = fadeIn

// =============================================================================
// HOVER/TAP EFFECTS (these are fine to use)
// =============================================================================

export const cardHover = { y: -4, transition: { duration: 0.2 } }
export const buttonTap = { scale: 0.98 }
