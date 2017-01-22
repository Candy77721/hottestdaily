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
          <router-link to="/news" tag="li">
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
        <input type="input" :placeholder="placeholder" v-model="searchValue" @focus="toggleInputHolder()" @blur="toggleInputHolder()">
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
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'newsGetShowTypes',
      'newsGetAllTypes',
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

<style lang="stylus">
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
      display flex
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
    .news-type
      width 1100px
      height 50px
      display flex
      position absolute
      top 50px
      left 95px
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
