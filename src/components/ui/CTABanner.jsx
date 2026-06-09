import { useState } from 'react'
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { ButtonPrimary } from './Button'
import { subscribeEmail, isContactFormConfigured } from '../../services/contactForm'

export default function CTABanner({
  title = 'Готовы выйти на ринг?',
  subtitle = 'Запишитесь на бесплатное пробное занятие. Первый шаг к чемпионству начинается сегодня.',
  showEmail = true,
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const configured = isContactFormConfigured()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    try {
      await subscribeEmail(email)
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Ошибка отправки')
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/30 via-[#101018] to-orange-600/20 p-8 md:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <h2 className="text-2xl font-extrabold text-white md:text-4xl">{title}</h2>
                <p className="mt-3 text-white/70 md:text-lg">{subtitle}</p>
              </div>

              {showEmail ? (
                <div className="mt-8 w-full max-w-md lg:mt-0">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      disabled={status === 'loading'}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="min-h-11 flex-1 rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm focus:border-orange-500/50 focus:outline-none disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading' || !configured}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#08080f] btn-hover disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Готово
                        </>
                      ) : (
                        <>
                          Подписаться
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                  {status === 'error' && (
                    <p className="mt-2 flex items-center justify-center gap-1 text-xs text-red-300 lg:justify-end">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errorMessage}
                    </p>
                  )}
                </div>
              ) : (
                <div className="mt-8 lg:mt-0">
                  <ButtonPrimary to="/contacts">Записаться сейчас</ButtonPrimary>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
