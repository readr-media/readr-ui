<template>
  <li class="list-item-wrapper" @click="handleClick">
    <div class="list-item">
      <div class="list-item__img-wrapper img-wrapper">
        <img :src="image" alt="" />
      </div>
      <div class="list-item__content-wrapper content-wrapper">
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import { getOgImageUrl, getPostType, getPostUrl } from '../util/post'

export default {
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
    description() {
      return this.item.og_description
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
</style>
