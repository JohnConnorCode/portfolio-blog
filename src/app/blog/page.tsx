'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Search, Filter } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { useState } from 'react'

const mockPosts = [
  {
    _id: '1',
    title: 'Building Scalable Web Applications with Next.js 14',
    slug: { current: 'building-scalable-web-apps' },
    excerpt: 'Learn how to build performant and scalable web applications using the latest features in Next.js 14.',
    publishedAt: '2024-01-15',
    mainImage: {
      asset: {
        _ref: '',
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      },
      alt: 'Code on screen',
    },
    author: {
      name: 'John Doe',
    },
    readingTime: 5,
    categories: [{ title: 'Development' }],
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    _id: '2',
    title: 'The Future of AI in Web Development',
    slug: { current: 'future-of-ai-web-dev' },
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
    publishedAt: '2024-01-10',
    mainImage: {
      asset: {
        _ref: '',
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      },
      alt: 'AI visualization',
    },
    author: {
      name: 'John Doe',
    },
    readingTime: 8,
    categories: [{ title: 'AI' }],
    tags: ['AI', 'Machine Learning', 'Web Dev'],
  },
  {
    _id: '3',
    title: 'Mastering TypeScript: Advanced Patterns',
    slug: { current: 'mastering-typescript' },
    excerpt: 'Deep dive into advanced TypeScript patterns and techniques for building type-safe applications.',
    publishedAt: '2024-01-05',
    mainImage: {
      asset: {
        _ref: '',
        url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      },
      alt: 'TypeScript code',
    },
    author: {
      name: 'John Doe',
    },
    readingTime: 6,
    categories: [{ title: 'Development' }],
    tags: ['TypeScript', 'JavaScript', 'Patterns'],
  },
  {
    _id: '4',
    title: 'Design Systems: Building Consistent UIs',
    slug: { current: 'design-systems' },
    excerpt: 'How to create and maintain a design system that scales with your organization.',
    publishedAt: '2024-01-03',
    mainImage: {
      asset: {
        _ref: '',
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      },
      alt: 'Design system',
    },
    author: {
      name: 'John Doe',
    },
    readingTime: 7,
    categories: [{ title: 'Design' }],
    tags: ['Design', 'UI/UX', 'Components'],
  },
]

const categories = ['All', 'Development', 'Design', 'AI', 'Tutorial']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || 
      post.categories?.some(cat => cat.title === selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Blog & <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, design, and technology
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'glass hover:bg-primary/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:bg-primary/5 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.mainImage.asset.url!}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readingTime} min read
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}