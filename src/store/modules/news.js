import * as types from '../mutations-types'

const state = {
  nextColunms: null,
  latestPage: 1,
  news: {
    column0: [],
    column1: [],
    column2: []
  }
}

const getters = {
  getLatestPage: state => state.latestPage,
  getNewsData: state => state.news
}

const actions = {
  addNews ({ commit }, pageData) {
    commit(types.ADDNEWS, { pageData })
  },
  changenextColunms ({ commit }, newnextColunms) {
    commit(types.CHANGENEXTCOLUNMS, { newnextColunms })
  }
}

const mutations = {
  /*
  根据 nextColunms 向三列数据分别加入10，10，10或11，10，9个数据
  */
  [types.ADDNEWS] (state, { pageData }) {
    const columns = state.nextColunms
    // 如果不是加载的第一次的数据，则分别加入11，10，9个数据
    if (columns) {
      const supply = pageData.splice(0, 3)
      state.news[`column${columns[0]}`].push(supply[0], supply[1])
      state.news[`column${columns[1]}`].push(supply[2])
    }
    state.latestPage++
    var i = 0
    for (const news of pageData) {
      const column = `column${i % 3}`
      console.log(column)
      console.log(state.nextColunms)
      state.news[column].push(news)
      i++
    }
  },
  [types.CHANGENEXTCOLUNMS] (state, { newnextColunms }) {
    state.nextColunms = newnextColunms
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
