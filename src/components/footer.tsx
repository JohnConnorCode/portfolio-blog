'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { href: 'https://twitter.com/ablockunchained', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/johnconnor', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:john@johnconnor.xyz', icon: Mail, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">About</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Building systems that serve humanity. Technology should empower human judgment, not replace it.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50"
        >
          <p className="text-center text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-1">
            © 2025 John Thomas Connor
          </p>
        </motion.div>
      </div>
    </footer>
  )
}