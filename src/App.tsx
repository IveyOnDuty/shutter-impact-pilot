import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Applicant } from './pages/Applicant'
import { Overview } from './pages/Overview'
import { Program } from './pages/Program'
import { Tracker } from './pages/Tracker'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="applicants" element={<Tracker />} />
        <Route path="tracker" element={<Navigate to="/applicants" replace />} />
        <Route path="program" element={<Program />} />
        <Route path="applicants/:slug" element={<Applicant />} />
        <Route path="timeline" element={<Navigate to="/" replace />} />
        <Route path="financials" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
