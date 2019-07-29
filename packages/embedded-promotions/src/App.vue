<template>
  <div class="embedded-promotions">
    <Header />
    <div class="embedded-promotions__list-wrapper list-wrapper">
      <List />
    </div>
  </div>
</template>

<script>
// import store from './store'
import Header from './components/Header.vue'
import List from './components/List.vue'

export default {
  name: 'EmbeddedPromotions',
  components: {
    Header,
    List
  }
  // store
}
</script>

<style lang="stylus" scoped>
.embedded-promotions
  & >>> *
    font-family -apple-system, Microsoft JhengHei, "Segoe UI", Roboto, Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif

.list-wrapper
  padding 31px 26px
  border 2px solid #dedede
  border-top none
</style>
