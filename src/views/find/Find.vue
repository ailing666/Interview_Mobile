<template>
  <div class="find">
    <AlNavBar title="发现" :showBack="false"></AlNavBar>
    <div class="find-main">
      <!-- 面试技巧 -->
      <div class="interview-technique">
        <AlCell title="面试技巧" value="查看更多"></AlCell>
        <div
          class="technique-content"
          v-for="item in interviewList"
          :key="item.id"
        >
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
        <AlCell title="面经分享" value="查看更多"></AlCell>
        <div class="share-content" v-for="item in shareList" :key="item.id">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <article class="article">
            {{ item.content }}
          </article>
          <div class="buttom">
            <div class="left">
              <div class="avatar">
                <img :src="item.author.avatar" alt="" />
                <div class="nickname">{{ item.author.nickname }}</div>
              </div>
            </div>
            <div class="time">{{ item.created_at | formatTime }}</div>
            <div class="comment">
              <i class="iconfont iconicon_pinglunliang"></i
              >{{ item.article_comments }}
            </div>
            <div class="star">
              <i class="iconfont iconicon_dianzanliang"></i>{{ item.star }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { interviewTechnic, chartData, interviewShare } from '@/api/find.js'
export default {
  name: 'Find',
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
      shareList: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // 获取面试技巧
      interviewTechnic().then(res => {
        res.data.list.forEach(item => {
          item.cover && (item.cover = process.env.VUE_APP_URL + item.cover)
        })
        this.interviewList = res.data.list
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
          this.$avatar(item.author)
        })
        this.shareList = res.data.list
      })
    },
    getMore () {
      // 取反
      this.isAll = !this.isAll
      if (this.isAll) {
        this.chartList = this.chartData.yearSalary
      } else {
        this.chartList = this.chartData.yearSalary.slice(0, 4)
      }
    }
  }
}
</script>

<style lang="less">
.find {
  height: 100vh;
  background: #f7f4f5;
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
      .technique-content {
        display: flex;
        padding: 15px;
        background-color: #fff;
        .left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 75px;
          .header {
            font-size: 16px;
            font-weight: 600;
            color: #181a39;
          }
          .buttom {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #b4b4bd;
            .time {
              flex: 1;
            }
            .read {
            }
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
    }
    // 市场数据
    .chart-data {
      .data-content {
        padding: 0 15px;
        background-color: #fff;
        .tags {
          display: flex;
          margin-bottom: 10px;
          .tag {
            height: 24px;
            margin-left: 8px;
            padding: 3px 5px;
            background: #eceaea;
            border-radius: 4px;
            font-size: 14px;
            text-align: center;
            line-height: 24px;
            color: #545671;
          }
        }
        ul {
          li {
            display: flex;
            font-size: 14px;
            color: #545671;
            margin-bottom: 5px;
            .year {
            }
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
                color: #ffffff;
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
          color: #545671;
          text-align: center;
        }
      }
    }
    // 面经分享
    .interview-share {
      .share-content {
        padding: 15px;
        background-color: #fff;
        .title {
          font-size: 16px;
          font-weight: 700;
          color: #181a39;
        }
        .article {
          margin: 10px 0;
          width: 345px;
          font-size: 13px;
          color: #545671;
          line-height: 19px;
          letter-spacing: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .buttom {
          display: flex;
          font-size: 12px;
          color: #b4b4bd;
          .left {
            flex: 1;
            .avatar {
              display: flex;
              align-items: center;
              img {
                width: 22px;
                height: 22px;
                margin-right: 8px;
                border-radius: 50%;
              }
              .nickname {
                color: #545671;
              }
            }
          }
          .time {
          }
          .comment {
            margin: 0 10px;
          }
          .star {
          }
        }
      }
    }
  }
}
</style>
