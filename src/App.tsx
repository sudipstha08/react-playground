import { QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { queryClient } from '@/lib'
import {
  SpellsPage,
  NotFoundPage,
  MaterialUiPage,
  MaterialTable,
} from '@/containers'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

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
        <Route path="/material-table" element={<MaterialTable />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
