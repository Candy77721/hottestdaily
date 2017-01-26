<template lang="html">
  <div class="graph-out">
    <div class="graph-head">
      <span>{{getTitle}}</span>
      <img class="close" src="../../assets/icon/close-black.png" alt="" @click="rankToggleShowModalGraph()">
    </div>
    <div class="graph" id="modal-garph-rank">

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.updateGraph(this.getLastTenDay())
  },
  computed: {
    ...mapGetters([
      'rankGetModalGraph'
    ]),
    getTitle: function () {
      return `“${this.rankGetModalGraph.keyword}”十日热度`
    }
  },
  methods: {
    ...mapActions([
      'rankToggleShowModalGraph'
    ]),
    updateGraph: function (time) {
      const modalGraphRank = echarts.init(document.getElementById('modal-garph-rank'))
      modalGraphRank.setOption({
        tooltip: {
          formatter: `{b}：{c}`
        },
        grid: {
          left: '20px',
          right: '20px',
          bottom: '20px',
          top: '20px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: time
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          boundaryGap: [0, '100%']
        },
        series: [{
          name: '热度',
          type: 'line',
          smooth: true,
          sampling: 'average',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(100,151,255,0.89)'
              }, {
                offset: 0.66,
                color: 'rgba(145,143,226,0.86)'
              }, {
                offset: 0.98,
                color: 'rgba(153,135,213,0.86)'
              }])
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(100,151,255,0.89)'
              }, {
                offset: 0.66,
                color: 'rgba(145,143,226,0.86)'
              }, {
                offset: 0.98,
                color: 'rgba(153,135,213,0.86)'
              }])
            }
          },
          data: this.rankGetModalGraph.history
        }]
        // color: [colors[Math.floor(colors.length * Math.random())]]
      })
    },
    // 获取过去十天的日期
    getLastTenDay: function () {
      const now = new Date()
      const date = []
      let thisDay = now.getDate()
      if (thisDay < 10) {
        // 把本月的日期加入
        for (; thisDay > 0; thisDay--) {
          date.unshift(`${thisDay}日`)
        }
        let lastDay = 0
        // 如果当前是1月的话则需要看12月的日期
        if (now.getMonth() === 0) {
          lastDay = new Date((now.getFullYear() - 1), 11, 0).getDate()
        } else {
          // 如果是其他月份
          lastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
        }
        for (; date.length < 10; lastDay--) {
          date.unshift(`${lastDay}日`)
        }
      } else {
        for (; date.length < 10; thisDay--) {
          date.unshift(`${thisDay}日`)
        }
      }
      return date
    }
  }
}
</script>

<style lang="stylus" scoped>
.graph-out
  width 920px
  height 520px
  display flex
  flex-direction column
  // justify-content center
  align-items center
  position fixed
  top 50%
  left 50%
  margin-left -460px
  margin-top -260px
  background: #FCFCFC;
  box-shadow: 0 1px 6px 1px rgba(136,136,136,0.50);
  border-radius: 10px;
  z-index 99
  .graph-head
    width 920px
    height 60px
    border-bottom 1px solid #e5e5e5
    display flex
    justify-content center
    align-items center
    span
      color #535353
      letter-spacing 4px
      font-size 18px
      font-weight bold
    .close
      position absolute
      right 15px
      top 20px
      cursor pointer
  .graph
    width 660px
    height 350px
    margin-top 50px
    background-color black
</style>
