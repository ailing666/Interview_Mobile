<template>
  <van-cell :title="title" :value="value">
    <!-- 左侧 -->
    <template #icon>
      <i class="iconfont iconfont-left" :class="icon"></i>
    </template>
    <!-- 右侧 -->
    <template #right-icon>
      <i class="iconfont iconicon_more"></i>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'MyCell',
  props: ['title', 'value', 'icon']
}
</script>

<style lang="less">
.iconfont-left {
  margin-right: 10px;
}
.iconicon_more {
  margin-left: 10px;
}
</style>
