<template lang="html">
<div class="user-register-body">
  <div class="form-group">
    <input type="email" id="email" v-model="email" placeholder="请输入邮箱" required="required">
  </div>
  <div class="form-group">
    <input type="password" id="password" placeholder="请输入密码" required="required"
    v-model="password"  ref="password" @focus="toggleFocus()" @blur="toggleFocus()">
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
  <div class="user-register-actions user-actions button" @click="register()">
    <p>注册</p>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import * as api from '../../../api/api'

export default {
  data () {
    return {
      email: '',
      password: '',
      focus: false
    }
  },
  methods: {
    ...mapActions([
      'userToggleLogin',
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
    register: function () {
      // if (!(this.regEmail(this.userLogin.username) && this.regPassword(this.userLogin.password))) {
      //   alert("请输入正确格式的邮箱与密码")
      //   return false
      // }
      axios.post(api.userRegister, {
        email: this.email,
        username: this.email,
        password: this.password
      })
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
          } else {
            this.userToggleLogin()
            this.userChangeModalState('UserRegisterOk')
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
      const reg = /^[A-Za-z0-9_]+$/
      return reg.test(password)
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-register-body
  padding 20px 40px
  .form-group
    width 230px
    margin 0 0 40px 0
    position relative
    display flex
    justify-content center
    align-items center
</style>
