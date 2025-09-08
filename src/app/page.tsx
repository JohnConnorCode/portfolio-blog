import { HeroCyberpunk } from '@/components/hero-cyberpunk'
import { ClientLogos } from '@/components/client-logos'
import { ImpactBrutal } from '@/components/impact-brutal'
import { ConsultingPackages } from '@/components/consulting-packages'
import { WorkingWithMe } from '@/components/working-with-me'
import { Ventures } from '@/components/ventures'
import { Experience } from '@/components/experience'
import { WritingsBrutal } from '@/components/writings-brutal'
import { Services } from '@/components/services'
import { RecentWork } from '@/components/recent-work'
import { CallToAction } from '@/components/call-to-action'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <>
      <HeroCyberpunk />
      <ClientLogos />
      <ImpactBrutal />
      <SectionDivider variant="geometric" />
      <ConsultingPackages />
      <SectionDivider variant="organic" />
      <WorkingWithMe />
      <SectionDivider variant="wave" />
      <Ventures />
      <SectionDivider variant="dots" />
      <Experience />
      <SectionDivider variant="organic" />
      <WritingsBrutal />
      <SectionDivider variant="wave" />
      <Services />
      <SectionDivider variant="dots" />
      <RecentWork />
      <SectionDivider variant="geometric" />
      <CallToAction />
    </>
  )
}