import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  showMenu: false,
  showCart: false
  },
  mutations: {
    toggleMenu(state) {
      console.log(state.showMenu);
      state.showMenu = !state.showMenu
    },

    showCart(state) {
      state.showCart = !state.showCart
      console.log( "showCart = " + state.showCart)
    }

  },
  actions: {
    
  },
  modules: {
    // in here 
  }

})
