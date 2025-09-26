'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Briefcase, BookOpen, Home, Mail, Brain, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  {
    href: '/work',
    label: 'Work',
    icon: Briefcase,
    subItems: [
      { href: '/super-debate', label: 'Super Debate' },
      { href: '/accelerate', label: 'Accelerate' },
    ]
  },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/thoughts', label: 'Thoughts', icon: MessageSquare },
  { href: '/philosophy', label: 'Philosophy', icon: Brain },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-black/20 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-transparent'
      )}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        background: scrolled
          ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))'
          : 'transparent'
      }}
    >
      {/* Animated border that appears on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: scrolled ? '100%' : 0,
          opacity: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group">
              <div className="flex items-center gap-3">
                {/* Cool geometric logo with animated gradient */}
                <div className="relative w-10 h-10 group">
                  {/* JC Text - appears first */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <motion.span
                      className="text-lg font-black text-foreground"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      JC
                    </motion.span>
                  </motion.div>

                  {/* Diamond border - animates after JC text */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 0, opacity: 0, rotate: 45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 45 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <div
                      className="w-full h-full border-2 rounded-sm bg-gradient-to-br from-cyan-500 to-purple-500"
                      style={{
                        borderImage: 'linear-gradient(135deg, #06b6d4, #a855f7) 1',
                        WebkitMaskImage: 'linear-gradient(#fff 0 0)',
                        maskImage: 'linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        background: 'transparent',
                        border: '2px solid',
                        borderImageSlice: '1',
                        borderImageSource: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                      }}
                    />
                  </motion.div>

                  {/* Alternative approach - SVG diamond that will definitely show */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 40 40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <defs>
                      <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 5 L 35 20 L 20 35 L 5 20 Z"
                      fill="none"
                      stroke="url(#diamondGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>

                  {/* Subtle glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2), transparent 70%)',
                      filter: 'blur(8px)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-xl md:text-2xl font-bold tracking-tight overflow-hidden block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    <motion.span
                      className="block"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      John Connor
                    </motion.span>
                  </motion.span>
                  <motion.span
                    className="text-xs text-muted-foreground uppercase tracking-widest overflow-hidden block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.span
                      className="block"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      Technology Strategist
                    </motion.span>
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href || item.subItems?.some(sub => pathname === sub.href)
              const hasSubItems = item.subItems && item.subItems.length > 0

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.8 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-6 py-3 rounded-lg transition-all flex items-center space-x-2',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>

                  {/* Dropdown for sub-items */}
                  {hasSubItems && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl overflow-hidden min-w-[200px]">
                        {item.subItems?.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                'block px-4 py-3 hover:bg-foreground/5 transition-colors',
                                isSubActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
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

          <div className="flex items-center space-x-4">
            {/* Theme toggle disabled - dark mode only */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-purple-400/10 transition-all duration-300 relative group"
              aria-label="Toggle menu"
            >
              {/* Unique geometric menu icon */}
              <div className="w-7 h-7 relative">
                {/* Morphing dots pattern */}
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  className="w-full h-full"
                >
                  <motion.circle
                    cx={isOpen ? "14" : "7"}
                    cy={isOpen ? "14" : "7"}
                    r="2.5"
                    fill="currentColor"
                    animate={{
                      cx: isOpen ? 14 : 7,
                      cy: isOpen ? 14 : 7,
                      scale: isOpen ? 1.2 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-cyan-400"
                  />
                  <motion.circle
                    cx="21"
                    cy={isOpen ? "14" : "7"}
                    r="2.5"
                    fill="currentColor"
                    animate={{
                      cy: isOpen ? 14 : 7,
                      opacity: isOpen ? 0 : 1,
                      scale: isOpen ? 0 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-purple-400"
                  />
                  <motion.circle
                    cx={isOpen ? "14" : "7"}
                    cy="21"
                    r="2.5"
                    fill="currentColor"
                    animate={{
                      cx: isOpen ? 14 : 7,
                      scale: isOpen ? 0 : 1,
                      opacity: isOpen ? 0 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-cyan-400"
                  />
                  <motion.circle
                    cx="21"
                    cy="21"
                    r="2.5"
                    fill="currentColor"
                    animate={{
                      scale: isOpen ? 1.2 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-purple-400"
                  />

                  {/* X pattern when open */}
                  <motion.line
                    x1="10"
                    y1="10"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-white"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isOpen ? 1 : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.line
                    x1="18"
                    y1="10"
                    x2="10"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-white"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isOpen ? 1 : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </svg>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.3), transparent 70%)',
                    filter: 'blur(10px)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-black/60 backdrop-blur-2xl border-l border-white/20 z-50 shadow-2xl"
            style={{
              backdropFilter: 'blur(30px) saturate(200%)',
              WebkitBackdropFilter: 'blur(30px) saturate(200%)',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))'
            }}
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-6 border-b border-border/20">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
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
                      onClick={() => !hasSubItems && setIsOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
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
                                  : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
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
            
            {/* Theme toggle in mobile menu */}
            <div className="absolute bottom-6 left-6 right-6">
              {/* Theme toggle disabled - dark mode only */}
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
            className="md:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}