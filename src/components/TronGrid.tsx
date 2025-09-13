'use client'

import { useEffect, useRef } from 'react'

export function TronGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Grid parameters
    const gridSize = 50
    const perspective = 400
    const horizonY = canvas.height * 0.4
    let offset = 0
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Move grid forward
      offset = (offset + 2) % gridSize
      
      // Draw horizontal lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)'
      ctx.lineWidth = 2
      
      for (let z = 0; z < 20; z++) {
        const y = horizonY + (z * gridSize + offset) * perspective / (perspective + z * gridSize)
        
        if (y > horizonY && y < canvas.height) {
          const alpha = 1 - (z / 20) * 0.7
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }
      }
      
      // Draw vertical lines with perspective
      const centerX = canvas.width / 2
      const numLines = 30
      
      for (let i = -numLines/2; i <= numLines/2; i++) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)'
        
        const x1 = centerX + i * gridSize
        const x2 = centerX + i * gridSize * 3
        
        ctx.moveTo(x1, horizonY)
        ctx.lineTo(x2 < centerX ? 0 : x2 > centerX ? canvas.width : x2, canvas.height)
        ctx.stroke()
      }
      
      // Add glow effect
      ctx.shadowBlur = 20
      ctx.shadowColor = 'rgba(0, 255, 255, 0.5)'
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 5,
        opacity: 0.9,
        mixBlendMode: 'screen'
      }}
    />
  )
}