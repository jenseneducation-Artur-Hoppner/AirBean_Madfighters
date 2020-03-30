import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Menu from '../views/Menu.vue'
// import Api from '../api/Index.js'
import About from '../views/About.vue'
import OrderStatus from '../views/OrderStatus.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  // {
  //   path: '/Api',
  //   name: 'Api',
  //   component: Api
  // },

  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
  path: '/OrderStatus',
  name: 'OrderStatus',
  component: OrderStatus
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


