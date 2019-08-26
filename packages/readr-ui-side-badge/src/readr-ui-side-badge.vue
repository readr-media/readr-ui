<template>
  <div class="side-badge-wrapper">
    <div class="side-badge-wrapper__decoration decoration" />
    <div class="side-badge-wrapper__main main">
      <p class="main__text" v-text="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '更新'
    }
  }
}
</script>

<style lang="stylus" scoped>
.side-badge-wrapper
  & >>> *
    font-family -apple-system, Microsoft JhengHei, "Segoe UI", Roboto, Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif
    box-sizing border-box

.decoration
  width 0
  height 0
  border-style solid
  border-width 0 0 7px 15px
  border-color transparent transparent #096b75 transparent

.main
  width 30px
  height 67px
  background-color #11b8c9
  clip-path polygon(0% 0%, 100% 0, 100% 100%, 50% 85%, 0% 100%)
  padding 6px 0
  &__text
    margin 0
    text-align center
    font-size 20px
    color white
    line-height 22px
</style>
