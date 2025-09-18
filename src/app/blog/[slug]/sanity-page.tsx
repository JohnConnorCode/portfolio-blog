import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'
import BlogPostAnimated from './blog-post-animated'

export default async function SanityBlogPost({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return <BlogPostAnimated post={post} />
}