<template>
   <div class="cart-item" >
      <!---  -->
      <section v-for="cart in getCartHere" :key="cart.id">
         <p class="item">{{cart.title}}<span class="dots"></span>
            <span>
               <button class="buttons"><img src="@/assets/graphics/arrow-up.svg" alt="arrow-up"></button>
                  <p style="font-size: .5em;" class="counter">1</p>
                     <button class="buttons"><img src="@/assets/graphics/arrow-down.svg" alt="arrow-up"></button>
               </span>
         </p>
            <p class="price"> {{cart.price}}kr </p>
               <div class="main cart-heading">
         </div>
         <div class=" cart-heading">
            <div>
            </div>
         </div>
      </section>
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

<style lang='scss' scoped>

.buttons {
    display:flex;
    flex-direction: column;
    align-items: center;   
}

   .counter {
      display:flex;
       flex-direction: column;
      align-items: center; 
      font-weight: 700;
    }


.cart-item {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;

        p {
            margin: 0;
            display: flex;

            .dots {
                flex: 1;
                border-bottom: 1px dotted rgba(0,0,0,.2);
                margin: 0 .3rem .3rem 0;
            }
        }
    }


.item {
   font-size: 1.6em;
   font-family: 'PT Serif', serif;
   font-weight: 700;
}
.price {
   font-size: 1em;
   font-family: 'Work Sans', sans-serif;
}


// .total {
//    flex: 1;
// }

</style>