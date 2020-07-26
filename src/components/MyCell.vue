<template>
  <van-cell :title="title" :value="value">
    <template #icon>
      <i class="iconfont" :class="icon"></i>
    </template>
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

<style></style>
