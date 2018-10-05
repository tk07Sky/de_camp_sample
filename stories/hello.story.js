import { storiesOf } from '@storybook/vue'
import AppLogo from '~/components/AppLogo.vue'

storiesOf('Welcome', module)
  .add('to Nuxt', () => ({
    components: { AppLogo },
    render(h) {
      return <AppLogo />
    }
  }))
