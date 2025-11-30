import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | John Connor - Technology Strategist',
  description: 'Explore John Connor\'s portfolio of work: SuperDebate, Accelerate, Sparkblox, Upland, and more. 15+ years of products that ship and make impact.',
  openGraph: {
    title: 'Work | John Connor',
    description: 'Portfolio of products that ship and make impact. SuperDebate, Accelerate, and more.',
    type: 'website',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
