import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | John Connor - Technology Strategist',
  description: 'Get in touch with John Connor for product strategy, technology consulting, or collaboration opportunities.',
  openGraph: {
    title: 'Contact | John Connor',
    description: 'Get in touch for product strategy, technology consulting, or collaboration.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
