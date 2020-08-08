import Vue from 'vue'
import VueRouter from 'vue-router'

import Company from '@/views/company/Company.vue'
import Question from '@/views/question/Question.vue'
import Find from '@/views/find/Find.vue'
import My from '@/views/my/My.vue'
import Login from '@/views/login/Login.vue'
import UserInfo from '@/views/userInfo/UserInfo.vue'
import EditUserInfo from '@/views/editUserInfo/EditUserInfo.vue'
// import ShareList from '@/views/shareList/ShareList.vue'
import TechniqueList from '@/views/techniqueList/TechniqueList.vue'
// 导入store
import store from '@/store/index.js'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/token.js'
import { getUserInfo } from '@/api/user.js'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    /**
     * showTabBar:是否显示tabbar
     * needLogin:是否需要登录才能访问该页面
     */
    {
      path: '/',
      redirect: '/login'
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
        showTabBar: true,
        needLogin: true
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
        showTabBar: true,
        needLogin: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/userinfo',
      component: UserInfo,
      meta: {
        title: '用户信息',
        needLogin: true
      }
    },
    {
      path: '/editUserInfo',
      component: EditUserInfo,
      meta: {
        title: '用户信息',
        needLogin: true
      }
    },
    {
      path: '/techniqueList',
      component: TechniqueList
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 判断要去的页面是否需要登录才能访问
  if (to.meta.needLogin) {
    // 判断用户是否登陆
    if (store.state.isLogin) {
      // 已经登陆
      next()
    } else {
      // 没有登录,判断token,解决刷新后用户信息清空
      if (getToken()) {
        getUserInfo()
          .then(res => {
            // 获取用户信息成功,说明token有效
            // 保存用户信息
            store.commit('SAVEUSERINFO', res.data)
            // 保存登录状态
            store.commit('SETISLOGIN', true)
            next()
          })
          .catch(() => {
            // 说明有token,但不是有效token
            Toast.fail('请先登录')
            removeToken()
            next(`/login?redirect=${to.fullPath}`)
          })
        // 尝试获取用户信息
      } else {
        Toast.fail('请先登录')
        next(`/login?redirect=${to.fullPath}`)
      }
    }
  } else {
    // 直接访问
    next()
  }
})
export default router
