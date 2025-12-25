/**
 * MOTION SYSTEM
 *
 * Elegant, unified animation primitives.
 * One rhythm. One language. Site-wide consistency.
 */

// =============================================================================
// FOUNDATION
// =============================================================================

// Duration scale - slow enough to see
const DURATION_FAST = 0.4
const DURATION = 0.7
const DURATION_SLOW = 0.9

// Stagger scale - clearly visible cascade
const STAGGER_TIGHT = 0.12
const STAGGER = 0.2
const STAGGER_LOOSE = 0.25

// Movement scale - dramatic entrance
const MOVE_SUBTLE = 30
const MOVE = 50
const MOVE_DRAMATIC = 80

// Premium easing - quick out, gentle settle
const EASE = [0.22, 1, 0.36, 1] as const

// Spring for interactions - bouncy but controlled
const SPRING = { type: "spring", stiffness: 400, damping: 30 } as const

// =============================================================================
// CORE PRIMITIVES
// =============================================================================

/**
 * The one scroll animation you need.
 *
 * @example
 * <motion.div {...reveal()} />           // Single element
 * <motion.div {...reveal(index)} />      // Staggered list
 * <motion.div {...reveal(index, 0.2)} /> // With base delay
 */
export const reveal = (index = 0, baseDelay = 0) => ({
  initial: { opacity: 0, y: MOVE },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: {
    duration: DURATION,
    delay: baseDelay + index * STAGGER,
    ease: EASE
  },
})

/**
 * Cards with lift interaction.
 *
 * @example
 * {items.map((item, i) => (
 *   <motion.div key={i} {...card(i)}>
 * ))}
 */
export const card = (index = 0, baseDelay = 0) => ({
  ...reveal(index, baseDelay),
  whileHover: { y: -6, transition: SPRING },
  whileTap: { scale: 0.98 },
})

/**
 * Hero/above-fold content (animates on mount, not scroll).
 *
 * @example
 * <motion.h1 {...hero(0)} />
 * <motion.p {...hero(1)} />
 */
export const hero = (index = 0) => ({
  initial: { opacity: 0, y: MOVE_DRAMATIC },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: DURATION_SLOW,
    delay: index * STAGGER_LOOSE,
    ease: EASE
  },
})

// =============================================================================
// INTERACTION STATES
// =============================================================================

export const hover = {
  lift: { y: -6, transition: SPRING },
  scale: { scale: 1.02, transition: SPRING },
  glow: { boxShadow: "0 0 30px rgba(var(--primary), 0.3)", transition: SPRING },
}

export const tap = {
  scale: { scale: 0.98 },
  press: { scale: 0.95, transition: SPRING },
}

// =============================================================================
// ORCHESTRATION (parent/child patterns)
// =============================================================================

export const stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: STAGGER, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: MOVE_SUBTLE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE }
    },
  },
}

// Fast stagger for nav/menus
export const staggerFast = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: STAGGER_TIGHT, delayChildren: 0 },
    },
  },
  item: {
    hidden: { opacity: 0, y: MOVE_SUBTLE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION_FAST, ease: EASE }
    },
  },
}

// =============================================================================
// VIEWPORT
// =============================================================================

export const viewport = { once: true, margin: "-15%" } as const
export const viewportWithMargin = { once: true, margin: "-15%" } as const

// =============================================================================
// RAW VALUES (for custom compositions)
// =============================================================================

export const timing = {
  durationFast: DURATION_FAST,
  duration: DURATION,
  durationSlow: DURATION_SLOW,
  staggerTight: STAGGER_TIGHT,
  stagger: STAGGER,
  staggerLoose: STAGGER_LOOSE,
  moveSubtle: MOVE_SUBTLE,
  move: MOVE,
  moveDramatic: MOVE_DRAMATIC,
}
export const ease = EASE
export const spring = SPRING

// =============================================================================
// LEGACY COMPATIBILITY
// Keep existing components working during migration
// =============================================================================

export const viewportOnce = viewport
export const TIMING = {
  fast: DURATION_FAST,
  normal: DURATION,
  slow: DURATION_SLOW,
  stagger: STAGGER,
  staggerFast: STAGGER_TIGHT,
  staggerSlow: STAGGER_LOOSE,
  yOffset: MOVE,
  yOffsetSmall: MOVE_SUBTLE,
  xOffset: MOVE_SUBTLE,
}
export const DURATION_LEGACY = TIMING
export { EASE }

// Function aliases
export const fadeUp = hero
export const scrollFadeUp = (delay = 0) => reveal(0, delay)
export const staggerItem = reveal
export const staggerCard = card
export const cardProps = card
export const itemProps = reveal
export const heroProps = hero
export const scrollProps = scrollFadeUp

// Variant aliases
export const containerVariants = stagger.container
export const itemVariants = stagger.item
export const sectionWithChildrenVariants = stagger.container
export const childVariants = stagger.item
export const sectionVariants = {
  hidden: { opacity: 0, y: MOVE },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease } },
}
export const headerVariants = staggerFast.container
export const pageHeaderVariants = staggerFast.container
export const titleVariants = stagger.item
export const staggerOrchestrator = stagger.container
export const decoratorVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION_FAST, ease } },
}

// Interaction aliases
export const hoverLift = hover.lift
export const hoverScale = hover.scale
export const tapScale = tap.scale
export const cardHover = hover.lift
export const buttonTap = tap.scale
export const transition = { duration: DURATION, ease }

// Static objects
export const fadeIn = { initial: { opacity: 0, y: MOVE_SUBTLE }, animate: { opacity: 1, y: 0 } }
export const fadeInUp = fadeIn
export const fadeInUpDelayed = fadeIn
export const fadeInLeft = { initial: { opacity: 0, x: -MOVE_SUBTLE }, animate: { opacity: 1, x: 0 } }
export const fadeInRight = { initial: { opacity: 0, x: MOVE_SUBTLE }, animate: { opacity: 1, x: 0 } }
export const scaleIn = { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }

// New function aliases for specificity
export const heroStagger = (index: number) => hero(index)
export const navStagger = (index: number, baseDelay = 0) => reveal(index, baseDelay)
export const featureCard = card
export const showcaseCard = card
export const containerFastVariants = staggerFast.container
export const containerSlowVariants = stagger.container
export const itemLargeVariants = stagger.item

// Utility exports
export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -MOVE_SUBTLE },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION, delay, ease },
})
export const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: MOVE_SUBTLE },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION, delay, ease },
})
export const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: DURATION_FAST, delay, ease },
})
