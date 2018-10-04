export const state = () => ({
  lang: 'en'
})

export const getters = {
  getStateLang (state) {
    return state.lang
  }
}

export const mutations = {
  setStateLang (state, lang) {
    state.lang = lang
  }
}

export const actions = {
  setLang ({commit}, lang) {
    commit('setStateLang', lang)
  }
}
