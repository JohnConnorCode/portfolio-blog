import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export default async function SanityBlogPost({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug })
  
  if (!post) {
    notFound()
  }
  
  return (
    <article className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
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
          </div>
        </header>
        
        {/* Main Image */}
        {post.mainImage && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.mainImage} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  )
}