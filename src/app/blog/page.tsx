import { sanityClient } from '@/lib/sanity/client'
import { postsQuery } from '@/lib/sanity/queries'
import BlogList from './blog-list'
import { createClient } from '@/lib/supabase/server'
import { BlogPost } from '@/types'
import { getAllBlogPosts } from '@/lib/blog-posts'

export default async function BlogPage() {
  let posts = []
  
  // Start with static posts
  const staticPosts = getAllBlogPosts()
  posts = staticPosts.map(post => ({
    id: post.slug,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    published: true,
    created_at: post.publishedAt,
    category: post.category,
    author_name: post.author,
    read_time: post.readTime
  }))
  
  // Try Sanity for additional posts
  try {
    const sanityPosts = await sanityClient.fetch(postsQuery)
    if (sanityPosts && sanityPosts.length > 0) {
      // Add Sanity posts
      const formattedSanityPosts = sanityPosts.map((post: BlogPost) => ({
        id: post._id,
        title: post.title,
        slug: post.slug?.current || '',
        excerpt: post.excerpt,
        content: '', // Will be fetched on individual page
        published: true,
        created_at: post.publishedAt,
        category: post.categories?.[0]?.title,
        featured_image: post.mainImage,
        author_name: post.author?.name || 'John Connor'
      }))
      posts = [...posts, ...formattedSanityPosts]
    }
  } catch (error) {
    console.log('Sanity posts not available')
  }
  
  // Try Supabase for additional posts
  try {
    const supabase = await createClient()
    const { data: supabasePosts } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    if (supabasePosts && supabasePosts.length > 0) {
      posts = [...posts, ...supabasePosts]
    }
  } catch (error) {
    console.log('Supabase posts not available')
  }
  
  return <BlogList initialPosts={posts} />
}