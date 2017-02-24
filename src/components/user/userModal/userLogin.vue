<template lang="html">
<div class="user-login-body">
  <div class="form-group">
    <input type="email" id="email" v-model="userLogin.email" placeholder="请输入邮箱或用户名" required="required">
    <span class="to-other button" @click="userChangeModalState('UserRegister')">还没有账号？</span>
  </div>
  <div class="form-group">
    <input type="password" id="password" placeholder="请输入密码" required="required"
    v-model="userLogin.password" ref="password" @focus="toggleFocus()" @blur="toggleFocus()">
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
    <span class="to-other button" @click="userChangeModalState('UserForget')">忘记密码？</span>
  </div>
  <div class="">
    <div v-if="showMsg ==='action'" class="user-login-actions button user-actions" @click="login()">
      <p>登陆</p>
    </div>
    <div v-else-if="showMsg === 'errorMsg'" class="errormsg user-actions">
      <p>{{errorMsg}}</p>
    </div>
    <div v-else class="user-actions">
      <p>{{msg}}</p>
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
      userLogin: {
        email: '',
        password: ''
      },
      focus: false,
      showPassword: false,
      msg: '',
      errorMsg: '',
      showMsg: 'action' // or 'msg' or 'errorMsg'
    }
  },
  watch: {
    userLogin: {
      handler: function (val, oldVal) {
        this.showMsg = 'action'
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
    login: function () {
      if (!this.regEmail(this.userLogin.email)) {
        this.showMsg = 'errorMsg'
        this.errorMsg = '邮箱格式错误'
        return
      }
      if (!this.regPassword(this.userLogin.password)) {
        this.showMsg = 'errorMsg'
        this.errorMsg = '密码格式错误'
        return
      }
      this.showMsg = 'msg'
      this.msg = '登陆中'
      axios.post(api.userLogin, this.userLogin)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            this.showMsg = 'errorMsg'
            this.errorMsg = data.errorMsg
          } else {
            this.showMsg = 'msg'
            this.msg = '登陆成功'
            this.userToggleLogin()
            this.userToggleModal()
          }
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
    }
  }
}
</script>

<style lang="stylus">
.user-login-body
  padding 20px 40px
  .form-group
    width 230px
    margin 0
    position relative
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    .to-other
      height 14px
      margin 13px 0
      color #BCBCBC
</style>
