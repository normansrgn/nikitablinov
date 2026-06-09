import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
