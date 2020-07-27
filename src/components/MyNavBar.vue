<template>
  <div class="myNavBar">
    <van-nav-bar :title="title" :left-text="leftText" :right-text="rightText">
      <!-- 自定义标题 -->
      <template #title>
        <slot name="title"></slot>
      </template>
      <!-- 自定义左侧 -->
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
      <!-- 自定义右侧 -->
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'MyNavBar',
  props: ['title', 'leftText', 'rightText']
}
</script>

<style>
.iconbtn_nav_back {
  font-size: 44px;
}
</style>
