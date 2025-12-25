import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AlphaTask - The Operating System of My Life'
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
          background: 'linear-gradient(135deg, #1a0f00 0%, #0a0500 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(245, 158, 11, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.4,
            display: 'flex',
          }}
        />

        {/* Amber glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70%',
            height: '50%',
            background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.4), transparent 60%)',
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
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            ALPHATASK
          </div>
          <div
            style={{
              fontSize: 42,
              color: 'white',
              marginTop: 20,
              fontWeight: 700,
              display: 'flex',
            }}
          >
            The Operating System of My Life
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#f59e0b',
              marginTop: 30,
              opacity: 0.9,
              display: 'flex',
            }}
          >
            Tasks • Journal • Wellness • AI-Ready
          </div>

          {/* Badge */}
          <div
            style={{
              marginTop: 40,
              padding: '12px 32px',
              border: '2px solid #f59e0b',
              borderRadius: 8,
              fontSize: 20,
              color: '#f59e0b',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Created by John Connor
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(to right, transparent, #f59e0b, #ea580c, transparent)',
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
