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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
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
                <div className="relative w-10 h-10">
                  <motion.div 
                    className="absolute inset-0 rounded-lg rotate-45"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)",
                        "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                        "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
                        "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)",
                      ],
                      rotate: [45, 45, 45, 45],
                    }}
                    transition={{
                      background: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      rotate: {
                        duration: 0.5,
                      }
                    }}
                    whileHover={{ rotate: 90 }}
                  />
                  <div className="absolute inset-[3px] bg-background rounded-lg rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-black text-foreground">JC</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold tracking-tight">
                    John Connor
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    Technology Strategist
                  </span>
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-6 py-3 group/link overflow-hidden rounded-lg transition-all flex items-center',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="relative">
                        {item.label}
                        {/* Underline effect for active and hover */}
                        <span className={cn(
                          "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover/link:w-full"
                        )} />
                      </span>
                    </span>
                    {/* Background sweep effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-700"
                    />
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
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 z-50"
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