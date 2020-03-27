import Vue from 'vue'
import Vuex from 'vuex'
// import * as api from '@/api/index.js'
// import {getMenu} from '@/api/index.js' // another way of importing just one thing 
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    apiMenu: [], // From Artur
    cartItems: [], // From Lova
    cart: [], // From Ade
    menu: [], // From Ade
    order: {}, // From Ade
    showMenu: false, // From Lova
    showCart: false // From Lova
  },


  mutations: {
// From Lova
toggleMenu(state) {
  console.log(state.showMenu);
  state.showMenu = !state.showMenu
},

showCart(state) {
  state.showCart = !state.showCart
  console.log( "showCart = " + state.showCart)
},
//______________________________

// From Ade
addToCart(state, item) {
  state.cart.push({
    id: item.id,
    price: item.price,
    title: item.title,
    quantity: 1
  });
},
removeFromCart(state, id) {
  let index = state.cart.findIndex(item => item.id === id);
  state.cart.splice(index, 1);
},
updateItem(state, id) {
  let index = state.cart.findIndex(item => item.id === id);
  state.cart[index].quantity++;
}
// ____________________________________
  },


  actions: {
        //Get the api here //Artur
        //Post the api here //Artur


        // From Ade
        addItem(context, item) {
          context.commit("addToCart", item);
        }
        // ____________________________________
  },


  getters: {
    // From Ade
    total: state => {
      if (state.cart.length > 0) {
        return state.cart
          .map(item => item.price)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    }
        // ____________________________________

  },

  modules: {
 // ??? use for???
  }

})
