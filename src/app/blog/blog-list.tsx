'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Search, Filter, BookOpen, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { useState, useMemo } from 'react'
import { AnimatedLetters } from '@/components/animated-text'
import { AnimatedBorderBox } from '@/components/animated-border-box'

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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with AnimatedLetters like philosophy page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <AnimatedLetters 
            text="Blog" 
            className="text-5xl sm:text-6xl font-black mb-8 text-center block leading-[1.1] sm:leading-[1.05]"
            as="h1"
          />
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Essays and insights on human-first futurism, community building, and technology that empowers
          </motion.p>
        </motion.div>

        {/* Search and Filter with better animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-12 p-6 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 border border-foreground/10 rounded-xl"
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-background/50 border-2 border-foreground/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-all placeholder:text-muted-foreground"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-lg'
                        : 'bg-background/50 border border-foreground/10 hover:border-cyan-400/50 hover:bg-cyan-400/10'
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
              className="text-sm text-muted-foreground flex items-center justify-between"
            >
              <span>
                Showing <strong className="text-cyan-400">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'post' : 'posts'}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </span>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Blog Posts Grid with AnimatedBorderBox */}
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
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <AnimatedBorderBox
                    delay={index * 0.15}
                    className="h-full rounded-xl overflow-hidden hover:bg-foreground/5 transition-colors"
                    borderColor={index % 2 === 0 ? "rgba(0, 200, 255, 0.3)" : "rgba(147, 51, 234, 0.3)"}
                  >
                    {/* Image */}
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-white text-xs font-semibold rounded-full z-10">
                            Featured
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        {post.category && (
                          <span className="text-cyan-400 font-mono">[{post.category}]</span>
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
                      <h2 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More with Arrow */}
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        READ MORE
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-foreground/5">
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs text-muted-foreground hover:text-cyan-400 transition-colors">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </AnimatedBorderBox>
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
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-2xl font-bold mb-4"
            >
              No posts found
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground max-w-md mx-auto"
            >
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filter criteria'
                : 'Check back soon for new content'}
            </motion.p>
          </motion.div>
        )}

        {/* Newsletter CTA with better animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 p-12 border border-foreground/10 rounded-lg bg-gradient-to-br from-cyan-400/5 to-purple-400/5 text-center"
        >
          <motion.h2
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-semibold"
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