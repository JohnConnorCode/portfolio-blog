import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuperDebate - A New Intellectual Sport for the 21st Century | John Connor',
  description: 'SuperDebate is building a new intellectual sport for the 21st century. Local clubs, national tournaments, AI-powered judging. Restoring the values of the Greek agora.',
  keywords: 'SuperDebate, intellectual sport, debate platform, Greek agora, structured debate, tournaments, John Connor, startup',

  openGraph: {
    title: 'SuperDebate - A New Intellectual Sport',
    description: 'Building a new intellectual sport for the 21st century. Restoring the values of the Greek agora. Founded by John Connor.',
    url: 'https://johnconnor.xyz/super-debate',
    siteName: 'John Connor Portfolio',
    images: [
      {
        url: 'https://johnconnor.xyz/og-superdebate.png',
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
    title: 'SuperDebate - A New Intellectual Sport',
    description: 'Building a new intellectual sport for the 21st century. Restoring the values of the Greek agora. Founded by John Connor.',
    images: ['https://johnconnor.xyz/og-superdebate.png'],
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
    canonical: 'https://johnconnor.xyz/super-debate',
  },

  authors: [{ name: 'John Connor', url: 'https://johnconnor.xyz' }],
  creator: 'John Connor',
  publisher: 'John Connor',

  category: 'technology',
}