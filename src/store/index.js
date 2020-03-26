import Vue from 'vue'
import Vuex from 'vuex'
// import * as api from '@/api/index.js'
// import {getMenu} from '@/api/index.js' // another way of importing just one thing 
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    apiMenu: [],
    cartItems: [],
    
  },
  
  mutations: {
      
    // addMenuApi (state) {
    //   state.Menu // === apiMenu
    // }

  },
  actions: {
  //   increment (context) {
  //     context.commit('addMenuApi')
  // }

  
    // const apiMenu api
        //Get the api here
        //Post the api here
  },

  getters: {
    // sendMenu: state => {
    //   return state.apiMenu.filter(name => name);
    // }
  },

  modules: {

  }

})
