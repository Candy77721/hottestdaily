<template lang="html">
  <div class="track-card">
    <div class="inner">
      <p class="title">{{news.title}}</p>
      <div class="time-axis">
        <div class="time-card" v-for="(timeaxis, index) in news.timeaxis">
          <div class="time" :style="getColor(index)">{{timeaxis.time}}</div>
          <div class="keywords">
            <span class="keyword" :style="getBgColor(index)" v-for="(keyword, index) in timeaxis.keywords">{{keyword}}</span>
          </div>
          <div class="card-bar" :style="getBgColor(index)"></div>
          <div class="card-text">{{timeaxis.text}}</div>
        </div>
      </div>
    </div>
    <div class="graph" :id="[getTrackId]">

    </div>
  </div>
</template>

<script>
export default {
  name: 'trackCard',
  data () {
    return {
      color: ['#739DF0', '#5CB8D5', '#48D7DE']
    }
  },
  props: ['news', 'index'],
  mounted () {
    this.updateGraph()
  },
  computed: {
    getTrackId () {
      return `${this.index}-track-graph`
    }
  },
  methods: {
    getBgColor (index) {
      return `background-color: ${this.color[index]}`
    },
    getColor (index) {
      return `color: ${this.color[index]}`
    },
    // 构造数据
    getSeries (graph) {
      const arr = graph.name.map((name, index) => {
        const obj = {
          'name': name,
          'type': 'line',
          'data': graph.data[index],
          lineStyle: {
            normal: {
              width: 4
            }
          }
        }
        if (name === '情感值') {
          obj.lineStyle.normal.color = 'red'
        }
        return obj
      })
      return arr
    },
    // 构造时间——根据时间戳构造
    getTime (graph) {
      const dateArr = []
      const date = new Date()
      const interval = (graph.time[1] - graph.time[0]) / (graph.data[0].length - 1)
      if (interval >= 86400) {
        // 间隔超过一天的显式到天
        for (let i = 0; i < graph.data[0].length; i++) {
          date.setTime((graph.time[0] + (interval * i)) * 1000)
          dateArr.push(`${date.getMonth() + 1}月${date.getDate()}日`)
        }
      } else {
        // 小于一天的显示到小时
        for (let i = 0; i < graph.data[0].length; i++) {
          date.setTime((graph.time[0] + (interval * i)) * 1000)
          dateArr.push(`${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}时`)
        }
      }
      return dateArr
    },
    updateGraph () {
      const trackGraph = echarts.init(document.getElementById(this.getTrackId))
      trackGraph.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.news.graph.name
        },
        color: ['#2F80ED', '#2D9CDB', '#56CCF2', '#9B51E0', '#BB6BD9', '#739DF0', '#5CB8D5', '#48D7DE'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.getTime(this.news.graph)
        },
        yAxis: {
          type: 'value'
        },
        series: this.getSeries(this.news.graph)
      })
    }
  }
}
</script>

<style lang="stylus">
.track-card
  width 100%
  height 480px
  display flex
  flex-direction columns
  .inner
    width 684px
    .title
      width 684px
      padding-bottom 40px
      margin 0 0 45px 0
      color #515151
      font-family "Microsoft JhengHei"
      font-size 48px
      font-weight bold
      border-bottom 5px solid #515151
    .time-axis
      display flex
      justify-content space-around
      .time-card
        width 210px
        height 270px
        position relative
        background-color #F9F9F9
        border-radius 8px
        box-shadow 0 4px 4px rgba(0, 0, 0, 0.25)
        &:nth-child(-n+2)
          margin-right 22px
        .time
          position absolute
          top -72px
          left 55px
          color #48D7DE
        .keywords
          display flex
          justify-content space-between
          .keyword
            display inline-block
            padding 5px 5px
            margin 15px 4px
            font-size 14px
            color #fff
            background-color #739DF0
            border-radius 3px
        .card-bar
          position absolute
          top -65px
          left 40px
          width 4px
          height 65px
          border-radius 3px
          background-color #48D7DE
        .card-text
          font-size 14px
          padding 0 12px
          color #515151
          letter-spacing 2px
          text-indent 32px
  .graph
    width 500px
    height 400px
    margin-left 15px
    margin-top 38px
</style>
