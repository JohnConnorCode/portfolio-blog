import Script from 'next/script'

interface StructuredDataProps {
  type: 'WebSite' | 'BlogPosting' | 'Person' | 'Organization'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {}

  switch (type) {
    case 'WebSite':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "John Connor - Technology Strategist",
        "description": "Technology strategist with 15 years experience building products that solve real problems",
        "url": "https://johnconnor.xyz",
        "author": {
          "@type": "Person",
          "name": "John Connor",
          "url": "https://johnconnor.xyz",
          "sameAs": [
            "https://twitter.com/johnconnor",
            "https://linkedin.com/in/johnconnor",
            "https://github.com/JohnConnorCode"
          ]
        },
        "publisher": {
          "@type": "Person",
          "name": "John Connor"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://johnconnor.xyz/blog?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
      break

    case 'BlogPosting':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data?.title || '',
        "description": data?.excerpt || '',
        "datePublished": data?.publishedAt || new Date().toISOString(),
        "dateModified": data?.updatedAt || data?.publishedAt || new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": data?.author || "John Connor",
          "url": "https://johnconnor.xyz"
        },
        "publisher": {
          "@type": "Person",
          "name": "John Connor",
          "logo": {
            "@type": "ImageObject",
            "url": "https://johnconnor.xyz/favicon.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://johnconnor.xyz/blog/${data?.slug}`
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://johnconnor.xyz/opengraph-image.png",
          "width": 1200,
          "height": 630
        },
        "articleSection": data?.category || "Technology",
        "keywords": data?.tags?.join(", ") || "technology, strategy, leadership",
        "wordCount": data?.wordCount || 1000,
        "url": `https://johnconnor.xyz/blog/${data?.slug}`
      }
      break

    case 'Person':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "John Connor",
        "jobTitle": "Technology Strategist",
        "description": "15+ years building products that solve real problems. Founder of Accelerate & Super Debate.",
        "url": "https://johnconnor.xyz",
        "sameAs": [
          "https://twitter.com/johnconnor",
          "https://linkedin.com/in/johnconnor",
          "https://github.com/JohnConnorCode"
        ],
        "knowsAbout": [
          "Product Strategy",
          "Artificial Intelligence",
          "Web3 Ecosystems",
          "Grant Management",
          "Product-Market Fit",
          "Behavioral Economics",
          "Human-Centered Technology"
        ],
        "alumniOf": {
          "@type": "Organization",
          "name": "University"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Self-Employed",
          "description": "Technology Strategy Consulting"
        }
      }
      break

    case 'Organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "John Connor Technology Consulting",
        "url": "https://johnconnor.xyz",
        "logo": "https://johnconnor.xyz/favicon.svg",
        "founder": {
          "@type": "Person",
          "name": "John Connor"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@johnconnor.xyz",
          "contactType": "Business Inquiry"
        }
      }
      break
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
      strategy="afterInteractive"
    />
  )
}