import { storiesOf } from '@storybook/vue'
import EmbeddedPromotions from './src/App.vue'

storiesOf('EmbeddedPromotions', module)
  .addDecorator(() => ({
    template: `
      <div style="width: 456px"><story/></div>
    `
  }))
  .add('normal', () => ({
    components: { EmbeddedPromotions },
    template: `
        <EmbeddedPromotions />
      `
  }))
