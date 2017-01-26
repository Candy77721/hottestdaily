import * as types from '../mutations-types'

const state = {
  graph: [],
  // searchKeyword: '',
  SearchKeywordIndex: null,
  showModalGraph: false,
  ModalGraph: {
    keyword: '',
    history: []
  }
}

const getters = {
  rankGetGraph: state => state.graph,
  // rankGetSearchKeyword: state => state.searchKeyword,
  rankGetSearchKeywordIndex: state => state.SearchKeywordIndex,
  rankGetShowModalGraph: state => state.showModalGraph,
  rankGetModalGraph: state => state.ModalGraph
}

const actions = {
  // 更新图的信息
  rankChangeGraph ({ commit }, newGraph) {
    commit(types.RANKCHANGEGRAPH, { newGraph })
  },
  // 更新颜色信息
  rankChangeGraphColor ({ commit, state }, ColorArray) {
    state.graph.forEach(item => {
      commit(types.RANKCHANGEGRAPHCOLOR, {
        item: item,
        color: ColorArray[item.hot]
      })
    })
  },
  // 更新 searchKeyword
  // rankChangeSearchKeyword ({ commit }, newSearchKeyword) {
  //   commit(types.RANKCHANGESEARCHKEYWORD, { newSearchKeyword })
  // },
  // 更新搜索词的 index
  rankChangeSearchKeywordIndex ({ commit }, newSearchKeywordIndex) {
    commit(types.RANKCHANGESEARCHKEYWORDINDEX, { newSearchKeywordIndex })
  },
  // 切换是否展示模态框图表
  rankToggleShowModalGraph ({ commit }) {
    commit(types.RANKTOGGLESHOWMODALGRAPH)
  },
  // 更新模态框图表的信息
  rankChangeModalGraph ({ commit }, newModalGraph) {
    commit(types.RANKCHANGEMODALGRAPH, { newModalGraph })
  }
}

const mutations = {
  [types.RANKCHANGEGRAPH] (state, { newGraph }) {
    state.graph = newGraph
  },
  [types.RANKCHANGEGRAPHCOLOR] (state, { item, color }) {
    item['color'] = color
  },
  // [types.RANKCHANGESEARCHKEYWORD] (state, { newSearchKeyword }) {
  //   state.searchKeyword = newSearchKeyword
  // },
  [types.RANKCHANGESEARCHKEYWORDINDEX] (state, { newSearchKeywordIndex }) {
    state.SearchKeywordIndex = newSearchKeywordIndex
  },
  [types.RANKTOGGLESHOWMODALGRAPH] (state) {
    state.showModalGraph = !state.showModalGraph
  },
  [types.RANKCHANGEMODALGRAPH] (state, { newModalGraph }) {
    state.ModalGraph.keyword = newModalGraph.keyword
    state.ModalGraph.history = newModalGraph.history
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
