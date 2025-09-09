'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { monitoring } from '@/lib/monitoring'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to monitoring service
    monitoring.logError(error, 'Application')
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected error. Our team has been notified.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Go home
          </Link>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-50 dark:bg-red-950 rounded-lg text-left">
            <p className="text-sm font-mono text-red-600 dark:text-red-400">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}