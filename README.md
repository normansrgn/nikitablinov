# 🥊 Федерация кикбоксинга — г. Краснодар

<p align="center">
  <strong>Премиальный многостраничный сайт спортивной федерации</strong><br/>
  Тёмная тема · glassmorphism · градиенты · микроанимации · полная адаптивность
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Lucide-Icons-F56565?style=for-the-badge" alt="Lucide" />
</p>

---

## 📖 О проекте

Официальный веб-сайт **Федерации кикбоксинга г. Краснодар** — современная платформа для привлечения спортсменов, информирования о тренировках, турнирах и команде тренеров.

Сайт выполнен в агрессивно-спортивном стиле уровня **Dribbble / Awwwards**: тёмный фон, неоновые акценты, плавные анимации и единая дизайн-система на всех страницах.

> Контент полностью на русском языке, без lorem ipsum — реальные тексты про федерацию, секции, турниры и тренеров.

---

## ✨ Возможности

| Категория | Что реализовано |
|-----------|-----------------|
| **Навигация** | React Router DOM, 6 полноценных страниц, общий Navbar и Footer |
| **Анимации** | `fadeInUp`, scroll reveal (IntersectionObserver), счётчики, hover glow |
| **UI** | Glassmorphism-карточки, градиентные кнопки, blob-фон, fade-переход страниц |
| **Адаптив** | Mobile-first, burger-меню, таблица → карточки на мобильных |
| **Интерактив** | Фильтры тренеров, табы расписания, категории новостей, FAQ-аккордеон |
| **Формы** | Запись на занятие, подписка на рассылку (клиентская отправка) |

---

## 🗺 Страницы сайта

| Маршрут | Страница | Содержание |
|---------|----------|------------|
| `/` | **Главная** | Hero, преимущества, статистика, этапы тренировок, отзывы, CTA |
| `/about` | **О Федерации** | История, миссия, достижения, галерея, таймлайн, цифры |
| `/trainers` | **Тренеры** | Карточки с опытом и фильтр по направлениям |
| `/schedule` | **Расписание** | Секции, таблица занятий, возрастные группы |
| `/news` | **Новости / Турниры** | Featured-статья, календарь, карточки новостей |
| `/contacts` | **Контакты** | Форма, карта-заглушка, FAQ, контактная информация |

---

## 🎨 Дизайн-система

```css
--bg-primary:    #08080f   /* основной фон */
--bg-secondary:  #101018   /* секции, footer */
--accent-from:   #ff3b30   /* красный — начало градиента */
--accent-to:     #ff9500   /* оранжевый — конец градиента */
--card-bg:       rgba(255, 255, 255, 0.05)
--border:        rgba(255, 255, 255, 0.1)
```

**Типографика:** [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts)

**Стиль:** тёмный спортивный premium · красно-оранжевый градиент · glassmorphism · neon glow

---

## 🛠 Технологический стек

- **[React 19](https://react.dev/)** — UI с хуками
- **[React Router DOM 7](https://reactrouter.com/)** — клиентский роутинг
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first стили
- **[Vite 6](https://vite.dev/)** — сборка и dev-сервер
- **[Lucide React](https://lucide.dev/)** — иконки

> Внешние UI-библиотеки не используются — только перечисленные зависимости.

---

## 📁 Структура проекта

```
nikitaBlinov/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout
│   │   └── ui/              # Hero, кнопки, CTA, FAQ, анимации
│   ├── pages/               # 6 страниц приложения
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Trainers.jsx
│   │   ├── Schedule.jsx
│   │   ├── News.jsx
│   │   └── Contacts.jsx
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   ├── useAnimatedCounter.js
│   │   └── useNavbarScroll.js
│   ├── data/                # Контент (навигация, тренеры, расписание…)
│   ├── App.jsx              # Роуты + page transition
│   ├── main.jsx
│   └── index.css            # Tailwind + CSS-переменные
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Быстрый старт

### Требования

- **Node.js** 18+ (рекомендуется 20+)
- **npm** или **yarn**

### Почта для заявок с формы

1. Зарегистрируйтесь на [web3forms.com](https://web3forms.com) — укажите свою почту, скопируйте Access Key.
2. Вставьте ключ в `src/config/contact.js` → `WEB3FORMS_ACCESS_KEY`.

### Установка

```bash
cd nikitaBlinov
npm install
npm run dev
```

Откройте в браузере адрес из терминала (обычно `http://localhost:5173`).

### Сборка для продакшена

```bash
npm run build      # папка dist/
npm run preview    # локальный просмотр сборки
```

---

## 📜 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки с hot reload |
| `npm run build` | Production-сборка в `dist/` |
| `npm run preview` | Просмотр production-сборки локально |

---

## 🧩 Ключевые компоненты

| Компонент | Назначение |
|-----------|------------|
| `PageHero` | Уникальный Hero-блок на каждой странице |
| `ScrollReveal` | Появление секций при скролле |
| `AnimatedCounter` | Анимация цифр статистики |
| `BlobBackground` | Плавающие градиентные blobs + сетка |
| `CTABanner` | Градиентный призыв к действию |
| `FAQAccordion` | Аккордеон с плавным раскрытием |
| `Navbar` | Sticky-навигация + mobile drawer |

---

## ⚙️ Кастомизация контента

Весь текстовый контент вынесен в `src/data/`:

| Файл | Содержимое |
|------|------------|
| `navigation.js` | Ссылки меню и футера |
| `home.js` | Преимущества, шаги, отзывы |
| `stats.js` | Цифры федерации |
| `trainers.js` | Тренеры и категории фильтра |
| `schedule.js` | Расписание и секции |
| `news.js` | Новости и турниры |
| `about.js` | Таймлайн, достижения, галерея |
| `faq.js` | Вопросы и ответы |

Измените данные в этих файлах — сайт обновится без правки JSX-разметки.

---

## 📱 Адаптивность

| Breakpoint | Ширина | Поведение |
|------------|--------|-----------|
| Mobile | `< 768px` | Одна колонка, burger-меню, карточки вместо таблиц |
| Tablet | `768–1024px` | 2 колонки в grid |
| Desktop | `> 1024px` | Полная навигация, 3–4 колонки, горизонтальные layout |

---

## 🎬 Анимации

- **fadeInUp** — появление Hero при загрузке
- **IntersectionObserver** — reveal секций при скролле
- **Счётчики** — от 0 до значения за 2 секунды
- **Navbar** — `backdrop-blur` после 50px скролла
- **Страницы** — fade + `translateY` при смене маршрута
- **Карточки / кнопки** — `scale`, glow, подъём при hover

Все keyframes — в `GlobalStyles.jsx` и `index.css`.

---

## 📞 Контакты (демо-данные на сайте)

| | |
|---|---|
| 📍 Адрес | г. Краснодар, ул. Красная, 120 |
| 📞 Телефон | +7 (861) 234-56-78 |
| ✉️ Email | info@fkk-krasnodar.ru |
| 💬 Telegram | @fkk_krasnodar |

---

## 📄 Лицензия

Проект создан в учебных / демонстрационных целях.  
© Федерация кикбоксинга г. Краснодар

---

<p align="center">
  <sub>Сделано с 🔥 для сильных — от первого удара до чемпионства</sub>
</p>
