<template lang="html">
  <!-- <div class="search-card">
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
        {{tofixed1(news.hot)}}
      </p>
    </div>
  </div> -->
</template>

<script>
export default {
  data: function () {
    return {
      keyColor: ['#82ABF9', '#6EB1EF', '#7ADCFC']
    }
  },
  // props: ['news'],
  methods: {
    tofixed1: num => {
      return num.toFixed(1) + '°'
    }
  }
}
</script>

<style lang="stylus">
.search-card
  width 660px
  height 160px
  padding 20px
  display flex
  background-color #FCFCFC
  box-shadow 0 2px 15px 0 rgba(165,165,165,0.50)
  .body
    padding-right 20px
    .title
      padding-bottom 20px
      font-size 18px
      color #4D4D4D
      letter-spacing 2.06px
    .abstract
      font-size 12px
      color #A3A3A3
      letter-spacing 1.37px
      line-height 20px
  .keywords
    width 100%
    display flex
    flex-direction column
    justify-content space-between
    font-size 12px
    letter-spacing 1.37px
    .keyword
      padding 6px 8px
      border-radius 10px
      color white
  .hot-rect
    background-image radial-gradient(50% 100%, #FF7373 0%, #FF8464 31%, #FFAB44 100%)
    border-radius 5px
    .hot
      font-size 30px
      color #FFFFFF
      letter-spacing 3.44px

</style>
