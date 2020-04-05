<template>
    <header v-on:keydown.esc="escapeOverlay">
        <div class="column">
            <nav class="btn-nav" @click="toggleMenu">
                <img id="nav-icon" v-if="$store.state.showMenu" src="../assets/graphics/close.svg" alt="">
                <img id="nav-icon" v-if="!$store.state.showMenu" src="../assets/graphics/open-menu.svg" alt="">
            </nav>
        </div>
        <div class="column">
            <CartIcon /> 

        </div>
      <Navigation v-if="$store.state.showMenu" /> 
        <Cart v-if="$store.state.showCart" />
    </header>
</template>

<script>

import Navigation from '../components/Navigation';
import Cart from '../components/Cart';
import CartIcon from '../components/CartIcon';
import { mapMutations } from 'vuex';

    export default {
        name: "Header",
        components: {
            Navigation,
            Cart,
            CartIcon
        },
        
        // move mapgetter to cartIcon.vue

        methods: {
            //toggleMenu() {
                //this.$store.commit('toggleMenu');
                ...mapMutations([ 'toggleMenu' ]),
        //},
     

        show(){
            this.$store.commit('showCart')
            console.log("show ran ")
        }

        }
    }
</script>
<style lang="scss" scoped>
@import "./../assets/scss/variables";


    :root {
        color: #fff;
        font-family: 'Work Sans', sans-serif;
        font-size: 2em;
        background: #312926;
    }

    header {
        background: url('../assets/graphics/graphics-header.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-size: cover;
        height: 20vh;
        width: 100%;
        padding: 0% 0% 0% 0%;
        display: flex;
    }

    .column {
        flex: 50%;
    }

    /* Navigation */
    #nav-icon {
        width: 25px;
        z-index: 1000;
    }

    /* Cart Icon */

    .cart-icon {
        font-size: 4.42em;
        font-weight: 300;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #000;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        border: none;
        margin-left: auto;
        margin-right: 10px;
        margin-top: 10px;
    }

    /* COUNTER ICON */

.counter {
    background:$orange;
    width:1.2rem;
    height:1.2rem;
    border-radius: 50%;
    position:absolute;
    margin-left: 15px;
    margin-top: 3px;
    font-size: .6rem;
    color:white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
    // /* NAVIGATION */

    // .border {
    //     height: 1px;
    //     width: 2rem;
    //     background-color: rgba(255, 255, 255, 0.63);
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     margin: auto;
    // }
    // .navigation {
    //     font-size: 2em;
    //     color: #fff;
    // }

    // .navigation {
    //     z-index: 999;
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: $brown;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     text-align: center;
    //     line-height: 2;
    // }



    .btn-nav {
        z-index: 1000;
        font-size: 4.42em;
        font-weight: 300;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        border: none;
        position:relative;
        margin-left: 10px;
        margin-top: 10px;
    }

    .navbar-links {
        font-family: 'PT Serif', serif;
        font-weight: 700;
    }
</style>