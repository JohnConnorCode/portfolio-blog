import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | John Connor - Technology Strategist',
  description: 'Learn about John Connor, a technology strategist with 15+ years building products that solve real problems across AI, Web3, marketplaces, and civic tech.',
  openGraph: {
    title: 'About | John Connor',
    description: 'Technology strategist with 15+ years building products that solve real problems.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
