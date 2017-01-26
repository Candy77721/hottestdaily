import Vue from 'vue'
import Router from 'vue-router'

// import Graph from '../pages/graph.vue'
// import News from '../pages/news.vue'
// import Rank from '../pages/rank.vue'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'

const routes = [{
  path: '/explore',
  name: 'explore',
  component: function (resolve) {
    require(['../pages/index.vue'], resolve)
  }
}, {
  path: '/news',
  name: 'news',
  redirect: { name: 'newsType', params: { type: '全部' }},
  component: function (resolve) {
    require(['../pages/news.vue'], resolve)
  }
}, {
  path: '/news/:type',
  name: 'newsType',
  component: function (resolve) {
    require(['../pages/news.vue'], resolve)
  }
}, {
  path: '/rank',
  name: 'rank',
  component: function (resolve) {
    require(['../pages/rank.vue'], resolve)
  }
}, {
  path: '/search/:search',
  name: 'search',
  component: function (resolve) {
    require(['../pages/search.vue'], resolve)
  }
}]

const router = new Router({
  // mode: 'history', // 这样url就没有/#/XXX,而是常见的url形式
  routes: routes, // short for routes: routes
  linkActiveClass: 'router-active', // router-link的选中状态的class，也有一个默认的值
  history: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
