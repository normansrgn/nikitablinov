import { useState } from 'react'
import * as Icons from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTABanner from '../components/ui/CTABanner'
import { ButtonPrimary } from '../components/ui/Button'
import { scheduleData, scheduleTabs, sections } from '../data/schedule'

function Icon({ name, className }) {
  const LucideIcon = Icons[name]
  return LucideIcon ? <LucideIcon className={className} /> : null
}

export default function Schedule() {
  const [tab, setTab] = useState('Все')
  const filtered =
    tab === 'Все' ? scheduleData : scheduleData.filter((row) => row.category === tab)

  return (
    <>
      <PageHero
        badge="Расписание"
        title="Тренировки"
        highlight="каждый день"
        subtitle="6 залов в Краснодаре, группы для детей, юниоров и взрослых. Выберите секцию и запишитесь на пробное занятие."
        primaryCta="Записаться"
        primaryTo="/contacts"
        secondaryCta="Наши тренеры"
        secondaryTo="/trainers"
        compact
      />

      <section id="sections" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Секции" title="Выберите" highlight="направление" />
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((sec, i) => (
              <ScrollReveal key={sec.title} delay={i * 80}>
                <div className="glass-card card-hover rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20">
                      <Icon name={sec.icon} className="h-7 w-7 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{sec.title}</h3>
                      <p className="text-sm text-orange-400">{sec.ages}</p>
                      <p className="mt-2 text-sm text-white/55">{sec.description}</p>
                      <ul className="mt-4 space-y-1">
                        {sec.features.map((f) => (
                          <li key={f} className="text-sm text-white/60">• {f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Расписание" title="Таблица" highlight="занятий" />
          <div className="mb-8 flex flex-wrap gap-2">
            {scheduleTabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  tab === t
                    ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white'
                    : 'border border-white/10 bg-white/5 text-white/60'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-2xl border border-white/10 md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  {['День', 'Время', 'Группа', 'Секция', 'Тренер', 'Зал'].map((h) => (
                    <th key={h} className="px-4 py-4 font-semibold text-white/80">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={`${row.day}-${row.time}`} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3 text-white">{row.day}</td>
                    <td className="px-4 py-3 text-orange-400">{row.time}</td>
                    <td className="px-4 py-3 text-white/80">{row.group}</td>
                    <td className="px-4 py-3 text-white/60">{row.section}</td>
                    <td className="px-4 py-3 text-white/60">{row.coach}</td>
                    <td className="px-4 py-3 text-white/50">{row.hall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 md:hidden">
            {filtered.map((row) => (
              <ScrollReveal key={`${row.day}-${row.time}-m`}>
                <div className="glass-card rounded-2xl p-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">{row.day}</span>
                    <span className="text-orange-400">{row.time}</span>
                  </div>
                  <p className="mt-2 font-medium text-white/90">{row.group}</p>
                  <p className="text-sm text-white/50">{row.section} · {row.coach}</p>
                  <p className="text-xs text-white/40">{row.hall}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ButtonPrimary to="/contacts">Записаться на занятие</ButtonPrimary>
          </div>
        </div>
      </section>

      <CTABanner showEmail={false} />
    </>
  )
}
