<template>
  <div class="find">
    <AlNavBar title="发现" :showBack="false"></AlNavBar>
    <div class="find-main">
      <!-- 面试技巧 -->
      <div class="interview-technique">
        <AlCell title="面试技巧" value="查看更多"></AlCell>
        <div class="technique-content">
          <div class="left">
            <h3 class="header">
              盘点面试中最为难的五大棘手问题，你是否遇到过？教你如何应对。
            </h3>
            <div class="buttom">
              <div class="time">1小时前</div>
              <div class="read">
                <i class="iconfont iconicon_liulanliang"></i>66
              </div>
              <div class="star">
                <i class="iconfont iconicon_dianzanliang"></i>66
              </div>
            </div>
          </div>
          <div class="cover">
            <img src="../../assets/logo.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 市场数据 -->
      <div class="chart-data">
        <AlCell title="市场数据" value="查看更多"></AlCell>
        <div class="data-content">
          <!-- 标签 -->
          <div class="tags">
            <div class="tag">北京</div>
            <div class="tag">产品经理</div>
          </div>
          <!-- 进度 -->
          <ul>
            <li>
              <div class="year">2020年</div>
              <div class="process">
                <p class="son">￥12222</p>
              </div>
              <div class="arrow">
                <!-- iconicon_shangsheng -->
                <i class="iconfont iconicon_shangsheng"></i>10%
              </div>
            </li>
          </ul>
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
export default {
  name: 'Find'
}
</script>

<style lang="less">
.find {
  height: 100vh;
  background: #f7f4f5;
  .find-main {
    // 全局样式
    i {
      font-size: 16px;
    }
    // 面试技巧
    .interview-technique {
      .technique-content {
        display: flex;
        padding: 0 15px;
        background-color: #fff;
        .left {
          flex: 1;
          .header {
            font-size: 16px;
            font-weight: 500;
            color: #181a39;
          }
          .buttom {
            display: flex;
            align-items: center;
            margin-top: 8px;
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
          img {
            width: 113px;
            height: 75px;
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
            .year {
            }
            .process {
              flex: 1;
              overflow: hidden;
              height: 12px;
              background: #ebdfdf;
              border-radius: 4px;
              .son {
                box-sizing: border-box;
                width: 106px;
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
              i {
                color: @error-color;
              }
            }
          }
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
