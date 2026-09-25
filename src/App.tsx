import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Overview } from './pages/Overview'
import { Program } from './pages/Program'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="program" element={<Program />} />
        <Route path="timeline" element={<Navigate to="/" replace />} />
        <Route path="financials" element={<Navigate to="/" replace />} />
        <Route path="tracker" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
