<template>
  <div class="userInfo">
    <AlNavBar title="我的资料"></AlNavBar>
    <div class="userinfo-main">
      <div class="userinfo-avatar">
        <AlCell title="头像">
          <template>
            <img class="avatar" src="@/assets/avatar.jpg" alt="" />
          </template>
        </AlCell>
      </div>
      <div class="userinfo-list">
        <AlCell title="昵称" value="哎哎哎"></AlCell>
        <AlCell title="性别" value="哎哎哎"></AlCell>
        <AlCell title="地区" value="哎哎哎"></AlCell>
        <AlCell title="个人简介" value="哎哎哎"></AlCell>
      </div>
      <van-button size="large" class="userinfo-button">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo'
}
</script>

<style lang="less">
.userInfo {
  background-color: @bg-color;
  .userinfo-main {
    padding: 0 15px;
    .userinfo-avatar {
      height: 60px;
      margin: 20px 0 5px 0;
      border-radius: 10px;
      overflow: hidden;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .userinfo-list {
      border-radius: 10px;
      overflow: hidden;
    }
    .userinfo-button {
      margin-top: 15px;
      border-radius: 10px;
      .van-button__text {
        font-size: 16px;
        color: @main-color;
      }
    }
  }
}
</style>
