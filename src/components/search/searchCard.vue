<template lang="html">
  <div class="search-card">
    <div class="body">
      <a @click="postTracking(news.title)" :href="news.url" target="_blank">
        <p class="title">
          {{news.title}}
        </p>
        <p class="abstract">
          {{news.abstract}}
        </p>
      </a>
    </div>
    <div class="keywords">
      <span class="keyword" v-for="(keyword,index) in news.keywords" :style="{'background-color': keyColor[index]}">
        {{keyword}}
      </span>
    </div>
    <!-- <div class="hot-rect" :style="{ backgroundImage: getHotColor(news.hot)}"> -->
    <div class="hot-rect" style="background-image: radial-gradient(46% 103%, #F2A1A1 50%, #FF4848 100%);">
      <p class="hot">
        {{`${news.hot}℃`}}
      </p>
    </div>
  </div>
</template>

<script>
import * as api from '../../api/api'
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      keyColor: ['#82ABF9', '#6EB1EF', '#7ADCFC']
    }
  },
  props: ['news'],
  computed: {
    ...mapGetters([
      'getColor'
    ])
  },
  methods: {
    getHotColor: function (hot) {
      return this.getColor[hot]
    },
    postTracking (data) {
      axios.post(api.userInterestTracking, {
        'data': data
      })
        .then(res => {})
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-card
  width 660px
  height 120px
  padding 20px
  margin-bottom 50px
  display flex
  background-color #FCFCFC
  box-shadow 0 2px 15px 0 rgba(165,165,165,0.50)
  cursor default
  transition: all .4s
  &:hover
    box-shadow 0 30px 30px 9px rgba(154,154,154,0.50)
  .body
    width 480px
    margin-right 20px
    a
      text-decoration none
      .title
        padding-bottom 20px
        margin 0
        font-size 18px
        color #4D4D4D
        letter-spacing 4px
      .abstract
        width 480px
        height 80px
        margin 0
        font-size 12px
        color #A3A3A3
        letter-spacing 2px
        line-height 20px
        text-overflow ellipsis /*有些示例里需要定义该属性，实际可省略*/
        display -webkit-box
        -webkit-line-clamp 4/*规定超过两行的部分截断*/
        -webkit-box-orient vertical
        overflow hidden
        word-break break-all/*在任何地方换行*/
  .keywords
    width 70px
    margin-right 10px
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start
    font-size 12px
    letter-spacing 2px
    .keyword
      padding 5px
      border-radius 10px
      color white
  .hot-rect
    width 76px
    height 121px
    display flex
    justify-content center
    align-items center
    // background-image radial-gradient(50% 100%, #FF7373 0%, #FF8464 31%, #FFAB44 100%)
    border-radius 5px
    .hot
      font-size 24px
      margin-left 7px
      color #FFFFFF
      letter-spacing 1px
      font-weight bold
</style>
