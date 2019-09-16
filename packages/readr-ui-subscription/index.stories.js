import { storiesOf } from '@storybook/vue'
import Subscription from './src/readr-ui-subscription.vue'

storiesOf('Subscription', module)
  .addDecorator(() => ({
    template: `
      <div style="width: 320px"><story/></div>
    `
  }))
  .add('normal', () => ({
    components: { Subscription },
    template: `
      <Subscription />
    `
  }))
  .add('success', () => ({
    components: { Subscription },
    template: `
      <Subscription :isSuccess="isSuccess" />
    `,
    data() {
      return {
        isSuccess: true
      }
    }
  }))
  .add('error', () => ({
    components: { Subscription },
    template: `
      <Subscription :isError="isError" :errorMessage="errorMessage" />
    `,
    data() {
      return {
        isError: true,
        errorMessage: '錯誤資訊'
      }
    }
  }))
