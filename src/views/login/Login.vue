<template>
  <div class="login">
    <MyNavBar></MyNavBar>
    <div class="login-main">
      <h3>您好,请登录</h3>
      <van-form ref="loginForm">
        <!-- 手机号 -->
        <van-field
          v-model="mobile"
          type="tel"
          name="mobile"
          placeholder="请输入手机号"
          :rules="[
            {
              required: true,
              message: '手机号必填',
              pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            }
          ]"
        >
          <template #left-icon>
            <i class="iconfont iconbtn_nav_back"></i>
          </template>
        </van-field>
        <!-- 验证码 -->
        <van-field
          v-model="code"
          type="number"
          name="code"
          placeholder="请输入验证码"
          :rules="[
            {
              required: true,
              message: '手机号必填'
            }
          ]"
        >
          <template #left-icon>
            <i class="iconfont iconbtn_nav_back"></i>
          </template>
          <template #button>
            <span class="code" @click="getCode">{{
              time === 0 ? '获取验证码' : `${time}s后重新获取`
            }}</span>
          </template>
        </van-field>
        <p class="link">
          登录即同意<span>《用户使用协议》</span>和<span>《隐私条款》</span>
        </p>
        <van-button class="btn" size="large" type="danger">确定</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue'
import { getCode } from '@/api/login.js'
export default {
  name: 'login',
  components: { MyNavBar },
  data () {
    return {
      mobile: '',
      code: '',
      time: 0
    }
  },
  methods: {
    getCode () {
      if (this.time !== 0) {
        return
      }
      this.$refs.loginForm.validate('mobile').then(res => {
        this.$toast.loading({
          duration: 0
        })
        this.time = 5
        // 定时器
        const timerId = setInterval(() => {
          this.time--
          if (this.time === 0) {
            clearInterval(timerId)
          }
        }, 1000)
        getCode({ mobile: this.mobile }).then(res => {
          this.$toast.success(res.data)
        })
      })
    }
  }
}
</script>

<style lang="less">
.login-main {
  padding: 15px;
  span {
    color: @assist-color;
  }
  .link {
    font-size: 12px;
    color: #181a39;
  }
  .btn {
    margin-top: 20px;
    border-radius: 44px;
  }
}
</style>
