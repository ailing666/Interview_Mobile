<template>
  <div class="editUserInfo">
    <AlNavBar
      @onClickLeft="back"
      @onClickRight="saveEdit"
      :title="title"
      :right-text="isEdit ? '保存' : ''"
    ></AlNavBar>
    <div class="editUserInfo-main">
      <van-field
        v-if="this.$route.query.prop !== 'avatar'"
        class="editUserInfo-text"
        type="text"
        v-model="inputValue"
      ></van-field>
      <van-uploader
        v-else
        v-model="fileList"
        :after-read="afterRead"
        :max-count="1"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { editUserInfo, uploadFiles } from '@/api/user.js'
export default {
  name: 'editUserInfo',
  data () {
    return {
      inputValue: '',
      fileList: [{ url: '' }],
      title: '',
      avatarUrl: ''
    }
  },
  created () {
    // 获取需要修改的名字
    const propName = this.$route.query.prop
    const propValue = this.userInfo[propName]
    const titleObj = {
      avatar: '头像',
      nickname: '昵称',
      intro: '简介'
    }
    // 渲染标题
    this.title = `修改${titleObj[propName]}`
    if (propName !== 'avatar') {
      this.inputValue = propValue
    } else {
      this.fileList[0].url = this.USERAVATAR
      this.inputValue = this.USERAVATAR
    }
  },
  methods: {
    ...mapMutations(['EDITUSSERINFO']),
    // 上传成功后
    afterRead (fileInfo) {
      var data = new FormData()
      data.append('files', fileInfo.file)
      uploadFiles(data).then(res => {
        this.avatarUrl = process.env.VUE_APP_URL + res.data[0].url
        this.inputValue = res.data[0].id
      })
    },
    // 返回上一页
    back () {
      this.$router.go(-1)
    },
    // 保存修改
    saveEdit () {
      if (!this.isEdit) return
      // 获取要修改的属性和值
      var propName = this.$route.query.prop
      var propValue = this.inputValue
      // 生成一个动态对象
      const data = {}
      // 向data对象中动态添加键值对
      data[propName] = this.inputValue
      this.$toast.loading({ duration: 0 })
      // 调用修改用户信息接口
      editUserInfo(data).then(res => {
        this.$toast.success('修改成功')
        if (propName !== 'avatar') {
          this.EDITUSSERINFO({ propName, propValue })
        } else {
          this.inputValue = this.avatarUrl
          this.EDITUSSERINFO({
            propName,
            propValue: this.avatarUrl
          })
        }
        this.$router.go(-1)
      })
    }
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['USERAVATAR']),
    isEdit () {
      // 判断用户是否修改了信息
      return this.inputValue !== this.userInfo[this.$route.query.prop]
    }
  }

}
</script>

<style lang="less">
.editUserInfo {
  .editUserInfo-main {
    padding: 15px;
    .editUserInfo-text {
      border-radius: 10px;
      background-color: @bg-color;
    }
  }
}
</style>
