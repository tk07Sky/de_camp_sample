import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '~/utils/lang'

Vue.use(VueI18n)

export default ({ app, req, isClient }) => {
  // 標準はja
  let locale = 'ja';
  if (isClient) {
    locale = descriminationLang()
  } else if (req) {
    locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substr(0, 2)
  }
  app.i18n = new VueI18n({
    locale: locale || 'ja',
    fallbackLocale: 'ja'
  })
}

function descriminationLang () {
  const lang = getLanguage()
  if (lang === undefined) return 'ja'
  if (lang.match(/en/)) {
    return 'en'
  } else {
    return 'ja'
  }
}
