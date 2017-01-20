<template lang="html">
  <div class="news-card">
    <!-- {{news.type}} -->
    <a :href="news.url">
      <p class="title">{{news.title}}</p>
    </a>
    <!-- <p>{{news.label}}</p> -->
    <!-- <p>{{news.fromTopic}}</p> -->
    <div class="news-card-body">
      <a :href="news.url">
        <p class="abstract">{{news.abstract}}</p>
      </a>
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
    tofixed1: num => {
      return num.toFixed(1) + '°'
    }
  }
}
</script>

<style lang="stylus">
.news-card
  width 280px
  margin 20px
  padding 20px
  position relative
  display flex
  flex-direction column
  align-items center
  background white
  box-shadow 0 8px 18px 0 rgba(132,132,132,0.50)
  cursor default
  transition: all .4s
  &:hover
    box-shadow 0 30px 30px 9px rgba(154,154,154,0.50)
  &:after
    content ''
    width 320px
    height 7px
    position absolute
    top calc(100% - 3px)
    background-image url('../../assets/icon/news-bottom-border.png')
  p
    margin 0
  a
    text-decoration none
  .title
    width 275px
    height 45px
    font-size 18px
    color #535353
    letter-spacing 2.07px
    text-align center
  .news-card-body
    width 214px
    display flex
    flex-direction column
    align-items center
    a
      margin 23px 0
    .abstract
      height 115px
      font-size 12px
      color #A3A3A3
      letter-spacing 1.38px
    .keywords
      width 100%
      display flex
      justify-content space-between
      font-size 12px
      letter-spacing 1.37px
      .keyword
        padding 6px 8px
        border-radius 10px
        color white
    .hot-rect
      width 100%
      height 34px
      margin 40px 0 20px 0
      padding 8px 0
      color white
      background-image: radial-gradient(35% 90%, #EC7A73 21%, #ED8176 25%, #FBDFA6 100%);
      box-shadow: 0 5px 10px 0 rgba(172,172,172,0.39);
      border-radius: 10px;
      .hot
        text-align center
        font-size 30px
        font-weight 700
        margin 0
</style>
