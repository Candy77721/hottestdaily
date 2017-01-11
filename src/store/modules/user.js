import * as types from '../mutations-types'

const state = {
  // 模态框状态:UserLogin,UserRegister,UserRegisterOk,UserForget,
  modalState: 'UserLogin',
  isModal: false,
  isLogin: false,
  userInfo: {
    // "username":"string",
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
  getIsLogin: state => state.isLogin,
  getModalState: state => state.modalState,
  getIsModal: state => state.isModal
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
  更改用户状态
  */
  toggleLogin ({ commit }) {
    commit(types.TOGGLELOGIN)
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
