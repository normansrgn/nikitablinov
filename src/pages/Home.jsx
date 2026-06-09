import * as Icons from 'lucide-react'
import { Star } from 'lucide-react'
import BlobBackground from '../components/ui/BlobBackground'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import CTABanner from '../components/ui/CTABanner'
import { ButtonPrimary, ButtonGhost } from '../components/ui/Button'
import { features, trainingSteps, testimonials } from '../data/home'
import { federationStats } from '../data/stats'

function Icon({ name, className }) {
  const LucideIcon = Icons[name]
  return LucideIcon ? <LucideIcon className={className} /> : null
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40">
        <BlobBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            Официальная федерация · Краснодар · с 2013
          </p>
          <h1 className="animate-fade-in-up-delay-1 max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Сила. Честь.{' '}
            <span className="gradient-text">Победа на ринге.</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Федерация кикбоксинга г. Краснодар — тренировки для детей и взрослых, сборная Кубани и путь от первого
            занятия до чемпионства России.
          </p>
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap gap-4">
            <ButtonPrimary to="/contacts">Записаться на пробное</ButtonPrimary>
            <ButtonGhost to="/schedule">Смотреть расписание</ButtonGhost>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Преимущества"
            title="Почему выбирают"
            highlight="нас"
            subtitle="Мы объединяем спорт высокого уровня, безопасную среду и настоящую семью единоборств в Краснодаре."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="glass-card card-hover h-full rounded-2xl p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20">
                    <Icon name={f.icon} className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="В цифрах" title="Федерация" highlight="сегодня" align="center" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {federationStats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* How training works */}
      <section className="py-20 md:py-28 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Тренировки"
            title="Как проходят"
            highlight="занятия"
            subtitle="Три понятных шага от первого визита в зал до выхода на турнирный ринг."
          />
          <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="absolute top-16 left-[16%] right-[16%] hidden h-0.5 bg-gradient-to-r from-red-500/50 via-orange-500/50 to-amber-500/50 md:block" />
            {trainingSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120}>
                <div className="relative glass-card card-hover rounded-2xl p-6 text-center md:p-8">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff9500] text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon name={step.icon} className="h-7 w-7 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Отзывы" title="Голоса" highlight="нашей команды" />
          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100} className="min-w-[280px] shrink-0 md:min-w-0">
                <div className="glass-card card-hover h-full rounded-2xl p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
