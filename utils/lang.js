export const getLanguage = () => {
  const lang = (window.navigator.languages && window.navigator.languages[0]) ||
              window.navigator.language ||
              window.navigator.userLanguage ||
              window.navigator.browserLanguage
  return lang
}
