<template>
  <li class="list-item-wrapper" @click="handleClick">
    <SideBadge
      v-if="shouldShowSideBadge"
      class="list-item-wrapper__side-badge"
    />
    <div class="list-item">
      <div class="list-item__img-wrapper img-wrapper">
        <img :src="image" alt="" />
      </div>
      <div class="list-item__content-wrapper content-wrapper">
        <h1 v-text="title" />
        <p class="content-wrapper__date" v-text="dateFormatted" />
        <p class="content-wrapper__description" v-text="description" />
      </div>
    </div>
  </li>
</template>

<script>
import { getOgImageUrl, getPostType, getPostUrl } from '../util/post'
import dayjs from 'dayjs'

import SideBadge from '@readr-ui/side-badge/src/readr-ui-side-badge.vue'

export default {
  components: {
    SideBadge
  },
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {
    image() {
      return getOgImageUrl(this.item)
    },
    title() {
      return this.item.og_title || this.item.title
    },
    date() {
      return dayjs(this.item['published_at'] || '')
    },
    dateFormatted() {
      return this.date.format('YYYY/MM/DD')
    },
    description() {
      return this.item.og_description
    },
    shouldShowSideBadge() {
      if (this.date.isValid()) {
        const today = dayjs()
        const currentDate = this.date
        return today.diff(currentDate, 'day') <= 7
      }
      return false
    }
  },
  methods: {
    handleClick() {
      this.$emit('clickCatalogItem', {
        postType: getPostType(this.item),
        url: getPostUrl(this.item)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-item-wrapper
  position relative
  &__side-badge
    position absolute
    top 0
    left -15px

.list-item
  display flex

.img-wrapper
  img
    width 200px
    height 112px
    object-fit cover
    background-color black

.content-wrapper
  margin 0 0 0 20px
  h1
    margin 0
    font-size 24px
    font-weight 400
    line-height 1.3
    color black
  p
    margin 14px 0 0 0 !important
    font-size 16px
    line-height 1.3
    color black
  &__date
    display none
  &__description
    display block

@media (max-width 768px)
  .img-wrapper
    img
      width 150px
      height 84px

  .content-wrapper
    margin 0 0 0 14px
    h2
      word-wrap break-word
      word-break break-all
    p
      margin 10px 0 0 0
      font-size 12px
    &__date
      display block
      color #4a4a4a !important
    &__description
      display none
</style>
