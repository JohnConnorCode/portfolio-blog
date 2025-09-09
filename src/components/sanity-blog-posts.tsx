import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/types'

export default async function SanityBlogPosts() {
  let posts: BlogPost[] = []
  
  try {
    posts = await sanityClient.fetch(postsQuery)
  } catch (error) {
    console.log('No Sanity posts yet - using fallback')
    // Return empty or use Supabase as fallback
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No blog posts yet. Create your first post in Sanity Studio at /studio</p>
      </div>
    )
  }
  
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No blog posts yet. Create your first post in Sanity Studio at /studio</p>
      </div>
    )
  }
  
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: BlogPost) => (
        <Link 
          key={post._id} 
          href={`/blog/${post.slug.current}`}
          className="group"
        >
          <article className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all duration-300 group-hover:shadow-brutal">
            {post.mainImage && (
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img 
                  src={post.mainImage.asset?.url || ''} 
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <span className="text-cyan-400 font-mono text-xs uppercase">
                    {post.categories[0].title}
                  </span>
                )}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}