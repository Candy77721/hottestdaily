<template lang="html">
  <div class="user-home">
    <user-info></user-info>
    <user-like-list></user-like-list>
    <user-subscription></user-subscription>
    <user-subscription-list></user-subscription-list>
  </div>
</template>

<script>
import userInfo from '../components/user/userHome/userInfo.vue'
import userLikeList from '../components/user/userHome/userLikeList.vue'
import userSubscription from '../components/user/userHome/userSubscription.vue'
import userSubscriptionList from '../components/user/userHome/userSubscriptionList.vue'

import { mapGetters, mapActions } from 'vuex'
import * as api from '../api/api'

export default {
  name: 'userHome',
  data () {
    return {
    }
  },
  mounted () {
    if (!this.userGetIsLogin) {
      this.getUserInfo()
    }
  },
  computed: {
    ...mapGetters([
      'userGetIsLogin'
    ])
  },
  methods: {
    ...mapActions([
      'userToggleLogin',
      'userChangeUsername',
      'userChangeEmail',
      'userToggleAcceptPost'
    ]),
    /*
    获取用户状态，如果没有登陆则重定向到主页
    */
    getUserInfo: function () {
      axios.get(api.userGetInfo)
        .then(res => {
          const data = res.data
          if (data.errorCode && data.errorCode !== 0) {
            this.router.push({ name: 'explore' })
            console.log(data)
          } else {
            this.userToggleLogin()
            this.userChangeUsername(data.username)
            this.userChangeEmail(data.email)
            this.userToggleAcceptPost(data.acceptPost)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    userInfo: userInfo,
    userLikeList: userLikeList,
    userSubscription: userSubscription,
    userSubscriptionList: userSubscriptionList
  }
}
</script>

<style lang="stylus" scoped>
.user-home
  height 500px
  padding 90px 280px 0px 220px
</style>
