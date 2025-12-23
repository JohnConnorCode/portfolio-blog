import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'
import BlogList from './blog-list'
import { BlogPost } from '@/types'
import { blogPosts as localBlogPosts } from '@/lib/blog-posts'

export default async function BlogPage() {
  // Start with local blog posts
  const localPosts = localBlogPosts.map((post, index) => ({
    id: `local-${index}`,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    published: true,
    created_at: post.publishedAt,
    updated_at: post.publishedAt,
    published_at: post.publishedAt,
    category: post.category,
    featured_image: undefined,
    author_name: post.author,
    read_time: post.readTime
  }))

  let sanityPosts: typeof localPosts = []

  try {
    // Fetch posts from Sanity CMS
    const fetchedPosts = await sanityClient.fetch(postsQuery)

    if (fetchedPosts && fetchedPosts.length > 0) {
      sanityPosts = fetchedPosts.map((post: BlogPost) => ({
        id: post._id,
        title: post.title,
        slug: post.slug?.current || '',
        excerpt: post.excerpt,
        content: post.body,
        published: true,
        created_at: post.publishedAt,
        updated_at: post.publishedAt,
        published_at: post.publishedAt,
        category: post.categories?.[0]?.title,
        featured_image: post.mainImage,
        author_name: post.author?.name || 'John Connor',
        read_time: post.readTime
      }))
    }
  } catch (error) {
    console.error('Error fetching Sanity posts:', error)
  }

  // Combine local and Sanity posts, sorted by date
  const allPosts = [...localPosts, ...sanityPosts].sort((a, b) =>
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  )

  return <BlogList initialPosts={allPosts} />
}