<template>
  <div class="login">
    <AlNavBar @onClickLeft="back"></AlNavBar>
    <div class="login-main">
      <h4>您好,请登录</h4>
      <van-form @submit="onSubmit" ref="loginForm">
        <!-- 手机号 -->
        <van-field
          v-model="mobile"
          name="mobile"
          placeholder="请输入手机号"
          :rules="[{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确内容' }]"
        >
          <template #left-icon><i class="iconfont iconbianzu1"></i></template
        ></van-field>
        <!-- 验证码 -->
        <van-field
          v-model="code"
          name="code"
          placeholder="请输入手验证码"
          :rules="[{ required: true, message: '请输入正确内容' }]"
        >
          <template #left-icon>
            <i class="iconfont iconyanzhengma"></i></template
          >绑定是否弹出

          <template #button>
            <span class="get-code" @click="getCode">{{
              time === 0 ? '获取验证码' : `${time}s后重新获取`
            }}</span>
          </template>
        </van-field>
        <p class="link">
          登录即同意<span>《用户使用协议》</span>和<span>《隐私协议》</span>
        </p>
        <van-button class="btn" size="large" type="danger">确定</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import { getCode, login } from '@/api/login.js'
import { saveToken } from '@/utils/token.js'
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      mobile: '',
      code: '',
      time: 0
    }
  },
  methods: {
    ...mapMutations(['SAVEUSERINFO', 'SETISLOGIN']),
    // 提交
    onSubmit () {
      login({ mobile: this.mobile, code: this.code }).then(res => {
        // 保存用户的token
        saveToken(res.data.jwt)
        // 保存用户信息
        this.SAVEUSERINFO(res.data.user)
        // 将登陆状态修改为true
        this.SETISLOGIN(true)
        //  判断是不是被打回到登录页
        if (this.$route.query.redirect) {
          this.$router.push(`${this.$route.query.redirect}`)
        } else {
          // 正常跳转的
          this.$router.push('/my')
        }
      })
    },
    getCode () {
      // 全局校验
      this.$refs.loginForm.validate('mobile').then(res => {
        // 当time不为0时候,返回,防止乱点
        if (this.time !== 0) {
          return
        }
        // 一个不消失的loading框
        this.$toast.loading({ duration: 0 })
        // 倒计时
        this.time = 30
        // 定时器
        const timerId = setInterval(() => {
          this.time--
          // 当倒计时为0时清楚倒计时
          this.time === 0 && clearInterval(timerId)
        }, 1000)
        // 调用方法
        getCode({ mobile: this.mobile }).then(res => {
          // 弹出验证码
          this.$toast.success(res.data)
        })
      })
    },
    back () {
      if (this.$route.query.redirect) {
        this.$router.push('/find')
      } else {
        // 正常跳转的
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="less">
.login {
  .login-main {
    padding: 0 15px;
    .get-code {
      font-size: 16px;
    }
    .link {
      font-size: 12px;
      color: @main-font-color;
      margin: 20px 0 50px 0;
    }
    span {
      color: @assist-color;
    }
    .btn {
      border-radius: 44px;
      span {
        color: @white-color;
      }
    }
  }
}
</style>
