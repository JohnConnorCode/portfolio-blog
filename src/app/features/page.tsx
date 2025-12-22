'use client'

import { motion } from 'framer-motion'
import {
  Database, Shield, Zap,
  Palette, FileText,
  CheckCircle, ArrowRight, Brain, Terminal,
  Layout, Cloud
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    category: 'Content Management',
    icon: FileText,
    description: 'Powerful content creation and management tools',
    items: [
      'Sanity CMS integration for dynamic content',
      'Rich text editor with markdown support',
      'Image optimization and lazy loading',
      'SEO-optimized meta tags and structured data',
      'Draft and preview modes for content',
      'Automatic sitemap generation'
    ]
  },
  {
    category: 'Design System',
    icon: Palette,
    description: 'Modern, accessible design components',
    items: [
      'Neo-brutalist design aesthetic',
      'Dark/light theme with system preference detection',
      'Responsive layouts for all screen sizes',
      'Custom animations with Framer Motion',
      'Accessibility-first component design',
      'Tailwind CSS for rapid styling'
    ]
  },
  {
    category: 'Performance',
    icon: Zap,
    description: 'Optimized for speed and efficiency',
    items: [
      'Next.js 15 with Turbopack',
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'Incremental static regeneration (ISR)',
      'Edge runtime support',
      'Automatic code splitting'
    ]
  },
  {
    category: 'Developer Experience',
    icon: Terminal,
    description: 'Built with modern development tools',
    items: [
      'TypeScript for type safety',
      'ESLint and Prettier configuration',
      'Hot module replacement',
      'API routes with Next.js',
      'Environment variable management',
      'Git-based version control'
    ]
  },
  {
    category: 'Database & Storage',
    icon: Database,
    description: 'Scalable data management',
    items: [
      'Supabase PostgreSQL database',
      'Real-time data synchronization',
      'Row-level security policies',
      'Automatic backups',
      'File storage with CDN',
      'Database migrations support'
    ]
  },
  {
    category: 'Authentication & Security',
    icon: Shield,
    description: 'Enterprise-grade security features',
    items: [
      'Admin authentication system',
      'Role-based access control',
      'Secure API endpoints',
      'CSRF protection',
      'Content security policies',
      'Environment variable encryption'
    ]
  },
  {
    category: 'Deployment & Hosting',
    icon: Cloud,
    description: 'Seamless deployment workflow',
    items: [
      'Vercel deployment integration',
      'Automatic CI/CD pipeline',
      'Preview deployments for branches',
      'Custom domain support',
      'Global CDN distribution',
      'Analytics and monitoring'
    ]
  },
  {
    category: 'AI & Automation',
    icon: Brain,
    description: 'Intelligent features and automation',
    items: [
      'AI-powered content suggestions',
      'Smart image optimization',
      'Automated SEO improvements',
      'Content categorization',
      'Search functionality',
      'Performance monitoring'
    ]
  }
]

const techStack = [
  { name: 'Next.js 15', description: 'React framework', icon: '⚡' },
  { name: 'TypeScript', description: 'Type safety', icon: '🔷' },
  { name: 'Tailwind CSS', description: 'Styling', icon: '🎨' },
  { name: 'Framer Motion', description: 'Animations', icon: '✨' },
  { name: 'Sanity CMS', description: 'Content', icon: '📝' },
  { name: 'Supabase', description: 'Database', icon: '🗄️' },
  { name: 'Vercel', description: 'Hosting', icon: '▲' },
  { name: 'React 19', description: 'UI Library', icon: '⚛️' }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-[1.1] sm:leading-[1.05]">
          Platform Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A comprehensive portfolio and blog platform built with cutting-edge technologies. 
          Designed for performance, scalability, and exceptional user experience.
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 justify-center mt-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 border border-foreground/20 hover:border-primary/50 transition-colors"
            >
              <span className="mr-2">{tech.icon}</span>
              <span className="font-semibold">{tech.name}</span>
              <span className="text-muted-foreground ml-2 text-sm">
                {tech.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 border-2 border-foreground/10 hover:border-primary/50 transition-all h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 border-2 border-foreground/20 group-hover:border-primary/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {feature.category}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Architecture Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20 p-8 border-2 border-foreground/10"
      >
        <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Layout className="w-5 h-5" />
              Frontend
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• React 19 with Server Components</li>
              <li>• Next.js App Router</li>
              <li>• Tailwind CSS & Framer Motion</li>
              <li>• TypeScript for type safety</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Backend
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• API Routes with Next.js</li>
              <li>• Supabase PostgreSQL</li>
              <li>• Sanity CMS for content</li>
              <li>• Edge Functions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Infrastructure
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Vercel hosting</li>
              <li>• Global CDN</li>
              <li>• Automatic scaling</li>
              <li>• CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          This platform showcases the power of modern web technologies. 
          Let&apos;s discuss how we can build something similar for your business.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <button className="px-8 py-4 bg-foreground text-background font-semibold hover:bg-primary hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
              Get In Touch
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </Link>
          <Link href="/work">
            <button className="px-8 py-4 border-2 border-foreground hover:border-primary hover:bg-primary/10 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 font-semibold">
              View Portfolio
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}