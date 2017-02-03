<template lang="html">
<div class="user-forget-body">
  <div class="form-group">
    <input type="email" id="email" v-model="userForget.email" placeholder="请输入邮箱" required="required">
  </div>
  <div class="">
    <div v-if="captchaMsg.showMsg ==='action'" class="user-actions captcha button" @click="getCaptcha()">
      <p>发送验证码到邮箱</p>
    </div>
    <div v-else-if="captchaMsg.showMsg === 'errorMsg'" class="errormsg captcha user-actions">
      <p>{{captchaMsg.errorMsg}}</p>
    </div>
    <div v-else class="user-actions captcha">
      <p>{{captchaMsg.msg}}</p>
    </div>
  </div>
  <div class="form-group">
    <input type="password" id="password" placeholder="请输入新密码" required="required"
    v-model="userForget.password" ref="password" @focus="toggleFocus()" @blur="toggleFocus()">
    <div class="show-password button">
      <div class="" v-if="focus">
        <img v-if="showPassword" src="../../../assets/icon/user-hide-password-2.png" class="password" alt="" @click="toggleShow()">
        <img v-else src="../../../assets/icon/user-show-password-2.png" class="password" alt="" @click="toggleShow()">
      </div>
      <div class="" v-else>
        <img v-if="showPassword" src="../../../assets/icon/user-hide-password-1.png" class="password" alt="" @click="toggleShow()">
        <img v-else src="../../../assets/icon/user-show-password-1.png" class="password" alt="" @click="toggleShow()">
      </div>
    </div>
  </div>
  <div class="form-group">
    <input type="text" id="captcha" v-model="userForget.captcha" placeholder="验证码" required="required">
  </div>
  <div class="">
    <div v-if="forgetMsg.showMsg ==='action'" class="user-forget-actions button user-actions" @click="forget()">
      <p>确认修改</p>
    </div>
    <div v-else-if="forgetMsg.showMsg === 'errorMsg'" class="errormsg user-actions user-forget-actions">
      <p>{{forgetMsg.errorMsg}}</p>
    </div>
    <div v-else class="user-actions user-forget-actions">
      <p>{{forgetMsg.msg}}</p>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import * as api from '../../../api/api'

export default {
  data () {
    return {
      userForget: {
        email: '',
        captcha: '',
        password: ''
      },
      focus: false,
      showPassword: false,
      captchaMsg: {
        msg: '',
        errorMsg: '',
        showMsg: 'action', // or 'msg' or 'errorMsg'
        time: 60
      },
      forgetMsg: {
        msg: '',
        errorMsg: '',
        showMsg: 'action' // or 'msg' or 'errorMsg'
      }
    }
  },
  watch: {
    userForget: {
      handler: function (val, oldVal) {
        if (this.captchaMsg.time !== 60) {
          this.forgetMsg.showMsg = 'action'
        } else {
          this.captchaMsg.showMsg = 'action'
          this.forgetMsg.showMsg = 'action'
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      'userToggleLogin',
      'userToggleModal',
      'userChangeModalState'
    ]),
    toggleShow: function () {
      if (this.showPassword) {
        this.$refs.password.type = 'password'
        this.showPassword = false
      } else {
        this.$refs.password.type = 'text'
        this.showPassword = true
      }
    },
    toggleFocus: function () {
      this.focus = !this.focus
    },
    getCaptcha: function () {
      if (!this.regEmail(this.userForget.email)) {
        this.captchaMsg.showMsg = 'errorMsg'
        this.captchaMsg.errorMsg = '邮箱格式不正确'
        return
      }
      this.captchaMsg.showMsg = 'msg'
      this.captchaMsg.msg = '获取验证码中'
      axios.post(api.userGetCaptcha, {
        'email': this.userForget.email
      })
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            this.captchaMsg.showMsg = 'errorMsg'
            this.captchaMsg.msg = data.errorMsg
          }
          this.captchaMsg.showMsg = 'msg'
          this.captchaMsg.msg = `${this.captchaMsg.time}秒后可再次发送`
          const countdown = window.setInterval(this.countdown, 1000, countdown)
        })
        .catch(error => {
          console.log(error)
        })
    },
    countdown: function (countdown) {
      this.captchaMsg.time--
      console.log(this.captchaMsg.time)
      this.captchaMsg.msg = `${this.captchaMsg.time}秒后可再次发送`
      if (this.captchaMsg.time === 0) {
        clearInterval(countdown)
        this.captchaMsg.showMsg = 'action'
        this.captchaMsg.time = 60
      }
    },
    forget: function () {
      if (!this.regEmail(this.userForget.email)) {
        this.forgetMsg.showMsg = 'errorMsg'
        this.forgetMsg.errorMsg = '邮箱格式错误'
        return
      }
      if (!this.regPassword(this.userForget.password)) {
        this.forgetMsg.showMsg = 'errorMsg'
        this.forgetMsg.errorMsg = '密码格式错误'
        return
      }
      if (!this.regCaptcha(this.userForget.captcha)) {
        this.forgetMsg.showMsg = 'errorMsg'
        this.forgetMsg.errorMsg = '验证码格式错误'
        return
      }
      this.forgetMsg.showMsg = 'msg'
      this.forgetMsg.msg = '验证中'
      axios.post(api.userfgPasswd, this.userForget)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            this.forgetMsg.showMsg = 'errorMsg'
            this.forgetMsg.msg = data.errorMsg
            return
          }
          this.forgetMsg.showMsg = 'msg'
          this.forgetMsg.msg = '修改成功'
          this.userChangeModalState('UserLogin')
        })
        .catch(error => {
          console.log(error)
        })
    },
    regEmail: function (email) {
      const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      return reg.test(email)
    },
    regPassword: function (password) {
      const reg = /^(\w){6,20}$/
      return reg.test(password)
    },
    regCaptcha: function (captcha) {
      const reg = /^(\w){4}$/
      return reg.test(captcha)
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-forget-body
  padding 20px 40px
  .form-group
    width 230px
    margin 0
    position relative
    display flex
    justify-content center
    align-items center
    &:nth-child(3)
      margin-bottom 6px
  .captcha
    margin 6px 0
    p
      font-size 14px
      letter-spacing 3px
  .user-forget-actions
    margin-top 20px
</style>
