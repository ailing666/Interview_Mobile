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
        <div class="share-content">
          <h3 class="title">
            非名校出身的他，是如何拿到 Facebook 等5家顶尖科技公司的Offer？
          </h3>
          <article class="article">
            这篇文章是专门为那些即将开始找工作的人写的。很多正在找工作的人可能会担心因为自己不是毕业于常青藤名校而无法在顶尖科技公司找到一份理想的工作。
          </article>
          <div class="buttom">
            <div class="left">
              <div class="avatar">
                <img src="../../assets/logo.png" alt="" />
                <div class="nickname">小艾同学</div>
              </div>
            </div>
            <div class="time">1小时</div>
            <div class="comment">
              <i class="iconfont iconicon_pinglunliang"></i>55
            </div>
            <div class="star">
              <i class="iconfont iconicon_dianzanliang"></i>55
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { interviewTechnic, chartData } from '@/api/find.js'
export default {
  name: 'Find',
  data () {
    return {
      interviewList: [],
      cityObj: [],
      chartList: [],
      chartData: [],
      // 是否显示全部
      isAll: false
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
        padding: 0 15px;
        background-color: #fff;
        .title {
          font-size: 16px;
          font-weight: 500;
          color: #181a39;
        }
        .article {
          font-size: 13px;
          color: #545671;
        }
        .buttom {
          display: flex;
          font-size: 12px;

          font-size: 12px;
          color: #b4b4bd;
          .left {
            flex: 1;
            .avatar {
              display: flex;
              img {
                width: 22px;
                height: 22px;
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
