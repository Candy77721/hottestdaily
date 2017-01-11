import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

// import mock from './server/mock'

// 开启debug模式
Vue.config.debug = true

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
