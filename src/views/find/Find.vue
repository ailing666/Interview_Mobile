<template>
  <div class="find">
    <!-- 发现 -->
    <AlNavBar title="发现" :showBack="false"></AlNavBar>
    <div class="find-main">
      <!-- 面试技巧 -->
      <div class="interview-skill">
        <AlCell title="面试技巧" value="查看更多"></AlCell>
        <div class="skill-main">
          <div class="skill-left">
            <h3 class="left-title">
              盘点面试中最为难的五大棘手问题，你是否遇到过？教你如何应对。
            </h3>
            <div class="left-buttom">
              <div class="buttom-time">1笑死</div>
              <div class="buttom-read">
                <i class="iconfont iconicon_liulanliang"></i>22
              </div>
              <div class="buttom-star">
                <i class="iconfont iconicon_dianzanliang"></i>44
              </div>
            </div>
          </div>
          <div class="skill-cover">
            <img src="../../assets/logo.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 市场数据 -->
      <div class="market-data">
        <AlCell title="市场数据" value="查看更多"></AlCell>
        <div class="data-main">
          <div class="tags">
            <div class="tag"><span>北京</span></div>
            <div class="tag"><span>经理</span></div>
          </div>
          <ul>
            <li>
              <div class="year">2020</div>
              <div class="process"></div>
              <div class="arrow"></div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 面经分享 -->
      <div class="interview-share">
        <AlCell title="面经分享" value="查看更多"></AlCell>
        <div class="share-main">
          <h3 class="share-title">二非高校的我是如何通过滴滴的面试</h3>
          <div class="share-content">
            Will同学，加入01两个月。某二非高校（非211,985），大学无互联网相关创业
          </div>
          <div class="share-buttom">
            <div class="left">
              <div class="buttom-avatar">
                <img src="../../assets/logo.png" alt="" />
              </div>
              <div class="buttom-nickname">苍鹰翱翔</div>
            </div>
            <div class="buttom-time">10分支</div>
            <div class="buttom-commit">
              <i class="iconfont iconicon_pinglunliang"></i>45
            </div>
            <div class="buttom-star">
              <i class="iconfont iconicon_dianzanliang"></i>64
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find'
}
</script>

<style lang="less">
.find {
  width: 100vw;
  .find-main {
    .interview-skill {
      .skill-main {
        display: flex;
        padding: 0 15px;
        .skill-left {
          flex: 1;
          .left-title {
            font-size: 16px;
            font-weight: 500;
            color: #181a39;
          }
          .left-buttom {
            display: flex;
            margin: 10px 0;
            font-size: 12px;
            color: #b4b4bd;
            .buttom-time {
              flex: 1;
            }
            .buttom-read {
              margin-right: 8px;
            }
            .buttom-star {
            }
          }
        }
        .skill-cover {
          img {
            width: 113px;
            height: 75px;
          }
        }
      }
    }
    .market-data {
      .data-main {
        .tags {
          display: flex;
          .tag {
            width: 41px;
            height: 24px;
            background: #eceaea;
            border-radius: 4px;
            span {
              font-size: 14px;
              text-align: center;
              color: #545671;
            }
          }
        }
        ul {
          li {
            .year {
            }
            .process {
            }
            .arrow {
            }
          }
        }
      }
    }

    .interview-share {
      .share-main {
        .share-title {
        }
        .share-content {
        }
        .share-buttom {
          .left {
            .buttom-avatar {
            }
            .buttom-nickname {
            }
          }

          .buttom-time {
          }
          .buttom-commit {
          }
          .buttom-star {
          }
        }
      }
    }
  }
}
</style>
