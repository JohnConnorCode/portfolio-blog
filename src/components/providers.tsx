'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  // Force dark mode by not allowing theme changes at all
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          `,
        }}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}