<template>
  <div
    :class="['sidebar-wrapper', { 'sidebar-wrapper--show': showSidebar }]"
    :style="{
      height: `${sidebarHeight}px`
    }"
  >
    <div
      :class="[
        'sidebar-wrapper__dimmed',
        { 'sidebar-wrapper__dimmed--show': showSidebar }
      ]"
      @click="SET_SHOW_SIDEBAR(false)"
    />
    <div
      :class="[
        'sidebar-wrapper__sidebar',
        { 'sidebar-wrapper__sidebar--show': showSidebar },
        'sidebar'
      ]"
    >
      <div class="sidebar__wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      sidebarHeight: 0
    }
  },
  computed: {
    ...mapState({
      showSidebar: state => state.showSidebar
    })
  },
  mounted() {
    this.getSidebarHeight()
    window.addEventListener('resize', this.getSidebarHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.getSidebarHeight)
  },
  methods: {
    ...mapMutations(['SET_SHOW_SIDEBAR']),
    getSidebarHeight() {
      this.sidebarHeight = window.innerHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar-wrapper
  position fixed
  bottom 0
  left 0
  width 100vw
  // height calc(100vh - 50px)
  opacity 0
  pointer-events none
  transition opacity 0s .25s
  &--show
    opacity 1
    pointer-events auto
    transition none
  &__dimmed
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background-color rgba(0, 0, 0, 0)
    transition background-color .25s ease-out
    &--show
      background-color rgba(0, 0, 0, 0.7)
  &__sidebar
    position absolute
    bottom 0
    left 0
    width 50vw
    height 100%
    background-color white
    transform translateX(-50vw)
    transition transform .25s ease-out
    &--show
      transform translateX(0px)

.sidebar
  padding 80px 0
  overflow-y scroll
  &__wrapper
    width 640px
    margin 0 auto

@media (max-width 1440px)
  .sidebar
    &__wrapper
      width 100%

@media (max-width 768px)
  .sidebar-wrapper
    height calc(100vh - 40px)
    &__sidebar
      width 90vw
      transform translateX(-90vw)
      &--show
        transform translateX(0px)

  .sidebar
    padding 14px 12px
    -webkit-overflow-scrolling touch
    &__wrapper
      width 100%
</style>
