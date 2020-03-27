import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import VueRouter from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    }
  ]
})

const router = new VueRouter({
  linkActiveClass:'active',
})
