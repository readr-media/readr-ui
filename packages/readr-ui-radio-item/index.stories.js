import { storiesOf } from '@storybook/vue'
import RadioItem from './src/readr-ui-radio-item.vue'

storiesOf('RadioItem', module).add('normal', () => ({
  components: { RadioItem },
  template: `
      <div>
        <RadioItem
          :value="'test1'"
          :value-selected="valueSelected"
          @change="handleChange"
        >
          Test Radio Item 1
        </RadioItem>
        <RadioItem
          :value="'test2'"
          :value-selected="valueSelected"
          @change="handleChange"
        >
          Test Radio Item 2
        </RadioItem>
      </div>
    `,
  data() {
    return {
      valueSelected: ''
    }
  },
  methods: {
    handleChange(value) {
      this.valueSelected = value
    }
  }
}))
