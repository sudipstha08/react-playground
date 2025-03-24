import { QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { queryClient } from '@/lib'
import {
  SpellsPage,
  NotFoundPage,
  MaterialUiPage,
  MaterialTable,
  FaceDetection,
} from '@/containers'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { FaceDetectionV2 } from 'src/containers/FaceDetectionV2'
import { FaceDetectionV4 } from 'src/containers/FaceDetectionV4'
import { CanvasPage } from 'src/containers/Canvas'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<SpellsPage />} />
        <Route path="/materialui" element={<MaterialUiPage />} />
        <Route path="/face-detect" element={<FaceDetection />} />
        <Route path="/face-detectv2" element={<FaceDetectionV2 />} />
        <Route path="/face-detectv4" element={<FaceDetectionV4 />} />
        <Route path="/material-table" element={<MaterialTable />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
