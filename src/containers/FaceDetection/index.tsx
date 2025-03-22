import { FC, useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'

const videoHeight = 480
const videoWidth = 640

export const FaceDetection: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const interval = useRef<NodeJS.Timeout>()

  console.log('captured image', capturedImage)

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = '/models'

        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ])
        console.log('Modal loaded successfully')
      } catch (err) {
        console.log('Error loading models', err)
      }
    }

    const startVideo = async () => {
      try {
        console.log('starting videeo')
        const stream = await navigator.mediaDevices
          .getUserMedia({
            video: true,
          })
          .then(stream => {
            videoRef.current.srcObject = stream
            videoRef.current.play()
          })
        // console.log('stean', stream)
        // if (videoRef.current) {

        // }
      } catch (error) {
        console.error('Error accessing webcam:', error)
      }
    }

    ;(async () => {
      await loadModels()
      await startVideo()
      console.log('Helloooooo')
    })()

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  useEffect(() => {
    const captureImage = () => {
      if (videoRef.current && canvasRef.current) {
        console.log('capturing images')
        const context = canvasRef.current.getContext('2d')

        if (context) {
          canvasRef.current.width = videoRef.current.videoWidth
          canvasRef.current.height = videoRef.current.videoHeight
          context.drawImage(videoRef.current, 0, 0)
          const image = canvasRef.current.toDataURL('image/png')
          setCapturedImage(image)

          // Stop the video stream
          const stream = videoRef.current.srcObject as MediaStream
          stream.getTracks().forEach(track => track.stop())

          // Clear the video source
          videoRef.current.srcObject = null
          console.log('Video stopped after capturing image')
          clearInterval(interval.current)
        }
      }
    }

    const detectFace = async () => {
      try {
        if (videoRef.current) {
          console.log('detecting face ', videoRef.current)
          const displaySize = {
            width: videoWidth,
            height: videoHeight,
          }

          canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
            videoRef.current,
          )

          faceapi.matchDimensions(canvasRef.current, displaySize)

          const detection = await faceapi
            .detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions({}),
            )
            .withFaceLandmarks()

          const resizedDetections = faceapi.resizeResults(
            detection,
            displaySize,
          )

          canvasRef &&
            canvasRef.current &&
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)

          canvasRef &&
            canvasRef.current &&
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
          // canvasRef &&
          //   canvasRef.current &&
          //   faceapi.draw.drawFaceExpressions(
          //     canvasRef.current,
          //     resizedDetections,
          //   )

          console.log('resizedDetections==============', resizedDetections)
          console.log('detection==============', detection)

          if (detection && canvasRef.current) {
            captureImage() // Auto-capture when a face is detected
          }

          // requestAnimationFrame(detectFace)
        }
      } catch (err) {
        console.log('Error while detecting face', err)
      }
    }

    interval.current = setInterval(() => {
      detectFace()
    }, 1000)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <video ref={videoRef} autoPlay muted style={{ borderRadius: '10px' }} />
        <canvas ref={canvasRef} style={{ position: 'absolute' }} />
      </div>

      {capturedImage && (
        <div>
          <h3>Captured Image: </h3>
          <img src={capturedImage} alt="Captured Face" />
        </div>
      )}
    </div>
  )
}
