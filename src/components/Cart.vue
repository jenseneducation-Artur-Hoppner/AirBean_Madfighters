<template>
<div class="overlay">
     <section id="cart">
         <span class=""></span>
        <h2>Din beställning</h2>
         <CartItem/>
        <div class="total">
            <h3>Total<span class="dots"></span>{{total}}kr</h3>
            <div class="counter">
           <button class="arrow"><img src="@/assets/graphics/arrow-up.svg" alt="arrow-up"></button>
               <p style="font-size: .5em;" class="counter">1</p>
               <button class="arrow"><img src="@/assets/graphics/arrow-down.svg" alt="arrow-up"></button></div>
            <p>Inkl moms + drönarleverans</p>
        </div>
        <router-link to="/OrderStatus" tag="span"><button href="#" class="btn" @click="sendOrder">Take my money!</button></router-link>
    </section>
     </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapGetters } from 'vuex';

    export default {
    components: {
    CartItem
    },
        name: "Cart",
        computed: {
            ...mapGetters(['total'])
        },

    }
</script>

<style lang="scss" scoped>

h2 {
    text-align: center;
}

.counter {
    width:30px;
    position: absolute;
    margin-left: 80%;
    p {
    margin:0 auto;
    text-align: center;
    } 
    .arrow {
    width:30px;  
}
}

#cart {
    position: fixed;
    padding: 1rem;
    top: 4rem;
    right: 0;
    width: 80vw;
    margin: 1rem;
    background: white;
    z-index: 999;
    border-radius: .25rem;
    box-shadow: 0 0 .5rem rgba(0,0,0,.2), 0 0 4rem rgba(0,0,0,.2) ;
}

.overlay {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height:100%;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

h2 {
    font-size: 2.2em;
}

    h2, h3 {
        font-weight: 700;
        font-family: 'PT Serif', serif;
    }
}


    .total {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;

        h3 {
            margin: 0;
            display: flex;
            font-size: 2em;
            font-weight: 700;

            .dots {
                flex: 1;
                border-bottom: 1px dotted rgba(0,0,0,.2);
                margin: 0 .3rem .3rem 0;
            }
        }
    }

    


    .btn {
     background: black;
     color: #fff;
     padding:2%;  
    border-radius: 30px;
    width: 100%;
    height: 30%;
    font-size: 1.8em;
    font-family: 'PT Serif', serif;
    font-weight: 700;
    cursor: pointer;
    
    }
    
</style>