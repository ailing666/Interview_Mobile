<template>
  <div class="my">
    <!-- 顶部 -->
    <div class="my-top">
      <img src="@/assets/bar.jpg" alt="" />
      <div class="top-user-info">
        <div class="left">
          <div class="username">小艾同学</div>
          <div class="usertitle">嘤嘤嘤嘤嘤嘤</div>
        </div>
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt="" />
        </div>
      </div>
      <div class="top-user-data">
        <ul>
          <li>
            <span>555</span>
            <p>累计答题</p>
          </li>
          <li>
            <span>555</span>
            <p>收藏题目</p>
          </li>
          <li>
            <span>555</span>
            <p>我的错题</p>
          </li>
          <li>
            <span>555%</span>
            <p>正确率</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主题 -->
    <div class="my-main">
      <div class="gangwei">
        <MyCell
          title="我的岗位"
          value="产品经理"
          icon="iconicon_mine_gangwei"
        ></MyCell>
      </div>
      <div class="main-interview-data">
        <h5>面经数据</h5>
        <div class="interview-data-main">
          <ul>
            <li>
              <p class="t">昨日阅读</p>
              <div class="m">555</div>
              <span class="b">阅读总数</span>
            </li>
            <li>
              <p class="t">昨日获赞</p>
              <div class="m">555</div>
              <span class="b">获赞总数</span>
            </li>
            <li>
              <p class="t">昨日新增</p>
              <div class="m">555</div>
              <span class="b">评论总数</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-cell-list">
        <MyCell
          title="我的面经分享"
          icon="iconicon_mine_mianjing"
          value="21"
        ></MyCell>
        <MyCell
          title="我的消息"
          icon="iconicon_mine_xiaoxi"
          value="21"
        ></MyCell>
        <MyCell
          title="收藏的题库"
          icon="iconicon_mine_tikushoucang"
          value="21"
        ></MyCell>
        <MyCell
          title="收藏的企业"
          icon="iconicon_mine_qiyeshoucang"
          value="21"
        ></MyCell>
        <MyCell title="我的错题" icon="iconicon_mine_cuoti" value="21"></MyCell>
        <MyCell
          title="收藏的面试经验"
          icon="iconbtn_shoucang_sel"
          value="21"
        ></MyCell>
      </div>
    </div>
  </div>
</template>

<script>
import MyCell from '@/components/MyCell.vue'
export default {
  name: 'my',
  components: { MyCell }
}
</script>

<style lang="less">
.my {
  background-color: @border-color;
  .my-top {
    width: 375px;
    height: 304px;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    color: @white-color;
    img {
      width: 100%;
      height: 44px;
    }
    .top-user-info {
      display: flex;
      justify-content: space-around;
      .left {
        .username {
          font-size: 21px;
          font-weight: 600;
        }
        .usertitle {
          opacity: 0.7;
          font-size: 12px;
        }
      }
      .avatar {
        img {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.38);
          border-radius: 50%;
        }
      }
    }
    .top-user-data {
      ul {
        display: flex;
        justify-content: space-around;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 21px;
            font-weight: 700;
            color: #ffffff;
          }
          p {
            opacity: 0.7;
            font-size: 12px;
          }
        }
      }
    }
  }
  .my-main {
    .main-interview-data {
      .interview-data-main {
        ul {
          display: flex;
          justify-content: space-around;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            .t {
              font-size: 10px;
              color: @minor-font-color;
            }
            .m {
              font-size: 21px;
              font-weight: 700;
              color: @main-font-color;
            }
            .b {
              font-size: 12px;
              color: @subdominant-font-color;
            }
          }
        }
      }
    }
    .main-cell-list {
    }
  }
}
</style>
