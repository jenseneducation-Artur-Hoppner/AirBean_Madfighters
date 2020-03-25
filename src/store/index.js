import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
    order: {}
  },
  mutations: {
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
  },
  actions: {
  addItem(context, item) {
    context.commit("addToCart", item);
  }
  },
  getters: {
    total: state => {
      if (state.cart.length > 0) {
        return state.cart
          .map(item => item.price)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    }
  },
  modules: {

    // in here 
  }

})


