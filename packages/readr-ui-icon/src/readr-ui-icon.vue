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
import config from './config'

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
        return Object.keys(config).includes(value)
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
      config
    }
  },
  computed: {
    currentIcon() {
      let config = this.config[this.iconType]
      if (this.isLocalhost()) {
        const readrIconBaseUrl = 'https://www.readr.tw/public/2.0/icons'
        config.imagePath = `${readrIconBaseUrl}/${config.imagePath}`
      }
      return config
    }
  },
  methods: {
    isLocalhost() {
      const local = /http:\/\/localhost:(\d*)/
      return local.test(location || '')
    }
  }
}
</script>
