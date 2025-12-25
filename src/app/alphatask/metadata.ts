import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlphaTask - The Operating System of My Life | John Connor Portfolio',
  description: 'Created by John Connor, AlphaTask is a unified personal productivity system combining task management, journaling, and wellness tracking. Built for AI integration from day one.',
  keywords: 'AlphaTask, task management, personal productivity, life OS, wellness tracking, journaling, AI integration, John Connor, portfolio',

  openGraph: {
    title: 'AlphaTask - The Operating System of My Life',
    description: 'A unified personal productivity system combining tasks, journal, and wellness. Built because existing tools couldn\'t keep up. Created by John Connor.',
    url: 'https://johnconnor.xyz/alphatask',
    siteName: 'John Connor Portfolio',
    images: [
      {
        url: 'https://johnconnor.xyz/og-alphatask.png',
        width: 1200,
        height: 630,
        alt: 'AlphaTask - The Operating System of My Life'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AlphaTask - The Operating System of My Life',
    description: 'A unified personal productivity system. Tasks, journal, wellness—all interconnected. Created by John Connor.',
    images: ['https://johnconnor.xyz/og-alphatask.png'],
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
    canonical: 'https://johnconnor.xyz/alphatask',
  },

  authors: [{ name: 'John Connor', url: 'https://johnconnor.xyz' }],
  creator: 'John Connor',
  publisher: 'John Connor',

  category: 'technology',
}
