import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Swords } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import { ButtonPrimary } from '../ui/Button'

export default function Navbar() {
  const scrolled = useNavbarScroll(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-orange-400 ${
      isActive ? 'text-orange-400' : 'text-white/70'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-[#08080f]/80 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3b30] to-[#ff9500]">
              <Swords className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-white">ФК Краснодар</p>
              <p className="text-[10px] text-white/50">Федерация кикбоксинга</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonPrimary to="/contacts" className="!px-5 !py-2.5 !text-sm">
              Записаться
            </ButtonPrimary>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <nav className="drawer-enter absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-white/10 bg-[#101018] p-6 pt-24">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `mb-4 block min-h-11 py-2 text-lg font-medium ${isActive ? 'text-orange-400' : 'text-white/80'}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div onClick={() => setMobileOpen(false)}>
              <ButtonPrimary to="/contacts" className="mt-4 w-full">
                Записаться
              </ButtonPrimary>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
