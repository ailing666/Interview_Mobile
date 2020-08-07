<template>
  <div class="al-item">
    <div class="left">
      <h3 class="header">
        {{ item.title }}
      </h3>
      <div class="buttom">
        <div class="time">{{ item.created_at | formatTime }}</div>
        <div class="read">
          <i class="iconfont iconicon_liulanliang"></i>{{ item.read }}
        </div>
        <div class="star">
          <i class="iconfont iconicon_dianzanliang"></i>{{ item.star }}
        </div>
      </div>
    </div>
    <div class="cover" v-if="item.cover">
      <img :src="item.cover" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlItem',
  props: {
    md: {
      type: String
    },
    item: {
      type: Object
    }
  }
}
</script>

<style lang="less">
.al-item {
  display: flex;
  padding: 15px;
  background-color: @white-color;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75px;
    .header {
      font-size: 16px;
      font-weight: 600;
      color: @main-font-color;
    }
    .buttom {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: @minor-font-color;
      .time {
        flex: 1;
      }
      // .read {
      // }
      .star {
        margin: 0 15px;
      }
    }
  }
  .cover {
    margin-left: 10px;
    img {
      width: 113px;
      height: 75px;
      border-radius: 5px;
    }
  }
}
</style>
