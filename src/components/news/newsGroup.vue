<template lang="html">
<div class="news-group">
  <div class="group-list">
    <a class="list" :href="item.url" v-for="item in news.relatedNews">
      <p>{{item.title}}</p>
    </a>
  </div>
  <div class="group-body">
    <p class="title">
      {{news.title}}专题
    </p>
    <div class="keywords">
      <div class="keyword-rows" v-for="keywordRow in news.keywords">
        <span class="keyword" v-for="(keyword,index) in keywordRow" :style="{'background-color': keyColor[index]}">{{keyword}}</span>
      </div>
    </div>
    <div class="hot-rect" :style="{ backgroundImage: getHotColor(news.hot)}">
      <p class="hot">
        {{`${news.hot}℃`}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      keyColor: ['#82ABF9', '#6EB1EF', '#7ADCFC']
    }
  },
  props: ['news'],
  mounted () {
    this.$nextTick(function () {
      const elOffsetLeft = this.$el.offsetLeft
      if (elOffsetLeft === 370) {
        this.$el.style.marginLeft = '75px'
      }
    })
  },
  computed: {
    ...mapGetters([
      'getColor'
    ])
  },
  methods: {
    getHotColor: function (hot) {
      return this.getColor[hot]
    }
  }
}
</script>

<style lang="stylus" scoped>
.news-group
  width 715px
  height 380px
  box-sizing border-box
  margin 20px 0
  padding 20px 20px 40px 20px
  position relative
  display flex
  align-items center
  background white
  box-shadow 0 8px 18px 0 rgba(132,132,132,0.50)
  cursor default
  transition box-shadow .4s
  &:hover
    box-shadow 0 30px 30px 9px rgba(154,154,154,0.50)
  &:after
    content ''
    width 715px
    height 7px
    position absolute
    left 0
    top calc(100% - 3px)
    background-image url('../../assets/icon/group-bottom-border.png')
  .group-list
    height 320px
    .list
      width 380px
      height 50px
      display block
      text-decoration none
      color #535353
      letter-spacing 4px
      line-height 25px
      font-size 18px
      &:not(:first-child)
        margin-top 40px
      p
        margin 0
  .group-body
    width 210px
    height 320px
    margin-left 45px
    .title
      height 62px
      margin-top -20px
      display flex
      justify-content center
      align-items center
      font-size 18px
      white-space nowrap
      letter-spacing 4px
      color white
      background-image linear-gradient(-133deg, #82ABF9 15%, #74C7F6 57%, #7ADCFC 100%)
      box-shadow 0 2px 4px 0 rgba(111,159,211,0.50)
      border-radius 0 0 10px 10px
    .keywords
      margin-top 42px
      margin-bottom 40px
      .keyword-rows
        width 100%
        display flex
        justify-content space-between
        font-size 12px
        &:nth-child(2)
          margin-top 16px
        .keyword
          padding 6px
          border-radius 10px
          letter-spacing 2px
          color white
    .hot-rect
      width 100%
      height 127px
      display flex
      justify-content center
      align-items center
      color white
      background-image radial-gradient(35% 90%, #EC7A73 21%, #ED8176 25%, #FBDFA6 100%)
      box-shadow 0 5px 10px 0 rgba(172,172,172,0.39)
      border-radius 10px
      .hot
        font-size 30px
        font-weight 700
        margin 0
</style>
