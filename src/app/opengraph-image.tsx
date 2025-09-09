import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'John Connor - Technology Strategist'
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
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>John Connor</div>
        <div style={{ fontSize: 32, opacity: 0.8 }}>Technology Strategist</div>
        <div style={{ fontSize: 24, marginTop: 40, opacity: 0.6 }}>
          Building products that solve real problems
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}