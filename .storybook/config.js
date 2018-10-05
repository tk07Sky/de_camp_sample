import { configure, addDecorator } from '@storybook/vue'
import Decorator from './Decorator.vue'
import '@storybook/addon-console'
import { setConsoleOptions } from '@storybook/addon-console'

setConsoleOptions({
  panelExclude: []
})

addDecorator((story) => ({
  components: { Decorator },
  render (h) {
    return (
      <decorator>
        <story slot="story"></story>
      </decorator>
    )
  }
}))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
