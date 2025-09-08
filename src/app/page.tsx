import { Hero } from '@/components/hero'
import { FeaturedPosts } from '@/components/featured-posts'
import { FeaturedProjects } from '@/components/featured-projects'
import { Stats } from '@/components/stats'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <FeaturedPosts />
    </>
  )
}