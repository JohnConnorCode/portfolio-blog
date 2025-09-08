'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

// Simple inline editor for your key content
export default function EditPage() {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState({
    heroTitle: 'JOHN CONNOR',
    heroTagline: 'Product Strategist · Growth Catalyst',
    heroDescription: 'Transforming ideas into scalable products through strategic iteration.',
    heroHighlight: 'AI-powered building. Strategic consulting. Rapid growth.',
    
    metrics: [
      { number: '$50M+', label: 'Capital Facilitated', context: 'Through strategic consulting' },
      { number: '10,000+', label: 'Products Launched', context: 'From concept to scale' },
      { number: '15 Years', label: 'Strategic Leadership', context: 'Consulting & product strategy' },
      { number: '3 Cities', label: 'Community Networks', context: 'SF, Austin, NYC debate clubs' }
    ]
  })
  
  const router = useRouter()
  const supabase = createClient()

  // Load saved content from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('site-content')
    if (saved) {
      setContent(JSON.parse(saved))
    }
  }, [])

  const handleSave = () => {
    setLoading(true)
    // Save to localStorage for persistence
    localStorage.setItem('site-content', JSON.stringify(content))
    
    // In a real implementation, this would save to Supabase
    setTimeout(() => {
      setLoading(false)
      alert('Content saved! This is a demo - in production, this would update your live site.')
    }, 500)
  }

  const updateMetric = (index: number, field: string, value: string) => {
    const newMetrics = [...content.metrics]
    newMetrics[index] = { ...newMetrics[index], [field]: value }
    setContent({ ...content, metrics: newMetrics })
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
        
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded">
          <p className="text-yellow-400 text-sm">
            <strong>Note:</strong> This is a simple editor for quick changes. For full content management, 
            use the Admin panel at <a href="/admin" className="underline">/admin</a> or set up Sanity CMS.
          </p>
        </div>
      </div>
    </div>
  )
}