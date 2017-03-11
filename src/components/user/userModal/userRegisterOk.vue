<template lang="html">
<div class="user-register-ok-body">
  <div class="info">
    <p class="info-info">激活账户连接已发送至您的邮箱</p>
    <p class="info-warn">请尽快激活以使用您的账号来获得更多功能</p>
  </div>
  <img src="../../../assets/letter-squashed.png" alt="">
  <div class="user-register-actions user-actions button">
    <p>点击前往邮箱</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-register-ok-body
  display flex
  flex-direction column
  align-items center
  .info
    height 46px
    margin-top 5px
    display flex
    flex-direction column
    justify-content center
    align-items center
    p
      text-align center
    .info-info
      margin 0
      font-size 14px
      font-weight bold
      letter-spacing 3px
    .info-warn
      margin-top 5px
      font-size 12px
  img
    width 120px
    height 120px
  .user-register-actions
    margin 20px 0
</style>
