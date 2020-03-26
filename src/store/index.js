import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  showMenu: false,
  cartVisible: false
  },
  mutations: {
    toggleMenu(state) {
      console.log(state.showMenu);
      state.showMenu = !state.showMenu
    },

    showCart(state) {
      state.cartVisible = !state.cartVisible
      console.log( "showCart = " + state.cartVisible)
    }

  },
  actions: {
    
  },
  modules: {
    // in here 
  }

})
