import * as types from '../mutations-types'

const state = {
  // 模态框状态: UserLogin, UserRegister, UserRegisterOk, UserForget
  modalState: 'UserLogin',
  // 是否打开模态框
  isModal: false,
  // 是否登陆
  isLogin: false,
  // 是否显示菜单
  isUserMenu: false,
  // 用户信息
  userInfo: {
    email: '',
    username: '',
    acceptPost: true,
    likeList: []
    /*
    "email":"string",
    "username":"string",
    'acceptPost': int // 0 --> 不接受推送 , 1 --> 接受推送
    'likeList': [
      {
        word:'str',
        like: 0|1 // 0 --> 未喜欢 , 1 --> 已喜欢
      },
      ...
    ]
    */
  }
}

const getters = {
  userGetModalState: state => state.modalState,
  userGetIsModal: state => state.isModal,
  userGetIsLogin: state => state.isLogin,
  userGetIsUserMenu: state => state.isUserMenu,
  userGetUserInfo: state => state.userInfo
}

const actions = {
  /*
  更改模态框状态
  参数：新的模态框状态(string)
  */
  userChangeModalState ({ commit }, newState) {
    commit(types.USERCHANGEMODALSTATE, { newState })
  },
  /*
  切换模态框
  */
  userToggleModal ({ commit }) {
    commit(types.USERTOGGLEMODLA)
  },
  /*
  更改用户登陆状态
  */
  userToggleLogin ({ commit }) {
    commit(types.USERTOGGLELOGIN)
  },
  /*
  是否显示用户下拉框
  */
  userToggleIsUserMenu ({ commit }) {
    commit(types.USERTOGGLEISUSERMENU)
  },
  /*
  更新用户信息 -- username
  */
  userChangeUsername ({ commit }, newUsername) {
    commit(types.USERCHANGEUSERNAME, { newUsername })
  },
  /*
  更新用户信息 -- email
  */
  userChangeEmail ({ commit }, newEmail) {
    commit(types.USERCHANGEEMAIL, { newEmail })
  },
  /*
  更新用户信息 -- acceptPost
  */
  userToggleAcceptPost ({ commit }) {
    commit(types.USERTOGGLEACCEPTPOST)
  }
}

const mutations = {
  [types.USERCHANGEMODALSTATE] (state, { newState }) {
    state.modalState = newState
  },
  [types.USERTOGGLEMODLA] (state) {
    state.isModal = !state.isModal
  },
  [types.USERTOGGLELOGIN] (state) {
    state.isLogin = !state.isLogin
  },
  [types.USERTOGGLEISUSERMENU] (state) {
    state.isUserMenu = !state.isUserMenu
  },
  [types.USERCHANGEUSERNAME] (state, { newUsername }) {
    state.userInfo.username = newUsername
  },
  [types.USERCHANGEEMAIL] (state, { newEmail }) {
    state.userInfo.email = newEmail
  },
  [types.USERTOGGLEACCEPTPOST] (state) {
    state.userInfo.acceptPost = !state.userInfo.acceptPost
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
