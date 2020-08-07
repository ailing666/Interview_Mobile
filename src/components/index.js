// 将所有的组件注册为全局组件
import AlNavBar from '@/components/AlNavBar.vue'
import AlCell from '@/components/AlCell.vue'
import AlItem from '@/components/AlItem.vue'

const myComponents = {
  install (Vue) {
    Vue.component(AlCell.name, AlCell)
    Vue.component(AlNavBar.name, AlNavBar)
    Vue.component(AlItem.name, AlItem)
  }
}
export default myComponents
