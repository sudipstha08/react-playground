import { useRef, useEffect, useState } from 'react'

export function CanvasPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 600, height: 600 })
  const [canvasUpdated, setCanvasUpdated] = useState(false)

  useEffect(() => {
    const updateSize = () => {
      if (videoRef.current && canvasRef.current) {
        const { offsetWidth, offsetHeight } = videoRef.current
        console.log('videoHEight', offsetHeight)
        // console.log('videoWidth', offsetHeight)
        console.log('videoRef', videoRef?.current)
        // setSize({ width: videoWidth, height: videoHeight })
        canvasRef.current.width = offsetWidth
        canvasRef.current.height = offsetHeight
        setCanvasUpdated(true)
      }
    }

    videoRef?.current?.addEventListener('loadedmetadata', updateSize)
    window?.addEventListener('resize', updateSize)

    return () => {
      videoRef?.current?.removeEventListener('loadedmetadata', updateSize)
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        // Clear previous drawings
        ctx.clearRect(0, 0, size.width, size.height)

        // Draw transparent overlay
        ctx.fillStyle = 'rgba(0, 10, 0, 0.6)'
        ctx.fillRect(0, 0, size.width, size.height)

        // Draw circle at center
        const radius = 150 // Circle radius
        const centerX = size.width / 2
        const centerY = size.height / 2

        // Clear circle area
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.clip() // Clip the region to the circle
        ctx.clearRect(
          centerX - radius,
          centerY - radius,
          radius * 2,
          radius * 2,
        )
        ctx.restore() // Restore canvas state to remove clipping

        // Draw circle outline
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.strokeStyle = '#00ff00'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }
  }, [canvasRef, canvasUpdated])

  return (
    <div
      style={{
        position: 'relative',
        width: '80%',
        height: '80vh',
        marginTop: 90,
        marginLeft: 90,
      }}
    >
      <video
        ref={videoRef}
        src="https://videos.pond5.com/silhouette-grass-blowing-wind-sunset-footage-099356536_main_xxl.mp4"
        autoPlay
        muted
        width={600}
        height={600}
        loop
        playsInline
        style={{
          width: '600px',
          height: '600px',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          // width: '100%',
          // height: '100%',
          zIndex: 1,
          pointerEvents: 'none', // Prevent interaction with canvas
        }}
      />
    </div>
  )
}
