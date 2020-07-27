<template>
  <div id="app">
    <router-view></router-view>
    <!-- 实现tabbar -->
    <van-tabbar
      route
      active-color="#e40137"
      inactive-color="#b4b4bd"
      v-show="$route.meta.isShowTabbar"
    >
      <van-tabbar-item
        v-for="(item, index) in routerOptions"
        :key="index"
        :to="item.path"
      >
        <span>{{ item.mate.title }}</span>
        <template #icon>
          <i class="iconfont" :class="item.mate.icon"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routerOptions () {
      return this.$router.options.routes.slice(1, 5)
    }
  }
}
</script>

<style></style>
