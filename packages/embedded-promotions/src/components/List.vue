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
import { mapState, mapActions } from 'vuex'

const debug = require('debug')('@readr-ui:embedded-promotions:List.vue')

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapState(['list'])
  },
  watch: {
    list(newValue, oldValue) {
      debug('list mutation detected')
      debug('old value is: ', oldValue)
      debug('new value is: ', newValue)
    }
  },
  beforeMount() {
    this.FETCH_SERIES()
  },
  methods: {
    ...mapActions(['FETCH_SERIES'])
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
      margin 31px 0 0 0
</style>
