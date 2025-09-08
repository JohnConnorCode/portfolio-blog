'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Hash, Clock, Star, Bold, Italic, List, Link2, Quote, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageUpload from '@/components/ImageUpload'

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
  const [selectedText, setSelectedText] = useState('')

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

  const insertMarkup = (before: string, after: string = '') => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement
    if (!textarea) return
    
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value
    const selectedText = text.substring(start, end)
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end)
    setFormData(prev => ({ ...prev, content: newText }))
    
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { error } = await supabase
      .from('posts')
      .insert([postData])

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
    'Leadership', 
    'AI & Ethics',
    'Systems Thinking',
    'Ecosystem Design',
    'Community Building',
    'Web3',
    'Product Strategy'
  ]

  const editorButtons = [
    { icon: Bold, action: () => insertMarkup('<strong>', '</strong>'), label: 'Bold' },
    { icon: Italic, action: () => insertMarkup('<em>', '</em>'), label: 'Italic' },
    { icon: Link2, action: () => insertMarkup('<a href="">', '</a>'), label: 'Link' },
    { icon: List, action: () => insertMarkup('<ul>\n<li>', '</li>\n</ul>'), label: 'List' },
    { icon: Quote, action: () => insertMarkup('<blockquote>', '</blockquote>'), label: 'Quote' },
    { icon: Code, action: () => insertMarkup('<code>', '</code>'), label: 'Code' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                New Blog Post
              </h1>
            </div>
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-all hover:scale-105"
            >
              <Eye className="w-4 h-4" />
              {preview ? 'Edit' : 'Preview'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!preview ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Title & Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Enter post title..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="url-friendly-slug"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Brief description of the post..."
                  />
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <div className="border border-foreground/10 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-1 p-2 bg-foreground/5 border-b border-foreground/10">
                      {editorButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={btn.action}
                          className="p-2 hover:bg-foreground/10 rounded transition-colors"
                          title={btn.label}
                        >
                          <btn.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={15}
                      className="w-full px-4 py-3 bg-background focus:outline-none resize-none font-mono text-sm"
                      placeholder="Write your post content here... Use HTML tags for formatting."
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Use HTML tags: &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;a&gt;, &lt;blockquote&gt;
                  </p>
                </div>

                {/* Featured Image */}
                <ImageUpload
                  value={formData.featured_image}
                  onChange={(url) => setFormData(prev => ({ ...prev, featured_image: url }))}
                  label="Featured Image"
                />

                {/* Category & Read Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Read Time (minutes)
                    </label>
                    <input
                      type="number"
                      name="read_time"
                      value={formData.read_time}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Hash className="w-4 h-4" />
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="flex items-center gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-foreground/20 text-primary focus:ring-primary/50"
                    />
                    <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      <Star className="w-4 h-4" />
                      Featured Post
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-foreground/20 text-primary focus:ring-primary/50"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      Publish Immediately
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all hover:scale-105"
                  >
                    <Save className="w-4 h-4" />
                    {saving ? 'Saving...' : 'Save Post'}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h1>{formData.title || 'Untitled Post'}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground not-prose">
                  <span>{formData.category}</span>
                  <span>•</span>
                  <span>{formData.read_time} min read</span>
                  {formData.featured && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </>
                  )}
                </div>
                {formData.featured_image && (
                  <img 
                    src={formData.featured_image} 
                    alt={formData.title} 
                    className="w-full rounded-lg"
                  />
                )}
                <p className="lead">{formData.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                {formData.tags && (
                  <div className="flex flex-wrap gap-2 not-prose">
                    {formData.tags.split(',').map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-foreground/5 rounded-full text-sm">
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}