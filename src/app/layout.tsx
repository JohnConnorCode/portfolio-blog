import type { Metadata } from "next";
import { Alata, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/design-system.css";
import "@/styles/neo-brutal.css";
import "@/styles/premium-scrollbar.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseTexture } from "@/components/noise-texture";
import { PremiumLayout } from "@/components/premium-layout";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { CustomCursor as PremiumCursor } from "@/components/ui/micro-interactions";
import { Analytics } from "@vercel/analytics/react";

const alata = Alata({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://johnconnor.xyz'),
  title: {
    default: "John Connor - Technology Strategist | Building Systems That Serve Humanity",
    template: "%s | John Connor"
  },
  description: "Technology strategist with 15 years experience. Founder of Accelerate & Super Debate. Expert in product-market fit, AI strategy, and human-centered technology. $50M+ funding enabled.",
  keywords: [
    "John Connor", 
    "technology strategist", 
    "product strategy", 
    "product-market fit", 
    "AI strategy", 
    "Web3 ecosystems",
    "grant management",
    "Accelerate platform",
    "Super Debate",
    "ThriveProtocol", 
    "Sparkblox",
    "Upland",
    "behavioral economics", 
    "human-first technology",
    "ecosystem funding",
    "startup advisor"
  ],
  authors: [{ name: "John Connor", url: "https://johnconnor.xyz" }],
  creator: "John Connor",
  publisher: "John Connor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnconnor.xyz",
    siteName: "John Connor - Technology Strategist",
    title: "John Connor - Technology Strategist | Building Systems That Serve Humanity",
    description: "15 years building products that solve real problems. Founder of Accelerate (500+ funding programs) & Super Debate. Expert in AI strategy, Web3 ecosystems, and human-centered technology.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "John Connor - Technology Strategist",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@johnconnor",
    creator: "@johnconnor",
    title: "John Connor - Technology Strategist",
    description: "15 years building products that solve real problems. Founder of Accelerate & Super Debate. Expert in AI strategy and human-centered technology.",
    images: {
      url: "/twitter-image.png",
      alt: "John Connor - Technology Strategist"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://johnconnor.xyz",
    languages: {
      'en-US': 'https://johnconnor.xyz',
    }
  },
  category: 'technology',
  classification: 'Technology Consulting',
  referrer: 'origin-when-cross-origin',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black" style={{ colorScheme: 'dark', backgroundColor: 'black' }}>
      <body
        className={`${alata.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col dark bg-black`}
        style={{ backgroundColor: 'black' }}
      >
        <Providers>
          <PremiumCursor enabled={true} size={20} trailLength={5} />
          <AmbientBackground
            variant="atmospheric"
            intensity={0.6}
            colors={['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899']}
            interactive={true}
          />
          <NoiseTexture />
          <PremiumLayout>
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </PremiumLayout>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
