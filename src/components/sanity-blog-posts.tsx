import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'
import { BlogPost } from '@/types'
import SanityBlogPostsAnimated from './sanity-blog-posts-animated'

export default async function SanityBlogPosts() {
  let posts: BlogPost[] = []

  try {
    posts = await sanityClient.fetch(postsQuery)
  } catch {
    // No Sanity posts yet - using fallback
    // Return empty or use Supabase as fallback
    return <SanityBlogPostsAnimated posts={[]} />
  }

  return <SanityBlogPostsAnimated posts={posts || []} />
}