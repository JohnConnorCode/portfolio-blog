import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

/* ==========================================================================
   SECTION HEADER
   Diamond + gradient lines pattern with optional badge and icon
   ========================================================================== */

interface SectionHeaderProps {
  badge?: string
  badgeIcon?: LucideIcon
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  subtitle,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {/* Decorative element with diamond */}
      <div className={cn('flex items-center gap-4 mb-6', centered && 'justify-center')}>
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
        {badge ? (
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/30">
            {BadgeIcon && <BadgeIcon className="w-4 h-4 text-primary" />}
            <span className="text-xs font-semibold uppercase tracking-[0.2em] font-jost text-primary">
              {badge}
            </span>
          </div>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary transition-transform duration-300 hover:scale-125 hover:rotate-45 cursor-pointer">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Title with optional highlight */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jost tracking-wide">
        <span className="text-foreground">{title} </span>
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          'text-base sm:text-lg font-jost text-foreground/60',
          centered && 'max-w-2xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ==========================================================================
   CORNER ACCENTS
   Gold corner brackets for cards - hover or permanent
   ========================================================================== */

interface CornerAccentsProps {
  size?: 'sm' | 'md' | 'lg'
  permanent?: boolean
  className?: string
}

export function CornerAccents({ size = 'md', permanent = false, className }: CornerAccentsProps) {
  const sizeStyles = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }

  const borderStyles = {
    sm: 'border',
    md: 'border',
    lg: 'border-2'
  }

  const visibilityStyles = permanent
    ? 'opacity-100'
    : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300'

  return (
    <>
      {/* Top-left */}
      <div className={cn(
        'absolute top-0 left-0',
        sizeStyles[size],
        borderStyles[size],
        'border-t border-l border-primary',
        visibilityStyles,
        className
      )} />
      {/* Top-right */}
      <div className={cn(
        'absolute top-0 right-0',
        sizeStyles[size],
        borderStyles[size],
        'border-t border-r border-primary',
        visibilityStyles,
        className
      )} />
      {/* Bottom-left */}
      <div className={cn(
        'absolute bottom-0 left-0',
        sizeStyles[size],
        borderStyles[size],
        'border-b border-l border-primary',
        visibilityStyles,
        className
      )} />
      {/* Bottom-right */}
      <div className={cn(
        'absolute bottom-0 right-0',
        sizeStyles[size],
        borderStyles[size],
        'border-b border-r border-primary',
        visibilityStyles,
        className
      )} />
    </>
  )
}

/* ==========================================================================
   DIAMOND DIVIDER
   Horizontal line with centered diamond - for section separation
   ========================================================================== */

interface DiamondDividerProps {
  className?: string
}

export function DiamondDivider({ className }: DiamondDividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-4 group no-shadow', className)}>
      <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30 transition-all duration-300 group-hover:w-24 group-hover:to-primary/50" />
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30 transition-all duration-300 group-hover:w-24 group-hover:to-primary/50" />
    </div>
  )
}

/* ==========================================================================
   GLOW ORB
   Background glow effect for sections
   ========================================================================== */

interface GlowOrbProps {
  color?: 'primary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
  className?: string
}

export function GlowOrb({ color = 'primary', size = 'md', position, className }: GlowOrbProps) {
  const sizeStyles = {
    sm: 'w-[300px] h-[300px] blur-[80px]',
    md: 'w-[500px] h-[500px] blur-[120px]',
    lg: 'w-[800px] h-[800px] blur-[150px]'
  }

  const positionStyles = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  const colorStyles = {
    primary: 'bg-primary/5',
    accent: 'bg-primary/3'
  }

  return (
    <div className={cn(
      'absolute rounded-full pointer-events-none',
      sizeStyles[size],
      positionStyles[position],
      colorStyles[color],
      className
    )} />
  )
}

/* ==========================================================================
   GRID BACKGROUND
   Tron-style grid pattern with optional accent lines
   ========================================================================== */

interface GridBackgroundProps {
  opacity?: number
  showAccentLines?: boolean
  className?: string
}

export function GridBackground({ opacity = 0.04, showAccentLines = true, className }: GridBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      {showAccentLines && (
        <>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </>
      )}
    </div>
  )
}
