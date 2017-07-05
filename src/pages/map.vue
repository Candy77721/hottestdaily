<template lang="html">
  <div class="map-graph-out" :key="graphName">
    <div class="map-graph" id="map-graph">

    </div>
  </div>
</template>

<script>
import * as api from '../api/api'
import '../../node_modules/echarts/map/js/china'

export default {
  name: 'map',
  data () {
    return {
      graphName: 'map-graph'
    }
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('map-graph'))
    myChart.showLoading()
    axios.get(api.getMap)
      .then(res => {
        if (res.data.errorCode !== 0) {
          console.log(res.data)
          return
        }
        myChart.hideLoading()
        const data = res.data.data
        myChart.setOption({
          title: {
            text: '热度地图',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['热度']
          },
          visualMap: {
            min: 0,
            max: 150,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
          },
          series: [
            {
              name: '热度',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data: data
            }
          ]
        }
        )
      })
  }
}
</script>

<style lang="stylus">
.map-graph-out
  width 1110px
  margin auto
  padding-top 40px
  display flex
  background-color white
  .map-graph
    width 1070px
    height 680px
</style>
