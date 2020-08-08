<template>
  <div class="al-item">
    <div class="item-content">
      <!-- 标题和内容 -->
      <div class="left">
        <!-- 标题 -->
        <h3 class="header">
          {{ item.title }}
        </h3>
        <!-- 内容 -->
        <article class="article" v-if="md === 'share'">
          {{ item.content }}
        </article>
        <!-- 底部 -->
        <div class="buttom">
          <!-- 底部左侧 -->
          <div class="content">
            <div class="avatar" v-if="item.author">
              <!-- 头像 -->
              <img :src="item.author.avatar" alt="" />
              <!-- 昵称 -->
              <div class="nickname">{{ item.author.nickname }}</div>
            </div>
            <!-- 时间 -->
            <div class="time">{{ item.created_at | formatTime }}</div>
          </div>

          <div class="comment">
            <i class="iconfont iconicon_pinglunliang"></i
            >{{ item.article_comments }}
          </div>
          <div class="star">
            <i class="iconfont iconicon_dianzanliang"></i>{{ item.star }}
          </div>
        </div>
      </div>
      <div class="cover" v-if="md === 'technique'">
        <img :src="item.cover" />
      </div>
    </div>
    <van-divider class="line" v-if="md === 'share'"></van-divider>
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
  },
  data () {
    return {
      isShow: false
    }
  },
  created () {
    window.console.log(this.$route)
  }
}
</script>

<style lang="less">
.al-item {
  .item-content {
    display: flex;
    padding: 15px;
    background-color: @white-color;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .header {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
        color: @main-font-color;
      }
      .article {
        flex: 1;
        font-size: 13px;
        width: 345px;
        color: @subdominant-font-color;
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
        color: @minor-font-color;
        margin-top: 5px;
        .content {
          display: flex;
          justify-content: space-between;
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
              color: @subdominant-font-color;
            }
          }
        }
        // .time {
        // }
        .comment {
          margin: 0 10px;
        }
        // .star {
        // }
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
  .line.van-divider.van-divider--hairline {
    margin: 0;
  }
}
</style>
