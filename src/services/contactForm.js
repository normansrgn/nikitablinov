import { WEB3FORMS_ACCESS_KEY, SENDER_NAME } from '../config/contact'

const API_URL = 'https://api.web3forms.com/submit'

export function isContactFormConfigured() {
  return Boolean(WEB3FORMS_ACCESS_KEY?.length > 10)
}

async function sendToWeb3Forms(payload) {
  if (!isContactFormConfigured()) {
    throw new Error(
      'Форма не настроена. Укажите WEB3FORMS_ACCESS_KEY в src/config/contact.js',
    )
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Не удалось отправить. Попробуйте позже.')
  }

  return data
}

export async function submitBookingForm({ name, phone, email, message }) {
  return sendToWeb3Forms({
    subject: 'Заявка на запись — ФКК Краснодар',
    from_name: SENDER_NAME,
    name,
    phone,
    email: email || 'не указан',
    message: message || '—',
    botcheck: '',
  })
}

export async function subscribeEmail(email) {
  return sendToWeb3Forms({
    subject: 'Подписка на рассылку — ФКК Краснодар',
    from_name: SENDER_NAME,
    email,
    message: 'Новый подписчик с сайта',
    botcheck: '',
  })
}
