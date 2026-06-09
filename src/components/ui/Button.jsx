import { Link } from 'react-router-dom'

export function ButtonPrimary({ children, to, href, onClick, className = '', type = 'button' }) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff3b30] to-[#ff9500] px-6 py-3 text-sm font-semibold text-white btn-hover glow-accent'

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}

export function ButtonGhost({ children, to, href, onClick, className = '', type = 'button' }) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm btn-hover hover:border-orange-500/40 hover:bg-white/10'

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}
