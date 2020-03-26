import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  toggleOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      console.log(state.toggleOpen);
      state.toggleOpen = !state.toggleOpen
    }
  },
  actions: {
    
  },
  modules: {
    // in here 
  }

})
