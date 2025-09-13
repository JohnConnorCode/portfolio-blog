'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  // Remove ThemeProvider completely - just force dark mode
  return <>{children}</>
}