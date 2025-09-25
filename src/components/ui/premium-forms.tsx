'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon, Check, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { IconDraw } from './icon-draw'
import { useSoundEffect } from './sound-system'

interface PremiumInputProps {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  error?: string
  success?: boolean
  icon?: LucideIcon
  className?: string
  required?: boolean
  disabled?: boolean
  maxLength?: number
  pattern?: string
  validator?: (value: string) => string | null
  showCharCount?: boolean
  variant?: 'default' | 'glass' | 'minimal' | 'premium'
}

interface PremiumTextareaProps extends Omit<PremiumInputProps, 'type'> {
  rows?: number
  resize?: boolean
}

interface PremiumSelectProps extends Omit<PremiumInputProps, 'type' | 'pattern' | 'maxLength'> {
  options: Array<{ value: string; label: string; disabled?: boolean }>
  searchable?: boolean
}

const inputVariants = {
  default: 'bg-background/50 border-border/50 focus:border-primary focus:bg-background/80',
  glass: 'bg-white/5 border-white/10 backdrop-blur-xl focus:border-primary/50 focus:bg-white/10',
  minimal: 'bg-transparent border-0 border-b-2 border-border/30 rounded-none focus:border-primary',
  premium: 'bg-gradient-to-br from-background/80 to-background/40 border border-primary/20 focus:border-primary/50 shadow-lg focus:shadow-primary/10',
}

export const PremiumInput = forwardRef<HTMLInputElement, PremiumInputProps>(
  ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    error,
    success,
    icon: Icon,
    className,
    required,
    disabled,
    maxLength,
    pattern,
    validator,
    showCharCount,
    variant = 'glass',
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [localError, setLocalError] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const playSound = useSoundEffect()

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(inputRef.current)
        } else {
          ref.current = inputRef.current
        }
      }
    }, [ref])

    const handleFocus = () => {
      setIsFocused(true)
      playSound('hover')
      onFocus?.()
    }

    const handleBlur = () => {
      setIsFocused(false)

      if (validator && value) {
        const validationError = validator(value)
        setLocalError(validationError)
      }

      onBlur?.()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      onChange(newValue)

      // Clear error on change
      if (localError) {
        setLocalError(null)
      }

      // Real-time validation
      if (validator && newValue) {
        const validationError = validator(newValue)
        setLocalError(validationError)
      }
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
      playSound('click')
    }

    const currentError = error || localError
    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn('relative', className)}
      >
        {/* Label */}
        <motion.label
          animate={{
            scale: isFocused || value ? 0.85 : 1,
            y: isFocused || value ? -24 : 0,
            x: isFocused || value ? 8 : 16,
            color: currentError ? 'rgb(239, 68, 68)' :
                   success ? 'rgb(34, 197, 94)' :
                   isFocused ? 'rgb(59, 130, 246)' : 'rgb(156, 163, 175)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25
          }}
          className="absolute left-0 top-0 flex items-center h-12 text-sm font-medium pointer-events-none z-10 origin-left"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>

        {/* Input container */}
        <div className="relative">
          {/* Icon */}
          {Icon && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
            >
              <IconDraw
                icon={Icon}
                size="sm"
                drawSpeed={1}
                triggerOnHover={isFocused}
                autoPlay={false}
                className="w-4 h-4 text-muted-foreground"
              />
            </motion.div>
          )}

          {/* Input */}
          <motion.input
            ref={inputRef}
            type={inputType}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused ? placeholder : ''}
            disabled={disabled}
            maxLength={maxLength}
            pattern={pattern}
            animate={{
              borderColor: currentError ? 'rgb(239, 68, 68)' :
                          success ? 'rgb(34, 197, 94)' :
                          isFocused ? 'rgb(59, 130, 246)' : undefined,
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              'w-full h-12 rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-4 focus:ring-primary/10',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              Icon ? 'pl-10' : 'pl-4',
              isPassword ? 'pr-10' : 'pr-4',
              inputVariants[variant],
              currentError && 'border-red-500 focus:border-red-500',
              success && 'border-green-500 focus:border-green-500'
            )}
          />

          {/* Password toggle */}
          {isPassword && (
            <motion.button
              type="button"
              onClick={togglePasswordVisibility}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 transition-colors"
            >
              <IconDraw
                icon={showPassword ? EyeOff : Eye}
                size="sm"
                drawSpeed={0.8}
                triggerOnHover={true}
                autoPlay={false}
                className="w-4 h-4 text-muted-foreground"
              />
            </motion.button>
          )}

          {/* Success/Error icons */}
          <AnimatePresence>
            {(success || currentError) && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25
                }}
                className={cn(
                  'absolute top-1/2 -translate-y-1/2',
                  isPassword ? 'right-12' : 'right-3'
                )}
              >
                <IconDraw
                  icon={success ? Check : AlertCircle}
                  size="sm"
                  drawSpeed={1.2}
                  autoPlay={true}
                  className={cn(
                    'w-4 h-4',
                    success ? 'text-green-500' : 'text-red-500'
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated border */}
          <motion.div
            initial={false}
            animate={{
              scaleX: isFocused ? 1 : 0,
              opacity: isFocused ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              'absolute bottom-0 left-0 right-0 h-0.5 origin-center rounded-full',
              currentError ? 'bg-red-500' :
              success ? 'bg-green-500' :
              'bg-primary'
            )}
          />
        </div>

        {/* Character count */}
        {showCharCount && maxLength && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused || value ? 1 : 0 }}
            className="absolute right-0 -bottom-6 text-xs text-muted-foreground"
          >
            {value.length}/{maxLength}
          </motion.div>
        )}

        {/* Error message */}
        <AnimatePresence>
          {currentError && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25
              }}
              className="mt-2 text-sm text-red-500 flex items-center gap-2"
            >
              <IconDraw
                icon={AlertCircle}
                size="sm"
                drawSpeed={0.8}
                autoPlay={true}
                className="w-4 h-4 flex-shrink-0"
              />
              {currentError}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success message */}
        <AnimatePresence>
          {success && !currentError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-green-500 flex items-center gap-2"
            >
              <IconDraw
                icon={Check}
                size="sm"
                drawSpeed={0.8}
                autoPlay={true}
                className="w-4 h-4 flex-shrink-0"
              />
              Looks good!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

PremiumInput.displayName = 'PremiumInput'

export const PremiumTextarea = forwardRef<HTMLTextAreaElement, PremiumTextareaProps>(
  ({
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    error,
    success,
    icon: Icon,
    className,
    required,
    disabled,
    maxLength,
    validator,
    showCharCount,
    variant = 'glass',
    rows = 4,
    resize = true,
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [localError, setLocalError] = useState<string | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const playSound = useSoundEffect()

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(textareaRef.current)
        } else {
          ref.current = textareaRef.current
        }
      }
    }, [ref])

    const handleFocus = () => {
      setIsFocused(true)
      playSound('hover')
      onFocus?.()
    }

    const handleBlur = () => {
      setIsFocused(false)

      if (validator && value) {
        const validationError = validator(value)
        setLocalError(validationError)
      }

      onBlur?.()
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      onChange(newValue)

      if (localError) {
        setLocalError(null)
      }

      if (validator && newValue) {
        const validationError = validator(newValue)
        setLocalError(validationError)
      }
    }

    const currentError = error || localError

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn('relative', className)}
      >
        {/* Label */}
        <motion.label
          animate={{
            scale: isFocused || value ? 0.85 : 1,
            y: isFocused || value ? -24 : 12,
            x: isFocused || value ? 8 : 16,
            color: currentError ? 'rgb(239, 68, 68)' :
                   success ? 'rgb(34, 197, 94)' :
                   isFocused ? 'rgb(59, 130, 246)' : 'rgb(156, 163, 175)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25
          }}
          className="absolute left-0 top-0 text-sm font-medium pointer-events-none z-10 origin-left"
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>

        {/* Textarea container */}
        <div className="relative">
          <motion.textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused ? placeholder : ''}
            disabled={disabled}
            maxLength={maxLength}
            rows={rows}
            animate={{
              borderColor: currentError ? 'rgb(239, 68, 68)' :
                          success ? 'rgb(34, 197, 94)' :
                          isFocused ? 'rgb(59, 130, 246)' : undefined,
            }}
            className={cn(
              'w-full rounded-lg transition-all duration-200 pt-3 pb-3',
              'focus:outline-none focus:ring-4 focus:ring-primary/10',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              !resize && 'resize-none',
              'px-4',
              inputVariants[variant],
              currentError && 'border-red-500 focus:border-red-500',
              success && 'border-green-500 focus:border-green-500'
            )}
          />

          {/* Animated border */}
          <motion.div
            initial={false}
            animate={{
              scaleX: isFocused ? 1 : 0,
              opacity: isFocused ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              'absolute bottom-0 left-0 right-0 h-0.5 origin-center rounded-full',
              currentError ? 'bg-red-500' :
              success ? 'bg-green-500' :
              'bg-primary'
            )}
          />
        </div>

        {/* Character count */}
        {showCharCount && maxLength && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused || value ? 1 : 0 }}
            className="absolute right-0 -bottom-6 text-xs text-muted-foreground"
          >
            {value.length}/{maxLength}
          </motion.div>
        )}

        {/* Error/Success messages */}
        <AnimatePresence>
          {currentError && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-2"
            >
              <IconDraw
                icon={AlertCircle}
                size="sm"
                drawSpeed={0.8}
                autoPlay={true}
                className="w-4 h-4 flex-shrink-0"
              />
              {currentError}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

PremiumTextarea.displayName = 'PremiumTextarea'

// Form validation helpers
export const validators = {
  required: (message = 'This field is required') => (value: string) =>
    !value.trim() ? message : null,

  email: (message = 'Please enter a valid email address') => (value: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? message : null,

  minLength: (min: number, message?: string) => (value: string) =>
    value.length < min ? (message || `Must be at least ${min} characters`) : null,

  maxLength: (max: number, message?: string) => (value: string) =>
    value.length > max ? (message || `Must be no more than ${max} characters`) : null,

  pattern: (regex: RegExp, message = 'Invalid format') => (value: string) =>
    !regex.test(value) ? message : null,

  combine: (...validators: Array<(value: string) => string | null>) => (value: string) => {
    for (const validator of validators) {
      const error = validator(value)
      if (error) return error
    }
    return null
  },
}