<template lang="html">
  <div class="rank-search">
    <div class="rank-search-main">
      <input type="input" v-model="searchKeyword" @keyup.enter="isKeywordInGraph()">
      <div class="rank-search-button" @click="isKeywordInGraph()">
        <span>
          查询
        </span>
      </div>
    </div>
    <div class="rank-search-warn" v-if="!keywordInGraph">
      <div class="body">
        <img src="../../assets/icon/search-warn.png" alt="">
        <span>未查询到该词语</span>
      </div>
      <div class="cor"></div>
      <div class="cor_s"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      searchKeyword: '',
      keywordInGraph: true
    }
  },
  beforeDestory () {
    document.body.removeEventListener('mouseup', this.changeKeywordGraphTrue)
  },
  watch: {
    keywordInGraph: function (val) {
      if (!val) {
        // 绑定全局提示框事件
        document.body.addEventListener('mouseup', this.changeKeywordGraphTrue)
      } else {
        // 绑定全局取消提示框事件
        document.body.removeEventListener('mouseup', this.changeKeywordGraphTrue)
      }
    }
  },
  computed: {
    ...mapGetters([
      'rankGetGraph'
    ])
  },
  methods: {
    ...mapActions([
      'rankChangeSearchKeywordIndex'
    ]),
    // 查询搜索的关键词是否在 graph 里存在，不存在的话则提示
    isKeywordInGraph: function () {
      const index = this.rankGetGraph.findIndex(ele => ele.content === this.searchKeyword)
      if (index !== -1) {
        this.rankChangeSearchKeywordIndex(index)
      } else {
        // 显示提示框
        this.keywordInGraph = false
      }
    },
    changeKeywordGraphTrue: function (e) {
      this.keywordInGraph = true
    }
  }
}
</script>

<style lang="stylus">
.rank-search
  display flex
  .rank-search-main
    width 170px
    height 27px
    margin 30px 0
    display flex
    justify-content center
    align-items center
    input
      width 140px
      height 21px
      padding 3px
      border none
      background #FCFCFD
      box-shadow inset 0 0 2px 0 rgba(0,0,0,0.50)
      border-radius 10px
    .rank-search-button
      width 50px
      height 27px
      margin-left -27px
      display flex
      justify-content center
      align-items center
      background-image linear-gradient(-146deg, #71B5F5 1%, #81A8F7 86%)
      border-radius 10px
      cursor pointer
      span
        font-size 14px
        color #FFFFFF
        letter-spacing 1.6px
  .rank-search-warn
    position relative
    margin 12px 0 0 2px
    z-index 0
    .body
      width 155px
      height 30px
      margin 6px
      padding 10px
      display flex
      justify-content center
      align-items center
      position relative
      background-color #FCFCFC
      z-index 2
      box-shadow 0 0 5px 0 rgba(89,89,89,0.50)
      border-radius 10px
      img
        margin-right 10px
      span
        font-size 14px
        color #535353
    .cor
    .cor_s
      width 12px
      height 12px
      left 0
      top 25px
      position absolute
      background-color #FCFCFC
      z-index 2
      transform rotate(-45deg)
    .cor_s
      z-index 1
      box-shadow 0 0 5px 0 rgba(89,89,89,0.50)
</style>
