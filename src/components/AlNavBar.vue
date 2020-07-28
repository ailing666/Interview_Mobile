<template>
  <div class="alNavBar">
    <van-nav-bar :title="title" :left-text="leftText" :right-text="rightText">
      <template #left>
        <i class="iconfont iconbtn_nav_back"></i>
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'AlNavBar',
  props: ['title', 'leftText', 'rightText']
}
</script>

<style lang="less">
.alNavBar {
  .iconbtn_nav_back {
    font-size: 44px;
  }
}
</style>
