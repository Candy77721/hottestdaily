import * as types from '../mutations-types'

const state = {
  // 是否展示分类导航栏
  showTypes: false,
  // 全部分类
  allTypes: [
    { keyword: '全部', url: 'all' },
    { keyword: '政治', url: 'politics' },
    { keyword: '社会', url: 'society' },
    { keyword: '财经', url: 'finance' },
    { keyword: '教育', url: 'education' },
    { keyword: '科技', url: 'technology' },
    { keyword: '时尚', url: 'fashion' },
    { keyword: '体育', url: 'sports' }
  ],
    // '全部', '政治', '社会', '财经', '教育', '科技', '时尚', '体育'],
  // allTypesUrl: ['all', 'politics', 'society', 'finance', 'education', 'technology', 'fashion', 'sports'],
  // 当前分类
  nowType: 'all',
  // 下一页
  nextPage: 1,
  news: [],
  // 展示的时候的长度，即每有一个 group ，加2，每有一个 news ，加1
  showLength: 0
}

const getters = {
  newsGetShowTypes: state => state.showTypes,
  newsGetAllTypes: state => state.allTypes,
  newsGetNowType: state => state.nowType,
  newsGetNextPage: state => state.nextPage,
  newsGetNewsData: state => state.news
}

const actions = {
  // 切换分类导航栏是否展示
  newsToggleShowTypes ({ commit }) {
    commit(types.NEWSTOGGLESHOWTYPES)
  },
  // 添加新闻并更新页数
  newsAddNews ({ commit }, pageData) {
    commit(types.NEWSADDNEWS, { pageData })
    commit(types.NEWSADDPAGE)
  },
  // 更新当前 news 的分类，同时重置页数,重置新闻
  newsChangeNowType ({ commit }, newType) {
    commit(types.NEWSCHANGENOWTYPE, { newType })
    commit(types.NEWSRESETNEXTPAGE)
    commit(types.NEWSCLEARNEWS)
    commit(types.NEWSCLEARSHOWLENGTH)
  }
}

const mutations = {
  [types.NEWSTOGGLESHOWTYPES] (state) {
    state.showTypes = !state.showTypes
  },
  /*
  保证 type: group 的数据在 3n+1 / 3n+2 上
  */
  [types.NEWSADDNEWS] (state, { pageData }) {
    const temp = []
    pageData.map(item => {
      // 为新闻则直接放入
      if (item.type === 'news') {
        state.news.push(item)
        state.showLength += 1
      } else {
        // 为话题组则判断
        // 如果会被放入最后一列则暂存起来
        if ((state.showLength % 3) === 2) {
          temp.push(item)
        } else {
          // 不为最后一列则直接放入
          state.news.push(item)
          state.showLength += 2
        }
      }
      // 每次到可以放入的时候，检查能否放入
      if ((state.showLength % 3) !== 2) {
        // 以及检有没有数据暂存
        if (temp.length > 0) {
          state.news.push(temp.pop())
          state.showLength += 2
        }
      }
    })
  },
  // 更新 nowType
  [types.NEWSCHANGENOWTYPE] (state, { newType }) {
    state.nowType = newType
  },
  // nextPage + 1
  [types.NEWSADDPAGE] (state) {
    state.nextPage = state.nextPage + 1
  },
  // 清空页数
  [types.NEWSRESETNEXTPAGE] (state) {
    state.nextPage = 1
  },
  // 清空news
  [types.NEWSCLEARNEWS] (state) {
    state.news = []
  },
  // 清空 showLength
  [types.NEWSCLEARSHOWLENGTH] (state) {
    state.showLength = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
