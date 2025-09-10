import type { Metadata } from "next";
import { Alata, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/design-system.css";
import "@/styles/neo-brutal.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseTexture } from "@/components/noise-texture";
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
    default: "John Connor - Technology Strategist",
    template: "%s | John Connor"
  },
  description: "Technology strategist specializing in product-market fit, user research, and human-centered technology. Building products that solve real problems.",
  keywords: ["product strategy", "user research", "technology consulting", "product-market fit", "AI strategy", "Web3", "behavioral economics", "human-first technology"],
  authors: [{ name: "John Connor" }],
  creator: "John Connor",
  publisher: "John Connor",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnconnor.xyz",
    siteName: "John Connor",
    title: "John Connor - Technology Strategist",
    description: "Building products that solve real problems through user research and behavioral insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Connor - Technology Strategist"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "John Connor - Technology Strategist",
    description: "Building products that solve real problems through user research and behavioral insights.",
    images: ["/og-image.jpg"],
    creator: "@johnconnor"
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
    canonical: "https://johnconnor.xyz"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alata.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <CustomCursor />
          <NoiseTexture />
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
