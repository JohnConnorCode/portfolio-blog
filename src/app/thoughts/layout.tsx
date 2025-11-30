import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thoughts | John Connor - Technology Strategist',
  description: 'Short-form thoughts and insights on technology, product strategy, and building systems that serve humanity.',
  openGraph: {
    title: 'Thoughts | John Connor',
    description: 'Short-form thoughts on technology, product strategy, and human-first systems.',
    type: 'website',
  },
}

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
