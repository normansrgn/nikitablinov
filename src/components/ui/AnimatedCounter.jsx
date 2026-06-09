import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'

export default function AnimatedCounter({ value, suffix = '', label, description }) {
  const { ref, visible } = useScrollReveal()
  const count = useAnimatedCounter(value, 2000, visible)

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
        <span className="gradient-text">{count}{suffix}</span>
      </p>
      <p className="mt-2 text-lg font-semibold text-white/90">{label}</p>
      {description && <p className="mt-1 text-sm text-white/50">{description}</p>}
    </div>
  )
}
