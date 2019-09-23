<template>
  <div class="subscription-wrapper">
    <form class="subscription" @submit.prevent="$emit('submit', email)">
      <input
        v-model="email"
        :placeholder="placeholder"
        class="subscription__input"
        type="email"
        required
      />
      <button :disabled="isLoading" class="subscription__btn" type="submit">
        {{ isLoading ? '' : submitText }}
        <!-- Loading Effect https://codepen.io/andreasstorm/pen/QZEKWr -->
        <template v-if="isLoading">
          <div class="loading">
            <span class="loading__dot" />
            <div class="loading__dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </template>
        <!-- Loading Efect End -->
      </button>
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
    isLoading: {
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
    border none
    border-radius 5px
  &__btn
    position relative
    width 70px
    height 30px
    padding 0
    margin-left 10px
    color #fff
    text-align center
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

.loading
  position absolute
  top 50%
  left 50%
  width 70px
  height 40px
  margin -20px 0 0 -35px
  filter contrast(20)
  &__dot
    position absolute
    width 5px
    height 5px
    top 17px
    left 17.5px
    filter blur(.5px)
    background-color #fff
    border-radius 50%
    transform translateX(0)
    animation dot 2.8s infinite
  &__dots
    transform translateX(0)
    margin-top 17px
    margin-left 22.5px
    animation dots 2.8s infinite
    span
      display block
      float left
      width 5px
      height 5px
      margin-left 5px
      filter blur(.5px)
      background-color #fff
      border-radius 50%

@keyframes dot
  50%
    transform translateX(30px)
@keyframes dots
  50%
    transform translateX(-11px)

@media (min-width 768px)
  .subscription
    &__btn
      width 130px
</style>
