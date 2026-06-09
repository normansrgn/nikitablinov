import { useState } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import CTABanner from '../components/ui/CTABanner'
import { newsArticles, featuredArticle, newsCategories, tournaments } from '../data/news'

export default function News() {
  const [category, setCategory] = useState('Все')
  const filtered =
    category === 'Все' ? newsArticles : newsArticles.filter((a) => a.category === category)

  const statusColors = {
    'Регистрация': 'bg-green-500/20 text-green-400',
    'Скоро': 'bg-orange-500/20 text-orange-400',
    'Анонс': 'bg-blue-500/20 text-blue-400',
    'Завершён': 'bg-white/10 text-white/50',
  }

  return (
    <>
      <PageHero
        badge="Новости и турниры"
        title="События"
        highlight="сезона"
        subtitle="Турниры, сборы, результаты сборной и новости федерации — всё, что происходит в мире кикбоксинга Кубани."
        primaryCta="Календарь турниров"
        primaryTo="#calendar"
        secondaryCta="Записаться на турнир"
        secondaryTo="/contacts"
        compact
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-900/40 via-[#101018] to-orange-900/30 card-hover">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
              <div className="relative grid gap-6 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400">
                    Главное событие
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-white md:text-4xl">{featuredArticle.title}</h2>
                  <p className="mt-4 text-white/60">{featuredArticle.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-orange-400" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-orange-400" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:gap-3 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section id="calendar" className="py-16 md:py-24 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Календарь" title="Ближайшие" highlight="турниры" />
          <div className="grid gap-4 md:grid-cols-2">
            {tournaments.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div className="glass-card card-hover flex flex-col justify-between rounded-2xl p-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white">{t.name}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-orange-400">
                      <Calendar className="h-4 w-4" />
                      {t.date}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{t.location}</p>
                  </div>
                  <span
                    className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold sm:mt-0 ${statusColors[t.status] || ''}`}
                  >
                    {t.status}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Новости" title="Последние" highlight="публикации" />
          <div className="mb-8 flex flex-wrap gap-2">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  category === cat
                    ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white'
                    : 'border border-white/10 bg-white/5 text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 60}>
                <article className="glass-card card-hover group flex h-full flex-col rounded-2xl p-6">
                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-orange-400">
                    {article.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-white/55">{article.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Участвуйте в турнирах федерации"
        subtitle="Оставьте заявку — мы свяжемся и поможем с регистрацией и подготовкой."
        showEmail={false}
      />
    </>
  )
}
