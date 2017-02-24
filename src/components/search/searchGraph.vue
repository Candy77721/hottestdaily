<template lang="html">
  <div class="search-graph-out">
    <div class="tips">
      词语关系图：
    </div>
    <div class="search-graph" id="search-graph"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['graph'],
  watch: {
    graph: function (val, oldVal) {
      if (val.nodes) {
        this.updateGraph(val)
      }
    }
  },
  methods: {
    updateGraph: function (data) {
      const searchGraph = echarts.init(document.getElementById('search-graph'))
      // 'https://raw.githubusercontent.com/954880786/Project_hot2/master/PrepareJson/graph_index.json'
      searchGraph.setOption({
        title: {
          // text: 'NPM Dependencies'
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
      searchGraph.off('click')
      const that = this
      searchGraph.on('click', function (params) {
        console.log(params.data)
        if (params.data.id.length === 24) {
          // 新闻点击跳转到对应连接
          const url = params.data.value
          window.open(url)
        } else {
          // 词点击跳转到查询
          const word = params.data.name
          that.$router.push({ name: 'search', params: { search: word }})
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-graph-out
  margin auto
  padding-top 50px
  position relative
  display flex
  background-color white
  .tips
    position absolute
    left 30px
    top 50px
    font-size 14px
    color #A3A3A3
    letter-spacing 1.6px
  .search-graph
    margin auto
    width 920px
    height 400px
    background-color black
</style>
