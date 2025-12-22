import { Variants, TargetAndTransition } from 'framer-motion'

// =============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL ANIMATIONS
// =============================================================================

// Timing constants
export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const

export const EASE = {
  out: [0.0, 0.0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1],
  spring: { type: "spring", stiffness: 300, damping: 30 }
} as const

// =============================================================================
// PAGE SECTION ANIMATIONS
// Use: Apply to main page sections. Children should NOT have their own animations.
// =============================================================================

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    }
  }
}

// For sections that need staggered children (parent also fades)
export const sectionWithChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  }
}

// Pure orchestrator - only staggers children, no parent animation
// Use when parent is already visible or nested inside another stagger container
export const staggerOrchestrator: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

// =============================================================================
// CHILD ELEMENT ANIMATIONS
// Use: Only when parent has sectionWithChildrenVariants
// =============================================================================

export const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
}

// For grid items (cards, list items)
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASE.out,
    }
  }
}

// =============================================================================
// PAGE HEADER ANIMATIONS
// Use: For page titles and decorative elements at top of pages
// =============================================================================

export const pageHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
}

export const decoratorVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.fast }
  }
}

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast }
  }
}

// =============================================================================
// NAVBAR ANIMATIONS
// =============================================================================

export const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    }
  }
}

export const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.fast,
      delay: 0.1 + i * 0.05,
      ease: EASE.out,
    }
  })
}

export const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    }
  }
}

// =============================================================================
// CARD/INTERACTIVE ANIMATIONS
// =============================================================================

export const cardHover: TargetAndTransition = {
  y: -4,
  transition: { duration: 0.2 }
}

export const buttonTap: TargetAndTransition = {
  scale: 0.98
}

// =============================================================================
// LEGACY ANIMATION VARIANTS (for backwards compatibility)
// These use "initial"/"animate" naming instead of "hidden"/"visible"
// =============================================================================

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    }
  }
}

export const fadeInUpDelayed: Variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
      delay: custom * 0.1,
    }
  })
}

// =============================================================================
// VIEWPORT SETTINGS
// =============================================================================

export const viewportOnce = { once: true, margin: "-100px" }
export const viewportOnceEarly = { once: true, margin: "-50px" }

// =============================================================================
// HELPER: Get animation props for a section
// =============================================================================

export const getSectionProps = (hasChildren = false) => ({
  variants: hasChildren ? sectionWithChildrenVariants : sectionVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
})

export const getChildProps = () => ({
  variants: childVariants,
})

export const getItemProps = () => ({
  variants: itemVariants,
})

export const getHeaderProps = () => ({
  variants: pageHeaderVariants,
  initial: "hidden",
  animate: "visible",
})
