import type { Metadata } from "next";
import { Alata, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/design-system.css";
import "@/styles/neo-brutal.css";
import "@/styles/premium-scrollbar.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NoiseTexture } from "@/components/noise-texture";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, SEO_DEFAULTS } from "@/lib/constants";

// Google Analytics ID - set in environment variable
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: SEO_DEFAULTS.author, url: SITE_URL }],
  creator: "John Connor",
  publisher: "John Connor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SEO_DEFAULTS.siteName,
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
    site: SEO_DEFAULTS.twitterHandle,
    creator: SEO_DEFAULTS.twitterHandle,
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
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
    }
  },
  category: 'technology',
  classification: 'Technology Consulting',
  referrer: 'origin-when-cross-origin',
  // Verification codes - add real codes via environment variables when ready
  // verification: {
  //   google: process.env.GOOGLE_SITE_VERIFICATION,
  //   yandex: process.env.YANDEX_VERIFICATION,
  // }
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${alata.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
          >
            Skip to main content
          </a>
          <NoiseTexture />
          <Navbar />
          <main id="main-content" className="flex-1 pt-24">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
