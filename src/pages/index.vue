<template lang="html">
    <div class="index-graph-out" :key="graphName">
    <div class="index-graph" id="index-graph">

    </div>
  </div>
</template>

<script>
import * as api from '../api/api'

export default {
  name: 'explore',
  data () {
    return {
      url: [],
      graphName: 'index-graph'
    }
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('index-graph'))
    // 'https://raw.githubusercontent.com/954880786/Project_hot2/master/PrepareJson/graph_index.json'
    axios.get(api.getIndexGraph)
      .then(res => {
        if (res.data.errorCode !== 0) {
          console.log(res.data)
          return
        }
        const data = res.data.data
        myChart.setOption({
          title: {
            text: '今日热词已经为您备好',
            left: 'center'
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              hoverAnimation: true,
              roam: true,
              focusNodeAdjacency: true,
              // 超过该数值则启用渐进渲染
              // progressiveThreshold: 700,
              data: data.nodes.map(function (node) {
                const nodeValue = node.url ? node.url : node.label
                const graphItem = {
                  x: node.x,
                  y: node.y,
                  id: node.id,
                  name: node.label,
                  symbolSize: node.size,
                  value: nodeValue,
                  itemStyle: {
                    normal: {
                      color: node.color,
                      shadowBlur: 8,
                      shadowColor: 'rgba(117,117,117,0.50)',
                      shadowOffsetY: 2
                    }
                  },
                  label: {
                    emphasis: {
                      position: 'right',
                      show: true
                    }
                  }
                }
                if (node.id.length !== 24) {
                  graphItem.label.normal = {
                    position: 'inside',
                    show: true
                  }
                }
                return graphItem
              }),
              edges: data.edges.map(function (edge) {
                return {
                  source: edge.sourceID,
                  target: edge.targetID
                }
              }),
              lineStyle: {
                normal: {
                  width: 0.5,
                  curveness: 0.3,
                  opacity: 0.7
                }
              }
            }
          ]
        }, true)
        myChart.off('click')
        const that = this
        myChart.on('click', function (params) {
          if (params.data.id.length === 24) {
            // 新闻点击跳转到对应连接
            that.postTracking(params.data.name)
            const url = params.data.value
            window.open(url)
          } else {
            // 词点击跳转到查询
            const word = params.data.name
            that.$router.push({ name: 'search', params: { search: word }})
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
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
.index-graph-out
  width 1110px
  margin auto
  padding-top 40px
  display flex
  background-color white
  .index-graph
    width 1070px
    height 680px
    background-color black
</style>
