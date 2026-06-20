import * as Icons from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import CTABanner from '../components/ui/CTABanner'
import { timeline, achievements, gallery } from '../data/about'
import { aboutStats } from '../data/stats'

function Icon({ name, className }) {
  const LucideIcon = Icons[name]
  return LucideIcon ? <LucideIcon className={className} /> : null
}

export default function About() {
  return (
    <>
      <PageHero
        badge="О Федерации"
        title="Сила Кубани"
        highlight="на ринге"
        subtitle="С 2013 года развиваем кикбоксинг в Краснодаре: от детских секций до сборной, которая побеждает на всероссийских турнирах."
        primaryCta="Присоединиться"
        primaryTo="/contacts"
        secondaryCta="Наши тренеры"
        secondaryTo="/trainers"
        compact
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
                История
              </span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Как всё <span className="gradient-text">начиналось</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Федерация кикбоксинга г. Краснодар была основана группой энтузастов-единоборцев, которые мечтали
                сделать кикбоксинг доступным для каждого жителя города. Первый зал на ул. Красной принял 40
                спортсменов — сегодня это более 850 атлетов в 28 клубах-партнёрах.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Мы — официальный член Федерации кикбоксинга России, работаем по стандартам WAKO и готовим чемпионов
                края, юга и страны.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-3xl p-8">
                <h3 id="mission" className="text-xl font-bold text-white">Наша миссия</h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Воспитывать сильных, дисциплинированных и честных спортсменов. Дать каждому ребёнку и взрослому
                  возможность раскрыть потенциал через единоборства — в безопасной, профессиональной и вдохновляющей
                  среде.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Честная игра и уважение к сопернику', 'Безопасность на каждой тренировке', 'Доступность спорта для всех'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Достижения" title="Наши" highlight="победы" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 80}>
                <div className="glass-card card-hover rounded-2xl p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20">
                    <Icon name={a.icon} className="h-7 w-7 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{a.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Галерея" title="Моменты" highlight="с ринга" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-900/30 to-orange-900/20 card-hover">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">{item.tag}</span>
                    <p className="mt-1 font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-16 md:py-24 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Хронология" title="Путь" highlight="федерации" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-orange-500 to-transparent md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 80}>
                <div className={`relative mb-10 flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right md:ml-auto'}`}>
                    <div className="glass-card rounded-2xl p-6 md:max-w-md md:ml-auto">
                      <span className="gradient-text text-2xl font-extrabold">{item.year}</span>
                      <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/55">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 md:left-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Статистика" title="Факты" highlight="о нас" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Станьте частью истории"
        subtitle="Запишитесь на пробное занятие и познакомьтесь с тренерами федерации."
        showEmail={false}
      />
    </>
  )
}
