<template>
    <header>
        <div class="column">
            <nav class="btn-nav" @click="toggle">
                <img id="nav-icon" v-if="$store.state.toggleOpen" src="../assets/graphics/close.svg" alt="">
                <img id="nav-icon" v-if="!$store.state.toggleOpen" src="../assets/graphics/open-menu.svg" alt="">
            </nav>
        </div>
        <div class="column">
            <nav class="btn-bag"><img id="bag-sign" src="../assets/graphics/bag.svg" alt=""></nav>
        </div>
        <div v-if="$store.state.toggleOpen" class="centre navigation">
            <nav class="navbar-links">
                <router-link to="/menu" v-on:click.native="toggle">Meny</router-link>
                <div class="border"></div>
                <router-link to="/about" v-on:click.native="toggle" >Vårt kaffe</router-link> 
                <div class="border"></div>
                <router-link to="/Orderstatus">Orderstatus</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            toggle() {
                this.$store.commit('toggleMenu');
        }
        }
    }
</script>
<style lang="scss" scoped>

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



    .btn-bag {
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

    /* NAVIGATION */


    .border {
        height: 1px;
        width: 2rem;
        background-color: rgba(255, 255, 255, 0.63);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;

    }


    .navigation {

        /* Sit on top of the page content */


        font-size: 2em;
        color: #fff;


    }

    .navigation {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2F2926;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 2;


    }

    :root {
        color: #fff;
        font-family: muli;
        font-size: 2em;
        background: #312926;
    }


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