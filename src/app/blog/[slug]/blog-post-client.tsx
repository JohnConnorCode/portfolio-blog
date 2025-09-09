'use client'

import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function BlogPostClient({ post }: { post: any }) {
  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            {post.categories?.[0] && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {post.categories[0].title}
              </span>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold">{post.author?.name || 'John Connor'}</p>
              <p className="text-sm text-muted-foreground">Technology Strategist</p>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        {post.mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 relative aspect-video"
          >
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none"
        >
          {post.body && <PortableText value={post.body} />}
        </motion.div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-foreground/10"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  key={tag}
                  className="px-3 py-1 text-sm border border-foreground/20 rounded-full"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Next/Previous Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-foreground/10"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link 
                href="/blog"
                className="block group p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-all"
              >
                <p className="text-sm text-muted-foreground mb-2">← Previous</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  Back to all posts
                </p>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link 
                href="/contact"
                className="block group p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-all text-right"
              >
                <p className="text-sm text-muted-foreground mb-2">Next →</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  Work with me
                </p>
              </Link>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </motion.article>
  )
}