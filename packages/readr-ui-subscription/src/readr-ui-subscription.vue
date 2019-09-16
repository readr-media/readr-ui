<template>
  <div class="subscription-wrapper">
    <form class="subscription" @submit.prevent="$emit('submit', email)">
      <input
        v-model="email"
        :placeholder="placeholder"
        class="subscription__input"
        type="email"
      />
      <button class="subscription__btn" type="submit" v-text="submitText" />
    </form>
    <p v-if="isSuccess" class="info success">
      謝謝你的訂閱，您已加入電子報名單。
    </p>
    <p v-if="isError" class="info error" v-text="errorMessage" />
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '我的 Email 信箱'
    },
    submitText: {
      type: String,
      default: '送出'
    }
  },
  data() {
    return {
      email: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.subscription-wrapper
  >>> *
    box-sizing border-box
    font-size 16px
    font-family -apple-system, Microsoft JhengHei, "Segoe UI", Roboto, Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif

.subscription
  display flex
  align-items center
  input::placeholder, input::-webkit-input-placeholder
    padding-top 2px
  &__input
    flex 1
    height 30px
    padding 0 10px
    line-height 1
    background-color #fff
    border 1px solid #000
    // border none
    border-radius 5px
  &__btn
    width 70px
    height 30px
    margin-left 10px
    color #fff
    border none
    border-radius 5px
    background-color #000
    cursor pointer

.info
  margin 5px 0 0
  padding 0 0 0 10px
  font-size 10px
  &.error
    color red

@media (min-width 768px)
  .subscription
    &__btn
      width 130px
</style>
