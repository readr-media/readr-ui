<template>
  <ol class="list">
    <ListItem
      v-for="item in list"
      :key="item.id"
      class="list__list-item"
      :link="`https://www.readr.tw/series/${item.slug}`"
      :img-url="item.hero_image || item.og_image || ''"
      :title="item.title"
    />
  </ol>
</template>

<script>
import ListItem from './ListItem.vue'

const debug = require('debug')('@readr-ui:embedded-promotions:List.vue')

export default {
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    list(newValue, oldValue) {
      debug('list mutation detected')
      debug('old value is: ', oldValue)
      debug('new value is: ', newValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  list-style none
  margin 0
  padding 0
  &__list-item
    & + &
      margin 20.8px 0 0 0
</style>
