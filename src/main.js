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
import AlNavBar from '@/components/AlNavBar.vue'
import AlCell from '@/components/AlCell.vue'
// 注册Vant
Vue.use(Vant)

Vue.config.productionTip = false
Vue.component(AlCell.name, AlCell)
Vue.component(AlNavBar.name, AlNavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
