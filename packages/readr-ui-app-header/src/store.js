import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showSidebar: false,
    currentSidebarSlot: 'catalog'
  },
  mutations: {
    SET_SHOW_SIDEBAR(state, value) {
      state.showSidebar = value
    },
    SET_CURRENT_SIDEBAR_SLOT(state, value) {
      state.currentSidebarSlot = value
    }
  }
})

export default store
