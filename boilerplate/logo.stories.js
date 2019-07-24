import { storiesOf } from '@storybook/vue'
import Boilerplate from './src/App.vue'

storiesOf('Boilerplate', module).add('normal', () => ({
  components: { Boilerplate },
  template: `
      <Boilerplate />
    `
}))
