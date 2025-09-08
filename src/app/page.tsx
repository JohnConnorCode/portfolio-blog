import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { RecentWork } from '@/components/recent-work'
import { Testimonials } from '@/components/testimonials'
import { CallToAction } from '@/components/call-to-action'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RecentWork />
      <Testimonials />
      <CallToAction />
    </>
  )
}