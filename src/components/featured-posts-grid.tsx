'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { DEFAULT_BLUR_DATA_URL } from '@/lib/image-data'

export type FeaturedPostSummary = {
  id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  readTime?: number
  imageSrc: string
  imageAlt: string
}

interface FeaturedPostsGridProps {
  posts: FeaturedPostSummary[]
}

export function FeaturedPostsGrid({ posts }: FeaturedPostsGridProps) {
  if (!posts.length) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center border border-dashed border-border p-12 rounded-2xl">
          <p className="text-xl font-semibold mb-4">No articles published yet.</p>
          <p className="text-muted-foreground mb-6">
            The featured section automatically populates with your latest long-form posts
            the moment they go live.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Visit the Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    )
  }

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
            Thoughts on systems design, PMF hunts, and the incentives that make or break
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:bg-primary/5 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      placeholder="blur"
                      blurDataURL={DEFAULT_BLUR_DATA_URL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </span>
                      )}
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
