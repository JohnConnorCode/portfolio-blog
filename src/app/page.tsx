import { HeroCyberpunk } from '@/components/hero-cyberpunk'
import { ImpactBrutal } from '@/components/impact-brutal'
import { SuperDebateHero } from '@/components/super-debate-hero'
import { WorkingWithMe } from '@/components/working-with-me'
import { WritingsBrutal } from '@/components/writings-brutal'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'
import { StructuredData } from '@/components/structured-data'
import { ScrollMarquee, ParallaxDivider } from '@/components/scroll-marquee'

// Hero content
const heroContent = {
  heroTitle: 'I design systems.',
  heroDescription: 'Most people build features. I design the systems underneath—the architecture, the incentives, the logic that compounds over time.',
  heroHighlight: 'Product strategy. Systems architecture. From zero to scale.',
  metrics: [
    { number: '15+', label: 'Years Designing', context: 'From architecture to scale' },
    { number: '$20M+', label: 'Outcomes Enabled', context: 'Strategy that compounds' },
    { number: '300K+', label: 'Users Served', context: 'Systems that work' },
    { number: '50+', label: 'Products Shipped', context: 'AI, Web3, marketplaces' }
  ]
}

export default function Home() {
  return (
    <>
      <StructuredData type="WebSite" />
      <StructuredData type="Person" />
      <HeroCyberpunk content={heroContent} />

      {/* Scrolling text marquee */}
      <ScrollMarquee text="SYSTEMS • STRATEGY • PRODUCT • SCALE •" direction="left" />

      <ImpactBrutal />

      <SectionDivider variant="deco" />

      <SuperDebateHero />

      {/* Another marquee in opposite direction */}
      <ScrollMarquee text="DESIGN • BUILD • SHIP • COMPOUND •" direction="right" />

      <ParallaxDivider />

      <WorkingWithMe />

      <SectionDivider variant="wave" />

      <WritingsBrutal />

      <SectionDivider variant="geometric" />

      <CallToAction />
    </>
  )
}
