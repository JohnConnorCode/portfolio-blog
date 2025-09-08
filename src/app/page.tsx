import { Hero } from '@/components/hero'
import { ClientLogos } from '@/components/client-logos'
import { ImpactMetrics } from '@/components/impact-metrics'
import { ConsultingPackages } from '@/components/consulting-packages'
import { WorkingWithMe } from '@/components/working-with-me'
import { Ventures } from '@/components/ventures'
import { Experience } from '@/components/experience'
import { Writings } from '@/components/writings'
import { Services } from '@/components/services'
import { RecentWork } from '@/components/recent-work'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ImpactMetrics />
      <SectionDivider variant="geometric" />
      <ConsultingPackages />
      <SectionDivider variant="organic" />
      <WorkingWithMe />
      <SectionDivider variant="wave" />
      <Ventures />
      <SectionDivider variant="dots" />
      <Experience />
      <SectionDivider variant="organic" />
      <Writings />
      <SectionDivider variant="wave" />
      <Services />
      <SectionDivider variant="dots" />
      <RecentWork />
      <SectionDivider variant="geometric" />
      <CallToAction />
    </>
  )
}