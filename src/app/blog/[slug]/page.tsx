import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  // Return empty array for now, posts will be fetched dynamically
  return []
}

async function getPost(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !data) {
    return null
  }

  return data
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            {post.category && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{formatDate(post.published_at || post.created_at)}</time>
            </div>
            {post.read_time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time} min read</span>
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
              <p className="font-semibold">{post.author_name || 'John Thomas Connor'}</p>
              <p className="text-sm text-muted-foreground">Product Strategist & Builder</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm border border-foreground/20 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Next/Previous Navigation */}
        <nav className="mt-12 pt-8 border-t border-foreground/10">
          <div className="grid sm:grid-cols-2 gap-6">
            <Link 
              href="/blog"
              className="group p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-all"
            >
              <p className="text-sm text-muted-foreground mb-2">← Previous</p>
              <p className="font-semibold group-hover:text-primary transition-colors">
                Back to all posts
              </p>
            </Link>
            <Link 
              href="/contact"
              className="group p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-all text-right"
            >
              <p className="text-sm text-muted-foreground mb-2">Next →</p>
              <p className="font-semibold group-hover:text-primary transition-colors">
                Work with me
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </article>
  )
}