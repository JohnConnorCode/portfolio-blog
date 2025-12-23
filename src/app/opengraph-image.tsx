import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'John Connor - Product Strategist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 212, 212, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 212, 212, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Top right glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(0, 212, 212, 0.15), transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Bottom left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(0, 212, 212, 0.1), transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '0 60px',
          }}
        >
          {/* Logo diamond */}
          <div
            style={{
              width: 80,
              height: 80,
              border: '3px solid #00d4d4',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <span
              style={{
                transform: 'rotate(-45deg)',
                fontSize: 32,
                fontWeight: 900,
                color: '#00d4d4',
                letterSpacing: '0.05em',
              }}
            >
              JC
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
            }}
          >
            <span
              style={{
                fontSize: 88,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
              }}
            >
              JOHN
            </span>
            <span
              style={{
                fontSize: 88,
                fontWeight: 700,
                color: '#00d4d4',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
              }}
            >
              CONNOR
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255, 255, 255, 0.9)',
              marginTop: 30,
              display: 'flex',
            }}
          >
            Builder of systems that scale.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: '#00d4d4',
              marginTop: 16,
              display: 'flex',
            }}
          >
            From zero to product-market fit.
          </div>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 40,
            }}
          >
            {['Product', 'Strategy', 'Launch'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '10px 24px',
                  border: '1px solid rgba(0, 212, 212, 0.4)',
                  color: '#00d4d4',
                  fontSize: 16,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'rgba(0, 212, 212, 0.1)',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(to right, transparent, #00d4d4, transparent)',
            display: 'flex',
          }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: 30,
            left: 30,
            width: 40,
            height: 40,
            borderTop: '2px solid #00d4d4',
            borderLeft: '2px solid #00d4d4',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 30,
            width: 40,
            height: 40,
            borderTop: '2px solid #00d4d4',
            borderRight: '2px solid #00d4d4',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 30,
            width: 40,
            height: 40,
            borderBottom: '2px solid #00d4d4',
            borderLeft: '2px solid #00d4d4',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            width: 40,
            height: 40,
            borderBottom: '2px solid #00d4d4',
            borderRight: '2px solid #00d4d4',
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