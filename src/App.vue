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

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    const name = 'csrftoken'
    const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) {
      const cookies = unescape(arr[2])
      axios.defaults.headers.post['X-CSRFToken'] = cookies
    } else {
      throw new Error('cookies校验失败')
    }
  },
  computed: {
    ...mapGetters([
      'getIsModal'
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
