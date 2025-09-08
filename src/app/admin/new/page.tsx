'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewPostPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Philosophy',
    tags: '',
    featured: false,
    published: false,
    read_time: 5,
    featured_image: ''
  })
  
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState(false)

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' ? { slug: generateSlug(value) } : {})
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      author_name: 'John Thomas Connor',
      published_at: formData.published ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('posts')
      .insert([postData])
      .select()

    if (error) {
      console.error('Error creating post:', error)
      alert('Error creating post. Check console.')
    } else {
      router.push('/admin')
    }
    
    setSaving(false)
  }

  const categories = [
    'Philosophy',
    'Ecosystem Design',
    'Leadership',
    'AI Ethics',
    'System Design',
    'Community Building',
    'Web3',
    'Product Strategy'
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-bold">New Blog Post</h1>
          </div>
          <button
            onClick={() => setPreview(!preview)}
            className="flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            <Eye className="w-4 h-4" />
            {preview ? 'Edit' : 'Preview'}
          </button>
        </div>

        {preview ? (
          <div className="prose prose-lg max-w-none">
            <h1>{formData.title || 'Post Title'}</h1>
            <p className="text-muted-foreground">{formData.excerpt || 'Post excerpt...'}</p>
            <div dangerouslySetInnerHTML={{ __html: formData.content || '<p>Post content...</p>' }} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title *</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Why Ecosystem Funding Is Broken"
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slug</label>
              <input
                type="text"
                name="slug"
                required
                value={formData.slug}
                onChange={handleChange}
                placeholder="ecosystem-funding-broken"
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Excerpt *</label>
              <textarea
                name="excerpt"
                required
                rows={2}
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Three weeks to evaluate a grant. Hundreds of pages nobody reads..."
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content (HTML) *</label>
              <textarea
                name="content"
                required
                rows={20}
                value={formData.content}
                onChange={handleChange}
                placeholder="<p>Your blog post content here...</p>"
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none resize-none font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Use HTML tags: &lt;p&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;blockquote&gt;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Read Time (minutes)</label>
                <input
                  type="number"
                  name="read_time"
                  value={formData.read_time}
                  onChange={handleChange}
                  min="1"
                  max="30"
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Accelerate, grants, ecosystem, transparency"
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Featured Image URL (optional)</label>
              <input
                type="url"
                name="featured_image"
                value={formData.featured_image}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span>Featured Post</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span>Publish Immediately</span>
              </label>
            </div>

            <div className="flex gap-4">
              <motion.button
                type="submit"
                disabled={saving}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                {saving ? 'Saving...' : 'Save Post'}
              </motion.button>

              <Link href="/admin">
                <button
                  type="button"
                  className="px-8 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}