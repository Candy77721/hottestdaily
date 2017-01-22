import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'

import news from './modules/news'
import user from './modules/user'
import search from './modules/search'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    news,
    user,
    search
  }
})
