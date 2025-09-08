'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Search, Filter, BookOpen } from 'lucide-react'
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

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [initialPosts, searchTerm, selectedCategory])

  // Sample posts if database is empty
  const samplePosts: Post[] = [
    {
      id: '1',
      title: 'Why Technology Must Serve Humanity',
      slug: 'technology-serves-humanity',
      excerpt: 'Exploring the philosophy behind human-centered technology and why we must resist the temptation to let machines replace human judgment.',
      category: 'Philosophy',
      tags: ['technology', 'humanity', 'philosophy'],
      featured: true,
      published: true,
      author_name: 'John Thomas Connor',
      read_time: 8,
      featured_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Building Communities Through Debate',
      slug: 'building-communities-debate',
      excerpt: 'How Super Debate creates spaces for growth through intellectual challenge and why in-person interaction matters more than ever.',
      category: 'Community Building',
      tags: ['community', 'debate', 'growth'],
      published: true,
      author_name: 'John Thomas Connor',
      read_time: 6,
      featured_image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      id: '3',
      title: 'The Future of Work: AI as Assistant, Not Replacement',
      slug: 'future-work-ai-assistant',
      excerpt: 'Why automation should free humans for high-context creative work rather than replacing them entirely.',
      category: 'AI Ethics',
      tags: ['AI', 'future', 'work', 'automation'],
      published: true,
      author_name: 'John Thomas Connor',
      read_time: 10,
      featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    }
  ]

  const postsToShow = initialPosts.length > 0 ? filteredPosts : samplePosts

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essays and insights on human-first futurism, community building, and technology that empowers
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {postsToShow.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-full border border-foreground/10 rounded-lg overflow-hidden hover:border-foreground/30 transition-all duration-300">
                    {/* Image */}
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
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
                          <span className="text-primary">{post.category}</span>
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
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs text-muted-foreground">
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
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">No posts found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {searchTerm || selectedCategory !== 'All' 
                ? 'Try adjusting your search or filter criteria'
                : 'Check back soon for new content'}
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get insights on building systems that serve humanity delivered to your inbox
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 font-medium"
            >
              Subscribe to Updates
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}