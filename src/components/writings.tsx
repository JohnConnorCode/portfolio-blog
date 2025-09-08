'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Users, Zap, Globe, ArrowRight } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'
import Link from 'next/link'

const writings = [
  {
    title: 'Human-first Futurism',
    excerpt: 'Why automation should free humans for high-context work, not replace them.',
    category: 'Philosophy',
    icon: Brain,
    readTime: '5 min',
    featured: true
  },
  {
    title: 'Debate as a Tool for Personal and Societal Growth',
    excerpt: 'How intellectual sparring in person builds resilience, courage, and community bonds.',
    category: 'Community',
    icon: Users,
    readTime: '7 min'
  },
  {
    title: 'Designing Abundance vs. Artificial Scarcity',
    excerpt: 'Why open systems compound faster than walled gardens, and how to build for abundance.',
    category: 'Economics',
    icon: Zap,
    readTime: '10 min',
    featured: true
  },
  {
    title: 'Transparent, Community-Owned Economies',
    excerpt: 'Building economic systems where communities own and govern their infrastructure.',
    category: 'Web3',
    icon: Globe,
    readTime: '8 min'
  },
  {
    title: 'AI Ethics and Automation that Empowers People',
    excerpt: 'How to design AI systems that amplify human judgment rather than replacing it.',
    category: 'AI Ethics',
    icon: BookOpen,
    readTime: '12 min'
  }
]

export function Writings() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Writing & Speaking
          </AnimatedText>
          <FadeInText delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essays and talks on human-first futurism, community economies, and technology that empowers rather than replaces
            </p>
          </FadeInText>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {writings.map((writing, index) => {
            const Icon = writing.icon
            return (
              <motion.article
                key={writing.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  writing.featured ? 'md:col-span-2' : ''
                }`}
              >
                <Link href="/blog">
                  <div className={`p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 h-full ${
                    writing.featured ? 'bg-gradient-to-br from-muted/50 to-transparent' : ''
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 border border-foreground/20 group-hover:border-primary/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">
                            {writing.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {writing.readTime}
                          </span>
                          {writing.featured && (
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {writing.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {writing.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium"
            >
              View All Writings
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}