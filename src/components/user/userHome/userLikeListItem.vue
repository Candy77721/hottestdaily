<template lang="html">
  <div class="" @mouseover="toggleButton(true)" @mouseout="toggleButton(false)">
    <p>{{item.word}}</p>
    <div class="icon" v-if="item.like" @click="toggleLike(false)">
      <img v-show="isInButton" src="../../../assets/icon/user-like-delete.png" alt="" @mouseover="toggleButton(true)" @mouseout="toggleButton(false)">
    </div>
    <div class="icon" v-else @click="toggleLike(true)">
      <img v-show="isInButton" src="../../../assets/icon/user-like-add.png" alt="">
    </div>
  </div>
</template>

<script>
import * as api from '../../../api/api'
import { mapActions } from 'vuex'

/*
此组件逻辑为
如果为用户喜欢的标签，则鼠标移入才显式icon
如果是用户还未喜欢的标签，则始终显式icon
*/
export default {
  data () {
    return {
      isInButton: false
    }
  },
  beforeMount () {
    if (!this.item.like) {
      this.isInButton = true
    }
  },
  watch: {
    'isInButton': function () {
      if (!this.item.like) {
        this.isInButton = true
      }
    }
  },
  props: ['item'],
  methods: {
    ...mapActions([
      'userUpdateLikeList'
    ]),
    /*
    是否显示icon
    */
    toggleButton: function (bool) {
      this.isInButton = bool
    },
    /*
    更新用户喜欢列表 - 单个
    增加 或 删除
    */
    toggleLike: function (bool) {
      // 增加关注内容
      if (bool) {
        axios.post(api.userLikeAdd, {
          'word': this.item.word
        })
          .then(res => {
            const data = res.data
            if (data.errorCode) {
              alert(data.errorMsg)
            } else {
              this.userUpdateLikeList({
                'word': this.item.word,
                'like': bool
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        // 删除关注内容
        axios.post(api.userLikeDelete, {
          'word': this.item.word
        })
          .then(res => {
            const data = res.data
            if (data.errorCode) {
              alert(data.errorMsg)
            } else {
              this.userUpdateLikeList({
                'word': this.item.word,
                'like': bool
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
.icon
  position absolute
  top -10px
  right -10px
  cursor pointer
</style>
