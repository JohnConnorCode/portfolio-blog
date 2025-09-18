import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuperDebate - Make Arguing Fun Again | John Connor Portfolio',
  description: 'Founded by John Connor, SuperDebate is the premier platform for structured debates, tournaments, and critical thinking development. Building a global network of in-person debate communities.',
  keywords: 'SuperDebate, debate platform, critical thinking, structured debate, tournaments, John Connor, founder, portfolio',

  openGraph: {
    title: 'SuperDebate - Make Arguing Fun Again',
    description: 'The premier platform for structured debates and critical thinking. Founded by national debate champion John Connor.',
    url: 'https://johnconnor.ai/super-debate',
    siteName: 'John Connor Portfolio',
    images: [
      {
        url: 'https://johnconnor.ai/og-superdebate.jpg',
        width: 1200,
        height: 630,
        alt: 'SuperDebate Platform - Make Arguing Fun Again'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SuperDebate - Make Arguing Fun Again',
    description: 'The premier platform for structured debates and critical thinking. Founded by national debate champion John Connor.',
    images: ['https://johnconnor.ai/og-superdebate.jpg'],
    creator: '@johnconnor',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://johnconnor.ai/super-debate',
  },

  authors: [{ name: 'John Connor', url: 'https://johnconnor.ai' }],
  creator: 'John Connor',
  publisher: 'John Connor',

  category: 'technology',
}