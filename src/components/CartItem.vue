<template>
   <div class="container cart-item"> <!---  -->
         <ul v-bind:cart="cart" v-for="cart in getCartHere" :key="cart.id">
     <p>{{cart.title}}</p>
     <p>{{cart.price}}</p>
   </ul>
         <div class="main cart-heading">
            <p>CART ITEM </p>
            <p style="font-size: .5em;">CART ITEMS PRICE</p>
         </div>
         <div class=" cart-heading">
            <div class="right">
               <button><img src="@/assets/graphics/arrow-up.svg" alt="arrow-up"></button>
               <p style="font-size: .5em;"></p>
               <button>
               <img src="@/assets/graphics/arrow-down.svg" alt="arrow-up"></button>
            </div>
         </div>
      </div>
</template>
<script>

export default {

name: 'CartItem',

    computed: {

           getCartHere(){
      return this.$store.state.cart
      },
    },
}

</script>

<style lang='scss'>

.cart-item {
    background: #fff;
}
</style>