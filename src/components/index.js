// 将所有的组件注册为全局组件
import AlNavBar from '@/components/AlNavBar.vue'
import AlCell from '@/components/AlCell.vue'
import AlTechniqueItem from '@/components/AlTechniqueItem.vue'

const myComponents = {
  install (Vue) {
    Vue.component(AlCell.name, AlCell)
    Vue.component(AlNavBar.name, AlNavBar)
    Vue.component(AlTechniqueItem.name, AlTechniqueItem)
  }
}
export default myComponents
