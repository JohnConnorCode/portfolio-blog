import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | John Connor - Technology Strategist',
  description: 'Articles on technology strategy, product development, AI, Web3, and building systems that serve humanity.',
  openGraph: {
    title: 'Blog | John Connor',
    description: 'Articles on technology strategy, product development, and human-first systems.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
