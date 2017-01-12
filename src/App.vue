<template>
  <div id="app">
    <top-logo></top-logo>
    <top-bar></top-bar>

    <transition name=''>
      <router-view></router-view>
    </transition>

    <transition name="slide-right">
      <div class="" v-show="getIsModal">
        <user-modal></user-modal>
        <div class="user-modal-overlay">
        </div>
      </div>
    </transition>
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
#app
  min-height 100%
  min-width 100%
  background url('./assets/back-img.png')
  background-size cover
  background-attachment fixed
.user-modal-overlay
  position: fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(0,0,0,0.62)
  z-index 10
.slide-righte-enter
.slide-righte-leave-active
  transform translateX(20%)
  opacity 0
  transition all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9)
.slide-right-leave
.slide-right-enter-active
  transform translateX(0)
  opacity 1
</style>
