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

export default {
  name: 'userHome',
  data () {
    return {
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
    ])
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
