import { storiesOf } from '@storybook/vue'
import SideBadge from './src/readr-ui-side-badge.vue'

storiesOf('SideBadge', module).add('normal', () => ({
  components: { SideBadge },
  template: `
      <SideBadge />
    `
}))
