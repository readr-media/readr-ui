import { storiesOf } from '@storybook/vue'
import IconShare from './src/readr-ui-icon-share.vue'

storiesOf('IconShare', module)
  .add('fb', () => ({
    components: { IconShare },
    template: `
      <IconShare
        :icon-type="'fb'"
      />
    `
  }))
  .add('line', () => ({
    components: { IconShare },
    template: `
      <IconShare
        :icon-type="'line'"
      />
    `
  }))
  .add('copy-link', () => ({
    components: { IconShare },
    template: `
      <IconShare
        style="margin-left: 100px"
        :icon-type="'copy-link'"
      />
    `
  }))
