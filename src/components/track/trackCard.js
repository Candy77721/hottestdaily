import '../../stylus/track/trackCard.styl'

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
          obj.itemStyle = {
            normal: {
              color: 'red'
            }
          }
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
    },
    renderCards () {
      return this.news.timeaxis.map((timeaxis, index) => {
        const keywords = this.renderKeywords(timeaxis.keywords)
        return (
          <div class='time-card'>
            <div class='time' style={this.getColor(index)}>{timeaxis.time}</div>
            <div class='keywords'>
              {keywords}
            </div>
            <div class='card-bar' style={this.getColor(index)}></div>
            <div class='card-text'>{timeaxis.text}</div>
        </div>
        )
      })
    },
    renderKeywords (keywords) {
      return keywords.map((keyword, index) => {
        return (
          <span class='keyword' style={this.getBgColor(index)}>{keyword}</span>
        )
      })
    }
  },
  render () {
    const cards = this.renderCards()
    return (
      <div class='track-card'>
        <div class='inner'>
          <p class='title'>{this.news.title}</p>
          <div class='time-axis'>
            {cards}
          </div>
        </div>
        <div class='graph' id={this.getTrackId}></div>
      </div>
    )
  }
}
