/**
 * Universal Animation Config
 *
 * RULES (follow these to avoid glitchy animations):
 * 1. Use `fadeIn` with `animate` for hero/above-fold content (animates once on mount)
 * 2. Use `fadeInView` with `whileInView` for below-fold content (animates once when scrolled into view)
 * 3. NEVER use nested variants (parent staggerChildren → child variants) - causes propagation bugs
 * 4. NEVER animate the same element with both `animate` and `whileInView`
 * 5. Always use `viewport={{ once: true }}` with whileInView to prevent re-animation
 */

// Simple fade in - use with `animate` prop for immediate animation
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
}

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
}

// Scale in
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// For whileInView animations - use these with viewport={{ once: true }}
export const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

// Standard transition configs
export const transition = {
  fast: { duration: 0.3 },
  normal: { duration: 0.5 },
  slow: { duration: 0.8 },
}

// Stagger delays for sequential items
export const stagger = (index: number, base = 0.1) => ({
  transition: { duration: 0.5, delay: index * base },
})

// Viewport config - ALWAYS use once: true to prevent re-animation
export const viewportOnce = { once: true }

/**
 * Helper to create staggered animation props for list items
 * Usage: <motion.div {...staggeredItem(index)} />
 */
export const staggeredItem = (index: number, baseDelay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: baseDelay + index * 0.1 },
})

/**
 * Helper for hero content - immediate animation on mount
 * Usage: <motion.div {...heroAnimation(0.2)} />
 */
export const heroAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})
