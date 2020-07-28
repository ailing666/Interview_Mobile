<template>
  <div class="app">
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- route:开启路由模式
      active-color: 选中颜色
      inactive-color:初始颜色
      $route.meta.showTabBar:当路由元中标记showTabBar为true才让tabbar显示
    -->
    <van-tabbar
      class="tabbar"
      route
      active-color="#e40137"
      inactive-color="#b4b4bd"
      v-show="$route.meta.showTabBar"
    >
      <van-tabbar-item
        v-for="(item, index) in routerOptions"
        :key="index"
        :to="item.path"
      >
        <span>{{ item.meta.title }} </span>
        <template #icon>
          <i class="iconfont" :class="item.meta.icon"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    // 利用计算属性,截取路由中四个需显示的tabbar
    routerOptions () {
      return this.$router.options.routes.slice(1, 5)
    }
  }
}
</script>

<style lang="less">
.iconfont {
  font-size: 28px;
}
.van-tabbar--fixed {
  position: fixed;
  bottom: 0;
  height: 88px;
}
</style>
