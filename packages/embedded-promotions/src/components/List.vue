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
// import { mapState, mapActions } from 'vuex'
import axios from 'axios'

const debug = require('debug')('@readr-ui:embedded-promotions:List.vue')

export default {
  components: {
    ListItem
  },
  // computed: {
  //   ...mapState(['list'])
  // },
  data() {
    return {
      list: []
    }
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
    // ...mapActions(['FETCH_SERIES'])
    SET_LIST(list) {
      debug('SET_LIST: ', list)
      this.$set(this, 'list', list)
    },
    FETCH_SERIES() {
      const url = 'https://www.readr.tw/api/public/projects'
      const params = {
        max_result: 2,
        page: 1,
        sort: 'project_order,-published_at',
        status: '{"$in":[2,1]}', // done, wip
        publish_status: '{"$in":[2]}' // published
      }

      return axios
        .get(url, { params })
        .then(res => {
          debug(`fetch ${url} successful`)
          '_items' in res.data && this.SET_LIST(res.data['_items'])
          return res
        })
        .catch(err => {
          debug(`fetch ${url} fail`)
          throw err
        })
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
