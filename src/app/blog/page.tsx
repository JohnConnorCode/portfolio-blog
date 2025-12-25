import BlogList from './blog-list'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  const posts = blogPosts.map((post, index) => ({
    id: `post-${index}`,
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
  })).sort((a, b) =>
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  )

  return <BlogList initialPosts={posts} />
}
