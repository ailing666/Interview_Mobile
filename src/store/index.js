import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    SAVEUSERINFO (state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },
  getters: {
    USERAVATAR (state) {
      return process.env.VUE_APP_URL + state.userInfo.avatar
    },
    CORRECTRATE (state) {
      const totalNum = state.userInfo.submitNum
      const errNum = state.userInfo.errorNum
      return (((totalNum - errNum) / totalNum) * 100).toFixed()
    }
  },
  actions: {},
  modules: {}
})
