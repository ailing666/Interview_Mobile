<template>
  <div class="userInfo">
    <AlNavBar title="我的资料" @onClickLeft="back"></AlNavBar>
    <div class="userinfo-main">
      <div class="userinfo-avatar">
        <AlCell title="头像" @click="toedit('avatar')">
          <template>
            <img class="avatar" :src="USERAVATAR" alt="" />
          </template>
        </AlCell>
      </div>
      <div class="userinfo-list">
        <AlCell
          title="昵称"
          :value="userInfo.nickname"
          @click="toedit('nickname')"
        ></AlCell>
        <AlCell
          title="性别"
          @click="showGender = true"
          :value="SETGENDER"
        ></AlCell>
        <AlCell title="地区" @click="showArea = true" :value="SETAREA"></AlCell>
        <AlCell
          title="个人简介"
          :value="userInfo.intro"
          @click="toedit('intro')"
        ></AlCell>
      </div>
      <van-button size="large" class="userinfo-button" @click="loginout"
        >退出登录</van-button
      >
    </div>
    <van-popup
      v-model="showGender"
      position="buttom"
      :style="{ width: '100vw' }"
      @closed="onGenderCancel"
    >
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onGenderConfirm"
        @cancel="onGenderCancel"
        ref="genderPicker"
      />
    </van-popup>

    <van-popup
      v-model="showArea"
      position="buttom"
      :style="{ width: '100vw' }"
      @closed="onAreaCancel"
    >
      <van-area
        title="标题"
        :value="userInfo.area"
        :area-list="areaData"
        :columns-num="2"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @confirm="onAreaConfirm"
        @cancel="onAreaCancel"
        ref="area"
      />
    </van-popup>
  </div>
</template>

<script>
import { editUserInfo } from '@/api/user.js'
import { mapState, mapGetters, mapMutations } from 'vuex'
import areaData from '@/utils/area.js'
import { removeToken } from '@/utils/token.js'
export default {
  name: 'userInfo',
  data () {
    return {
      showGender: false,
      showArea: false,
      areaData: {},
      columns: ['未知', '男', '女']
    }
  },
  created () {
    this.areaData = areaData
  },
  methods: {
    ...mapMutations(['EDITUSSERINFO', 'SAVEUSERINFO', 'SETISLOGIN']),
    toedit (prop) {
      this.$router.push(`/editUserInfo?prop=${prop}`)
    },
    onAreaCancel () {
      this.showArea = false
      // 还原默认值
      this.$refs.area.reset(this.userInfo.area)
    },
    onAreaConfirm (value) {
      this.$toast.loading({ duration: 0 })
      this.showArea = false
      window.console.log(value)
      // 调用接口
      editUserInfo({ area: value[1].code }).then(res => {
        this.EDITUSSERINFO({
          propName: 'area',
          propValue: value[1].code
        })
        this.$toast.success('修改成功')
      })
    },
    // 选择事件
    onGenderConfirm (value, index) {
      this.$toast.loading({ duration: 0 })
      this.showGender = false
      // 调用接口修改信息
      editUserInfo({ gender: index }).then(res => {
        this.EDITUSSERINFO({
          propName: 'gender',
          propValue: index
        })
        this.$toast.success('修改成功')
        window.console.log(res)
      })
    },
    // 取消事件
    onGenderCancel () {
      this.showGender = false
      // 还原默认值
      this.$refs.genderPicker.setColumnIndex(0, this.userInfo.gender)
    },
    // 退出按钮
    loginout () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '主人,你不要我了吗~!?'
        })
        .then(() => {
          this.$toast.success('退出成功')
          removeToken()
          this.$router.push('/find')
          this.SETISLOGIN(false)
          this.SAVEUSERINFO('')
        })
        .catch(() => {
          window.console.log('不走哦')
        })
    },
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['USERAVATAR', 'SETGENDER', 'SETAREA'])
  }
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
