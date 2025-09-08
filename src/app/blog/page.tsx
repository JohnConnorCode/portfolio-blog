import { createClient } from '@/lib/supabase/server'
import BlogList from './blog-list'

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
  
  return <BlogList initialPosts={posts || []} />
}