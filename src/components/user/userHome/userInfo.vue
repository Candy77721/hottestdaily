<template lang="html">
<div class="user-info">
  <div class="user-email user-info-item">
    <label for="user-email">订阅邮箱：</label>
    <input class="input" type="email" id="user-email"
      v-model="email"
      @blur="changeEmail()"
    >
    <div class="email-setting-button"
      @click="toggleEmailSetting()"
    >
    </div>
    <div class="email-setting" v-if="isEmailSetting">
      <div class="body">
        <p class="info">每日的订阅信息将会推送至该邮箱</p>
        <div class="button"
          :class="[emailSettingButton]"
          @click="toggleAcceptEmail()"
          @mouseover="toggleButton(true)" @mouseout="toggleButton(false)"
        >
          <p>
            {{emailSettingMsg}}
          </p>
          </div>
      </div>
      <div class="cor"></div>
      <div class="cor_s"></div>
    </div>
  </div>
  <div class="user-name user-info-item">
    <label for="user-name">用户名：</label>
    <input class="input" type="text" id="user-name"
      v-model="username"
      @blur="changeUsername()"
    >
  </div>
</div>
</template>

<script>
import * as api from '../../../api/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      username: '',
      isEmailSetting: false,
      // 按钮状态
      isInButton: false,
      // 按钮属性
      emailSettingButton: 'button-accept', // button-accept or button-accept
      emailSettingMsg: '正在推送' // 正在推送, 取消推送, 推送停止, 开启推送
    }
  },
  mounted () {
    this.email = this.userGetUserInfo.email
    this.username = this.userGetUserInfo.username
  },
  watch: {
    userGetUserInfo: {
      handler: function (newInfo) {
        this.email = newInfo.email
        this.username = newInfo.username
      },
      deep: true
    },
    /*
    根据按钮状态修改按钮文字和样式
    */
    EmailSettingButtonStatus: function (newStatus) {
      if (newStatus === 'inAccept') {
        this.emailSettingMsg = '取消推送'
        this.emailSettingButton = 'button-unaccept'
      } else if (newStatus === 'outAccept') {
        this.emailSettingMsg = '正在推送'
        this.emailSettingButton = 'button-accept'
      } else if (newStatus === 'inUnaccept') {
        this.emailSettingMsg = '开启推送'
        this.emailSettingButton = 'button-accept'
      } else if (newStatus === 'outUnaccept') {
        this.emailSettingMsg = '推送停止'
        this.emailSettingButton = 'button-unaccept'
      }
    }
  },
  computed: {
    ...mapGetters([
      'userGetUserInfo'
    ]),
    /*
    判断按钮状态
    inAccept, outAccept, inUnaccept, outUnaccept
    */
    EmailSettingButtonStatus: function () {
      if (this.userGetUserInfo.acceptPost && this.isInButton) {
        // 接收，光标在按钮中
        return 'inAccept'
      } else if (this.userGetUserInfo.acceptPost && !this.isInButton) {
        // 接收，光标不在按钮中
        return 'outAccept'
      } else if (!this.userGetUserInfo.acceptPost && this.isInButton) {
        return 'inUnaccept'
        // 不接收，光标在按钮中
      } else if (!this.userGetUserInfo.acceptPost && !this.isInButton) {
        // 不接收，光标不在按钮中
        return 'outUnaccept'
      }
    }
  },
  methods: {
    ...mapActions([
      'userChangeUsername',
      'userChangeEmail',
      'userToggleAcceptPost'
    ]),
    // 切换显示 是否接收邮件 弹框
    toggleEmailSetting: function () {
      this.isEmailSetting = !this.isEmailSetting
    },
    // 修改 光标是否在按钮中
    toggleButton: function (bool) {
      this.isInButton = bool
    },
    // 修改 是否接收邮件
    toggleAcceptEmail: function () {
      axios.post(api.userIsAcceptEmail, {
        'acceptPost': this.userGetUserInfo.acceptPost ? 0 : 1
      })
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
          } else {
            this.userToggleAcceptPost()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 邮件正则
    regEmail: function (email) {
      const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      return reg.test(email)
    },
    // 修改推送邮箱
    changeEmail: function () {
      if (this.regEmail(this.email)) {
        axios.post(api.userEditUserMail, {
          'email': this.email
        })
          .then(res => {
            const data = res.data
            if (data.errorCode !== 0) {
              alert(data.errorMsg)
            } else {
              this.userChangeEmail(this.email)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.email = this.userGetUserInfo.email
        alert('输入的邮箱格式有误')
      }
    },
    // 修改用户昵称
    changeUsername: function () {
      axios.post(api.userEditUsername, {
        'username': this.username
      })
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
          } else {
            this.userChangeUsername(this.username)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-info
  width 100%
  display flex
  flex-direction column
  .user-info-item
    position relative
    display flex
    justify-content space-between
    align-items center
    &:nth-child(2)
      margin-top 20px
    label
      font-size 14px
      color #797979
      letter-spacing 1.6px
    .input
      width 616px
      height 40px
      padding 10px
      box-sizing border-box
      border 1px solid #d6d6d6
      border-radius 10px
      &:focus
        border 1px solid #959595
  .user-email
    .email-setting-button
      width 40px
      height 40px
      position absolute
      top 0
      right 0
      background #5fa2f5
      border-radius 10px
      cursor pointer
      &:after
        content '· · ·'
        width 40px
        height 37px
        display inline-flex
        justify-content center
        align-items center
        font-weight 900
        color white
    .email-setting
      position absolute
      left calc(100% + 14px)
      top -40px
      z-index 0
      .body
        width 165px
        height 110px
        box-sizing border-box
        position relative
        margin 8px
        padding 10px
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color #ededed
        z-index 2
        box-shadow 0 0 5px 0 rgba(89,89,89,0.50)
        border-radius 10px
        p
         margin 0
        .info
          text-align center
          font-size 14px
          color #797979
          letter-spacing 1.6px
        .button
          width 140px
          height 40px
          margin-top 10px
          display flex
          align-items center
          justify-content center
          border-radius 5px
          cursor pointer
          p
          font-size 14px
          color #fcfcfc
          letter-spacing 1.6px
        .button-accept
          background-image linear-gradient(-90deg, #95a9f1 0%, #71c0ee 98%)
        .button-unaccept
          background-color #D1D1D1
      .cor
      .cor_s
        width 16px
        height 16px
        left 0
        top 50px
        position absolute
        background-color #ededed
        z-index 2
        transform rotate(-45deg)
      .cor_s
        z-index 1
        box-shadow 0 0 5px 0 rgba(89,89,89,0.50)
</style>
