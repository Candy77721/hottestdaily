<template lang="html">
  <div class="rank-graph-out">
    <div class="rank-graph" id="rank-graph">

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
  props: ['graph'],
  watch: {
    graph: function (val) {
      this.updateGraph()
    },
    // 高亮并滚动
    rankGetSearchKeywordIndex: function (val) {
      this.updateGraph(val)
      document.body.scrollTop = (270 + 50 * val)
    }
  },
  computed: {
    ...mapGetters([
      'getColor',
      'rankGetSearchKeywordIndex'
    ])
  },
  methods: {
    ...mapActions([
      'rankToggleShowModalGraph',
      'rankChangeModalGraph'
    ]),
    // updateSearchKeyword: function () {
    //   this.searchKeyword = this.rankGetSearchKeyword
    // },
    updateGraph: function (keywordIndex = null) {
      const rankGraph = echarts.init(document.getElementById('rank-graph'))
      rankGraph.setOption({
        // 查询时不带动画
        animation: !(keywordIndex),
        tooltip: {
          formatter: '{b}{c}'
        },
        grid: {
          left: '40px',
          right: '40px',
          bottom: '40px',
          top: '0px',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 100,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: this.graph.map(function (item, index) {
            if (keywordIndex === index) {
              const itemCategory = {
                value: `${item.content}   ：`,
                textStyle: {
                  color: '#FFB6C1',
                  fontSize: 18,
                  fontWeight: 'bold'
                }
              }
              return itemCategory
            } else {
              const itemCategory = {
                value: `${item.content}   ：`,
                textStyle: {
                  color: '#535353',
                  fontSize: 18,
                  fontWeight: 'bold'
                }
              }
              return itemCategory
            }
          }),
          // 点击坐标轴也触发事件
          triggerEvent: true,
          axisLine: {
            // 是否显示轴线
            show: false
          },
          axisTick: {
            // 是否显示刻度
            show: false
          }
        },
        series: [
          {
            name: '热度',
            type: 'bar',
            data: this.graph.map(item => {
              const graphItem = {}
              graphItem.value = item.hot
              graphItem.itemStyle = {
                normal: {
                }
              }
              let itemColor = item.color
              itemColor = itemColor.split(' ')
              graphItem.itemStyle.normal.color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: (parseInt(itemColor[2]) / 100), color: itemColor[1] // 0% 处的颜色
              }, {
                offset: (parseInt(itemColor[4]) / 100), color: itemColor[3] // 100% 处的颜色
              }, {
                offset: (parseInt(itemColor[6]) / 100), color: itemColor[5] // 100% 处的颜色
              }], false)
              return graphItem
            }),
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                fontSize: 14,
                formatter: '{c}℃'
              }
            },
            itemStyle: {
              normal: {
                // 柱子圆角
                barBorderRadius: 10,
                // 柱子阴影
                shadowColor: 'rgba(117,117,117,0.50)',
                shadowBlur: 8,
                shadowOffsetY: 2,
                // 柱子间距
                barGap: 10,
                // 柱子宽度
                barWidth: 40
              }
            }
          }
        ]
      })
      // 监听鼠标事件
      rankGraph.off('click')
      const that = this
      rankGraph.on('click', function (params) {
        // 点击 坐标轴 与 柱状图 的 对象不一样
        const keyword = params.name ? params.name.split(' ')[0] : params.value.split(' ')[0]
        const history = that.graph.find(ele => ele.content === keyword).history
        that.rankChangeModalGraph({
          keyword: keyword,
          history: history
        })
        that.rankToggleShowModalGraph()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank-graph-out
  .rank-graph
    width 1110px
    height 2500px
</style>
