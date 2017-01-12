<template lang="html">
<div class="user-login">
  <div class="user-login-header">
    <img class="close" src="../../assets/close-white.png" alt="" @click="toggleModal">
    <p>登陆账号</p>
  </div>
  <div class="user-login-body">
    <p class="form-group">
      <input type="email" id="email" v-model="userLogin.username" placeholder="请输入邮箱或用户名" required="required">
    </p>
    <p class="form-group">
      <input type="password" id="password"  v-model="userLogin.password"  placeholder="请输入密码" required="required">
    </p>
    <div class="user-login-actions">
      <span class="user-login-other" @click="changeModalState('UserForget')">忘记密码</span>
      <button type="button" name="button" class="button-login" @click="login()">登陆</button>
      <span class="user-login-other" @click="changeModalState('UserRegister')">加入我们</span>
    </div>
  </div>
  <div class="user-login-foot">
    <div class="other-login">
      <span>使用QQ快捷登陆</span>
      <img src="../../assets/icon-qq.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import * as api from '../../api/api'

export default {
  data () {
    return {
      userLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleLogin',
      'toggleModal',
      'changeModalState'
    ]),
    login: function () {
      // if (!(this.regEmail(this.userLogin.username) && this.regPassword(this.userLogin.password))) {
      //   alert("请输入正确格式的邮箱与密码")
      //   return false
      // }
      axios.post(api.userLogin, this.userLogin)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            alert(data.errorMsg)
            return
          }
          this.toggleLogin()
          this.toggleModal()
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

<style lang="stylus">
*
  font-size 14px
.user-login
  font-size 15px
  background-color white
  box-shadow 0 2px 8px 6px rgba(61,61,61,0.50)
  .user-login-header
    margin 0
    padding 0
    display flex
    align-items center
    height 46px
    display flex
    color #4D4D4D
    border 0
    background-image radial-gradient(38% 99%, #8BA4FA 0%, #65B5E7 94%, #62B6E5 100%)
    box-shadow 0 1px 1px 0 rgba(140,140,140,0.50)
    // 关闭按钮
    .close
      position absolute
      left 15px
      cursor pointer
    p
      margin 0 auto
      color white
      display flex
  .user-login-body
    background-image: linear-gradient(-180deg, #FEFEFE 0%, #F7F7F7 74%);
    padding 0 39px
    .form-group
      width 230px
      margin 23px 0
      display flex
      justify-content center
      align-items center
      label
        margin 0 5px
      input
        box-sizing border-box
        display inline
        width 230px
        height 30px
        padding 5px
        border 1px solid #CCC
        box-shadow inset 0 0 2px 0 rgba(124,124,124,0.50)
        color: #CBCBCB
        &:focus
          box-shadow inset 0 0 4px 0 rgba(141,116,116,0.50)
    .user-login-actions
      padding-bottom 25px
      display flex
      justify-content space-between
      align-items center
      .button-login
        color #FFFFFF
        border none
        width 56px
        height 23px
        padding 5px
        border-radius 5px
        background-image linear-gradient(-144deg, #8BA4FB 16%, #73B6F8 61%, #62B7E6 100%)
        box-shadow 0 5px 10px 0 rgba(117,117,117,0.50)
      .user-login-other
        font-size 8px
        color #CBCBCB
        letter-spacing 1.37px
  .user-login-foot
    padding 23px 0
    display flex
    justify-content center
    background-image linear-gradient(-180deg, #FEFEFE 0%, #ECECEC 100%)
    box-shadow 0 -1px 1px 0 rgba(141,141,141,0.50);
    .other-login
      width 230px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      padding 5px 10px
      border-radius: 5px
      border none
      color #FFFFFF
      letter-spacing 2.75px
      background-image linear-gradient(-167deg, #8BA4FA 0%, #63B7E5 100%)
      box-shadow 0 3px 14px 0 rgba(124,124,124,0.50)
      img
        width 20px
        height 20px
</style>
