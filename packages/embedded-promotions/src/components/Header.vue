<template>
  <header class="header">
    <a class="header__logo logo" :href="headerReadrUrl" target="_blank">
      <Logo class="logo__img" :theme="'light'" />
    </a>
    <h1 class="header__title title" v-text="headerTitle" />
  </header>
</template>

<script>
import Logo from '../../../logo/src/App.vue'
// import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      headerReadrUrl: 'https://www.readr.tw',
      headerTitle: '最新專題'
    }
  }
  // computed: {
  //   ...mapState(['headerReadrUrl', 'headerTtle'])
  // }
}
</script>

<style lang="stylus" scoped>
.header
  height 40px
  background-color #444746
  display flex
  align-items center
  padding 0 26px
  &__logo
    position relative
    top 12px
  &__title
    margin 0 0 0 38px
    position relative
    top 2px

.logo
  display inline-block
  height 41px
  &__img
    height 100%

.title
  display inline
  font-size 20px
  font-weight 400
  letter-spacing 10px
  color #ddd020
</style>
