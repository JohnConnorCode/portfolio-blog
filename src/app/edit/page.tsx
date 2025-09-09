'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

// Protected inline editor
export default function EditPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState({
    heroTitle: 'JOHN CONNOR',
    heroTagline: 'Product Strategist · Growth Catalyst',
    heroDescription: 'Transforming ideas into scalable products through strategic iteration.',
    heroHighlight: 'AI-powered building. Strategic consulting. Rapid growth.',
    
    metrics: [
      { number: '$50M+', label: 'Capital Facilitated', context: 'Through strategic consulting' },
      { number: '50+', label: 'Products Shipped', context: 'From concept to scale' },
      { number: '10+ Years', label: 'Strategic Leadership', context: 'Consulting & product strategy' },
      { number: '100+', label: 'Founders Advised', context: 'Strategic consulting & mentorship' }
    ]
  })
  
  const router = useRouter()
  const supabase = createClient()

  // Check if already authenticated
  useEffect(() => {
    const authToken = sessionStorage.getItem('edit-auth')
    if (authToken === 'authenticated-user') {
      setAuthenticated(true)
      loadContent()
    }
  }, [])

  const loadContent = async () => {
    // Load from Supabase settings table
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .single()
    
    if (data) {
      setContent(data.content || content)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check password (same as admin panel)
    if (password === 'buildsystems') {
      sessionStorage.setItem('edit-auth', 'authenticated-user')
      setAuthenticated(true)
      setError('')
      loadContent()
    } else {
      setError('Invalid password')
    }
  }

  const handleSave = async () => {
    setLoading(true)
    
    try {
      // Save to Supabase settings table
      const { error } = await supabase
        .from('settings')
        .upsert({
          id: 1,
          content: content,
          updated_at: new Date().toISOString()
        })
      
      if (error) throw error
      
      alert('Content saved successfully!')
    } catch (err) {
      console.error('Save error:', err)
      alert('Error saving content. Check console for details.')
    } finally {
      setLoading(false)
    }
  }

  const updateMetric = (index: number, field: string, value: string) => {
    const newMetrics = [...content.metrics]
    newMetrics[index] = { ...newMetrics[index], [field]: value }
    setContent({ ...content, metrics: newMetrics })
  }

  // Show login form if not authenticated
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-lg border border-gray-800 w-96">
          <h2 className="text-2xl font-bold text-white mb-6">Editor Login</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-500"
          >
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Quick Edit Mode</h1>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            View Site
          </button>
        </div>
        
        {/* Hero Section Editor */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Hero Section</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Main Title</label>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Tagline</label>
              <input
                type="text"
                value={content.heroTagline}
                onChange={(e) => setContent({ ...content, heroTagline: e.target.value })}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Description</label>
              <textarea
                value={content.heroDescription}
                onChange={(e) => setContent({ ...content, heroDescription: e.target.value })}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
                rows={2}
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Highlight Text</label>
              <input
                type="text"
                value={content.heroHighlight}
                onChange={(e) => setContent({ ...content, heroHighlight: e.target.value })}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              />
            </div>
          </div>
        </div>
        
        {/* Metrics Editor */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Impact Metrics</h2>
          
          <div className="grid gap-4">
            {content.metrics.map((metric, index) => (
              <div key={index} className="p-4 bg-black rounded border border-gray-700">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Number</label>
                    <input
                      type="text"
                      value={metric.number}
                      onChange={(e) => updateMetric(index, 'number', e.target.value)}
                      className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Label</label>
                    <input
                      type="text"
                      value={metric.label}
                      onChange={(e) => updateMetric(index, 'label', e.target.value)}
                      className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Context</label>
                    <input
                      type="text"
                      value={metric.context}
                      onChange={(e) => updateMetric(index, 'context', e.target.value)}
                      className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-white text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-8 py-3 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-500 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-green-900/20 border border-green-600/50 rounded">
          <p className="text-green-400 text-sm">
            <strong>Secure Editor:</strong> Changes are saved to database and require authentication. 
            Only you can edit with the password. For blog posts, use <a href="/admin" className="underline">/admin</a>.
          </p>
        </div>
      </div>
    </div>
  )
}