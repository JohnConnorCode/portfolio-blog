import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/design-system.css";
import "@/styles/neo-brutal.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseTexture } from "@/components/noise-texture";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "John Thomas Connor - Building Systems That Serve Humanity",
  description: "Product strategist, builder, and father creating systems at the intersection of technology and community. Technology should empower human judgment, not replace it.",
  keywords: ["product strategy", "human-first technology", "community building", "web3", "AI ethics", "Super Debate"],
  authors: [{ name: "John Thomas Connor" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-blog-five-iota.vercel.app",
    title: "John Thomas Connor - Building Systems That Serve Humanity",
    description: "Product strategist, builder, and father creating systems at the intersection of technology and community.",
    siteName: "John Thomas Connor",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Thomas Connor - Building Systems That Serve Humanity",
    description: "Product strategist, builder, and father creating systems at the intersection of technology and community.",
    creator: "@ablockunchained",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <CustomCursor />
          <NoiseTexture />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
