import Vue from 'vue'
import Router from 'vue-router'

// import Explore from '../pages/index.vue'
// import News from '../pages/news.vue'
// import Rank from '../pages/rank.vue'
// import Search from '../pages/search.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: { name: 'explore' }
}, {
  path: '/explore',
  name: 'explore',
  component: function (resolve) {
    require(['../pages/index.vue'], resolve)
  }
  // component: Explore
}, {
  path: '/news',
  name: 'news',
  redirect: { name: 'newsType', params: { type: 'all' }},
  component: function (resolve) {
    require(['../pages/news.vue'], resolve)
  }
  // component: News
}, {
  path: '/news/:type',
  name: 'newsType',
  component: function (resolve) {
    require(['../pages/news.vue'], resolve)
  }
  // component: News
}, {
  path: '/rank',
  name: 'rank',
  component: function (resolve) {
    require(['../pages/rank.vue'], resolve)
  }
  // component: Rank
}, {
  path: '/search/:search',
  name: 'search',
  component: function (resolve) {
    require(['../pages/search.vue'], resolve)
  }
  // component: Search
}, {
  path: '/userhome',
  name: 'userHome',
  component: function (resolve) {
    require(['../pages/userHome.vue'], resolve)
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
