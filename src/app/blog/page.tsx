import BlogList from './blog-list'

export default function BlogPage() {
  // Pass empty array, component will show sample posts if database is empty
  return <BlogList initialPosts={[]} />
}