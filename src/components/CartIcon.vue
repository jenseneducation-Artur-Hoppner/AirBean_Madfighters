<template>
    <nav @click="show" class="cart-icon"><aside class="counter">{{cartItem}}</aside><img src="../assets/graphics/bag.svg" alt=""></nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

name: "CartIcon",
computed: {
            ...mapGetters(['cartItem'])
        },

methods: {
        show(){
            this.$store.commit('showCart')
            console.log("show ran ")
        }
}

}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables";

.cart-icon {
    z-index: 2000;
    position: relative;
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
</style>