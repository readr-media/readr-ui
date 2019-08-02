import { storiesOf } from '@storybook/vue'
import AppHeader from './src/readr-ui-app-header.vue'
import axios from 'axios'

const mockLocationUrl = 'https://www.readr.tw/project/election-news'
const mockLocationUrlSlug = 'undefined'

const apiUrlCatalog = 'http://dev.readr.tw/api/public/posts'
const apiParamsCatalog = {
  max_result: 10,
  sort: 'post_order,-published_at'
}

const apiUrlDonate = 'http://dev.readr.tw/api/donate'
const apiParamsDonate = {
  object_type: 5
}

storiesOf('AppHeader', module).add('normal', () => ({
  components: { AppHeader },
  template: `
      <AppHeader
        style="
          position: fixed;
          top: 0;
          left: 0;
        "
        :url="mockLocationUrl"
        :catalog-list="catalogList"
        :donate-tappay-config="donateTappayConfig"
        :donate-user-profile="donateUserProfile"
        :donate-show-result="donateShowResult"
        :donate-is-result-success="donateIsResultSuccess"
        @clickReadrLogo="handleClickReadrLogo"
        @clickCatalogItem="handleClickCatalogItem"
        @loadmore="handleLoadmore"
        @submitDonate="handleSubmitDonate"
        @backToDonateForm="handleBackToDonateForm"
      />
    `,
  data() {
    return {
      mockLocationUrl,
      catalogList: [],
      catalogCurrentPage: 1,
      catalogShouldCompleteLoadmore: false,
      catalogLoadmoreLoaded: false,
      donateTappayConfig: {
        APP_ID: '',
        SECRET: '',
        ENV: 'sandbox'
      },
      donateUserProfile: {
        mail: 'readr@readr.tw',
        nickname: 'testNickname'
      },
      donateShowResult: false,
      donateIsResultSuccess: false
    }
  },
  methods: {
    handleClickReadrLogo() {
      window.open('https://www.readr.tw')
    },
    handleClickCatalogItem(payload) {
      window.open(payload.url)
    },
    async fetchCatalog(page = 1) {
      const params = {
        ...apiParamsCatalog,
        slug: mockLocationUrlSlug,
        page
      }
      const res = await axios.get(apiUrlCatalog, { params })
      return res.data['_items'] || []
    },
    async handleLoadmore($infiniteLoadingState) {
      try {
        const items = await this.fetchCatalog(this.catalogCurrentPage)

        if (items.length > 0) {
          this.catalogList.push(...items)
          this.catalogCurrentPage += 1
          $infiniteLoadingState.loaded()
        } else {
          $infiniteLoadingState.complete()
        }
      } catch {
        $infiniteLoadingState.complete()
      }
    },
    async requestDonate(donateData) {
      const {
        points,
        token,
        member_name,
        member_phone,
        member_mail,
        invoiceItem
      } = donateData

      const params = {
        ...apiParamsDonate,
        currency: points,
        token,
        member_name,
        member_phone,
        member_mail,
        invoiceItem
      }
      return await axios.post(apiUrlDonate, params)
    },
    async handleSubmitDonate({ donateData }) {
      try {
        await this.requestDonate(donateData)
        this.donateShowResult = true
        this.donateIsResultSuccess = true
      } catch {
        this.donateShowResult = true
        this.donateIsResultSuccess = false
      }
    },
    handleBackToDonateForm() {
      this.donateShowResult = false
      this.donateIsResultSuccess = false
    }
  }
}))
