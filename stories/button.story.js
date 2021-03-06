import { storiesOf } from '@storybook/vue'
import RedButton from '~/components/atoms/buttons/RedButton.vue'

storiesOf('Buttons', module)
  .add('Red Button', () => ({
    components: { RedButton },
    render(h) {
      return <RedButton>ボタン</RedButton>
    }
  }))
