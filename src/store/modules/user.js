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
    likeList: [],
    defaultTypes: ['财经', '彩票', '房产', '股票', '家居', '教育', '科技', '社会', '时尚', '时政', '体育', '星座', '游戏', '娱乐']
    /*
    "email":"string",
    "username":"string",
    'acceptPost': int // 0 --> 不接受推送 , 1 --> 接受推送
    defaultTypes: ['财经', '彩票', '房产', '股票', '家居', '教育', '科技', '社会', '时尚', '时政', '体育', '星座', '游戏', '娱乐']
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
  },
  /*
  更新用户信息 -- likeList -- 直接放入
  */
  userUpdateLikeListAll ({ commit }, newLikeList) {
    commit(types.USERUPDATELIKELISTALL, { newLikeList })
  },
  /*
  更新用户信息 -- likeList
  如果是 增加喜欢
  则删除原本的后放入
  如果是 删除喜欢
  如果传进的 newLikeList.word 不在 newLikeList.defaultTypes 中，则直接删除
  否则，删除后再放入
  */
  userUpdateLikeList ({ commit }, newLikeList) {
    commit(types.USERUPDATELIKELIST, { newLikeList })
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
  },
  [types.USERUPDATELIKELISTALL] (state, { newLikeList }) {
    state.userInfo.likeList = newLikeList
  },
  [types.USERUPDATELIKELIST] (state, { newLikeList }) {
    const likeList = state.userInfo.likeList
    const index = likeList.findIndex(ele => ele.word === newLikeList.word)
    likeList.splice(index, 1)
    if (newLikeList.like) {
      likeList.push(newLikeList)
    } else if (state.userInfo.defaultTypes.includes(newLikeList.word)) {
      likeList.push(newLikeList)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
