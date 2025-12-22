'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { href: 'https://twitter.com/ablockunchained', icon: Twitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/johnconnor', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:john@superdebate.org', icon: Mail, label: 'Email' },
]

const quickLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/philosophy', label: 'Approach' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const projectLinks = [
  { href: '/super-debate', label: 'SuperDebate' },
]

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 border-2 border-primary rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary tracking-wider font-jost">
                      JC
                    </span>
                  </div>
                </div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-jost">
                  John Connor
                </span>
              </div>
            </Link>
            <p className="max-w-sm mb-6 leading-relaxed text-muted-foreground font-jost">
              15+ years building systems that scale—from early-stage startups to growth-phase companies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground font-jost">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 group transition-colors duration-200 text-muted-foreground hover:text-primary font-jost"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground font-jost">
              Projects
            </h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 group transition-colors duration-200 text-muted-foreground hover:text-primary font-jost"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://superdebate.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary text-primary text-xs transition-all hover:bg-primary hover:text-primary-foreground font-jost"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Live Site
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-jost">
            &copy; {new Date().getFullYear()} John Thomas Connor. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-2 text-muted-foreground font-jost">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Product · Engineering · Strategy
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
