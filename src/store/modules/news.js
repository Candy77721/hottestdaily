import * as types from '../mutations-types'

const state = {
  nextColunm: null,
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
  changeNextColunm ({ commit }, newNextColunm) {
    commit(types.CHANGENEXTCOLUNM, { newNextColunm })
  }
}

const mutations = {
  [types.ADDNEWS] (state, { pageData }) {
    const columns = state.nextColunm
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
      console.log(state.nextColunm)
      state.news[column].push(news)
      i++
    }
  },
  [types.CHANGENEXTCOLUNM] (state, { newNextColunm }) {
    state.nextColunm = newNextColunm
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
