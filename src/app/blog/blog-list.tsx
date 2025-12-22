'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Search, Filter, BookOpen, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { useState, useMemo } from 'react'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  category?: string
  tags?: string[]
  featured?: boolean
  published?: boolean
  author_name?: string
  read_time?: number
  featured_image?: string
  created_at: string
  updated_at: string
  published_at?: string
}

const categories = [
  'All',
  'Human-First Futurism',
  'Community Building',
  'Technology',
  'Philosophy',
  'Web3',
  'AI Ethics'
]

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [initialPosts, searchTerm, selectedCategory])

  const postsToShow = filteredPosts

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header with Greek-inspired styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Diamond decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="relative">
              <div className="w-3 h-3 rotate-45 border-2 border-primary" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase font-medium text-foreground/60 font-jost">
              Ideas & Insights
            </span>
            <div className="relative">
              <div className="w-3 h-3 rotate-45 border-2 border-primary" />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center tracking-wide font-jost">
            <span className="text-foreground">The </span>
            <span className="text-primary">Blog</span>
          </h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto font-light text-foreground/70 font-jost"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Essays and insights on human-first futurism, community building, and technology that empowers
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 p-6 rounded-xl border bg-card border-border font-jost"
        >
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-lg border-2 focus:outline-none transition-all bg-background border-border text-foreground font-jost focus:border-primary"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors text-foreground/50 hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/70 font-jost">
                  Filter by category:
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border font-jost ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/30'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="text-sm flex items-center justify-between text-foreground/70 font-jost"
            >
              <span>
                Showing <strong className="text-primary">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'post' : 'posts'}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </span>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                  }}
                  className="transition-colors text-primary"
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {postsToShow.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className="group h-full"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className={`h-full rounded-xl overflow-hidden transition-all relative bg-card border font-jost ${
                    hoveredCard === post.id ? 'border-primary/30' : 'border-border'
                  }`}>
                    {/* Corner accents on hover */}
                    {hoveredCard === post.id && (
                      <>
                        {/* Top-left corner */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute top-0 left-0 z-10 text-primary"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M0 8V0H8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </motion.div>
                        {/* Top-right corner */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute top-0 right-0 z-10 text-primary"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M20 8V0H12" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </motion.div>
                        {/* Bottom-left corner */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute bottom-0 left-0 z-10 text-primary"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M0 12V20H8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </motion.div>
                        {/* Bottom-right corner */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute bottom-0 right-0 z-10 text-primary"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M20 12V20H12" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </motion.div>
                      </>
                    )}

                    {/* Image */}
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden bg-background">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full z-10 bg-primary text-primary-foreground font-jost">
                            Featured
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm mb-3 text-foreground/60 font-jost">
                        {post.category && (
                          <span className="font-mono font-medium text-primary">
                            [{post.category}]
                          </span>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <time>{formatDate(post.published_at || post.created_at)}</time>
                        </div>
                        {post.read_time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.read_time} min</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className={`text-xl font-bold mb-3 transition-all font-jost ${
                        hoveredCard === post.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="line-clamp-3 mb-4 text-foreground/70 font-jost">
                        {post.excerpt}
                      </p>

                      {/* Read More with Arrow */}
                      <div className={`flex items-center gap-2 font-semibold text-sm transition-opacity text-primary font-jost ${
                        hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        READ MORE
                        <ArrowRight className={`w-4 h-4 transition-transform ${
                          hoveredCard === post.id ? 'translate-x-1' : 'translate-x-0'
                        }`} />
                      </div>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                          {post.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="text-xs transition-colors text-foreground/50 font-jost"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center py-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-2xl font-bold mb-4 text-foreground font-jost"
            >
              No posts found
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="max-w-md mx-auto text-foreground/70 font-jost"
            >
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filter criteria'
                : 'Check back soon for new content'}
            </motion.p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 p-12 rounded-lg text-center relative overflow-hidden bg-card border border-border"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 text-primary/30">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 16V0H16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute top-0 right-0 text-primary/30">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 16V0H24" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 text-primary/30">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 24V40H16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 text-primary/30">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 24V40H24" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <motion.h2
            className="text-3xl font-bold mb-4 text-primary font-jost"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto text-foreground/70 font-jost"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Get insights on building systems that serve humanity delivered to your inbox
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 transition-all duration-300 font-semibold rounded-lg bg-primary text-primary-foreground font-jost"
              >
                Subscribe to Updates
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
