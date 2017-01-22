<template lang="html">
  <div class="search-card">
    <div class="body">
      <a :href="news.url">
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
    <div class="hot-rect">
      <p class="hot">
        {{toInt(news.hot)}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      keyColor: ['#82ABF9', '#6EB1EF', '#7ADCFC']
    }
  },
  props: ['news'],
  methods: {
    toInt: num => {
      return Math.round(num) + '°'
    }
  }
}
</script>

<style lang="stylus">
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
        letter-spacing 2.06px
      .abstract
        margin 0
        font-size 12px
        color #A3A3A3
        letter-spacing 1.37px
        line-height 20px
  .keywords
    width 70px
    margin-right 10px
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start
    font-size 12px
    letter-spacing 1.37px
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
    background-image radial-gradient(50% 100%, #FF7373 0%, #FF8464 31%, #FFAB44 100%)
    border-radius 5px
    .hot
      font-size 25px
      display flex
      justify-content center
      color #FFFFFF
      letter-spacing 3.44px

</style>
