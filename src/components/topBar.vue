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
    <ul class="actions">
      <li>
        搜索
      </li>
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
  .actions
    display flex
    li
      margin 0 10px
ul
  list-style-type none

</style>
