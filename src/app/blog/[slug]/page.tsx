import { notFound } from 'next/navigation'
import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery, postsQuery } from '@/lib/sanity/queries'
import BlogPostClient from './blog-post-client'
import { blogPosts } from '@/lib/blog-posts'

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

  // First check mock data
  const mockPost = blogPosts.find(p => p.slug === slug)
  if (mockPost) {
    const post = {
      ...mockPost,
      slug: { current: mockPost.slug },
      publishedAt: mockPost.publishedAt,
      // Convert HTML content to be displayed
      body: null,
      htmlContent: mockPost.content,
      author: { name: mockPost.author }
    }
    return <BlogPostClient post={post} />
  }

  // Fall back to Sanity if no mock data
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