import { createI18n } from 'vue-i18n'
import EN from './en/index.json'
import KH from './kh/index.json'
import { HOME_EN, HOME_KH } from '@/modules/home/locales'

const i18n = createI18n({
  locale: 'kh',
  fallbackLocale: 'en',
  messages: {
    en: {
      ...EN,
      ...HOME_EN,
    },
    kh: {
      ...KH,
      ...HOME_KH,
    },
  },
})

export default i18n
