<template>
  <header class="header">
    <div class="header__wrapper">
      <Logo class="header__logo" @click.native="$emit('clickReadrLogo')" />
      <nav class="header__navs navs">
        <Icon
          class="navs__nav"
          :icon-type="'catalog'"
          :height="30"
          @click.native="toggleSidebar('catalog')"
        />
        <Icon
          class="navs__nav"
          :icon-type="'donate'"
          :height="30"
          @click.native="toggleSidebar('donate')"
        />
        <ShareDropdown class="navs__nav" :url="url" />
      </nav>
    </div>
    <Sidebar class="header__sidebar">
      <SidebarCatalog
        v-show="currentSidebarSlot === 'catalog'"
        :catalog-list="catalogList"
        @clickCatalogItem="v => $emit('clickCatalogItem', v)"
        @loadmore="$state => $emit('loadmore', $state)"
      />
      <SidebarDonate
        v-show="currentSidebarSlot === 'donate'"
        :tappay-config="donateTappayConfig"
        :user-profile="donateUserProfile"
        :show-result="donateShowResult"
        :is-result-success="donateIsResultSuccess"
        @submitForm="v => $emit('submitDonate', v)"
        @backToForm="$emit('backToDonateForm')"
      />
    </Sidebar>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import store from './store'
import Logo from '@readr-ui/logo/src/readr-ui-logo.vue'
import Icon from '@readr-ui/icon/src/readr-ui-icon.vue'
import ShareDropdown from './components/ShareDropdown.vue'
import Sidebar from './components/Sidebar.vue'
import SidebarCatalog from './components/SidebarCatalog.vue'
import SidebarDonate from './components/SidebarDonate.vue'

export default {
  store,
  components: {
    Logo,
    Icon,
    ShareDropdown,
    Sidebar,
    SidebarCatalog,
    SidebarDonate
  },
  props: {
    url: {
      type: String,
      default: 'https://www.readr.tw'
    },
    catalogList: {
      type: Array,
      default: () => []
    },
    donateTappayConfig: {
      type: Object,
      required: true,
      validator(config) {
        return 'APP_ID' in config && 'SECRET' in config && 'ENV' in config
      }
    },
    donateUserProfile: {
      type: Object,
      default: () => ({
        mail: '',
        nickname: ''
      }),
      validator(profile) {
        return 'mail' in profile && 'nickname' in profile
      }
    },
    donateShowResult: {
      type: Boolean,
      default: false
    },
    donateIsResultSuccess: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      showSidebar: state => state.showSidebar,
      currentSidebarSlot: state => state.currentSidebarSlot
    })
  },
  methods: {
    ...mapMutations({
      SET_SHOW_SIDEBAR: 'SET_SHOW_SIDEBAR',
      SET_CURRENT_SIDEBAR_SLOT: 'SET_CURRENT_SIDEBAR_SLOT'
    }),
    toggleSidebar(navClicked) {
      if (this.currentSidebarSlot === navClicked && this.showSidebar) {
        this.SET_SHOW_SIDEBAR(false)
        return
      }

      this.SET_CURRENT_SIDEBAR_SLOT(navClicked)
      if (!this.showSidebar) {
        this.SET_SHOW_SIDEBAR(true)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 50px
  background-color #444746
  z-index 1000
  & >>> *
    font-family -apple-system, Microsoft JhengHei, "Segoe UI", Roboto, Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif
    box-sizing border-box
  & >>> p
    margin 0
  & >>> h2
    margin 0
  & >>> button
    cursor pointer
    outline none
  &__wrapper
    max-width 1400px
    margin 0 auto
    display flex
    justify-content space-between
    align-items center
  &__logo
    display block
    width 60px
    position relative
    top 10px
    z-index 1000
    cursor pointer
  &__navs
    position relative
    top -3px
    margin 0 0 0 auto
  &__sidebar
    z-index 999

.navs
  display flex
  align-items center
  &__nav
    display flex
    height 30px
    align-items center
    cursor pointer
    & + &
      margin 0 0 0 40px
    img
      height 100%
    p
      font-size 16px
      margin 0
      color white
      user-select none
      transition color .25s ease-out
</style>
