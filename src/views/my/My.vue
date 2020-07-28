<template>
  <div class="my">
    <!-- 上 -->
    <div class="my-top">
      <img class="bar" src="@/assets/bar.jpg" alt="" />
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="user-name">
          <p class="nickname">小艾同学</p>
          <p class="intro">嘤嘤嘤嘤嘤嘤嘤嘤嘤</p>
        </div>
        <div class="user-avatar">
          <img src="@/assets/avatar.jpg" alt="" />
        </div>
      </div>
      <!-- 用户数据 -->
      <div class="user-data">
        <ul>
          <li>
            <p class="question-data">555</p>
            <span class="question-info">累计答题</span>
          </li>
          <li>
            <p class="question-data">555</p>
            <span class="question-info">收藏题目</span>
          </li>
          <li>
            <p class="question-data">555</p>
            <span class="question-info">我的错题</span>
          </li>
          <li>
            <p class="question-data">555</p>
            <span class="question-info">正确率</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主 -->
    <div class="my-main">
      <div class="gangwei">
        <AlCell
          title="我的岗位"
          value="产品经理"
          icon="iconicon_mine_gangwei"
        ></AlCell>
      </div>
      <!-- 面经数据 -->
      <div class="interview-data ">
        <h6>面经数据</h6>
        <ul>
          <li>
            <p class="interview-yesterday">
              昨日阅读<span class="num">+300</span>
            </p>
            <p class="interview-num">666</p>
            <span class="interview-info">阅读总数</span>
          </li>
          <li>
            <p class="interview-yesterday">
              昨日阅读<span class="num">+300</span>
            </p>
            <p class="interview-num">666</p>
            <span class="interview-info">获赞总数</span>
          </li>
          <li>
            <p class="interview-yesterday">
              昨日阅读<span class="num">+300</span>
            </p>
            <p class="interview-num">666</p>
            <span class="interview-info">评论总数</span>
          </li>
        </ul>
      </div>
      <div class="cell-list">
        <AlCell
          title="我的面经分享"
          value="555"
          icon="iconicon_mine_mianjing"
        ></AlCell>
        <AlCell
          title="我的消息"
          value="555"
          icon="iconicon_mine_xiaoxi"
        ></AlCell>
        <AlCell
          title="收藏的题库"
          value="555"
          icon="iconicon_mine_tikushoucang"
        ></AlCell>
        <AlCell
          title="收藏的企业"
          value="555"
          icon="iconicon_mine_qiyeshoucang"
        ></AlCell>
        <AlCell
          title="我的错题"
          value="555"
          icon="iconicon_mine_cuoti"
        ></AlCell>
        <AlCell
          title="收藏的面试经验"
          value="555"
          icon="iconbtn_shoucang_sel"
        ></AlCell>
      </div>
    </div>
  </div>
</template>

<script>
import AlCell from '@/components/AlCell'
export default {
  name: 'my',
  components: { AlCell }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.my {
  background-color: @bg-color;
  overflow: auto;
  padding: 43px 0 88px 0;
  .my-top {
    width: 375px;
    height: 188px;
    padding: 10px 0;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    color: @white-color;
    .bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 44px;
      z-index: 999;
    }
    .user-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      padding: 0 15px;
      .user-name {
        .nickname {
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .intro {
          opacity: 0.7;
          font-size: 12px;
        }
      }
      .user-avatar {
        img {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.38);
          border-radius: 50%;
        }
      }
    }
    .user-data {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          .question-data {
            font-size: 21px;
            font-weight: 700;
          }
          .question-info {
            width: 49px;
            opacity: 0.7;
            font-size: 12px;
          }
        }
      }
    }
  }

  .my-main {
    position: relative;
    padding: 0 15px;
    border: 1px solid transparent;
    .gangwei {
      position: absolute;
      top: -30px;
      width: 345px;
      .van-cell {
        border-radius: 10px;
      }
    }
    .interview-data {
      border-radius: 8px;
      background: @white-color;
      margin: 40px 0 20px 0;
      padding: 10px;
      h6 {
        margin-bottom: 10px;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          .interview-yesterday {
            font-size: 10px;
            color: @minor-font-color;
            margin-bottom: 5px;
            .num {
              color: @assist-color;
            }
          }
          .interview-num {
            font-size: 21px;
            font-weight: 700;
            color: @main-font-color;
            margin: 10px 0;
          }
          .interview-info {
            font-size: 12px;
            color: @subdominant-font-color;
          }
        }
      }
    }
    .cell-list {
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
</style>
