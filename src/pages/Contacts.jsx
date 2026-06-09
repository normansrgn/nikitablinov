import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'
import { faqItems } from '../data/faq'
import { submitBookingForm, isContactFormConfigured } from '../services/contactForm'

const emptyForm = { name: '', phone: '', email: '', message: '' }

export default function Contacts() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await submitBookingForm(form)
      setStatus('success')
      setForm(emptyForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Ошибка отправки')
    }
  }

  const configured = isContactFormConfigured()

  return (
    <>
      <PageHero
        badge="Контакты"
        title="Свяжитесь"
        highlight="с нами"
        subtitle="Запишитесь на пробное занятие, задайте вопрос о турнирах или узнайте, какая секция подойдёт именно вам."
        primaryCta="Позвонить"
        primaryTo="tel:+78612345678"
        secondaryCta="Расписание"
        secondaryTo="/schedule"
        compact
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
                Информация
              </span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Как <span className="gradient-text">нас найти</span>
              </h2>
              <ul className="space-y-6">
                {[
                  { Icon: MapPin, title: 'Адрес', text: 'г. Краснодар, ул. Красная, 120. Главный зал федерации.' },
                  { Icon: Phone, title: 'Телефон', text: '+7 (861) 234-56-78' },
                  { Icon: Mail, title: 'Email', text: 'info@fkk-krasnodar.ru' },
                  { Icon: Clock, title: 'Режим работы', text: 'Пн–Сб: 9:00–21:00, Вс: 10:00–18:00' },
                ].map(({ Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="text-sm text-white/55">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <form id="form" onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white">Форма записи</h3>
                <p className="mt-1 text-sm text-white/50">Перезвоним в течение рабочего дня</p>

                {!configured && (
                  <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                    Администратору: укажите ключ Web3Forms в{' '}
                    <code className="text-orange-300">src/config/contact.js</code>
                  </p>
                )}

                {status === 'success' && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Заявка отправлена! Мы свяжемся с вами в ближайшее время.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  {[
                    { key: 'name', label: 'Имя', type: 'text', placeholder: 'Иван Иванов' },
                    { key: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (999) 000-00-00' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'email@example.com' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="mb-1.5 block text-sm font-medium text-white/80">{field.label}</label>
                      <input
                        required={field.key !== 'email'}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        disabled={status === 'loading'}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="min-h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange-500/50 focus:outline-none disabled:opacity-50"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Хочу записать ребёнка 8 лет на кикбоксинг..."
                      value={form.message}
                      disabled={status === 'loading'}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange-500/50 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading' || !configured}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff3b30] to-[#ff9500] px-6 py-3 font-semibold text-white btn-hover glow-accent disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Отправка…
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Отправлено
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="map" className="py-16 md:py-24 bg-[#101018]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative aspect-[21/9] min-h-[240px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-900/20 to-orange-900/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="h-12 w-12 text-orange-400" />
                <p className="mt-4 text-xl font-bold text-white">г. Краснодар, ул. Красная, 120</p>
                <p className="mt-2 text-white/50">Спорткомплекс «ФКК Арена» — 5 минут от центра</p>
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-semibold text-orange-400 hover:underline"
                >
                  Открыть в Яндекс.Картах →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Частые" highlight="вопросы" />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner showEmail />
    </>
  )
}
