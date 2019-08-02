import { storiesOf } from '@storybook/vue'
import Icon from './src/readr-ui-icon.vue'

storiesOf('Icon', module)
  .addDecorator(() => ({
    template: `
      <div
        style="
          width: 100vw;
          height: 100vh;
          background-color: #444746;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <story/>
      </div>
    `
  }))
  .add('catalog', () => ({
    components: { Icon },
    template: `
      <Icon :icon-type="'catalog'" />
    `
  }))
  // .add('comment', () => ({
  //   components: { Icon },
  //   template: `
  //     <Icon :icon-type="'comment'" />
  //   `
  // }))
  .add('donate', () => ({
    components: { Icon },
    template: `
      <Icon :icon-type="'donate'" />
    `
  }))
  .add('follow', () => ({
    components: { Icon },
    template: `
      <Icon :icon-type="'follow'" />
    `
  }))
  .add('share', () => ({
    components: { Icon },
    template: `
      <Icon :icon-type="'share'" />
    `
  }))
