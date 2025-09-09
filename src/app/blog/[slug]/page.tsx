import { notFound } from 'next/navigation'
import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery, postsQuery } from '@/lib/sanity/queries'
import BlogPostClient from './blog-post-client'

interface Post {
  slug?: { current: string }
}

export async function generateStaticParams() {
  try {
    const posts = await sanityClient.fetch(postsQuery)
    return posts?.map((post: Post) => ({
      slug: post.slug?.current
    })) || []
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  let post = null
  
  try {
    post = await sanityClient.fetch(postBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
  }

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}