<template>
  <div v-click-outside="hideNavs" class="wrapper">
    <div class="wrapper__share" @click="toggleNavs">
      <Icon :icon-type="'share'" :height="iconHeight" />
    </div>
    <nav
      :class="[
        'wrapper__share-navs',
        { 'wrapper__share-navs--show': showNavs },
        'share-navs'
      ]"
    >
      <IconShare class="share-navs__nav" :icon-type="'fb'" :url="url" />
      <IconShare class="share-navs__nav" :icon-type="'line'" :url="url" />
      <IconShare class="share-navs__nav" :icon-type="'copy-link'" :url="url" />
    </nav>
  </div>
</template>

<script>
import Icon from '@readr-ui/icon/src/readr-ui-icon.vue'
import IconShare from '@readr-ui/icon-share/src/readr-ui-icon-share.vue'
import iconHeightMixin from '../mixins/iconHeight'

export default {
  directives: {
    'click-outside': {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // here I check that click was outside the el and his childrens
          if (!(el === event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  components: {
    Icon,
    IconShare
  },
  mixins: [iconHeightMixin],
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showNavs: false
    }
  },
  methods: {
    toggleNavs() {
      this.showNavs = !this.showNavs
    },
    hideNavs() {
      this.showNavs = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 30px
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  z-index 1000
  &__share-navs
    position absolute
    top 30px
    opacity 0
    user-select none
    transition opacity .15s ease-out
    pointer-events none
    &--show
      opacity 1
      user-select initial
      pointer-events auto

.share-navs
  margin 10px 0 0 0
  &__nav
    & + &
      margin 10px 0 0 0
</style>
