'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { IconDraw } from './icon-draw'
import { useSoundEffect } from './sound-system'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastSystemContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  clearAll: () => void
}

const ToastSystemContext = createContext<ToastSystemContextType | undefined>(undefined)

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const toastColors = {
  success: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30',
  error: 'from-red-500/20 to-red-600/20 border-red-500/30',
  info: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
  warning: 'from-amber-500/20 to-amber-600/20 border-amber-500/30',
}

const toastSounds = {
  success: 'success' as const,
  error: 'error' as const,
  info: 'notification' as const,
  warning: 'notification' as const,
}

export function ToastSystemProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }

    setToasts((prev) => [...prev, newToast])

    // Auto-remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, toast.duration || 4000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToastSystemContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      <ToastContainer />
    </ToastSystemContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastSystemContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastSystemProvider')
  }
  return context
}

function ToastContainer() {
  const { toasts } = useToast()

  if (typeof window === 'undefined') return null

  return createPortal(
    <div className="fixed top-4 right-4 z-[200] space-y-2 max-w-sm w-full">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast()
  const playSound = useSoundEffect()
  const Icon = toastIcons[toast.type]

  // Play sound when toast appears
  React.useEffect(() => {
    playSound(toastSounds[toast.type])
  }, [])

  const handleClose = () => {
    playSound('pop')
    removeToast(toast.id)
  }

  const handleActionClick = () => {
    playSound('click')
    toast.action?.onClick()
    removeToast(toast.id)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 300, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      className={`
        relative p-4 rounded-xl border backdrop-blur-xl shadow-2xl
        bg-gradient-to-br ${toastColors[toast.type]}
        shadow-black/20
      `}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 rounded-xl bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <IconDraw
              icon={Icon}
              size="sm"
              drawSpeed={0.8}
              autoPlay={true}
              className="w-5 h-5 mt-0.5 text-current"
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold text-white leading-tight"
            >
              {toast.title}
            </motion.h4>

            {toast.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-white/80 mt-1 leading-relaxed"
              >
                {toast.description}
              </motion.p>
            )}

            {toast.action && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleActionClick}
                className="text-xs font-medium text-white hover:text-white/80 mt-2 underline transition-colors"
              >
                {toast.action.label}
              </motion.button>
            )}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleClose}
            className="ml-2 p-1 rounded-md hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconDraw
              icon={X}
              size="sm"
              drawSpeed={0.6}
              triggerOnHover={true}
              autoPlay={false}
              className="w-4 h-4"
            />
          </motion.button>
        </div>
      </div>

      {/* Progress bar for duration */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: (toast.duration || 4000) / 1000,
          ease: 'linear'
        }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 rounded-b-xl origin-left"
      />
    </motion.div>
  )
}

// Convenience hooks for different toast types
export function useToastNotifications() {
  const { addToast } = useToast()

  const success = useCallback((title: string, description?: string, action?: Toast['action']) => {
    addToast({ type: 'success', title, description, action })
  }, [addToast])

  const error = useCallback((title: string, description?: string, action?: Toast['action']) => {
    addToast({ type: 'error', title, description, action, duration: 6000 })
  }, [addToast])

  const info = useCallback((title: string, description?: string, action?: Toast['action']) => {
    addToast({ type: 'info', title, description, action })
  }, [addToast])

  const warning = useCallback((title: string, description?: string, action?: Toast['action']) => {
    addToast({ type: 'warning', title, description, action })
  }, [addToast])

  return { success, error, info, warning }
}

// Pre-built toast triggers for common scenarios
export function useCommonToasts() {
  const { success, error, info } = useToastNotifications()

  const formSuccess = useCallback(() => {
    success(
      'Message sent successfully!',
      'I\'ll get back to you within 24 hours.'
    )
  }, [success])

  const formError = useCallback(() => {
    error(
      'Failed to send message',
      'Please try again or contact me directly.',
      {
        label: 'Try Again',
        onClick: () => window.location.reload()
      }
    )
  }, [error])

  const copySuccess = useCallback(() => {
    success('Copied to clipboard!', 'Ready to paste anywhere.')
  }, [success])

  const loadingComplete = useCallback((message: string) => {
    info('Loading complete', message)
  }, [info])

  return {
    formSuccess,
    formError,
    copySuccess,
    loadingComplete
  }
}

// React import fix
import React from 'react'