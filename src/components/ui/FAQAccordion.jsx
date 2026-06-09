import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function FAQAccordion({ items, id }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div id={id} className="grid gap-4 md:grid-cols-2 md:gap-6">
      {items.map((item, index) => (
        <ScrollReveal key={item.question} delay={index * 80}>
          <div className="glass-card overflow-hidden rounded-2xl card-hover">
            <button
              type="button"
              className="flex w-full min-h-11 items-center justify-between gap-4 p-5 text-left"
              aria-expanded={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-white">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-orange-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
              <div className="accordion-inner">
                <p className="px-5 pb-5 text-sm leading-relaxed text-white/60">{item.answer}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
