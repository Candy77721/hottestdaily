<template lang="html">
<div class="user-modal">
  <div class="user-modal-header">
    <img class="action-icon" v-if="showClose" src="../assets/icon/close-white.png" alt="" @click="userToggleModal()">
    <img class="action-icon" v-else  src="../assets/icon/return-white.png" alt="" @click="userChangeModalState('UserLogin')">
    <p>{{title}}</p>
  </div>
  <component :is="userGetModalState"></component>
  <div class="user-modal-foot">
    <div class="other-login button">
      <span>使用QQ快捷登陆</span>
      <img src="../assets/icon/qq.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
// 用户组件
import UserLogin from '../components/user/userModal/userLogin.vue'
import UserRegister from '../components/user/userModal/userRegister.vue'
import UserRegisterOk from '../components/user/userModal/userRegisterOk.vue'
import UserForget from '../components/user/userModal/userForget.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '登陆账号'
    }
  },
  watch: {
    userGetModalState (newState) {
      if (newState === 'UserLogin') this.title = '账号登陆'
      if (newState === 'UserRegister') this.title = '账号注册'
      if (newState === 'UserForget') this.title = '修改密码'
      if (newState === 'UserRegisterOk') this.title = '注册成功'
    }
  },
  computed: {
    ...mapGetters([
      'userGetModalState'
    ]),
    showClose: function () {
      return !!((this.userGetModalState === 'UserLogin') || (this.userGetModalState === 'UserRegisterOk'))
    }
  },
  methods: {
    ...mapActions([
      'userToggleModal',
      'userChangeModalState'
    ])
  },
  components: {
    UserLogin: UserLogin,
    UserRegister: UserRegister,
    UserRegisterOk: UserRegisterOk,
    UserForget: UserForget
  }
}
</script>

<style lang="stylus">
.user-modal
  position fixed
  top 50%
  left 50%
  margin-top -150px
  margin-left -155px
  width 310px
  background-color #fff
  z-index 99
  font-size 12px
  letter-spacing 2px
  box-shadow 0 2px 8px 6px rgba(61,61,61,0.50)
  .user-modal-header
    margin 0
    padding 0
    display flex
    align-items center
    height 50px
    display flex
    color #4D4D4D
    border 0
    background-image linear-gradient(-90deg, #8BA4FB 3%, #62B7E6 100%)
    box-shadow 0 2px 5px 0 rgba(161,161,161,0.50)
    .action-icon
      position absolute
      left 15px
      top 15px
      cursor pointer
    p
      margin 0 auto
      font-size 18px
      font-weight bold
      letter-spacing 4px
      color #FFF
      display flex
  .user-modal-foot
    padding 20px 0
    display flex
    justify-content center
    background-image linear-gradient(-180deg, #FEFEFE 0%, #ECECEC 100%)
    box-shadow 0 -1px 1px 0 rgba(141,141,141,0.50)
    .other-login
      width 230px
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      padding 5px 10px
      border-radius: 5px
      border none
      color #FFFFFF
      font-size 14px
      letter-spacing 3px
      background-image linear-gradient(-90deg, #8BA4FB 3%, #62B7E6 100%)
      box-shadow 0 2px 5px 0 rgba(161,161,161,0.50)
      img
        width 20px
        height 20px
  .button
    cursor pointer
// 子组件样式
.form-group
  label
    margin 0 5px
  input
    box-sizing border-box
    display inline
    width 230px
    height 30px
    padding 5px
    border 1px solid #EBEBEB
    color #535353
    letter-spacing 2px
    outline none
    &::placeholder
      color #EBEBEB
    &:focus
      border 1px solid #BCBCBC
      &::placeholder
        color #BCBCBC
    &:-webkit-autofill
      -webkit-box-shadow 0 0 0px 1000px white inset
  .show-password
    position absolute
    right 5px
    top 2px
.user-actions
  width 230px
  height 30px
  display flex
  justify-content center
  align-items center
  background-image linear-gradient(-90deg, #8BA4FB 3%, #62B7E6 100%)
  box-shadow 0 2px 5px 0 rgba(161,161,161,0.50)
  border-radius 5px
  p
    color #FFFFFF
    font-size 18px
    font-weight bold
    letter-spacing 4px
// 错误动画
@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.errormsg {
  animation-name: tada;
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
