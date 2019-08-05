<template>
  <IconPresentational
    :image-path="currentIcon.imagePath"
    :color="color"
    :default-width="currentIcon.defaultWidth"
    :width="width"
    :default-height="currentIcon.defaultHeight"
    :height="height"
  />
</template>

<script>
import IconPresentational from './components/Icon.vue'
import iconConfig from './config'

export default {
  name: 'Icon',
  components: {
    IconPresentational
  },
  props: {
    iconType: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(iconConfig).includes(value)
      }
    },
    color: {
      type: String,
      default: 'white'
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      currentIcon: {}
    }
  },
  beforeMount() {
    this.currentIcon = this.getCurrentIcon()
  },
  methods: {
    isLocalhost() {
      const local = /http:\/\/localhost:(\d*)/
      return local.test(location || '')
    },
    getCurrentIcon() {
      let config = Object.assign({}, iconConfig[this.iconType])
      if (this.isLocalhost()) {
        const readrUrl = 'https://www.readr.tw'
        config.imagePath = `${readrUrl}${config.imagePath}`
      }
      return config
    }
  }
}
</script>
