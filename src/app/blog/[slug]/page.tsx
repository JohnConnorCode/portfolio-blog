import { notFound } from 'next/navigation'
import { sanityClient } from '@/lib/sanity/client'
import { postBySlugQuery, postsQuery } from '@/lib/sanity/queries'
import BlogPostClient from './blog-post-client'
import { blogPosts } from '@/lib/blog-posts'
import type { Metadata } from 'next'

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // First check local blog data
  const localPost = blogPosts.find(p => p.slug === slug)
  if (localPost) {
    const url = `https://johnconnor.xyz/blog/${slug}`
    return {
      title: localPost.title,
      description: localPost.excerpt,
      openGraph: {
        title: localPost.title,
        description: localPost.excerpt,
        url,
        type: 'article',
        publishedTime: localPost.publishedAt,
        authors: [localPost.author],
        tags: [localPost.category],
        images: [{
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: localPost.title
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: localPost.title,
        description: localPost.excerpt,
        images: ['/twitter-image.png']
      },
      alternates: {
        canonical: url
      }
    }
  }

  // Fall back to Sanity
  try {
    const post = await sanityClient.fetch(postBySlugQuery, { slug })
    if (post) {
      const url = `https://johnconnor.xyz/blog/${slug}`
      return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
          title: post.title,
          description: post.excerpt || post.title,
          url,
          type: 'article',
          publishedTime: post.publishedAt,
          authors: [post.author?.name || 'John Connor'],
          images: [{
            url: '/opengraph-image.png',
            width: 1200,
            height: 630,
            alt: post.title
          }]
        },
        twitter: {
          card: 'summary_large_image',
          title: post.title,
          description: post.excerpt || post.title,
          images: ['/twitter-image.png']
        },
        alternates: {
          canonical: url
        }
      }
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
  }

  return {
    title: 'Blog Post',
    description: 'Read the latest insights on technology and leadership'
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // First check local blog data
  const localPost = blogPosts.find(p => p.slug === slug)
  if (localPost) {
    const post = {
      ...localPost,
      slug: { current: localPost.slug },
      publishedAt: localPost.publishedAt,
      // Convert HTML content to be displayed
      body: undefined,
      htmlContent: localPost.content,
      author: { name: localPost.author }
    }
    return <BlogPostClient post={post} />
  }

  // Fall back to Sanity if no local data
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