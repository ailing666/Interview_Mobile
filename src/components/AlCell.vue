<template>
  <div class="alCell">
    <van-cell :title="title" :value="value">
      <!-- 左侧图标 -->
      <template #icon>
        <i class="iconfont left-icon" :class="icon"></i>
      </template>
      <!-- 右侧内容 -->
      <template>
        <slot>{{ value }}</slot>
      </template>
      <!-- 右侧图标 -->
      <template #right-icon>
        <i class="iconfont iconicon_more"></i>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'AlCell',
  props: ['title', 'value', 'icon']
}
</script>

<style lang="less">
.alCell {
  .van-cell {
    height: 55px;
    line-height: 30px;
  }
  .iconfont.left-icon {
    margin-right: 8px;
  }
  .iconicon_more {
    margin-left: 8px;
  }
}
</style>
