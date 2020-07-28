import Vue from 'vue'
import VueRouter from 'vue-router'

import Company from '@/views/company/Company.vue'
import Question from '@/views/question/Question.vue'
import Find from '@/views/find/Find.vue'
import My from '@/views/my/My.vue'
import Login from '@/views/login/Login.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/my'
    },
    {
      path: '/company',
      component: Company,
      meta: {
        title: '公司',
        icon: 'iconicon_footbar_gs_sel',
        showTabBar: true
      }
    },
    {
      path: '/question',
      component: Question,
      meta: {
        title: '刷题',
        icon: 'iconicon_footbar_st_sel',
        showTabBar: true
      }
    },
    {
      path: '/find',
      component: Find,
      meta: {
        title: '发现',
        icon: 'iconicon_footbar_fx_nor',
        showTabBar: true
      }
    },
    {
      path: '/my',
      component: My,
      meta: {
        title: '我的',
        icon: 'iconicon_footbar_wode_nor',
        showTabBar: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})

export default router
