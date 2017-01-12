<template lang="html">
  <div class="news-list">
    <div class="news-column" v-for="columns in getNewsData">
      <news-card :news="news" v-for="news in columns">

      </news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/news/newsCard.vue'

import * as api from '../api/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      // 是否是第一次载入
      isGet: false
    }
  },
  mounted () {
    // 第一次挂载则请求
    if (this.getLatestPage === 0) {
      this.resetLatestPage()
      if (this.$route.params.type && this.$route.params.type !== '全部') {
        this.changeNowType(this.$route.params.type)
      }
      this.getNews(this.getLatestPage, this.getNowType)
    }
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' (to, from) {
      const newType = to.params.type
      console.log(newType)
      if (newType) {
        if (newType === undefined && this.getNowType === '全部' || newType === this.getNowType) {
          return
        } else {
          this.changeNowType(newType)
          this.clearNews()
          // TODO：此处应该异步，等上一行执行完后再执行
          this.getNews(this.getLatestPage, newType)
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getNowType',
      'getLatestPage',
      'getNewsData'
    ])
  },
  methods: {
    ...mapActions([
      'addNews',
      'changenextColunms',
      'changeNowType',
      'resetLatestPage',
      'clearNews'
    ]),
    /*
    从服务端获取瀑布流中所需新闻，并更新到vuex中
    同时确定下一次获取新闻时应该放入哪一列中
    参数：所需页数page(number)，所需类别type(string)
    返回值：object
    */
    getNews: function (page, type) {
      this.isGet = true
      console.log(page, type)
      axios.post(api.uriGetNews, {
        'page': page,
        'type': type
      })
        .then((res) => {
          const data = res.data
          if (data.errorCode !== 0) {
            console.log(data.errorMsg)
          } else {
            this.addNews(data.data)
            // 刷新DOM后，获取高度
            this.$nextTick(function () {
              const columns = this.$el.querySelectorAll('.news-column')
              const nextColumnsIndex = this.getMinHeightIndex(columns)
              // 设置下一次排序起始
              this.changenextColunms(nextColumnsIndex)
              this.isGet = false
            })
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    /*
    将三列按照从短到长排序，并返回三列从短到长的下标组成的数组
    参数：node节点数组
    返回值：三列从短到长的下标组成的数组(array)
    */
    getMinHeightIndex: function (node) {
      const columnsHeight = []
      const sortColumnsIndex = []
      const sortedColumnsHeight = []
      node.forEach(column => {
        const height = column.lastChild.offsetTop + column.lastChild.offsetHeight
        columnsHeight.push(height)
        sortedColumnsHeight.push(height)
      })
      // 从小到大排序
      sortedColumnsHeight.sort((a, b) => a - b)
      // 获取新的下标组成的数组
      sortedColumnsHeight.forEach(ele => {
        columnsHeight.findIndex((e, index) => {
          if (e === ele) sortColumnsIndex.push(index)
        })
      })
      return sortColumnsIndex
    },
    // 监听滚动事件
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (document.documentElement.scrollHeight - 150 <= document.documentElement.clientHeight + scrollTop) {
        if (!this.isGet) {
          this.getNews(this.getLatestPage, this.getNowType)
        }
      }
    }
  },
  components: {
    NewsCard: NewsCard
  }
}
</script>

<style lang="stylus">
.news-list
  width 1110px
  padding 50px 50px 0 50px
  margin auto
  display flex
  box-shadow:0 0 20px 15px rgba(255,255,255,1)
  background-color white
  .news-column
    width 30%
    margin 10px 1%
    padding 5px
    display flex
    flex-direction column
    .news-item
      margin 10px
      padding 5px
      background-color #eee
</style>
