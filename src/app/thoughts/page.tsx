import ThoughtsFeed from '@/components/thoughts-feed'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            <span className="text-white">RANDOM</span>
            <span className="text-cyan-400 font-black neon-glow"> THOUGHTS</span>
          </h1>
          
          <p className="text-lg text-gray-400 font-light">
            Unfiltered ideas, insights, and observations. My personal tweet-like microblog.
          </p>
        </div>
        
        {/* Feed */}
        <ThoughtsFeed />
      </div>
    </div>
  )
}