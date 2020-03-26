<template>
<div class="centre navigation">

<div class="centre navigation">
 <nav class="navbar-links ">
                <router-link to="/menu" v-on:click.native="toggle">Meny</router-link>
                <div class="border"></div>
                <router-link to="/about" v-on:click.native="toggle" >Vårt kaffe</router-link> 
                <div class="border"></div>
                <router-link to="/Orderstatus">Orderstatus</router-link>
            </nav>
            </div>

</div>
</template>

<script>

export default {
    name: "Navigation",

    methods: {
          toggle() {
                this.$store.commit('toggleMenu');
        }
    }
}

</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables";
/* NAVIGATION */

   .border {
    height: 1px;
    width: 2rem;
    background-color: rgba(255, 255, 255, 0.76);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    }


  .navigation {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 2;
    background: #312926;
    font-size: 1.5em;
    color: white;
  }



    :root {
        color: #fff;
        font-family: muli;
        font-size: 2em;
    }


#nav-icon {
    width:30px;
}

.btn-nav {
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
    border:none;
}

.navbar-links {
    font-family: 'PT Serif', serif;
    font-weight: 700;
}
</style>