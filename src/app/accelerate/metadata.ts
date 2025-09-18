import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accelerate - Funding That Actually Ships | John Connor Portfolio',
  description: 'Founded by John Connor, Accelerate is the premier grants management platform connecting builders with capital. Tracking $50M+ in Web3 ecosystem funding with AI-powered matching.',
  keywords: 'Accelerate, Web3 funding, grants management, ecosystem funding, AI matching, John Connor, founder, portfolio',

  openGraph: {
    title: 'Accelerate - Funding That Actually Ships',
    description: 'The premier grants management platform connecting builders with capital. $50M+ tracked, 2K+ teams funded. Founded by John Connor.',
    url: 'https://johnconnor.ai/accelerate',
    siteName: 'John Connor Portfolio',
    images: [
      {
        url: 'https://johnconnor.ai/og-accelerate.jpg',
        width: 1200,
        height: 630,
        alt: 'Accelerate Platform - Funding That Actually Ships'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Accelerate - Funding That Actually Ships',
    description: 'The premier grants management platform. $50M+ tracked, 2K+ teams funded. Founded by John Connor.',
    images: ['https://johnconnor.ai/og-accelerate.jpg'],
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
    canonical: 'https://johnconnor.ai/accelerate',
  },

  authors: [{ name: 'John Connor', url: 'https://johnconnor.ai' }],
  creator: 'John Connor',
  publisher: 'John Connor',

  category: 'technology',
}