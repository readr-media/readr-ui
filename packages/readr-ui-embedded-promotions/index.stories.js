import { storiesOf } from '@storybook/vue'
import EmbeddedPromotions from './src/readr-ui-embedded-promotions.vue'
import axios from 'axios'

storiesOf('EmbeddedPromotions', module)
  .addDecorator(() => ({
    template: `
      <div style="width: 456px"><story/></div>
    `
  }))
  .add('normal', () => ({
    components: { EmbeddedPromotions },
    template: `
      <EmbeddedPromotions :promotions="promotions" />
    `,
    data() {
      return {
        promotions: []
      }
    },
    async beforeMount() {
      const url = 'https://www.readr.tw/api/public/projects'
      const params = {
        max_result: 2,
        page: 1,
        sort: 'project_order,-published_at',
        status: '{"$in":[2,1]}', // done, wip
        publish_status: '{"$in":[2]}' // published
      }

      const res = await axios.get(url, { params })
      this.promotions = '_items' in res.data && res.data['_items']
    }
  }))
