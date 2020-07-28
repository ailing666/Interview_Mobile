<template>
  <div class="alCell">
    <van-cell :title="title" :value="value">
      <template #icon>
        <i class="iconfont left-icon" :class="icon"></i>
      </template>
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
