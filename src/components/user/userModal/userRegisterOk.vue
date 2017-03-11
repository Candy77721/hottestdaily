<template lang="html">
<div class="user-register-ok-body">
  <div class="info">
    <p class="info-info">激活账户连接已发送至您的邮箱</p>
    <p class="info-warn">请尽快激活以使用您的账号来获得更多功能</p>
  </div>
  <img src="../../../assets/letter-squashed.png" alt="">
  <div class="user-register-actions user-actions button">
    <a v-if="emailLink !== ''" :href="emailLink" class="user-actions-text" target="_blank">点击前往邮箱</a>
    <p v-else class="user-actions-text email-err">请您尽快激活</p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      emailLink: '',
      emailWebsite: {
        'qq.com': 'http://mail.qq.com',
        'gmail.com': 'http://mail.google.com',
        'sina.com': 'http://mail.sina.com.cn',
        '163.com': 'http://mail.163.com',
        '126.com': 'http://mail.126.com',
        'yeah.net': 'http://www.yeah.net/',
        'sohu.com': 'http://mail.sohu.com/',
        'tom.com': 'http://mail.tom.com/',
        'sogou.com': 'http://mail.sogou.com/',
        '139.com': 'http://mail.10086.cn/',
        'hotmail.com': 'http://www.hotmail.com',
        'live.com': 'http://login.live.com/',
        'live.cn': 'http://login.live.cn/',
        'live.com.cn': 'http://login.live.com.cn',
        '189.com': 'http://webmail16.189.cn/webmail/',
        'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
        'yahoo.cn': 'http://mail.cn.yahoo.com/',
        'eyou.com': 'http://www.eyou.com/',
        '21cn.com': 'http://mail.21cn.com/',
        '188.com': 'http://www.188.com/',
        'foxmail.com': 'http://www.foxmail.com',
        'outlook.com': 'http://www.outlook.com'
      }
    }
  },
  mounted () {
    const emailType = this.userGetUserInfo.email.split('@')[1]
    for (const i in this.emailWebsite) {
      if (i === emailType) {
        this.emailLink = this.emailWebsite[i]
      }
    }
  },
  computed: {
    ...mapGetters([
      'userGetUserInfo'
    ])
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
    .user-actions-text
      text-decoration none
    .email-err
      cursor default
</style>
