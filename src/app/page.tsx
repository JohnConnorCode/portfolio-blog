import { HeroCyberpunk } from '@/components/hero-cyberpunk'
import { ImpactBrutal } from '@/components/impact-brutal'
import { SuperDebateHero } from '@/components/super-debate-hero'
import { AccelerateHero } from '@/components/accelerate-hero'
import { WorkingWithMe } from '@/components/working-with-me'
import { WritingsBrutal } from '@/components/writings-brutal'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'
import { StructuredData } from '@/components/structured-data'

// Default hero content
const heroContent = {
  heroTitle: 'JOHN CONNOR',
  heroDescription: 'Building systems that serve humanity.',
  heroHighlight: 'Product strategy. Human-first technology. Real impact.',
  metrics: [
    { number: '$20M+', label: 'Funded Startups', context: 'Products built for high-growth companies' },
    { number: '50+', label: 'Products Shipped', context: 'From local businesses to enterprise' },
    { number: '15+ Years', label: 'Product Experience', context: 'Philosophy, economics, behavior theory' },
    { number: '100+', label: 'Businesses Helped', context: 'From hummus shops to unicorns' }
  ]
}

export default function Home() {
  return (
    <>
      <StructuredData type="WebSite" />
      <StructuredData type="Person" />
      <HeroCyberpunk content={heroContent} />
      <ImpactBrutal />
      <SectionDivider variant="geometric" />
      <SuperDebateHero />
      <SectionDivider variant="wave" />
      <AccelerateHero />
      <SectionDivider variant="organic" />
      <WorkingWithMe />
      <SectionDivider variant="geometric" />
      <WritingsBrutal />
      <SectionDivider variant="wave" />
      <CallToAction />
    </>
  )
}