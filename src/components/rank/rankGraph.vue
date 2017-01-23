<template lang="html">
  <div class="graph-out">
    <div class="rank-graph" id="rank-graph">

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
    graph: function (val) {
      this.updateGraph(val)
    }
  },
  methods: {
    updateGraph: function (data) {
      const rankGraph = echarts.init(document.getElementById('rank-graph'))
      rankGraph.setOption({
        title: {
          text: '世界人口总量',
          subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
