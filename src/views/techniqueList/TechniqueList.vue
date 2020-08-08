<template>
  <div class="technique-list">
    <AlNavBar :title="title"></AlNavBar>
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
        <AlItem
          v-for="item in List"
          :key="item.id"
          :item="item"
          :md="$route.query.md"
        >
        </AlItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import { interviewTechnic, interviewShare } from '@/api/find'
export default {
  name: 'TechniqueList',
  data () {
    return {
      List: [],
      loading: false,
      finished: false,
      start: 0,
      limit: 5,
      md: '',
      title: ''
    }
  },
  created () {
    this.md = this.$route.query.md
    this.md === 'share' ? (this.title = '分享列表') : (this.title = '技巧列表')
  },
  methods: {
    onLoad () {
      if (this.md === 'technique') {
        interviewTechnic({ start: this.start, limit: this.limit }).then(res => {
          res.data.list.forEach(item => {
            this.$avatar(item, 'cover')
          })
          this.List.push(...res.data.list)
          this.start += this.limit
          this.List.length >= res.data.total && (this.finished = true)
          this.loading = false
        })
      } else {
        interviewShare({ start: this.start, limit: this.limit }).then(res => {
          window.console.log('interviewShare', res.data.list)
          res.data.list.forEach(item => {
            this.$avatar(item.author, 'avatar')
          })
          this.List.push(...res.data.list)
          this.start += this.limit
          this.List.length >= res.data.total && (this.finished = true)
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="less">
.technique-list {
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
