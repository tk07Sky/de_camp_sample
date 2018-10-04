import { storiesOf } from '@storybook/vue'
import RedButton from '~/components/atom/buttons/RedButton.vue'

storiesOf('Buttons', module)
  .add('Red Button', () => ({
    components: { RedButton },
    render(h) {
      return <RedButton label="ボタン"/>
    }
  }))
