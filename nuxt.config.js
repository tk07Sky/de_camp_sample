module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'de_camp_sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    '@/assets/scss/style.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config) {
      const vueLoader = config.module.rules.find((r) => {
        return r.loader === 'vue-loader'
      })
      vueLoader.options.preLoaders = vueLoader.options.preLoaders || {}
      vueLoader.options.preLoaders.i18n = 'yaml-loader'
      vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader'
    },

    vendor: ['vue-i18n']
  },

  plugins: ['~/plugins/i18n.js']
}

