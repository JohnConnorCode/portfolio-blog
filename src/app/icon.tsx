import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black',
          position: 'relative',
        }}
      >
        {/* Diamond shape */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          style={{ position: 'absolute' }}
        >
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#0088ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M16 2 L30 16 L16 30 L2 16 Z"
            fill="black"
            stroke="url(#iconGradient)"
            strokeWidth="2"
          />
          <text
            x="16"
            y="20"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
            fill="url(#iconGradient)"
          >
            JC
          </text>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}