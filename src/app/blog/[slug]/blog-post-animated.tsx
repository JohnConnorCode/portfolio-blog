'use client'

import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
interface BlogPost {
  title: string
  publishedAt: string
  author?: { name: string }
  categories?: Array<{ title: string }>
  mainImage?: string
  body: unknown
}

interface BlogPostAnimatedProps {
  post: BlogPost
}

export default function BlogPostAnimated({ post }: BlogPostAnimatedProps) {
  return (
    <motion.article
      className="min-h-screen py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1.1] md:leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex items-center gap-4 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <time>{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</time>
            {post.author && (
              <>
                <span>·</span>
                <span>{post.author.name}</span>
              </>
            )}
            {post.categories && post.categories.length > 0 && (
              <>
                <span>·</span>
                <span className="text-cyan-400">{post.categories[0].title}</span>
              </>
            )}
          </motion.div>
        </motion.header>

        {/* Main Image */}
        {post.mainImage && (
          <motion.div
            className="mb-12 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.mainImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          className="prose prose-invert prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PortableText value={post.body} />
        </motion.div>
      </div>
    </motion.article>
  )
}