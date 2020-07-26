<template>
  <div id="app">
    <router-view></router-view>
    <!-- 实现tabbar -->
    <van-tabbar route active-color="#e40137" inactive-color="#b4b4bd">
      <van-tabbar-item
        v-for="(item, index) in $router.options.routes"
        :key="index"
        :to="item.path"
        v-show="item.mate.isShowTabbar"
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
export default {}
</script>

<style></style>
