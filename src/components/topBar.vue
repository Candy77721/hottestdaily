<template lang="html">
  <div class="header-out">
    <div class="header">
      <ul class="menu">
        <li @click="toggleIsMenu()">
          <img src="../assets/icon/menu-topbar.png" alt="">
        </li>
        <li class="options">
          <ul class="router" v-show="isMenu">
            <router-link to="/explore" tag="li" exact>今日热词</router-link>
            <router-link to="/news" tag="li" exact>精选热文</router-link>
            <router-link to="/topic" tag="li" exact>专题追踪</router-link>
          </ul>
          <ul class="news-type">
            <router-link v-for="type in getAllTypes" :to="{name: 'newsType', params: { type: type }}" tag="li" exact>{{type}}</router-link>
          </ul>
        </li>
      </ul>
      <ul class="search">
        <input type="input" :placeholder="placeholder" @focus="toggleInputHolder()" @blur="toggleInputHolder()">
        <img src="../assets/icon/search-topbar.png" alt="">
      </ul>
      <ul class="user" @mouseover="toggleIsUserMenu()" @mouseout="toggleIsUserMenu()">
        <li>
          <img class="user-menu-icon" src="../assets/icon/user-tpobar.png" alt="">
        </li>
        <li>
          <ul v-show="!getIsLogin & getIsUserMenu" class="user-dropdown-list">
            <li @click="toLogin()">登陆</li>
          </ul>
          <ul v-show="getIsLogin & getIsUserMenu" class="user-dropdown-list">
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
        </li>
      </ul>
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
      placeholder: ''
    }
  },
  computed: {
    ...mapGetters([
      'getAllTypes',
      'getIsLogin',
      'getIsUserMenu'
    ])
  },
  methods: {
    ...mapActions([
      'changeModalState',
      'toggleModal',
      'toggleIsUserMenu'
    ]),
    toLogin: function () {
      this.changeModalState('UserLogin')
      this.toggleModal()
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
    }
  }
}
</script>

<style lang="stylus">
.header-out
  position relative
  height 50px
  width 1400px
  margin 0 auto
  z-index 1
  background-color white
  box-shadow 0 0 11px 0 rgba(116,116,116,0.50)
  .header
    width 1230px
    display flex
    justify-content space-between
    margin auto
    ul
      margin 0
      padding 0
      list-style-type none
    .menu
      margin-top 7px
      position relative
      cursor pointer
      img
        width 40px
        height 40px
      .options
        position absolute
        left 40px
        width 1150px
        font-size 18px
        letter-spacing 2.06px
        .router
          height 50px
          display flex
          background-image radial-gradient(30% 132%, #8BA4FB 0%, #73B6F8 51%, #62B7E6 100%)
          box-shadow 0 3px 5px 0 rgba(40,40,40,0.50)
          li
            width 100px
            height 100%
            margin 0 10px
            display flex
            align-items center
            justify-content center
            color white
            &:hover
              box-shadow 0 0 11px 0 rgba(116,116,116,0.50)
              font-weight 600
        .news-type
          height 50px
          display flex
          justify-content space-between
          background-color white
          box-shadow 0 3px 5px 0 rgba(40,40,40,0.50)
          li
            width 12.5%
            display flex
            align-items center
            justify-content center
            height 100%
            &:hover
              box-shadow 0 0 11px 0 rgba(116,116,116,0.50)
              font-weight 600
    .search
      margin-top 7px
      display flex
      align-items center
      input
        width 616px
        padding 6px
        border none
        background #FDFDFD
        box-shadow inset 0 0 2px 0 rgba(0,0,0,0.50)
        border-radius 10px
      img
        height 40px
        width 40px
        margin-left -30px
        margin-top 3px
        cursor pointer
    .user
      box-sizing: border-box;
      position relative
      height 40px
      cursor pointer
      .user-menu-icon
        width 40px
        height 40px
        padding-top 7px
      .user-dropdown-list
        width 160px
        // top 40px
        left -70px
        font-size 18px
        display flex
        flex-direction column
        align-items center
        position absolute
        list-style none
        color white
        letter-spacing: 2.06px
        background-image radial-gradient(85% 96%, #62ABE5 0%, #75A4F3 69%, #75A4F3 69%, #75A4F3 69%, #7BA2F7 90%, #84A8F7 100%)
        box-shadow 0 2px 4px 0 rgba(0,0,0,0.50)
        li
          height 50px
          display flex
          align-items center
          img
            width 40px
            height 40px
            margin 0 5px
</style>
