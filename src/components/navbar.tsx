'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Briefcase, BookOpen, Home, Mail, Brain, ChevronRight, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { TIMING, EASE } from '@/lib/animation-config'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bio', label: 'Bio', icon: User },
  {
    href: '/work',
    label: 'Work',
    icon: Briefcase,
    subItems: [
      { href: '/super-debate', label: 'Super Debate' },
    ]
  },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/philosophy', label: 'Approach', icon: Brain },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/50 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/5'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'flex items-center justify-between transition-all duration-500',
            scrolled ? 'h-16' : 'h-20 sm:h-24'
          )}>
            {/* Logo Section */}
            <Link href="/" className="group relative z-10">
              <div className="flex items-center gap-3">
                {/* Logo - Shrinks on scroll, exciting hover effects */}
                <div
                  className={cn(
                    "relative transition-all duration-500 group-hover:scale-110",
                    scrolled ? "w-10 h-10" : "w-12 h-12"
                  )}
                >
                  {/* Ambient glow - intensifies on hover */}
                  <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full animate-in delay-2 transition-all duration-500 group-hover:bg-primary/40 group-hover:-inset-4 group-hover:blur-2xl" style={{ opacity: 0.6 }} />

                  {/* Outer diamond border - spins and glows on hover */}
                  <div className="logo-diamond absolute inset-0 border-2 border-primary animate-logo-diamond delay-0 group-hover:rotate-[135deg]" />

                  {/* Inner filled diamond - pulses on hover */}
                  <div className="absolute inset-[5px] bg-primary/10 transition-all duration-500 animate-logo-diamond delay-1 group-hover:bg-primary/30 group-hover:rotate-[135deg]" />

                  {/* Center accent - grows on hover */}
                  <div
                    className={cn(
                      "absolute bg-primary/30 transition-all duration-500 animate-logo-diamond delay-2 group-hover:bg-primary/60 group-hover:rotate-[135deg]",
                      scrolled ? "inset-[12px] group-hover:inset-[10px]" : "inset-[14px] group-hover:inset-[12px]"
                    )}
                  />

                  {/* JC Text - stays centered, scales up with glow */}
                  <div className="absolute inset-0 flex items-center justify-center animate-in delay-3">
                    <span
                      className={cn(
                        "logo-text font-black text-primary tracking-wide font-jost group-hover:scale-110",
                        scrolled ? "text-sm" : "text-lg"
                      )}
                    >
                      JC
                    </span>
                  </div>
                </div>

                {/* Name/Title - Shows on scroll (both mobile and desktop) */}
                <AnimatePresence>
                  {scrolled && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: 'auto' }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-semibold tracking-tight font-jost whitespace-nowrap text-transparent animate-gradient-cycle-slow">
                          JOHN CONNOR
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.15em] font-jost whitespace-nowrap hidden xs:block">
                          Product Strategist
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href || item.subItems?.some(sub => pathname === sub.href)
                const hasSubItems = item.subItems && item.subItems.length > 0

                return (
                  <div
                    key={item.href}
                    className="relative group animate-in"
                    style={{ animationDelay: `${0.3 + index * 0.12}s` }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium',
                        isActive
                          ? 'text-primary'
                          : 'text-foreground/60 hover:text-foreground'
                      )}
                    >
                      {/* Hover/Active background */}
                      <span className={cn(
                        'absolute inset-0 rounded-lg transition-all duration-300',
                        isActive
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-transparent hover:bg-foreground/5'
                      )} />

                      <Icon className={cn(
                        "w-4 h-4 relative z-10 transition-colors duration-300",
                        isActive ? "text-primary" : "group-hover:text-primary"
                      )} />
                      <span className="relative z-10">{item.label}</span>
                    </Link>

                    {/* Dropdown for sub-items */}
                    {hasSubItems && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out">
                        <div className="bg-background/95 backdrop-blur-xl border border-primary/10 rounded-lg shadow-xl shadow-black/10 overflow-hidden min-w-[180px]">
                          {item.subItems?.map((subItem) => {
                            const isSubActive = pathname === subItem.href
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center gap-2 px-4 py-3 transition-all duration-200 text-sm',
                                  isSubActive
                                    ? 'text-primary bg-primary/10'
                                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                )}
                              >
                                <ChevronRight className="w-3 h-3" />
                                {subItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Theme toggle */}
              <div
                className="ml-2 animate-in"
                style={{ animationDelay: `${0.3 + navItems.length * 0.12}s` }}
              >
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors relative z-10"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <span
                    className={cn(
                      "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-200",
                      isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-[5px]"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-200",
                      isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute w-5 h-0.5 bg-foreground rounded-full transition-all duration-200",
                      isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-[5px]"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: TIMING.fast, ease: EASE }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: TIMING.fast, ease: EASE }}
              className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 h-16 border-b border-foreground/5">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  {/* Mini logo */}
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 border-2 border-primary rotate-45" />
                    <div className="absolute inset-[4px] bg-primary/10 rotate-45" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-black text-primary font-jost">JC</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold font-jost text-transparent animate-gradient-cycle-slow">JOHN CONNOR</span>
                    <span className="text-[9px] text-primary uppercase tracking-[0.15em] font-jost">Menu</span>
                  </div>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href || item.subItems?.some(sub => pathname === sub.href)
                  const hasSubItems = item.subItems && item.subItems.length > 0

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: TIMING.fast, delay: index * TIMING.staggerFast, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-4 px-4 py-4 rounded-xl transition-all',
                          isActive
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                        )}
                      >
                        <div className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                          isActive ? 'bg-primary/20' : 'bg-foreground/5'
                        )}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="flex-1 font-medium">{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </Link>

                      {/* Sub-items */}
                      {hasSubItems && (
                        <div className="ml-14 mt-1 space-y-1">
                          {item.subItems?.map((subItem, subIndex) => {
                            const isSubActive = pathname === subItem.href
                            return (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: (index * TIMING.staggerFast) + (subIndex * 0.03) + 0.1, ease: EASE }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    'flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm',
                                    isSubActive
                                      ? 'bg-primary/10 text-primary'
                                      : 'text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                                  )}
                                >
                                  <ChevronRight className="w-3 h-3" />
                                  <span>{subItem.label}</span>
                                </Link>
                              </motion.div>
                            )
                          })}
                        </div>
                      )}
                    </motion.div>
                  )
                })}

                {/* Bottom accent */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: TIMING.fast, delay: navItems.length * TIMING.staggerFast + 0.2, ease: EASE }}
                  className="pt-6 mt-6 border-t border-foreground/5"
                >
                  <p className="text-center text-xs text-foreground/30 uppercase tracking-widest font-jost">
                    Building what matters
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
