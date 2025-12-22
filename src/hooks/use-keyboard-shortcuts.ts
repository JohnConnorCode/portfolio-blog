'use client'

import { useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'

interface KeyboardShortcut {
  key: string
  metaKey?: boolean
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
  action: () => void
  description: string
  disabled?: boolean
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[] = []) {
  const router = useRouter()

  // Default shortcuts for the portfolio - wrapped in useMemo to prevent recreation on every render
  const defaultShortcuts: KeyboardShortcut[] = useMemo(() => [
    {
      key: 'h',
      action: () => router.push('/'),
      description: 'Go to Home'
    },
    {
      key: 'w',
      action: () => router.push('/work'),
      description: 'Go to Work'
    },
    {
      key: 'b',
      action: () => router.push('/blog'),
      description: 'Go to Blog'
    },
    {
      key: 'c',
      action: () => router.push('/contact'),
      description: 'Go to Contact'
    },
    {
      key: 'p',
      action: () => router.push('/philosophy'),
      description: 'Go to Philosophy'
    },
    {
      key: 't',
      action: () => router.push('/thoughts'),
      description: 'Go to Thoughts'
    },
    {
      key: '/',
      action: () => {
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
        }
      },
      description: 'Focus search'
    },
    {
      key: 'Escape',
      action: () => {
        // Close any open modals or dropdowns
        const modals = document.querySelectorAll('[data-modal="true"]')
        const dropdowns = document.querySelectorAll('[data-dropdown="true"]')
        modals.forEach((modal) => (modal as HTMLDialogElement).close?.())
        dropdowns.forEach((dropdown) => (dropdown as HTMLDialogElement).close?.())

        // Remove focus from active element
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
      },
      description: 'Close modals/dropdowns'
    },
    {
      key: '?',
      shiftKey: true,
      action: () => {
        // Show help modal with all shortcuts
        showShortcutsHelp()
      },
      description: 'Show keyboard shortcuts'
    },
    {
      key: 'j',
      action: () => {
        // Smooth scroll down
        window.scrollBy({ top: 300, behavior: 'smooth' })
      },
      description: 'Scroll down'
    },
    {
      key: 'k',
      action: () => {
        // Smooth scroll up
        window.scrollBy({ top: -300, behavior: 'smooth' })
      },
      description: 'Scroll up'
    },
    {
      key: 'g',
      action: () => {
        // Go to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      description: 'Go to top'
    },
    {
      key: 'G',
      shiftKey: true,
      action: () => {
        // Go to bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      },
      description: 'Go to bottom'
    }
  ], [router])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const allShortcuts = [...defaultShortcuts, ...shortcuts]
    // Don't trigger shortcuts when typing in inputs or textareas
    if (event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement)?.contentEditable === 'true') {
      // Allow Escape to work even in inputs
      if (event.key !== 'Escape') {
        return
      }
    }

    for (const shortcut of allShortcuts) {
      if (shortcut.disabled) continue

      const matchesKey = event.key === shortcut.key
      const matchesMeta = !!shortcut.metaKey === event.metaKey
      const matchesCtrl = !!shortcut.ctrlKey === event.ctrlKey
      const matchesShift = !!shortcut.shiftKey === event.shiftKey
      const matchesAlt = !!shortcut.altKey === event.altKey

      if (matchesKey && matchesMeta && matchesCtrl && matchesShift && matchesAlt) {
        event.preventDefault()
        shortcut.action()
        break
      }
    }
  }, [defaultShortcuts, shortcuts])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return [...defaultShortcuts, ...shortcuts]
}

// Help modal for showing shortcuts
function showShortcutsHelp() {
  const existingModal = document.getElementById('shortcuts-modal')
  if (existingModal) {
    existingModal.remove()
  }

  const modal = document.createElement('div')
  modal.id = 'shortcuts-modal'
  modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm'
  modal.setAttribute('data-modal', 'true')

  modal.innerHTML = `
    <div class="bg-card border border-border rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-foreground">Keyboard Shortcuts</h3>
        <button id="close-shortcuts" class="p-2 hover:bg-muted rounded-lg transition-colors">
          <svg class="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="space-y-3 text-sm">
        <div class="grid grid-cols-2 gap-2 text-foreground/80">
          <div><kbd class="kbd">h</kbd> Home</div>
          <div><kbd class="kbd">w</kbd> Work</div>
          <div><kbd class="kbd">b</kbd> Blog</div>
          <div><kbd class="kbd">c</kbd> Contact</div>
          <div><kbd class="kbd">p</kbd> Philosophy</div>
          <div><kbd class="kbd">t</kbd> Thoughts</div>
          <div><kbd class="kbd">/</kbd> Search</div>
          <div><kbd class="kbd">?</kbd> Help</div>
          <div><kbd class="kbd">j</kbd> Scroll down</div>
          <div><kbd class="kbd">k</kbd> Scroll up</div>
          <div><kbd class="kbd">g</kbd> Go to top</div>
          <div><kbd class="kbd">G</kbd> Go to bottom</div>
        </div>

        <div class="pt-4 border-t border-border">
          <p class="text-xs text-muted-foreground">Press <kbd class="kbd">Escape</kbd> to close</p>
        </div>
      </div>
    </div>
  `

  // Add styles for kbd elements
  const style = document.createElement('style')
  style.textContent = `
    .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.5rem;
      height: 1.5rem;
      padding: 0 0.375rem;
      background-color: rgb(55 65 81);
      color: rgb(209 213 219);
      border: 1px solid rgb(75 85 99);
      border-radius: 0.25rem;
      font-family: ui-monospace, SFMono-Regular, monospace;
      font-size: 0.75rem;
      font-weight: 600;
      margin-right: 0.5rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
  `
  document.head.appendChild(style)

  document.body.appendChild(modal)

  // Close handlers
  const closeModal = () => {
    modal.remove()
    style.remove()
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })

  document.getElementById('close-shortcuts')?.addEventListener('click', closeModal)

  const escapeHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
      document.removeEventListener('keydown', escapeHandler)
    }
  }
  document.addEventListener('keydown', escapeHandler)
}

// Hook for specific page shortcuts
export function usePageShortcuts(pageShortcuts: Omit<KeyboardShortcut, 'description'>[] = []) {
  const shortcuts = pageShortcuts.map(shortcut => ({
    ...shortcut,
    description: ''
  }))

  return useKeyboardShortcuts(shortcuts)
}

// Navigation shortcuts hook
export function useNavigationShortcuts() {
  const router = useRouter()

  const shortcuts: KeyboardShortcut[] = [
    {
      key: 'ArrowLeft',
      altKey: true,
      action: () => router.back(),
      description: 'Go back'
    },
    {
      key: 'ArrowRight',
      altKey: true,
      action: () => router.forward(),
      description: 'Go forward'
    },
    {
      key: 'r',
      ctrlKey: true,
      action: () => window.location.reload(),
      description: 'Reload page'
    }
  ]

  return useKeyboardShortcuts(shortcuts)
}