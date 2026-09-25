import { NavLink, Outlet } from 'react-router-dom'
import shutterShield from '../../assets/shutter-shield.png'

const NAV = [
  { to: '/', label: 'Overview', end: true },
  { to: '/program', label: 'Program', end: false },
]

export function Layout() {
  return (
    <div className="min-h-screen bg-bone-50">
      <header className="sticky top-0 z-20 bg-brand-600 shadow-lg">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-4 md:px-6">
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={shutterShield} alt="" className="h-9 w-9 rounded-xl object-cover" />
            <span className="text-sm font-semibold tracking-tight text-white">Impact Pilot Program tracker</span>
          </NavLink>
          <nav className="ml-auto flex items-center gap-1">
            {NAV.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
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
