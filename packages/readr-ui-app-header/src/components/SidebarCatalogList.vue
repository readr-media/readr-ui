<template>
  <ol class="list">
    <ListItem
      v-for="(item, i) in items"
      :key="i"
      :item="item"
      class="list__list-item"
      @clickCatalogItem="v => $emit('clickCatalogItem', v)"
    />
  </ol>
</template>

<script>
import ListItem from './SidebarCatalogListItem.vue'

export default {
  components: {
    ListItem
  },
  props: {
    items: {
      type: Array,
      required: true
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
    cursor pointer
    & + &
      margin 30px 0 0 0
</style>
