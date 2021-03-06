import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入Vant
import Vant from 'vant'
// 引入样式
import 'vant/lib/index.css'
// 导入flexbile
import 'amfe-flexible'
// 导入字体图标
import './styles/iconfont.css'
// 引入全局less
import './styles/var.less'
// 导图自己的全局组件
import myComponents from '@/components/index'
import moment from 'moment'
// 导入自己的全局工具
import Alavatar from '@/plugins/avatar.js'
Vue.filter('formatTime', value => {
  moment.locale('zh-cn')
  // 删除z,改为中国时区
  value = value.slice(0, value.length - 2)
  //  计算时间差
  const delayTime = moment().diff(moment(value), 'days')
  // 判断是否超过一天
  if (delayTime > 1) {
    return moment(value).format('YYYY年MM月DD日')
  } else {
    return moment(value).fromNow()
  }
})
// 注册Vant
Vue.use(Vant)
Vue.use(Alavatar)
Vue.use(myComponents)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
