export const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О Федерации' },
  { to: '/trainers', label: 'Тренеры' },
  { to: '/schedule', label: 'Расписание' },
  { to: '/news', label: 'Новости' },
  { to: '/contacts', label: 'Контакты' },
]

export const footerNav = {
  federation: {
    title: 'Федерация',
    links: [
      { to: '/about', label: 'О нас' },
      { to: '/about#mission', label: 'Миссия' },
      { to: '/about#timeline', label: 'История' },
      { to: '/news', label: 'Достижения' },
    ],
  },
  training: {
    title: 'Тренировки',
    links: [
      { to: '/schedule', label: 'Расписание' },
      { to: '/trainers', label: 'Тренеры' },
      { to: '/schedule#sections', label: 'Секции' },
      { to: '/contacts', label: 'Записаться' },
    ],
  },
  events: {
    title: 'Соревнования',
    links: [
      { to: '/news', label: 'Турниры' },
      { to: '/news#calendar', label: 'Календарь' },
      { to: '/news', label: 'Новости' },
      { to: '/contacts', label: 'Регистрация' },
    ],
  },
  contacts: {
    title: 'Контакты',
    links: [
      { to: '/contacts', label: 'Связаться' },
      { to: '/contacts#faq', label: 'FAQ' },
      { to: '/contacts#map', label: 'Как добраться' },
      { to: '/contacts#form', label: 'Форма' },
    ],
  },
}

export const socialLinks = [
  { href: 'https://vk.com', label: 'VK', icon: 'Instagram' },
  { href: 'https://t.me', label: 'Telegram', icon: 'Send' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'Youtube' },
]
