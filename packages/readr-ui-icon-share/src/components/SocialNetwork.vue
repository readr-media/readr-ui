<template>
  <a
    class="wrapper"
    :style="{ backgroundColor: currentSocialNetwork.backgroundColor }"
    :href="currentSocialNetwork.getShareUrl(url)"
    target="_blank"
    rel="noopener"
  >
    <img
      :src="currentSocialNetwork.imagePath"
      :style="{ width: currentSocialNetwork.innerIconWidth }"
      alt=""
    />
  </a>
</template>

<script>
import { configSocialNetwork } from '../config'

export default {
  props: {
    socialType: {
      type: String,
      required: true,
      validator(value) {
        return ['fb', 'line'].includes(value)
      }
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      config: configSocialNetwork
    }
  },
  computed: {
    currentSocialNetwork() {
      return this.config[this.socialType]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin 0
  padding 0
  width 30px
  height 30px
  border-radius 30px
  border none
  display flex
  justify-content center
  align-items center
  cursor pointer
  img
    width 50%
  &:focus
    outline none
</style>
