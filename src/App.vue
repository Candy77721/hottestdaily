<template>
  <div id="app">
    <header>
      <top-logo :style="toplogoStyle"></top-logo>
      <top-bar ref="topBar" :style="topbarStyle"></top-bar>
    </header>
    <div class="main">
      <transition name=''>
        <keep-alive include="explore,news,rank">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

      <div class="">
        <transition name="modal-slide-top">
          <user-modal v-show="userGetIsModal"></user-modal>
        </transition>
        <transition name="modal-slide-top">
          <modal-graph-rank v-if="rankGetShowModalGraph"></modal-graph-rank>
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
// 排行榜图表模态框
import ModalGraphRank from './components/modalGraph/modalGraphRank.vue'

import { mapGetters, mapActions } from 'vuex'
import * as api from './api/api.js'

export default {
  name: 'app',
  data () {
    return {
      top: 140,
      topbarStyle: {
        position: 'relative',
        left: '0'
      },
      toplogoStyle: {
        marginTop: '0'
      }
    }
  },
  watch: {
    // 如果前往敏感页面且没有登陆，则重定向
    '$route': function (newValue) {
      if (newValue.name === 'userHome') {
        if (!this.userGetIsLogin) {
          this.$router.replace({ name: 'explore' })
          this.userToggleModal()
        }
      }
    },
    // 监听用户登陆状态，如果登陆则请求用户信息
    'userGetIsLogin': function (newStatus) {
      if (newStatus) {
        axios.get(api.userGetInfo)
          .then(res => {
            const data = res.data
            if (data.errorCode !== 0) {
              console.log(data.errorMsg)
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
    /*
    检测用户状态，如果登陆则更新信息
    如果没有登陆且在需要登录的页面，则跳转到首页，打开登陆框，并提示登陆
    */
    if (!this.userGetIsLogin) {
      axios.get(api.userGetInfo)
        .then(res => {
          const data = res.data
          if (data.errorCode !== 0) {
            console.log(data.errorMsg)
            // TODO: 需要改造为更通用的方法
            if (this.$route.name === 'userHome') {
              this.$router.replace({ name: 'explore' })
              this.userToggleModal()
            }
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
    // 获得topbar距顶端高度
    // TODO: 浏览器兼容性问题 暂时写死
    // this.top = this.$refs.topBar.$el.offsetTop
    // 监听滚动事件
    window.addEventListener('scroll', this.sticky)
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
      'userToggleModal',
      'userToggleLogin',
      'userChangeUsername',
      'userChangeEmail',
      'userToggleAcceptPost'
    ]),
    sticky () {
      if (this.top <= window.scrollY) {
        this.topbarStyle.position = 'fixed'
        this.toplogoStyle.marginTop = '50px'
        if (window.innerWidth >= 1284) {
          this.topbarStyle.left = 'calc(50% - 642px)'
        }
      } else {
        this.topbarStyle.position = 'relative'
        this.topbarStyle.left = '0'
        this.toplogoStyle.marginTop = '0'
      }
    }
  },
  components: {
    TopLogo: TopLogo,
    TopBar: TopBar,
    UserModal: UserModal,
    ModalGraphRank: ModalGraphRank
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
  #app
    position relative
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
    background url('./assets/back-img.jpg') no-repeat center center
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
