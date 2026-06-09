import { Link } from 'react-router-dom'
import { Swords, Instagram, Send, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { footerNav } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101018]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3b30] to-[#ff9500]">
                <Swords className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">ФКК Краснодар</p>
                <p className="text-xs text-white/50">Федерация кикбоксинга</p>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Официальная федерация кикбоксинга г. Краснодар. Тренировки, турниры и путь к победам с 2013 года.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Send, href: 'https://t.me', label: 'Telegram' },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-orange-500/30 hover:text-orange-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerNav).map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/50 transition-colors hover:text-orange-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-orange-400" />
              ул. Красная, 120, Краснодар
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-orange-400" />
              +7 (861) 234-56-78
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-orange-400" />
              info@fkk-krasnodar.ru
            </span>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Федерация кикбоксинга г. Краснодар. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
