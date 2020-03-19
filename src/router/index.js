import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'

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
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
