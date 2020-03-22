<template>
<section>
   <h1>Meny</h1>
   <!-- Following should be inside a MenuItem component I guess???  ^_^   -->
   <div class="container menu-item">
      <!--- v-for goes here ^_^  --->
      <div class="item2"><button class="btn-menu"><img id="menu-sign" src="../assets/graphics/plus.png" alt=""></button></div>
      <div class="item3 menu-heading">Caffè Doppio</div>
      <div class="item4 menu-heading">49kr</div>
      <div class="item5 menu-sub-heading">Bryggd på månadens bönor</div>
   </div>
</section>
</template>

<script>

export default {

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
  padding: 10px;
}

section {
    max-width: 900px;
    background: #F3E4E1;
    height: 100vh;
    padding: 2%;
}
/* Typography */

h1 {
    font-family: 'playfair display';
    font-size: 4rem;
    line-height: 1.4em;
    text-align: center;
    font-weight: 700;
}

.menu-heading {
font-size: 2em;
font-weight: 700;
font-family:' Playfair Display';
}

/* spacing between menu items */
.menu-item {
    padding-top: 5%;
}

.menu-sub-heading {
    font-family: muli, Arial, Helvetica, sans-serif;
    font-size:.8em;
}

/*  */
#menu-sign {
    filter: invert(100%); 
  -webkit-filter:invert(100%); 
  width:30px;
  
}

.btn-menu {
  font-size: 4.42em;
    font-weight: 300;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
}
</style>