<template>
    <!-- <section class="wrapper overlay cart">
        <h1>DIN BESTÄLLNING</h1>
        <CartItem />
        <div class="container total-amount">
            <div class="main">
                <p class="cart-heading">Total: </p>
                <p>inkl moms + drönarleverans</p>
            </div>
            <div class=" right cart-heading">
                <p id="total-amount">49kr</p>
            </div>
        </div>
        <div class="centre"><button class="btn order">Take my money!</button></div>
    </section> -->

<div class="overlay">
     <section id="cart">
         <span class=""></span>
        <h2>Din beställning</h2>
        <div class="total">
            <h3>Total<span class="dots"></span>{{total}}</h3>
            <div class="counter">
           <button class="arrow"><img src="@/assets/graphics/arrow-up.svg" alt="arrow-up"></button>
               <p style="font-size: .5em;" class="counter">1</p>
               <button class="arrow"><img src="@/assets/graphics/arrow-down.svg" alt="arrow-up"></button></div>
            <p>Inkl moms + drönarleverans</p>
        </div>
        <button href="#" class="btn" @click="sendOrder">Take my money</button>
    </section>
     </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: "Cart",
        components: {
        },
        computed: {
            ...mapGetters(['total'])
        },
    }
</script>

<style lang="scss" scoped>

.counter {
    width:30px;
    position: absolute;
    margin-left: 80%;
    // background: rgb(255, 179, 217);
    p {
    margin:0 auto;
    text-align: center;
    } 
    .arrow {
    // background: hotpink;
    width:30px;  
}
}

   h3 {
        width:60%;
    }

/*  */

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

/* */

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
        font-size: 2em;
        font-weight: 700;
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

            .dots {
                flex: 1;
                border-bottom: 1px dotted rgba(0,0,0,.2);
                margin: 0 .3rem .3rem 0;
                
            }
        }
    }

    
    
    // .total-amount {
//     background: #fff;
// }

    .btn {
     background: black;
     color: #fff;
     padding:2%;   
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 2%;
    width:40%;
     
    }

    // section {
    //     background: #fff;
    //     height: 50vh;
    //     width: 50vw;
    // }

    // .centre {
    //     text-align: center;
    //     font-size: 2em;
    //     font-weight: bold;
    //     font-family: 'Playfair display', sans-serif;
    //     background: #fff;
    //     position: absolute;
    // }

    // .right {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;

    // }


    // #total-sum {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    // }

    // body {
    //     padding: 3%;
    // }

    // button {
    //     border: none;
    //     background: inherit;
    // }

    // /* Typography */
    // .cart-heading {
    //     font-size: 2em;
    //     font-family: 'Playfair';

    // }

    // .sub-heading {
    //     font-size: 1.8em;

    // }


    // /* LAYOUT */
    // .main {
    //     grid-area: main;
    // }

    // .sub {
    //     grid-area: sub;
    // }

    // .right {
    //     grid-area: right;
    // }

    // .container {
    //     grid-template-columns: 1fr 1fr 2fr;
    //     display: grid;
    //     grid-template-areas:
    //         'main main main main right right';
    //     grid-gap: 10px;
    //     padding: 10px;
    // }

    // .total-section {
    //     margin-top: 40%;
    // }
    
</style>