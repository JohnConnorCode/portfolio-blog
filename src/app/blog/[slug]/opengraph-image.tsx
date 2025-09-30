import { ImageResponse } from 'next/og'
import { sanityClient } from '@/lib/sanity/client'

export const runtime = 'edge'

export const alt = 'Blog Post - John Connor'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  // Fetch post data
  let title = 'Blog Post'
  let category = 'Technology'

  try {
    const post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        categories[0]->{title}
      }`,
      { slug: params.slug }
    )

    if (post) {
      title = post.title
      category = post.categories?.title || 'Technology'
    }
  } catch (error) {
    console.error('Error fetching post for OG image:', error)
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(to bottom right, #000000, #1a0a2e)',
          position: 'relative',
          padding: 60,
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            opacity: 0.4,
            display: 'flex',
          }}
        />

        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            background: 'radial-gradient(ellipse at top right, rgba(138, 43, 226, 0.3), transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            padding: '10px 24px',
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid rgba(0, 255, 255, 0.5)',
            borderRadius: 8,
            fontSize: 20,
            color: '#00ffff',
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10,
            maxWidth: '90%',
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 52 : 64,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {title}
          </div>
        </div>

        {/* Author section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: 'white',
                fontWeight: 700,
                display: 'flex',
              }}
            >
              John Connor
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#00ffff',
                marginTop: 5,
                display: 'flex',
              }}
            >
              Technology Strategist
            </div>
          </div>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.5)',
              display: 'flex',
            }}
          >
            johnconnor.xyz
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #00ffff, #8a2be2)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}