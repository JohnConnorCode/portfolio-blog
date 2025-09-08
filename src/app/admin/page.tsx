'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  published: boolean
  featured: boolean
  created_at: string
  published_at: string
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClient()

  // Simple password protection (in production, use proper auth)
  const checkAuth = () => {
    const savedAuth = localStorage.getItem('admin_auth')
    if (savedAuth === 'john_admin_2024') {
      setIsAuthenticated(true)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (replace with proper auth)
    if (password === 'buildsystems') {
      localStorage.setItem('admin_auth', 'john_admin_2024')
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching posts:', error)
    } else {
      setPosts(data || [])
    }
    setLoading(false)
  }

  const togglePublished = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('posts')
      .update({ 
        published: !currentStatus,
        published_at: !currentStatus ? new Date().toISOString() : null
      })
      .eq('id', id)
    
    if (error) {
      console.error('Error updating post:', error)
    } else {
      fetchPosts()
    }
  }

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('posts')
      .update({ featured: !currentStatus })
      .eq('id', id)
    
    if (error) {
      console.error('Error updating post:', error)
    } else {
      fetchPosts()
    }
  }

  const deletePost = async (id: string, title: string) => {
    if (confirm(`Delete "${title}"? This cannot be undone.`)) {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)
      
      if (error) {
        console.error('Error deleting post:', error)
      } else {
        fetchPosts()
      }
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading posts...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-bold">Blog Admin</h1>
          </div>
          <Link href="/admin/new">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              <Plus className="w-5 h-5" />
              New Post
            </motion.button>
          </Link>
        </div>

        <div className="bg-background/50 border border-foreground/10 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-foreground/10">
              <tr className="text-left">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Featured</th>
                <th className="px-6 py-4 font-medium">Created</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                  <td className="px-6 py-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{post.excerpt?.substring(0, 60)}...</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded">
                      {post.category || 'Uncategorized'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => togglePublished(post.id, post.published)}
                      className="flex items-center gap-2 text-sm"
                    >
                      {post.published ? (
                        <>
                          <Eye className="w-4 h-4 text-green-500" />
                          <span className="text-green-500">Published</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Draft</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleFeatured(post.id, post.featured)}
                      className={`text-sm ${post.featured ? 'text-yellow-500' : 'text-muted-foreground'}`}
                    >
                      {post.featured ? '⭐ Featured' : '☆ Regular'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/edit/${post.id}`}>
                        <button className="p-2 hover:bg-foreground/10 rounded transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </Link>
                      <button
                        onClick={() => deletePost(post.id, post.title)}
                        className="p-2 hover:bg-red-500/10 rounded transition-colors text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No posts yet</p>
            <Link href="/admin/new">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
                Create Your First Post
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}