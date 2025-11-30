import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Philosophy | John Connor - Technology Strategist',
  description: 'John Connor\'s approach to building technology: human-first systems, aligned incentives, and products that serve people rather than exploit them.',
  openGraph: {
    title: 'Philosophy | John Connor',
    description: 'Building technology that serves humanity. Human-first systems and aligned incentives.',
    type: 'website',
  },
}

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
