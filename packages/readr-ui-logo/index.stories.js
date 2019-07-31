import { storiesOf } from '@storybook/vue'
import Logo from './src/readr-ui-logo.vue'

storiesOf('Logo', module)
  .addDecorator(() => ({
    template: `
      <div style="width: 100px"><story/></div>
    `
  }))
  .add('light', () => ({
    components: { Logo },
    template: `
      <Logo />
    `
  }))
  .add('dark', () => ({
    components: { Logo },
    template: `
      <Logo :theme="'dark'"/>
    `
  }))
