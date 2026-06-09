import BlobBackground from './BlobBackground'
import { ButtonPrimary, ButtonGhost } from './Button'

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  primaryCta,
  primaryTo,
  secondaryCta,
  secondaryTo,
  compact = false,
}) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-28 pb-16' : 'pt-32 pb-24 md:pt-40 md:pb-32'}`}>
      <BlobBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badge && (
          <p className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
            {badge}
          </p>
        )}
        <h1 className="animate-fade-in-up-delay-1 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="animate-fade-in-up-delay-2 mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap gap-4">
            {primaryCta &&
              (primaryTo?.startsWith('tel:') || primaryTo?.startsWith('mailto:') ? (
                <ButtonPrimary href={primaryTo}>{primaryCta}</ButtonPrimary>
              ) : (
                <ButtonPrimary to={primaryTo || '/contacts'}>{primaryCta}</ButtonPrimary>
              ))}
            {secondaryCta && <ButtonGhost to={secondaryTo || '/about'}>{secondaryCta}</ButtonGhost>}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </section>
  )
}
