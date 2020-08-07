<template>
  <div class="find">
    <AlNavBar title="发现" :showBack="false"></AlNavBar>
    <div class="find-main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 面试技巧 -->
        <div class="interview-technique">
          <AlCell
            title="面试技巧"
            value="查看更多"
            @click="$router.push('/techniqueList?md=technique')"
          ></AlCell>
          <AlItem
            v-for="item in interviewList"
            :key="item.id"
            :item="item"
            md="technique"
          ></AlItem>
        </div>
        <!-- 市场数据 -->
        <div class="chart-data">
          <AlCell title="市场数据" value="查看更多"></AlCell>
          <div class="data-content">
            <!-- 标签 -->
            <div class="tags">
              <div class="tag">{{ cityObj[0] }}</div>
              <div class="tag">{{ cityObj[1] }}</div>
            </div>
            <!-- 进度 -->
            <ul v-for="item in chartList" :key="item.id">
              <li>
                <div class="year">{{ item.year.slice(0, 5) }}</div>
                <div class="process">
                  <p
                    class="son"
                    :style="{
                      width:
                        ((item.salary / chartData.topSalary) * 100).toFixed(1) +
                        '%'
                    }"
                  >
                    ￥{{ item.salary }}
                  </p>
                </div>
                <div class="arrow">
                  <i
                    class="iconfont "
                    :class="{
                      iconicon_shangsheng: item.percent > 0,
                      iconicon_xiajiang: item.percent < 0
                    }"
                  ></i>
                  <span v-if="item.percent">{{ item.percent }}%</span>
                </div>
              </li>
            </ul>
            <div class="more" @click="getMore">
              展开更多
              <i class="iconfont iconicon_zhankai"></i>
            </div>
          </div>
        </div>
        <!-- 面经分享 -->
        <div class="interview-share">
          <AlCell
            title="面经分享"
            value="查看更多"
            @click="$router.push('/techniqueList?md=share')"
          ></AlCell>
          <AlItem
            class="share-content"
            v-for="item in shareList"
            :key="item.id"
            :item="item"
            md="share"
          ></AlItem>
        </div>
      </van-pull-refresh>
      <div class="bottom">到底了</div>
    </div>
  </div>
</template>

<script>
import AlItem from '@/components/AlItem'
import { interviewTechnic, chartData, interviewShare } from '@/api/find.js'
export default {
  name: 'Find',
  components: { AlItem },
  data () {
    return {
      // 面试技巧
      interviewList: [],
      // 城市
      cityObj: [],
      // 市场数据数组
      chartData: [],
      // 用来渲染的数组
      chartList: [],
      // 是否显示全部
      isAll: false,
      // 面经分享
      shareList: '',
      // 是否在加载
      isLoading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // 数据请求
    getData () {
      // 获取面试技巧
      interviewTechnic().then(res => {
        res.data.list.forEach(item => {
          this.$avatar(item, 'cover')
        })
        this.interviewList = res.data.list
        window.console.log('interviewList', this.interviewList)
      })
      // 获取市场数据
      chartData().then(res => {
        this.cityObj = [res.data.city, res.data.position]
        this.chartData = res.data
        this.chartData.yearSalary.reverse()
        this.chartList = this.chartData.yearSalary.slice(0, 4)
      })
      interviewShare().then(res => {
        res.data.list.forEach(item => {
          this.$avatar(item.author, 'avatar')
          this.$avatar(item, 'cover')
        })

        this.shareList = res.data.list
        window.console.log('shareList', this.shareList)
      })
    },
    // 查看更多
    getMore () {
      // 取反
      this.isAll = !this.isAll
      this.isAll
        ? (this.chartList = this.chartData.yearSalary)
        : (this.chartList = this.chartData.yearSalary.slice(0, 4))
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.getData()
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.find {
  .find-main {
    // 全局样式
    i {
      margin-right: 3px;
      font-size: 16px;
    }
    .van-cell__title {
      margin-left: -8px;
      span {
        font-size: 18px;
        font-weight: 600;
        color: #222222;
      }
    }
    // 面试技巧
    .interview-technique {
    }
    // 市场数据
    .chart-data {
      .data-content {
        padding: 0 15px;
        background-color: @white-color;
        .tags {
          display: flex;
          margin-bottom: 15px;
          .tag {
            height: 24px;
            margin-left: 8px;
            padding: 3px 5px;
            background: #eceaea;
            border-radius: 4px;
            font-size: 14px;
            text-align: center;
            line-height: 24px;
            color: @subdominant-font-color;
          }
        }
        ul {
          li {
            display: flex;
            font-size: 14px;
            color: @subdominant-font-color;
            margin-bottom: 5px;
            // .year {
            // }
            .process {
              flex: 1;
              overflow: hidden;
              height: 12px;
              margin: 0 5px;
              background: #ebdfdf;
              border-radius: 4px;
              .son {
                box-sizing: border-box;
                line-height: 12px;
                padding-right: 15px;
                background: #fe6d67;
                border-radius: 4px;
                font-size: 11px;
                text-align: right;
                color: @white-color;
              }
            }
            .arrow {
              width: 50px;
              .iconicon_xiajiang {
                color: @success-color;
              }
              .iconicon_shangsheng {
                color: @error-color;
              }
            }
          }
        }
        .more {
          font-size: 14px;
          color: @subdominant-font-color;
          text-align: center;
        }
      }
    }
    // 面经分享
    .interview-share {
    }
    .bottom {
      height: 100px;
      line-height: 55px;
      font-size: 14px;
      color: @minor-font-color;
      text-align: center;
    }
  }
}
</style>
