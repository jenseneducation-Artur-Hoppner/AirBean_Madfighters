import Vue from 'vue'
import Vuex from 'vuex'
import {getMenu} from '../api/Index.js'; 
import {postOrder} from '../api/Index.js'; 

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
    order: {}, 
    showMenu: false,
    showCart: false 
  },
  mutations: {
    addToMenu: (state, data) => (state.menu = data),
    
    addToOrder: (state, data) => (state.order = data),

    toggleMenu(state) {
      state.showMenu = !state.showMenu
    },

    showCart(state) {
      state.showCart = !state.showCart
    },

    hideCart(state) {
      !state.showCart
    },

    
    addToCart(state, item) {
      
      state.cart.push({
        id: item.id , //getting duplicate error
        price: item.price,
        title: item.title,
        quantity: 1
      });
    },
    removeFromCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart.splice(index, 1);
    },
    updateItem(state, item) {
      let index = state.cart.findIndex(i => item === i.id);
      state.cart[index].quantity++;
    },
    removeCount(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart[index].quantity--;
      if (state.cart[index].quantity == 0) {
        state.cart.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cart=[];
    }
  
  },

  actions: {

      async getApiMenu({commit}) {
        const data = await getMenu();
        commit("addToMenu", data);
        return true;
      },

      async getApiOrder({commit}) {
        const data = await postOrder();
        commit("addToOrder", data);
        return true;
      },
      
          addItem({commit, state}, item) {
            let index = item.id
            if(state.cart.find(i => i.id === item.id)) {
              commit("updateItem", index);
            }else{
              commit("addToCart", item);
            }
          },

 
          // addItem({context, state}, item) {
          //   let index = find(state.cart, ['id', item.id]);
          //   if(index >= 0){
          //   context.commit("updateItem", index);
          // } else {
          //   context.commit("addToCart", item);
          // }
          // } 
          
        },

  getters: {

    totalPrice: state => {
      let total = 0
      state.cart.forEach((cart)  => {
        
          total += cart.price * cart.quantity
         

      });
      
      return total
    },

    cartItem: state => {
      let total = 0
      state.cart.forEach((cart)  => {
        
          total += cart.quantity
         

      });
      
      return total
    },
    
  },


})