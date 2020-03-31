<template>
    <section class="wrapper overlay">
        <h1>DIN BESTÄLLNING</h1>
        <CartItem />
        <div class="container total-section">
            <div class="main">
                <p class="cart-heading">Total: </p>
                <p>inkl moms + drönarleverans</p>
            </div>
            <div class=" right cart-heading">
                <p id="total-amount">49kr</p>
            </div>
        </div>
        <div class="centre"><button class="btn order">Take my money!</button></div>
    </section>
</template>

<script>
    import CartItem from '../components/CartItem';
    export default {
        name: "Cart",

        components: {
            CartItem
        }
    }
</script>

<style lang="scss" scoped>

.overlay {
    background: rgba(0, 0, 0, 0.8);
    width: 100vh;
    height:100vh;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
}

    // .btn {
    //     width: 60%;
    //     max-width: 400px;
    //     height: 4em;
    //     border-radius: 60px;
    //     font-family: 'Playfair Display';
    //     font-weight: 700;
    //     color: #fff;
    //     background: #222;
    //     margin-top: 40px;
    // }

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