'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/types'
import { fadeInUp, staggerContainer } from '@/lib/animation-config'

interface AnimatedBlogPostsProps {
  posts: BlogPost[]
}

export default function SanityBlogPostsAnimated({ posts }: AnimatedBlogPostsProps) {
  if (!posts || posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <p className="text-gray-400">No blog posts yet. Create your first post in Sanity Studio at /studio</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post: BlogPost, index: number) => (
        <motion.div
          key={post._id}
          variants={fadeInUp}
          custom={index}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <Link
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <motion.article
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all duration-300 group-hover:shadow-brutal"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {post.mainImage && (
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <motion.img
                    src={post.mainImage.asset?.url || ''}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between text-sm">
                  <time className="text-gray-500">
                    {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                  </time>
                  {post.categories && post.categories.length > 0 && (
                    <motion.span
                      className="text-cyan-400 font-mono text-xs uppercase"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {post.categories[0].title}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}