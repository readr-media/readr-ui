<template>
  <div class="series">
    <h1>目錄</h1>
    <SidebarCatalogList
      :items="catalogList"
      @clickCatalogItem="v => $emit('clickCatalogItem', v)"
    />
    <NoSSR v-if="showSidebar && currentSidebarSlot === 'catalog'">
      <InfiniteLoading
        ref="InfiniteLoading"
        :spinner="'spiral'"
        @infinite="infiniteHandler"
      >
        <!-- Empty strings-->
        <!-- https://peachscript.github.io/vue-infinite-loading/guide/configure-load-msg.html#via-slot-sepcial-attribute -->
        <div slot="no-more" />
        <div slot="no-results" />
      </InfiniteLoading>
    </NoSSR>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SidebarCatalogList from './SidebarCatalogList.vue'
import NoSSR from 'vue-no-ssr'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    SidebarCatalogList,
    NoSSR,
    InfiniteLoading
  },
  props: {
    catalogList: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState({
      showSidebar: state => state.showSidebar,
      currentSidebarSlot: state => state.currentSidebarSlot
    })
  },
  methods: {
    infiniteHandler($state) {
      this.$emit('loadmore', $state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.series
  h1
    font-size 30px
    font-weight 600
    margin 0 0 20px 0

@media (max-width 1400px)
  .series
    width 90%
    margin 0 auto

@media (max-width 768px)
  .series
    h1
      font-size 24px
      margin 0 0 10px 0
</style>
