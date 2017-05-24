import * as types from '../mutations-types'

const state = {
  data: []
  // [{
	// 	title: str,
	// 	timeaxis: [{
	// 	    time: str (可能为空) // 直接显示
	// 	    keywords: [str, str ...]
	// 	    text:str
	//   	}],
	//   	graph: {
	//   		name: [str,str...],
	//   		data: [[float, float, float ...]...]
	//   	}
	// }]
}

const getters = {
  trackGetNews: state => state.data
}

const actions = {
  trackChangeNews ({ commit }, news) {
    commit(types.TRACKCHANGENEWS, { news })
  }
}

const mutations = {
  [types.TRACKCHANGENEWS] (state, { news }) {
    state.data = news
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
