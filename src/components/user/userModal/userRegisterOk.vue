<template lang="html">
<div class="user-register-ok-body">
  <div class="info">
    <p>激活账户连接已发送至您的邮箱</p>
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
    display flex
    align-items center
    p
      margin 0
      font-size 14px
      font-weight bold
      letter-spacing 3px
  img
    width 120px
    height 120px
  .user-register-actions
    margin 20px 0
</style>
