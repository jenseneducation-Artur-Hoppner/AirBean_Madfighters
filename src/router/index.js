import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Menu from '../views/Menu.vue'
=======
import Start from '../views/Start.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import OrderStatus from '../views/OrderStatus.vue'
import OurCoffee from '../views/OurCoffee.vue'



>>>>>>> 32725f933aa08bf963b40d06e6a733b3ecf29622

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Menu',
    component: Menu
=======
    name: 'Start',
    component: Start
>>>>>>> 32725f933aa08bf963b40d06e6a733b3ecf29622
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


