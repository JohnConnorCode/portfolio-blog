'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Briefcase, BookOpen, Home, Mail, Brain, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  {
    href: '/work',
    label: 'Work',
    icon: Briefcase,
    subItems: [
      { href: '/super-debate', label: 'Super Debate' },
    ]
  },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/thoughts', label: 'Thoughts', icon: MessageSquare },
  { href: '/philosophy', label: 'Approach', icon: Brain },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      {/* Subtle border that appears on scroll */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Link href="/" className="group">
              <div className="flex items-center gap-4">
                {/* Logo - Bold animated diamond */}
                <motion.div
                  className="relative w-14 h-14"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* Ambient glow - always visible, stronger on hover */}
                  <motion.div
                    className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                  <div className="absolute -inset-1 bg-primary/0 group-hover:bg-primary/30 blur-xl transition-all duration-500 rounded-full" />

                  {/* Outer diamond border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rotate-45"
                    initial={{ scale: 0, rotate: 45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 45, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 150 }}
                  />

                  {/* Inner filled diamond */}
                  <motion.div
                    className="absolute inset-[6px] bg-primary/10 rotate-45"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 45 }}
                    transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 180 }}
                  />

                  {/* Center accent dot */}
                  <motion.div
                    className="absolute inset-[18px] bg-primary/40 rotate-45"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 45 }}
                    transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 200 }}
                  />

                  {/* JC Text - Bold */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl font-black text-primary tracking-wide font-jost drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                      JC
                    </span>
                  </motion.div>
                </motion.div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-lg font-semibold tracking-tight text-foreground font-jost"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    John Connor
                  </motion.span>
                  <motion.span
                    className="text-[10px] text-primary uppercase tracking-[0.2em] font-jost"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    Product Strategist
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href || item.subItems?.some(sub => pathname === sub.href)
              const hasSubItems = item.subItems && item.subItems.length > 0

              return (
                <motion.div
                  key={item.href}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center space-x-2 group/link text-sm',
                      isActive
                        ? 'text-primary'
                        : 'text-foreground/60 hover:text-foreground'
                    )}
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-foreground/5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    <Icon className={cn(
                      "w-4 h-4 relative z-10 transition-all duration-300",
                      isActive ? "text-primary" : "group-hover/link:text-primary"
                    )} />
                    <span className="relative z-10">{item.label}</span>
                  </Link>

                  {/* Dropdown for sub-items */}
                  {hasSubItems && (
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-background backdrop-blur-2xl border border-foreground/10 rounded-xl shadow-lg overflow-hidden min-w-[200px]">
                        {item.subItems?.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                'block px-5 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-primary',
                                isSubActive
                                  ? 'text-primary bg-primary/10 border-l-primary'
                                  : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                              )}
                            >
                              {subItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Theme toggle with animation */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            {/* Theme toggle - desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-foreground/5 transition-all duration-300 relative group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  className="absolute w-5 h-0.5 bg-foreground rounded-full"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-5 h-0.5 bg-foreground rounded-full"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  className="absolute w-5 h-0.5 bg-foreground rounded-full"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-background border-l border-foreground/10 z-50 shadow-xl"
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-6 border-b border-foreground/10">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href || item.subItems?.some(sub => pathname === sub.href)
                const hasSubItems = item.subItems && item.subItems.length > 0

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'tween', duration: 0.2, delay: index * 0.08, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-foreground/5 text-foreground/60 hover:text-foreground'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1">{item.label}</span>
                      {isActive && !hasSubItems && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="w-1 h-6 bg-primary rounded-full"
                        />
                      )}
                    </Link>

                    {/* Sub-items for mobile */}
                    {hasSubItems && (
                      <div className="ml-8 space-y-1 mt-1">
                        {item.subItems?.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                'flex items-center px-4 py-2 rounded-lg transition-all text-sm',
                                isSubActive
                                  ? 'bg-primary/10 text-primary'
                                  : 'hover:bg-foreground/5 text-foreground/60 hover:text-foreground'
                              )}
                            >
                              <span className="flex-1">{subItem.label}</span>
                              {isSubActive && (
                                <motion.div
                                  layoutId="mobile-sub-active-indicator"
                                  className="w-1 h-4 bg-primary rounded-full"
                                />
                              )}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-foreground/20 z-40"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
