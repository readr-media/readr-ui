import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const debug = require('debug')('@readr-ui:embedded-promotions:store')

export default new Vuex.Store({
  state: {
    headerReadrUrl: 'https://www.readr.tw',
    headerTtle: '最新專題',
    list: []
  },
  mutations: {
    SET_LIST(state, list) {
      debug('SET_LIST: ', list)
      state.list = list
    }
  },
  actions: {
    FETCH_SERIES({ commit }) {
      const url = 'https://www.readr.tw/api/public/projects'
      const params = {
        max_result: 2,
        page: 1,
        sort: 'project_order,-published_at',
        status: '{"$in":[2,1]}', // done, wip
        publish_status: '{"$in":[2]}' // published
      }

      return axios
        .get(url, { params })
        .then(res => {
          debug(`fetch ${url} successful`)
          '_items' in res.data && commit('SET_LIST', res.data['_items'])
          return res
        })
        .catch(err => {
          debug(`fetch ${url} fail`)
          throw err
        })
    }
  }
})
