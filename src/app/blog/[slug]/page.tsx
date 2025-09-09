import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createStaticClient } from '@/lib/supabase/static'
import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { getAllBlogPosts, getBlogPost } from '@/lib/blog-posts'

export async function generateStaticParams() {
  // Get static blog posts
  const staticPosts = getAllBlogPosts()
  
  // Try to get posts from Supabase
  let supabasePosts: any[] = []
  try {
    const supabase = createStaticClient()
    const { data } = await supabase
      .from('posts')
      .select('slug')
      .eq('published', true)
    supabasePosts = data || []
  } catch (error) {
    console.log('Using static posts only')
  }
  
  // Combine both sources
  const allSlugs = [
    ...staticPosts.map(post => ({ slug: post.slug })),
    ...supabasePosts.map(post => ({ slug: post.slug }))
  ]
  
  return allSlugs
}

async function getPost(slug: string) {
  // Try static posts first
  const staticPost = getBlogPost(slug)
  if (staticPost) {
    return {
      title: staticPost.title,
      slug: staticPost.slug,
      excerpt: staticPost.excerpt,
      content: staticPost.content,
      category: staticPost.category,
      published_at: staticPost.publishedAt,
      read_time: staticPost.readTime,
      author_name: staticPost.author,
      is_static: true
    }
  }
  
  // Try Sanity
  try {
    const sanityPost = await sanityClient.fetch(postBySlugQuery, { slug })
    if (sanityPost) {
      return {
        ...sanityPost,
        title: sanityPost.title,
        slug: sanityPost.slug?.current || slug,
        excerpt: sanityPost.excerpt,
        content: sanityPost.body, // Portable Text
        category: sanityPost.categories?.[0]?.title,
        created_at: sanityPost.publishedAt,
        published_at: sanityPost.publishedAt,
        author_name: sanityPost.author?.name || 'John Connor',
        featured_image: sanityPost.mainImage,
        is_sanity: true // Flag to know it's from Sanity
      }
    }
  } catch (error) {
    console.log('Trying Supabase for post:', slug)
  }
  
  // Fallback to Supabase
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (!error && data) {
      return data
    }
  } catch (error) {
    console.log('Post not found in Supabase')
  }

  return null
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
          {post.is_sanity ? (
            <PortableText value={post.content} />
          ) : post.is_static ? (
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          )}
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