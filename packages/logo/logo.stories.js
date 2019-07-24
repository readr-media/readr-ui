import { storiesOf } from '@storybook/vue'
import Logo from './src/App.vue'

storiesOf('Logo', module).add('normal', () => ({
  components: { Logo },
  template: `
      <Logo />
    `
}))
