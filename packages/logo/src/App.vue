<template>
  <img
    :class="['logo', `logo--${theme}`]"
    :src="`https://www.readr.tw/public/2.0/logos/readr-logo-${theme}.svg`"
    alt="READr logo"
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: value => ['light', 'dark'].includes(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  &--light
    background linear-gradient(to bottom, #444746 70%, transparent 30%)
</style>
