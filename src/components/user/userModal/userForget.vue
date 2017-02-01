<template lang="html">
<div class="user-forget-body">
  <div class="form-group">
    <input type="email" id="email" v-model="userForget.email" placeholder="请输入邮箱" required="required">
  </div>
  <div class="user-forget-actions user-actions captcha button" @click="getCaptcha()">
    <p>发送验证码到邮箱</p>
  </div>
  <div class="form-group">
    <input type="password" id="password" placeholder="请输入新密码" required="required"
    v-model="userForget.password" ref="password" @focus="toggleFocus()" @blur="toggleFocus()">
    <div class="show-password">
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
  <div class="user-forget-actions user-actions forget button" @click="forget()">
    <p>确认修改</p>
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
      focus: false
    }
  },
  methods: {
    ...mapActions([
      'userToggleLogin',
      'userToggleModal',
      'userChangeModalState'
    ]),
    toggleShow: function () {
      const type = this.$refs.password.type
      if (type === 'password') {
        this.$refs.password.type = 'text'
      } else {
        this.$refs.password.type = 'password'
      }
    },
    toggleFocus: function () {
      this.focus = !this.focus
    },
    getCaptcha: function () {
      axios.post(api.userGetCaptcha, {
        'email': this.userForget.email
      })
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    forget: function () {
      // if (!(this.regEmail(this.userLogin.username) && this.regPassword(this.userLogin.password))) {
      //   alert("请输入正确格式的邮箱与密码")
      //   return false
      // }
      axios.post(api.userfgPasswd, this.userForget)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
            return
          }
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
      const reg = /^[A-Za-z0-9_]+$/
      return reg.test(password)
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
  .forget
    margin-top 20px
</style>
