import { useState } from 'react'
import { Award, Clock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTABanner from '../components/ui/CTABanner'
import { trainers, trainerCategories } from '../data/trainers'

export default function Trainers() {
  const [filter, setFilter] = useState('Все')
  const filtered = filter === 'Все' ? trainers : trainers.filter((t) => t.category === filter)

  return (
    <>
      <PageHero
        badge="Команда"
        title="Тренеры"
        highlight="чемпионов"
        subtitle="Мастера спорта, победители турниров и наставники, которые ведут вас от первого удара до золота на ринге."
        primaryCta="Записаться к тренеру"
        primaryTo="/contacts"
        secondaryCta="Расписание"
        secondaryTo="/schedule"
        compact
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {trainerCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition-all btn-hover ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white glow-accent'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:border-orange-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((trainer, i) => (
              <ScrollReveal key={trainer.id} delay={i * 80}>
                <article className="glass-card card-hover overflow-hidden rounded-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="has-autofill: w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">{trainer.role}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{trainer.name}</h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/50">
                      <Clock className="h-4 w-4 text-orange-400" />
                      Опыт: {trainer.experience}
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase text-white/40">Направления</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {trainer.directions.map((d) => (
                          <span key={d} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {trainer.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-white/60">
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner showEmail={false} />
    </>
  )
}
