import { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://johnconnor.xyz'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/work',
    '/philosophy',
    '/blog',
    '/contact',
    '/thoughts',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Dynamic blog posts
  interface SanityPost {
    slug?: { current: string }
    publishedAt?: string
    _updatedAt?: string
  }
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await sanityClient.fetch(postsQuery)
    blogPosts = posts?.map((post: SanityPost) => ({
      url: `${baseUrl}/blog/${post.slug?.current}`,
      lastModified: new Date(post.publishedAt || post._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })) || []
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
  }
  
  return [...staticPages, ...blogPosts]
}