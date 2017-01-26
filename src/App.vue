<template>
  <div id="app">
    <top-logo></top-logo>
    <top-bar></top-bar>

    <div class="main">
      <transition name=''>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

      <div class="">
        <transition name="modal-slide-top">
          <div class="">
            <user-modal v-show="userGetIsModal"></user-modal>
            <modal-graph v-show="rankGetShowModalGraph"></modal-graph>
          </div>
        </transition>
          <div class="modal-overlay" v-show="showModalOverlay"></div>
      </div>
  </div>
</template>

<script>
// 公共组件
import TopLogo from './components/topLogo.vue'
import TopBar from './components/topBar.vue'
// 用户模态框
import UserModal from './pages/userModal.vue'
// 图表模态框
import ModalGraph from './pages/modalGraph.vue'

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
    if (!this.userGetIsLogin) {
      axios.get(api.userIsLogin)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            console.log(data.errorMsg)
          } else {
            this.userToggleLogin()
            this.userChangeUsername(data.username)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    ...mapGetters([
      'userGetIsModal',
      'userGetIsLogin',
      'rankGetShowModalGraph'
    ]),
    showModalOverlay: function () {
      return this.userGetIsModal || this.rankGetShowModalGraph
    }
  },
  methods: {
    ...mapActions([
      'userToggleLogin',
      'userChangeUsername'
    ])
  },
  components: {
    TopLogo: TopLogo,
    TopBar: TopBar,
    UserModal: UserModal,
    ModalGraph: ModalGraph
  }
}
</script>

<style lang="stylus">
// 去掉input边框
*
input:focus
  outline none
*
  font-family "Microsoft Yahei"
html
body
  margin 0
  height 100%
  .main
    width 1210px
    margin auto
    box-shadow:0 0 20px 15px rgba(255,255,255,1)
    background-color white
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
.modal-overlay
  position: fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(0,0,0,0.62)
  z-index 10
// 动画
.modal-slide-top-enter
.modal-slide-top-leave-active
  transform translateY(-20px)
  opacity 0
.modal-slide-top-enter-active
.modal-slide-top-leave-active
  transition all .3s

</style>
