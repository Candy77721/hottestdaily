<template lang="html">
  <div class="header">
    <ul class="router">
      <li>
        <router-link to="/explore" exact>探索</router-link>
      </li>
      <li>
        <router-link to="/news" exact>广场</router-link>
      </li>
      <li>
        <router-link to="/topic" exact>话题</router-link>
      </li>
    </ul>
    <ul class="search">
      <li class="action action-input">
        <div class="tag-input-block">
          <i class="ion-ios-search"></i>
          <input type="input" placeholder="输入关键字搜索" class="tag-input">
        </div>
      </li>
    </ul>
    <ul class="user">
      <li>
        <span v-if="getIsLogin">已登陆</span>
        <button v-else class="login-button" @click="toLogin()">登录</button>
      </li>
    </ul>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getIsLogin'
    ])
  },
  methods: {
    ...mapActions([
      'toggleModal',
      'changeModalState'
    ]),
    toLogin: function () {
      this.changeModalState('UserLogin')
      this.toggleModal()
    }
  }
}
</script>

<style lang="stylus">
.header
  display flex
  justify-content space-between
  width 1000px
  margin auto
  .router
    display flex
    li
      margin 0 10px
  .search
    input
      padding 5px
      border none
      background #FDFDFD
      box-shadow inset 0 0 2px 0 rgba(0,0,0,0.50)
      border-radius 10px

  .user
    display flex
    li
      margin 0 10px
ul
  list-style-type none

</style>
