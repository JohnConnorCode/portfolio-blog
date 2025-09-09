import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'
import BlogList from './blog-list'
import { BlogPost } from '@/types'

export default async function BlogPage() {
  let posts = []
  
  try {
    // Fetch posts from Sanity CMS
    const sanityPosts = await sanityClient.fetch(postsQuery)
    
    if (sanityPosts && sanityPosts.length > 0) {
      posts = sanityPosts.map((post: BlogPost) => ({
        id: post._id,
        title: post.title,
        slug: post.slug?.current || '',
        excerpt: post.excerpt,
        content: post.body, // Using body field from Sanity
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
  
  return <BlogList initialPosts={posts} />
}