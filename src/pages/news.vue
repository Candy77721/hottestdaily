<template lang="html">
  <div class="news-list">
    <component :is="getNewsOrGroup(news.type)" :news="news" v-for="news in newsGetNewsData" :key="news.title"></component>
  </div>
</template>

<script>
import NewsCard from '../components/news/newsCard.js'
// import NewsCard from '../components/news/newsCard.vue'
import NewsGroup from '../components/news/newsGroup.vue'

import * as api from '../api/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'news',
  data: function () {
    return {
      // 是否正在获取数据
      isGet: false,
      // 函数节流
      throttle: true
    }
  },
  mounted () {
    // 检查 type
    const newType = this.$route.params.type
    this.checkType(newType)
  },
  // 即使首次挂载，也会调用此钩子
  activated () {
    // 展示导航栏
    this.newsToggleShowTypes()
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 取消展示导航栏
    this.newsToggleShowTypes()
    // 停止监听滚动事件
    window.removeEventListener('scroll', this.handleScroll)
  },
  // 由于组件未销毁，所以 watch 会一直执行
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' (to, from) {
      // 检查 type
      if (to.name === 'newsType') {
        const newType = to.params.type
        this.checkType(newType)
      }
    }
  },
  computed: {
    ...mapGetters([
      'newsGetNowType',
      'newsGetNextPage',
      'newsGetNewsData'
    ])
  },
  methods: {
    ...mapActions([
      'newsToggleShowTypes',
      'newsAddNews',
      'newsChangeNowType',
      'newsClearNews'
    ]),
    // 检查是 news 还是 group
    getNewsOrGroup: function (type) {
      return type === 'news' ? 'NewsCard' : 'NewsGroup'
    },
    /*
    检查是否和之前的是相同 type
    如果是则不进行操作
    如果不是则更新 type ，重置当前页数，重置新闻，发送新的请求
    */
    checkType: function (newType) {
      if (newType === this.newsGetNowType && this.newsGetNextPage !== 1) {
        return
      }
      this.newsChangeNowType(newType)
      this.getNews(this.newsGetNextPage, this.newsGetNowType)
    },
    /*
    从服务端获取瀑布流中所需新闻，并更新到vuex中
    */
    getNews: function (page, type) {
      this.isGet = true
      // console.log(page, type)
      // http://www.hottestdaily.com/api/getNewsPage
      axios.post(api.uriGetNews, {
        'page': page,
        'type': type
      })
        .then((res) => {
          const data = res.data
          if (data.errorCode !== 0) {
            console.log(data.errorMsg)
            return
          }
          this.newsAddNews(data.data)
          this.isGet = false
        })
        .catch(function (err) {
          console.log(err)
          this.isGet = false
        })
    },
    // 监听滚动事件
    handleScroll () {
      if (this.throttle) {
        this.throttle = false
        setTimeout(() => {
          const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          if (document.documentElement.scrollHeight - 400 <= document.documentElement.clientHeight + scrollTop) {
            // 'all'有10页数据
            if (this.newsGetNowType === 'all') {
              if ((!this.isGet) && (this.newsGetNextPage !== 11)) {
                this.getNews(this.newsGetNextPage, this.newsGetNowType)
              } else if (this.newsGetNextPage === 11) {
                // TODO: 提示已经到底
              }
            } else {
              // 其他的有5页数据
              if ((!this.isGet) && (this.newsGetNextPage !== 6)) {
                this.getNews(this.newsGetNextPage, this.newsGetNowType)
              } else if (this.newsGetNextPage === 6) {
                // TODO: 提示已经到底
              }
            }
          }
          this.throttle = true
        }, 300)
      }
    }
  },
  components: {
    NewsCard: NewsCard,
    NewsGroup: NewsGroup
  }
}
</script>

<style lang="stylus" scoped>
.news-list
  width 1110px
  padding 50px
  margin auto
  position relative
  display flex
  flex-wrap wrap
  background-color white
  .news-column
    width 320px
    display flex
    flex-direction column
    &:nth-child(2)
      margin 0 75px
    .news-item
      margin 10px
      padding 5px
      background-color #eee
</style>
