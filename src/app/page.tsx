import { HeroCyberpunk } from '@/components/hero-cyberpunk'
import { ImpactBrutal } from '@/components/impact-brutal'
import { SuperDebateHero } from '@/components/super-debate-hero'
import { WorkingWithMe } from '@/components/working-with-me'
import { WritingsBrutal } from '@/components/writings-brutal'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'
import { StructuredData } from '@/components/structured-data'

// Default hero content
const heroContent = {
  heroTitle: 'JOHN CONNOR',
  heroDescription: 'Builder of systems that scale.',
  heroHighlight: 'From zero to product-market fit.',
  metrics: [
    { number: '15+', label: 'Years in Product', context: 'Led product at top apps' },
    { number: '$20M+', label: 'Funding Enabled', context: 'Across companies I\'ve built and advised' },
    { number: '300K+', label: 'Users Scaled', context: 'From early traction to growth' },
    { number: '50+', label: 'Products Shipped', context: 'Web3, AI, marketplaces, mobile' }
  ]
}

export default function Home() {
  return (
    <>
      <StructuredData type="WebSite" />
      <StructuredData type="Person" />
      <HeroCyberpunk content={heroContent} />
      <ImpactBrutal />
      <SectionDivider variant="deco" />
      <SuperDebateHero />
      <SectionDivider variant="agora" />
      <WorkingWithMe />
      <SectionDivider variant="greek" />
      <WritingsBrutal />
      <SectionDivider variant="dots" />
      <CallToAction />
    </>
  )
}