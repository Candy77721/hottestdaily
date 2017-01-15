<template>
  <div id="app">
    <top-logo></top-logo>
    <top-bar></top-bar>

    <transition name=''>
      <router-view></router-view>
    </transition>


      <div class="">
        <transition name="user-modal-slide-top">
          <user-modal v-show="getIsModal"></user-modal>
        </transition>
          <div class="user-modal-overlay" v-show="getIsModal"></div>
      </div>
  </div>
</template>

<script>
// 公共组件
import TopLogo from './components/topLogo.vue'
import TopBar from './components/topBar.vue'
// 三个页面
import Graph from './pages/graph.vue'
import News from './pages/news.vue'
import Topic from './pages/topic.vue'
// 用户模态框
import UserModal from './pages/userModal.vue'

import { mapGetters, mapActions } from 'vuex'
import * as api from './api/api.js'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    // CRSF 处理
    // const name = 'csrftoken'
    // const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    // if (arr != null) {
    //   const cookies = unescape(arr[2])
    //   axios.defaults.headers.post['X-CSRFToken'] = cookies
    // } else {
    //   throw new Error('cookies校验失败')
    // }
    // 检测用户状态
    if (!this.getIsLogin) {
      axios.get(api.userIsLogin)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            console.log(data.errorMsg)
          } else {
            this.toggleLogin()
            this.changeUsername(data.username)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getIsModal',
      'getIsLogin'
    ])
  },
  methods: {
    ...mapActions([
      'toggleLogin',
      'changeUsername'
    ])
  },
  components: {
    TopLogo: TopLogo,
    TopBar: TopBar,
    Graph: Graph,
    News: News,
    Topic: Topic,
    UserModal: UserModal
  }
}
</script>

<style lang="stylus">
// 去掉input边框
*
input:focus
  outline none
html
body
  height 100%
#app:before
    content: ''
    position: fixed // 代替background-attachment
    width 100%
    height 100%
    top 0
    left 0
    background-color white
    background url('./assets/back-img.png') no-repeat center center
    background-size cover
    z-index: -1
.user-modal-overlay
  position: fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(0,0,0,0.62)
  z-index 10
// 动画
.user-modal-slide-top-enter
.user-modal-slide-top-leave-active
  transform translateY(-20px)
  opacity 0
.user-modal-slide-top-enter-active
.user-modal-slide-top-leave-active
  transition all .3s

</style>
