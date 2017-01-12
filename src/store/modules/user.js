import * as types from '../mutations-types'

const state = {
  // 模态框状态:UserLogin,UserRegister,UserRegisterOk,UserForget,
  modalState: 'UserLogin',
  // 是否打开模态框
  isModal: false,
  // 是否登陆
  isLogin: false,
  // 是否显示菜单
  isUserMenu: false,
  // 用户名
  username: '', // string
  userInfo: {
    // "email":"string",
    // "url":[
    //     'string',
    //     'string',
    //     ……
    // ],
    // "word":[
    //   'string',
    //   'string'
    // ],
    // "label":[
    //   'string',
    //   'string'
    // ]
  }
}

const getters = {
  getModalState: state => state.modalState,
  getIsModal: state => state.isModal,
  getIsLogin: state => state.isLogin,
  getIsUserMenu: state => state.isUserMenu,
  getUsername: state => state.username
}

const actions = {
  /*
  更改模态框状态
  参数：新的模态框状态(string)
  */
  changeModalState ({ commit }, newState) {
    commit(types.CHANGEMODALSTATE, { newState })
  },
  /*
  切换模态框
  */
  toggleModal ({ commit }) {
    commit(types.TOGGLEMODLA)
  },
  /*
  更改用户登陆状态
  */
  toggleLogin ({ commit }) {
    commit(types.TOGGLELOGIN)
  },
  toggleIsUserMenu ({ commit }) {
    commit(types.TOGGLEISUSERMENU)
  },
  /*
  更新用户名
  */
  changeUsername ({ commit }, newUsername) {
    commit(types.CHANGEUSERNAME)
  }
}

const mutations = {
  [types.CHANGEMODALSTATE] (state, { newState }) {
    state.modalState = newState
  },
  [types.TOGGLEMODLA] (state) {
    state.isModal = !state.isModal
  },
  [types.TOGGLELOGIN] (state) {
    state.isLogin = !state.isLogin
  },
  [types.TOGGLEISUSERMENU] (state) {
    state.isUserMenu = !state.isUserMenu
  },
  [types.CHANGEUSERNAME] (state, { newUsername }) {
    state.username = newUsername
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
