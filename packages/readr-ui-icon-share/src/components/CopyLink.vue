<template>
  <div class="tooltip-wrapper">
    <img
      class="tooltip-wrapper__icon"
      :src="`${READR_ICON_BASE_URL}/copylink.png`"
      alt=""
      @click="toggleFollowTooltip"
    />
    <span
      :class="[
        'tooltip-wrapper__tooltip',
        { 'tooltip-wrapper__tooltip--toggled': showActionTooltip }
      ]"
      v-text="tooltipText"
    />
  </div>
</template>

<script>
import { READR_ICON_BASE_URL } from '../config'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      READR_ICON_BASE_URL,
      showActionTooltip: false,
      tooltipText: '複製連結成功'
    }
  },
  methods: {
    copyToClipboard(str) {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
    },
    setTooltipTimer() {
      this.showActionTooltip = true
      if (this._timer) {
        clearTimeout(this._timer)
      }
      this._timer = setTimeout(() => {
        this.showActionTooltip = false
      }, 1000)
    },
    toggleFollowTooltip() {
      this.setTooltipTimer()
      this.copyToClipboard(this.url)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tooltip-wrapper
  position relative
  height 30px
  &__icon
    cursor pointer
    width 30px
    height 30px
  &__tooltip
    font-family -apple-system, Microsoft JhengHei, "Segoe UI", Roboto, Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif
    pointer-events none
    padding 1px 2px
    position absolute
    top calc((100% / 2) - (26px / 2))
    right calc(100% + 15px)
    width max-content
    height 26px
    font-size 10px
    color #444746
    background-color white
    border 1px solid #d3d3d3
    z-index 100
    display flex
    align-items center
    opacity 0
    transition opacity .25s
    &:before
      position absolute
      top 2.5px
      right -10px
      content ''
      width 0
      height 0
      border-style solid
      border-width 7px 0 7px 10px
      border-color transparent transparent transparent #d3d3d3
    &:after
      position absolute
      top 3.5px
      right -9px
      content ''
      width 0
      height 0
      border-style solid
      border-width 6px 0 6px 9px
      border-color transparent transparent transparent white
    &--toggled
      opacity 1
</style>
