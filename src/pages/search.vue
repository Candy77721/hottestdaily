<template lang="html">
<div class="search">
  <search-graph class="search-graph" :graph="searchGetGraph" :key="graphName"></search-graph>
  <div class="search-cards">
    <search-card :news="news" v-for="news in searchGetNews">

    </search-card>
  </div>
</div>
</template>

<script>
import SearchGraph from '../components/search/searchGraph.vue'
import SearchCard from '../components/search/searchCard.vue'

import { mapActions, mapGetters } from 'vuex'
import * as api from '../api/api'

export default {
  data () {
    return {
      // 是否正在获取数据
      isGet: false,
      // 关系图的key
      graphName: 'search-graph'
    }
  },
  mounted () {
    // 更新数据
    const newSearch = this.$route.params.search
    this.searchChangeSearch(newSearch)
    // 请求数据
    this.updateGraph(this.searchGetSearch)
    this.updateNews(this.searchGetSearch, this.searchGetPage)
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    // 停止监听滚动事件
    window.removeEventListener('scroll', this.handleScroll)
    // 清空数据
    this.searchClearNews()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' (to, from) {
      // 更新数据
      const newSearch = to.params.search
      this.searchChangeSearch(newSearch)
      this.searchClearNews()
      // 请求数据
      this.updateGraph(this.searchGetSearch)
      this.updateNews(this.searchGetSearch, this.searchGetPage)
    }
  },
  computed: {
    ...mapGetters([
      'searchGetSearch',
      'searchGetGraph',
      'searchGetPage',
      'searchGetNews'
    ])
  },
  methods: {
    ...mapActions([
      'searchChangeSearch',
      'searchChangeGraph',
      'searchAddNews',
      'searchClearNews'
    ]),
    // 更新关系图
    updateGraph: function (search) {
      axios.post(api.getSearchGraph, {
        search: search
      })
        .then(res => {
          this.searchChangeGraph(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 更新新闻
    updateNews: function (search, page) {
      this.isGet = true
      axios.post(api.getSearchNews, {
        search: search,
        page: page
      })
        .then(res => {
          this.searchAddNews(res.data.data)
          this.isGet = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 监听滚动事件
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (document.documentElement.scrollHeight - 150 <= document.documentElement.clientHeight + scrollTop) {
        if (!this.isGet) {
          this.updateNews(this.searchGetSearch, this.searchGetPage)
        }
      }
    }
  },
  components: {
    SearchGraph: SearchGraph,
    SearchCard: SearchCard
  }
}
</script>

<style lang="stylus">
.search
  // .search-graph
  .search-cards
    margin-top 50px
    display flex
    flex-direction column
    align-items center
</style>
