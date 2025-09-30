import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Accelerate - Funding That Actually Ships'
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
          background: 'linear-gradient(to bottom, #000000, #0a0a1a)',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.5,
            display: 'flex',
          }}
        />

        {/* Cyan glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.3), transparent 60%)',
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
              fontSize: 120,
              fontWeight: 900,
              color: '#22d3ee',
              letterSpacing: '-0.02em',
              textShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
              display: 'flex',
            }}
          >
            ACCELERATE
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
            Funding That Actually Ships
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#22d3ee',
              marginTop: 30,
              opacity: 0.8,
              display: 'flex',
            }}
          >
            $50M+ Tracked • 2K+ Teams Funded
          </div>

          {/* Badge */}
          <div
            style={{
              marginTop: 40,
              padding: '12px 32px',
              border: '2px solid #22d3ee',
              borderRadius: 8,
              fontSize: 20,
              color: '#22d3ee',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            By John Connor
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
            background: 'linear-gradient(to right, transparent, #22d3ee, transparent)',
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