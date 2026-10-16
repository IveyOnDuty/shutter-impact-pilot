import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import shutterShield from '../../assets/shutter-shield.png'

const NAV = [
  { to: '/', label: 'Overview', end: true },
  { to: '/applicants', label: 'Applicants', end: true },
  { to: '/program', label: 'Program', end: false },
]

export function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bone-50">
      <header className="sticky top-0 z-20 bg-brand-600 shadow-lg">
        <div className="mx-auto flex h-20 max-w-5xl items-center gap-4 px-4 md:px-6">
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img src={shutterShield} alt="" className="h-14 w-14 rounded-xl object-cover" />
            <span className="text-lg font-semibold tracking-tight text-white">Impact Pilot Program Tracker</span>
          </NavLink>
          <nav className="ml-auto flex items-center gap-1">
            {NAV.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={(event) => {
                  if (to !== '/applicants' || location.pathname !== '/applicants') return
                  event.preventDefault()
                  navigate('/applicants', { replace: true, state: { allObjectives: Date.now() } })
                }}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-brand-700'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <Outlet />
      </main>
    </div>
  )
}
