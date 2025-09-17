import SanityHero from '@/components/sanity-hero'
import { ImpactBrutal } from '@/components/impact-brutal'
import { WorkingWithMe } from '@/components/working-with-me'
import { WritingsBrutal } from '@/components/writings-brutal'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'
import { StructuredData } from '@/components/structured-data'

export default function Home() {
  return (
    <>
      <StructuredData type="WebSite" />
      <StructuredData type="Person" />
      <SanityHero />
      <ImpactBrutal />
      <SectionDivider variant="geometric" />
      <WorkingWithMe />
      <SectionDivider variant="organic" />
      <WritingsBrutal />
      <SectionDivider variant="wave" />
      <CallToAction />
    </>
  )
}