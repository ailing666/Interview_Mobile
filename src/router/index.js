import Vue from 'vue'
import VueRouter from 'vue-router'
import Company from '@/views/company/Company.vue'
import Question from '@/views/question/Question.vue'
import Find from '@/views/find/Find.vue'
import My from '@/views/my/My.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/company',
      component: Company,
      mate: {
        title: '公司',
        icon: 'iconicon_footbar_gs_nor',
        isShowTabbar: true
      }
    },
    {
      path: '/question',
      component: Question,
      mate: {
        title: '刷题',
        icon: 'iconicon_footbar_st_nor',
        isShowTabbar: true
      }
    },
    {
      path: '/find',
      component: Find,
      mate: {
        title: '发现',
        icon: 'iconicon_footbar_fx_sel',
        isShowTabbar: true
      }
    },
    {
      path: '/my',
      component: My,
      mate: {
        title: '我的',
        icon: 'iconicon_footbar_wode_sel',
        isShowTabbar: true
      }
    }
  ]
})

export default router
