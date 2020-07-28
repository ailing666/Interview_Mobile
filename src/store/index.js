import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    SAVEUSERINFO (state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },
  actions: {},
  modules: {}
})
