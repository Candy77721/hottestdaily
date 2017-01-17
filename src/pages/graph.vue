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
  mounted () {
    const myChart = echarts.init(document.getElementById('main-graph'))
    axios.get('https://raw.githubusercontent.com/954880786/Project_hot2/master/PrepareJson/graph_index.json')
      .then(res => {
        const data = res.data
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
      })
  }
}
</script>

<style lang="stylus">
.graph-out
  width 1110px
  padding 120px 50px 0 50px
  margin auto
  display flex
  box-shadow:0 0 20px 15px white
  background-color white
  .main-graph
    width 1070px
    height 610px
    background-color black
</style>
