import Vue from 'vue'
import Vuex from 'vuex'
// import * as api from '../api/Index.js'
import {getMenu} from '../api/Index.js'; 
import {postOrder} from '../api/Index.js'; 

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cartItems: [], // From Lova
    cart: [1], // From Ade
    menu: [],
    order: {}, // From Ade
    showMenu: false, // From Lova
    showCart: false // From Lova
  },
  mutations: {
    //Pass Api menu to state menu
    addToMenu: (state, data) => (state.menu = data),
    
    //Pass Api order to state order
    addToOrder: (state, data) => (state.order = data),

     // From Lova
    toggleMenu(state) {
      console.log(state.showMenu);
      state.showMenu = !state.showMenu
    },

    showCart(state) {
      state.showCart = !state.showCart
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

      // Importing from api/index.js and get menu
      async getApiMenu({commit}) {
        const data = await getMenu();
        commit("addToMenu", data);
        return true;
      },

      // Importing from api/index.js and post order
      async getApiOrder({commit}) {
        const data = await postOrder();
        commit("addToOrder", data);
        return true;
      },
      
          // From Ade
          addItem(context, item) {
            context.commit("addToCart", item);
          }
          // ____________________________________
  },

  getters: {
     cartItemCount: (state) => {
      return state.cart.length;
    },
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
  },

})