import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'SuperDebate - Make Arguing Fun Again'
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
          background: 'linear-gradient(135deg, #1a0a2e 0%, #0f0517 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(168, 85, 247, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(168, 85, 247, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.4,
            display: 'flex',
          }}
        />

        {/* Purple glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70%',
            height: '50%',
            background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4), transparent 60%)',
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
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            SUPERDEBATE
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
            Make Arguing Fun Again
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#a855f7',
              marginTop: 30,
              opacity: 0.9,
              display: 'flex',
            }}
          >
            Structured Debates • Critical Thinking • Community
          </div>

          {/* Badge */}
          <div
            style={{
              marginTop: 40,
              padding: '12px 32px',
              border: '2px solid #a855f7',
              borderRadius: 8,
              fontSize: 20,
              color: '#a855f7',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Founded by John Connor
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
            background: 'linear-gradient(to right, transparent, #a855f7, #ec4899, transparent)',
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