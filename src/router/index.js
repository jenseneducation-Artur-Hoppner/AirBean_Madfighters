import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import OrderStatus from '../views/OrderStatus.vue'
import OurCoffee from '../views/OurCoffee.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  {
  path: '/OrderStatus',
  name: 'OrderStatus',
  component: OrderStatus
},
{
  path: '/OurCoffee',
  name: 'OurCoffee',
  component: OurCoffee
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


