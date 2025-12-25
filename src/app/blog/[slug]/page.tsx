import { notFound } from 'next/navigation'
import BlogPostClient from './blog-post-client'
import { blogPosts } from '@/lib/blog-posts'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Blog Post',
      description: 'Read the latest insights on technology and leadership'
    }
  }

  const url = `https://johnconnor.xyz/blog/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: [post.category],
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
      description: post.excerpt,
      images: ['/twitter-image.png']
    },
    alternates: {
      canonical: url
    }
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const localPost = blogPosts.find(p => p.slug === slug)

  if (!localPost) {
    notFound()
  }

  const post = {
    ...localPost,
    slug: { current: localPost.slug },
    publishedAt: localPost.publishedAt,
    body: undefined,
    htmlContent: localPost.content,
    author: { name: localPost.author }
  }

  return <BlogPostClient post={post} />
}
