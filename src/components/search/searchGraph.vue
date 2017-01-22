<template lang="html">
  <div class="graph-out">
    <div class="main-graph" id="main-graph">

    </div>
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
      const myChart = echarts.init(document.getElementById('main-graph'))
      // 'https://raw.githubusercontent.com/954880786/Project_hot2/master/PrepareJson/graph_index.json'
      myChart.setOption({
        title: {
          text: 'NPM Dependencies'
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
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  normal: {
                    color: node.color
                  }
                }
              }
            }),
            edges: data.edges.map(function (edge) {
              return {
                source: edge.sourceID,
                target: edge.targetID
              }
            }),
            label: {
              normal: {
                position: 'inside',
                show: true
              },
              emphasis: {
                position: 'right',
                show: true
              }
            },
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
    }
  }
}
</script>

<style lang="stylus">
.graph-out
  margin auto
  display flex
  background-color white
  .main-graph
    margin auto
    width 920px
    height 330px
    background-color black
</style>
