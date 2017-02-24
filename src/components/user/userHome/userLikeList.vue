<template lang="html">
<div class="user-like">
  <p class="title">我喜欢的：</p>
  <div class="user-like-list">
    <like-list-item class="user-like-button user-like-itme"
      v-for="item in getLikeList"
      :key="item.word"
      :item="item"
    ></like-list-item>
    <div class="user-like-button user-like-add" @click="toggleShowLikeSetting()">
    </div>
  </div>
  <div class="like-setting" v-if="isShowLikeSetting">
    <div class="body">
      <div class="user-unlike-list">
        <like-list-item class="user-unlike-button"
          v-for="item in getunLikeList"
          :key="item.word"
          :item="item"
        ></like-list-item>
      </div>
      <div class="tips">
        <p @click="toggleShowAddActions()">没有找到喜欢的？</p>
      </div>
    </div>
    <div class="user-add" v-if="isShowAddActions">
      <p>手动添加！</p>
      <div class="user-add-actions">
        <input type="text" class="user-add-input" placeholder="2-4个字" v-model="userAddInput">
        <div class="user-add-action" @click="addLike()">
        </div>
      </div>
    </div>
    <div class="cor"></div>
    <div class="cor_s"></div>
  </div>
</div>
</template>

<script>
import * as api from '../../../api/api'
import { mapGetters, mapActions } from 'vuex'

import likeListItem from './userLikeListItem.vue'

export default {
  data () {
    return {
      userAddinput: '',
      isShowLikeSetting: false,
      isShowAddActions: false
    }
  },
  mounted () {
    axios.get(api.userGetLike)
      .then(res => {
        const data = res.data
        if (data.errorCode === 0) {
          this.userUpdateLikeListAll(data.data)
        } else {
          console.log(data.errorMsg)
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    ...mapGetters([
      'userGetUserInfo'
    ]),
    getLikeList: function () {
      return this.userGetUserInfo.likeList.filter(item => item.like)
    },
    getunLikeList: function () {
      return this.userGetUserInfo.likeList.filter(item => !item.like)
    }
  },
  methods: {
    ...mapActions([
      'userUpdateLikeListAll'
    ]),
    toggleShowAddActions: function () {
      this.isShowAddActions = !this.isShowAddActions
    },
    toggleShowLikeSetting: function () {
      this.isShowLikeSetting = !this.isShowLikeSetting
    },
    addLike: function () {
      if (!this.regUserAddInput(this.userAddInput)) {
        alert('请输入2-4个字')
      } else {
        axios.post(api.userLikeAdd, {
          'word': this.userAddInput
        })
          .then(res => {
            const data = res.data
            if (data.errorCode) {
              alert(data.errorMsg)
            } else {
              this.userUpdateLikeList({
                'word': this.item.word,
                'like': true
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    regUserAddInput: function (input) {
      const reg = /^(([\u4e00-\u9fa5])|(\w)){2,4}$/
      return reg.test(input)
    }
  },
  components: {
    likeListItem: likeListItem
  }
}
</script>

<style lang="stylus" scoped>
.user-like
  width 100%
  margin-top 48px
  position relative
  .title
    font-size 14px
    color #797979
    letter-spacing 1.6px
  .user-like-list
    width calc(100% - 94px)
    margin-left 94px
    display flex
    flex-wrap wrap
    justify-content flex-start
    .user-like-button
      width 66px
      height 40px
      position relative
      margin-bottom 29px
      border-radius 5px
    .user-like-itme
      background #80a3dc
      &:not(:nth-child(6n))
        margin-right 44px
      p
        width 100%
        height 100%
        margin 0
        display flex
        justify-content center
        align-items center
        font-size 13px
        color #ffffff
        letter-spacing 1.6px
        cursor default
    .user-like-add
      background #cdcdcd
      cursor pointer
      &:before
      &:after
        content ''
        height 4px
        width 26px
        display block
        background #f7f7f7
        border-radius 10px
        position absolute
        top 18px
        left 20px
      &:after
        height 26px
        width 4px
        top 7px
        left 31px
  .like-setting
    position absolute
    left calc(100% + 14px)
    top calc(100% - 105px)
    z-index 0
    .body
      width 254px
      box-sizing border-box
      position relative
      margin 8px
      padding 20px 13px 10px 13px
      background-color #ededed
      z-index 2
      box-shadow 0 1px 5px 0 rgba(82,82,82,0.50)
      border-radius 10px
      .user-unlike-list
        display flex
        flex-wrap wrap
        justify-content flex-start
      .user-unlike-button
        width 66px
        height 40px
        margin-bottom 19px
        position relative
        border-radius 5px
        background #80a3dc
        &:not(:nth-child(3n))
          margin-right 14px
      .tips
        display flex
        justify-content center
        p
          margin 0
          font-size 14px
          color #969696
          letter-spacing 1.6px
          cursor pointer
    .user-add
      width 242px
      height 95px
      margin 0 8px
      padding 30px 12px 0 0
      position absolute
      top calc(100% - 40px)
      display flex
      flex-direction column
      align-items center
      background #80a3dc
      border-radius 10px
      p
        margin 8px 0
        font-size 14px
        color #ffffff
        letter-spacing 1.6px
      .user-add-actions
        width 242px
        height 60px
        display flex
        justify-content flex-end
        margin-bottom 21px
        .user-add-input
          width 113px
          color #ededed
          background-color transparent
          border none
          border-bottom 1px solid #ffffff
          &::placeholder
            color #ededed
        .user-add-action
          width 66px
          height 40px
          margin-left 18px
          position relative
          border-radius 5px
          background #cdcdcd
          cursor pointer
          &:before
          &:after
            content ''
            height 4px
            width 26px
            display block
            background #80a3dc
            border-radius 10px
            position absolute
            top 18px
            left 20px
          &:after
            height 26px
            width 4px
            top 7px
            left 31px
    .cor
    .cor_s
      width 16px
      height 16px
      left 0
      top 50px
      position absolute
      background-color #ededed
      z-index 2
      transform rotate(-45deg)
    .cor_s
      z-index 1
      box-shadow 0 1px 5px 0 rgba(82,82,82,0.50)
</style>
