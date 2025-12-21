import { sanityClient } from '@/lib/sanity/client'
import { settingsQuery } from '@/lib/sanity/queries'
import { HeroCyberpunk } from './hero-cyberpunk'

// Default content fallback
const defaultContent = {
  heroTitle: 'JOHN CONNOR',
  heroDescription: 'Building systems that serve humanity.',
  heroHighlight: 'Product strategy. Human-first technology. Real impact.',
  metrics: [
    { number: '$50M+', label: 'Funded Startups', context: 'Products built for high-growth companies' },
    { number: '50+', label: 'Products Shipped', context: 'From local businesses to enterprise' },
    { number: '15+ Years', label: 'Product Experience', context: 'Philosophy, economics, behavior theory' },
    { number: '100+', label: 'Businesses Helped', context: 'From hummus shops to unicorns' }
  ]
}

export default async function SanityHero() {
  let content = defaultContent
  
  try {
    const settings = await sanityClient.fetch(settingsQuery)
    if (settings) {
      content = {
        ...defaultContent,
        ...settings
      }
    }
  } catch {
    console.log('Using default content - Sanity not configured yet')
  }
  
  return <HeroCyberpunk content={content} />
}