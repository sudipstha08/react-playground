import { FC } from 'react'
import FaceCapture from '@getyoti/react-face-capture'

export const FaceDetectionV4: FC = () => {
  const onSuccess = (payload, base64PreviewImage) =>
    console.log('Length = ', payload.img.length)

  const onError = error => console.log('Error =', error)

  return (
    <FaceCapture returnPreviewImage onSuccess={onSuccess} onError={onError} />
  )
}
