<template>
  <div class="share-list">
    <AlNavBar title="面试技巧"></AlNavBar>
    <!-- 搜索框 -->
    <div class="search-box">
      <div class="search-conent">
        <i class="iconfont iconicon_search"></i>
        请输入关键字
      </div>
    </div>
    <!-- -列表 -->
    <div class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <AlTechniqueItem
          v-for="item in technicList"
          :key="item.id"
          :item="item"
        ></AlTechniqueItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import { interviewTechnic } from '@/api/find'
export default {
  name: 'ShareList',
  data () {
    return {
      technicList: [],
      loading: false,
      finished: false,
      start: 0,
      limit: 5
    }
  },
  methods: {
    onLoad () {
      interviewTechnic({ start: this.start, limit: this.limit }).then(res => {
        res.data.list.forEach(item => {
          this.$avatar(item)
        })
        this.technicList.push(...res.data.list)
        this.start += this.limit
        this.technicList.length >= res.data.total && (this.finished = true)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less">
.share-list {
  background-color: #fff;
  .search-box {
    .search-conent {
      width: 345px;
      height: 34px;
      margin: 0 auto;
      text-align: center;
      line-height: 34px;
      background: #f7f4f5;
      border-radius: 17px;
      font-size: 14px;
      color: #b3b3b3;
    }
  }
  .list {
  }
}
</style>
