<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import { getLanguage } from '~/utils/lang'
import { mapActions } from 'vuex'

export default {
  mounted () {
    let lang = this.getLanguage()
    console.log(lang)
    this.setLang(lang)
  },
  methods: {
    ...mapActions('app', ['setLang']),
    getLanguage () {
      const browserLang = getLanguage()
      if (browserLang === undefined) return 'ja'
      if (browserLang.match(/en/)) {
        return 'en'
      } else {
        return 'ja'
      }
    }
  }
}
</script>


