import { storiesOf } from '@storybook/vue'
import Logo from './src/App.vue'

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
