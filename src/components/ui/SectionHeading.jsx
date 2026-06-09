import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ badge, title, highlight, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${alignClass}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
        {highlight && <> <span className="gradient-text">{highlight}</span></>}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base text-white/60 md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
