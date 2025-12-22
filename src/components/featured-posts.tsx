'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

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
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <button className="px-8 py-3 glass rounded-lg font-medium hover:bg-primary/10 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
              View All Articles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}