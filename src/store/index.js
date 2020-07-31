import Vue from 'vue'
import Vuex from 'vuex'
import areaData from '@/utils/area.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutations: {
    SAVEUSERINFO (state, newUserInfo) {
      state.userInfo = newUserInfo
    },
    SETISLOGIN (state, newIsLogin) {
      state.isLogin = newIsLogin
    },
    EDITUSSERINFO (state, { propName, propValue }) {
      state.userInfo[propName] = propValue
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
    },
    SETGENDER (state) {
      const genderArr = ['未知', '男', '女']
      return genderArr[state.userInfo.gender]
    },
    SETAREA (state) {
      return areaData.city_list[state.userInfo.area]
    }
  },
  actions: {},
  modules: {}
})
