<template>
  <div>
    <IconSocialNetwork
      v-if="iconType !== 'copy-link'"
      :social-type="iconType"
      :url="url"
    />
    <CopyLink v-else :url="url" />
  </div>
</template>

<script>
import IconSocialNetwork from './components/SocialNetwork.vue'
import CopyLink from './components/CopyLink.vue'
import { URL_READR } from './config'

export default {
  components: {
    IconSocialNetwork,
    CopyLink
  },
  props: {
    iconType: {
      type: String,
      required: true,
      validator(value) {
        return ['fb', 'line', 'copy-link'].includes(value)
      }
    },
    url: {
      type: String,
      default: URL_READR
    }
  }
}
</script>
