<template>
  <div class="donate-wrapper">
    <SidebarDonateForm
      v-if="!showResult"
      :tappay-config="tappayConfig"
      :user-profile="userProfile"
      @submitForm="onFormSubmit"
    />
    <SidebarDonateResult
      v-else
      :is-result-success="isResultSuccess"
      :form-data="formData"
      @backToForm="$emit('backToForm')"
    />
  </div>
</template>

<script>
import SidebarDonateForm from './SidebarDonateForm.vue'
import SidebarDonateResult from './SidebarDonateResult.vue'

export default {
  components: {
    SidebarDonateForm,
    SidebarDonateResult
  },
  props: {
    tappayConfig: {
      type: Object,
      required: true
    },
    userProfile: {
      type: Object,
      required: true
    },
    showResult: {
      type: Boolean,
      required: true
    },
    isResultSuccess: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      formData: {
        donateAmount: 0,
        carrierTypeSelected: '',
        carrierInputs: '',
        date: ''
      }
    }
  },
  methods: {
    onFormSubmit(payload) {
      this.$set(this, 'formData', payload.formData)
      this.$emit('submitForm', payload)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
