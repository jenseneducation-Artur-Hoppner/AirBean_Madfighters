<template>
<section>
  <Header />
   <h1>Meny</h1>

   <!-- Following should be inside a MenuItem component I guess???  ^_^   -->
   <div v-bind:menu="menu" v-for="menu in getMenuHere" :key="menu.id" class="container menu-item">

      <div class="item2"><button class="btn-menu"><img id="menu-increase" src="../assets/graphics/plus.png" alt=""></button></div>
      <div class="item3 menu-heading">{{menu.title}}</div>
      <div class="item4 menu-heading"><span class="dots"> </span>{{menu.price}}</div>
      <div class="item5 menu-sub-heading">{{menu.desc}}</div>

   </div>
</section>
</template>

<script>

import Header from '../components/Header';
export default {
  components: {
    Header
  },

 data: () => ({
    
    }),

    computed: {
      getMenuHere(){
      return this.$store.state.menu
      },
    },

  created() {
    this.$store.dispatch("getApiMenu");
  },
  
   methods: {
     addToCart() {
       this.$store.dispatch('addItem')
     },
            toggle() {
                this.$store.commit('toggleMenu');
            },
        }
}

</script>

<style scoped>

:root {
    background: #F3E4E1;
}

/* layout */

.item2 { grid-area: left;}
.item3 { grid-area: main; }
.item4 { grid-area: right; 
text-align: right;}
.item5 { grid-area: sub; }

.container {
  display: grid;
  grid-template-areas:
    'left main main main right right'
    'left sub sub sub sub sub';
  grid-gap: 10px;
}

section {
    max-width: 900px;
    background: #F3E4E1;
    height: 100vh;
}
/* Typography */

h1 {
    font-family: ' PT serif', "serif";
    font-size: 4rem;
    line-height: 1.4em;
    text-align: center;
    font-weight: 700;
}

.menu-heading {
font-size: 2em;
font-weight: 700;
font-family:' PT serif', "serif";
}

/* spacing between menu items */
.menu-item {
    padding-top: 5%;
}

.menu-sub-heading {
    font-family: 'Work Sans', sans-serif;
    font-size:.8em;
}

#menu-increase {
    filter: invert(100%); 
  -webkit-filter:invert(100%); 
  width:30px;
}

.btn-menu {
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
    margin-left: 10px;
}

/* not working 

        ¯\_(ツ)_/¯  */
.dots {
  width:30px;
  border-bottom: 2px dotted black;
 
}


</style>