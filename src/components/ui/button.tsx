import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'relative font-semibold uppercase tracking-[0.15em] font-jost transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group'

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-xs sm:text-sm',
      lg: 'px-8 py-4 sm:px-10 sm:py-5 text-xs sm:text-sm'
    }

    const variantStyles = {
      primary: 'bg-primary text-background',
      secondary: 'bg-transparent text-foreground border-2 border-foreground/20 hover:border-primary hover:text-primary',
      ghost: 'bg-transparent text-primary hover:text-primary/80 underline-offset-4 hover:underline'
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {variant === 'primary' ? (
          <>
            <span className="relative z-10 transition-opacity duration-150 group-hover:opacity-0">{children}</span>
            <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-20">
              {children}
            </span>
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
