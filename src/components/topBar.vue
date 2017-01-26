<template lang="html">
  <div class="header-out">
    <div class="header">
      <ul class="menu dropdown" @mouseover="toggleIsMenu()" @mouseout="toggleIsMenu()">
        <li>
          <img class="menu-icon dropdown-icon" src="../assets/icon/menu-topbar.png" alt="">
        </li>
        <li class="menu-dropdown-list dropdown-list" v-show="isMenu">
          <router-link to="/explore" tag="li" exact>
            <img src="../assets/icon/menu-explore.png" alt="">
            <span>今日热词</span>
          </router-link>
          <router-link :to="{name: 'newsType', params: { type: newsGetNowType }}" tag="li">
            <img src="../assets/icon/menu-news.png" alt="">
            <span>时下热文</span>
          </router-link>
          <router-link to="/rank" tag="li" exact>
            <img src="../assets/icon/menu-rank.png" alt="">
            <span>热词榜</span>
          </router-link>
        </li>
      </ul>
      <ul class="search">
        <input type="input" :placeholder="placeholder" v-model="searchValue" @keyup.enter="search()" @focus="toggleInputHolder()" @blur="toggleInputHolder()">
        <img src="../assets/icon/search-topbar.png" alt="" @click="search()">
      </ul>
      <ul class="user dropdown" @mouseover="userToggleIsUserMenu()" @mouseout="userToggleIsUserMenu()">
        <li>
          <img class="user-menu-icon dropdown-icon" src="../assets/icon/user-tpobar.png" alt="">
        </li>
        <ul v-show="!userGetIsLogin & userGetIsUserMenu" @click="toLogin()" class="user-dropdown-list dropdown-list">
          <li>登陆</li>
        </ul>
        <ul v-show="userGetIsLogin & userGetIsUserMenu" class="user-dropdown-list dropdown-list">
          <li>
            <img src="../assets/icon/user.png" alt="">
            <span>个人中心</span>
          </li>
          <li>
            <img src="../assets/icon/star.png" alt="">
            <span>我的收藏</span>
          </li>
          <li>
            <img src="../assets/icon/watch.png" alt="">
            <span>我的关注</span>
          </li>
        </ul>
      </ul>

      <div class="location">
        <div class="location-explore" v-if="location === 'explore'">
          <svg width="92px" height="138px" viewBox="98 188 92 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="14.5595426%" y1="-2.34797445%" x2="89.9340931%" y2="100%" id="linearGradient-1">
                <stop stop-color="#758DEC" offset="0%"></stop>
                <stop stop-color="#71B5F5" offset="100%"></stop>
              </linearGradient>
              <polygon id="path-2" points="0 0 40 0 40 130 20 108.078947 0 130"></polygon>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.463674532   0 0 0 0 0.463674532   0 0 0 0 0.463674532  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <g id="今日热词" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(102.000000, 190.000000)">
              <g id="Rectangle">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
              </g>
              <text font-family="PingFangSC-Medium, PingFang SC" font-size="18" font-weight="400" line-spacing="25" letter-spacing="2.06500006" fill="#FFFFFF">
                <tspan x="11" y="23">今</tspan>
                <tspan x="11" y="48">日</tspan>
                <tspan x="11" y="73">热</tspan>
                <tspan x="11" y="98">词</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="location-news" v-if="location === 'newsType'">
          <svg width="93px" height="138px" viewBox="98 188 93 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="14.5595426%" y1="-2.34797445%" x2="89.9340931%" y2="100%" id="linearGradient-1">
                <stop stop-color="#758DEC" offset="0%"></stop>
                <stop stop-color="#71B5F5" offset="100%"></stop>
              </linearGradient>
              <polygon id="path-2" points="0 0 40 0 40 130 20 108.078947 0 130"></polygon>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.463674532   0 0 0 0 0.463674532   0 0 0 0 0.463674532  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <g id="时下热文" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(102.000000, 190.000000)">
              <g id="Rectangle">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
              </g>
              <text font-family="PingFangSC-Medium, PingFang SC" font-size="18" font-weight="400" line-spacing="25" letter-spacing="2.06500006" fill="#FFFFFF">
                <tspan x="11" y="23">时</tspan>
                <tspan x="11" y="48">下</tspan>
                <tspan x="11" y="73">热</tspan>
                <tspan x="11" y="98">文</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="location-rank" v-if="location === 'rank'">
          <svg width="73px" height="113px" viewBox="98 188 73 113" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="14.5595426%" y1="-2.34797445%" x2="89.9340931%" y2="100%" id="linearGradient-1">
                <stop stop-color="#758DEC" offset="0%"></stop>
                <stop stop-color="#71B5F5" offset="100%"></stop>
              </linearGradient>
              <polygon id="path-2" points="0 0 40 0 40 105 20 83.0789474 0 105"></polygon>
              <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.463674532   0 0 0 0 0.463674532   0 0 0 0 0.463674532  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <g id="热词榜" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(102.000000, 190.000000)">
              <g id="Rectangle">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
              </g>
              <text font-family="PingFangSC-Medium, PingFang SC" font-size="18" font-weight="400" line-spacing="25" letter-spacing="2.06500006" fill="#FFFFFF">
                <tspan x="11" y="23">热</tspan>
                <tspan x="11" y="48">词</tspan>
                <tspan x="11" y="73">榜</tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>

      <transition name="top-bar-slide-top">
        <ul class="news-type" v-if="newsGetShowTypes">
          <ul class="news-type-background">
            <router-link v-for="type in newsGetAllTypes" :to="{name: 'newsType', params: { type: type }}" tag="li" exact>{{type}}</router-link>
          </ul>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      // 是否展示菜单
      isMenu: false,
      // 搜索框提示
      placeholder: '',
      // 搜索框内容
      searchValue: '',
      // 用户定位展示类型
      location: ''
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' (to, from) {
      this.location = to.name
    }
  },
  computed: {
    ...mapGetters([
      'newsGetShowTypes',
      'newsGetAllTypes',
      'newsGetNowType',
      'userGetIsLogin',
      'userGetIsUserMenu'
    ])
  },
  methods: {
    ...mapActions([
      'userChangeModalState',
      'userToggleModal',
      'userToggleIsUserMenu'
    ]),
    toLogin: function () {
      this.userChangeModalState('UserLogin')
      this.userToggleModal()
    },
    toggleIsMenu () {
      this.isMenu = !this.isMenu
    },
    toggleInputHolder () {
      if (this.placeholder === '') {
        this.placeholder = '请输入文字'
      } else {
        this.placeholder = ''
      }
    },
    search () {
      this.$router.push({ name: 'search', params: { search: this.searchValue }})
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-out
  height 50px
  width 1284px
  margin 0 auto
  position relative
  z-index 2
  .header
    width 1230px
    padding 0 27px
    position relative
    display flex
    justify-content space-between
    background-color white
    box-shadow 0 4px 5px 0 rgba(40,40,40,0.50)
    &:before
      content ''
      width 60px
      height 50px
      position absolute
      top 0
      left -60px
      background linear-gradient(-90deg, white 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0) 100%)
    &:after
      content ''
      width 60px
      height 50px
      position absolute
      top 0
      right -60px
      background linear-gradient(90deg, white 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0) 100%)
    // 下拉组件共用，可以提取
    .dropdown
      height 40px
      position relative
      box-sizing border-box
      cursor pointer
      .dropdown-icon
        width 40px
        height 40px
        padding 5px 0
      .dropdown-list
        width 160px
        top 50px
        font-size 18px
        display flex
        flex-direction column
        align-items center
        position absolute
        z-index -1
        color white
        letter-spacing: 2.06px
        background-image radial-gradient(85% 96%, #62ABE5 0%, #75A4F3 69%, #75A4F3 69%, #75A4F3 69%, #7BA2F7 90%, #84A8F7 100%)
        box-shadow 0 2px 4px 0 rgba(0,0,0,0.50)
        li
          height 50px
          width 140px
          display flex
          justify-content flex-start
          align-items center
          img
            width 40px
            height 40px
            margin 0 5px
          span
            margin-left 5px
    .menu
      .menu-dropdown-list
        left 0
    ul
      margin 0
      padding 0
      list-style-type none
    .search
      height 40px
      margin 5px 0
      flex 1
      display flex
      justify-content center
      align-items center
      input
        width 616px
        padding 10px
        border none
        font-size 18px
        background #FDFDFD
        box-shadow inset 0 0 2px 0 rgba(0,0,0,0.50)
        border-radius 10px
      img
        height 40px
        width 40px
        margin-left -30px
        cursor pointer
    .user
      .user-dropdown-list
        right 0px
    .location
      position absolute
      top 48px
      left 24px
      z-index -2
    .news-type
      width 1100px
      height 50px
      display flex
      position absolute
      top 50px
      left 93px
      justify-content space-between
      background-color white
      color #A3A3A3
      z-index -2
      cursor pointer
      &:before
        content ''
        width 1100px
        height 60px
        position absolute
        top 0
        left 0
        background-image url('../assets/menu-news-type-shadow.png')
        background-size 1100px 60px
        z-index -2
      .news-type-background
        width 100%
        height 100%
        padding 0 5%
        display flex
        background-color white
        .router-active
          color #717171
          box-shadow 0 0 11px 0 rgba(116,116,116,0.50)
          font-weight 600
          z-index 1
        li
          height 100%
          width 12.5%
          display flex
          align-items center
          justify-content center
          background-color white
          &:hover
            color #79B3F9
// 动画
.top-bar-slide-top-enter
.top-bar-slide-top-leave-active
  transform translateY(-55px)
.top-bar-slide-top-leave-active
  position absolute
.router
.news-type
  transition all 1.5s
</style>
