import * as types from '../mutations-types'

const state = {
  // 搜索内容
  search: '',
  // 关系图
  graph: {},
  // 当前页数
  page: 1,
  // 新闻
  news: []
}

const getters = {
  searchGetSearch: state => state.search,
  searchGetGraph: state => state.graph,
  searchGetPage: state => state.page,
  searchGetNews: state => state.news
}

const actions = {
  // 修改当前搜索内容
  searchChangeSearch ({ commit }, newSearch) {
    commit(types.SEARCHCHANGESEARCH, { newSearch })
  },
  // 修改关系图数据
  searchChangeGraph ({ commit }, newGraph) {
    commit(types.SEARCHCHANGEGRAPH, { newGraph })
  },
  // 新增新闻数据与页数
  searchAddNews ({ commit }, newNews) {
    commit(types.SEARCHADDNEWS, { newNews })
    commit(types.SEARCHADDPAGE)
  },
  // 清空新闻数据,页数,关系图
  searchClearNews ({ commit }) {
    commit(types.SEARCHCLEARNEWS)
    commit(types.SEARCHCLEARPAGE)
    commit(types.SEARCHCLEARGRAPH)
  }
}

const mutations = {
  [types.SEARCHCHANGESEARCH] (state, { newSearch }) {
    state.search = newSearch
  },
  [types.SEARCHCHANGEGRAPH] (state, { newGraph }) {
    state.graph = newGraph
  },
  [types.SEARCHADDNEWS] (state, { newNews }) {
    state.news.push(...newNews)
  },
  // 增加页数
  [types.SEARCHADDPAGE] (state) {
    state.page++
  },
  // 清空页数
  [types.SEARCHCLEARPAGE] (state) {
    state.page = 1
  },
  // 清空新闻
  [types.SEARCHCLEARNEWS] (state) {
    state.news = []
  },
  // 清空关系图
  [types.SEARCHCLEARGRAPH] (state) {
    state.graph = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
