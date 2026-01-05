import { blogPosts } from '@/lib/blog-posts'
import { getBlogImage } from '@/lib/image-data'
import { FeaturedPostsGrid, FeaturedPostSummary } from './featured-posts-grid'

export async function FeaturedPosts() {
  const featured = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
    .map<FeaturedPostSummary>((post, index) => {
      const image = getBlogImage(post.slug)

      return {
        id: post.slug || `post-${index}`,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        readTime: post.readTime,
        imageSrc: image.src,
        imageAlt: image.alt,
      }
    })

  return <FeaturedPostsGrid posts={featured} />
}
