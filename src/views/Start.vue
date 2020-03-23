<template>
 <div class="wrapper">
<main class="main">
    <img id="logo" src="@/assets/graphics/logo.svg">
<h1>AIR BEAN</h1>
<p>DRONEDELIVERED COFFEE</p>
</main>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
#logo{
    width:6em;
}
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38846d;
    text-align: center;
    color: #FCFEFD;
    background-image: url("../assets/graphics/intro-graphic-right.svg"), url("../assets/graphics/intro-graphic-left.svg");
    background-position: right, left;
    background-repeat: no-repeat, no-repeat;
} 
/* Typography */
h1,h2,h3,h4 {
    font-family: 'playfair display';
    font-size: 5rem;
    line-height: 1.5em;
} 
p {
    font-family: 'fira sans';
    letter-spacing: .3em;
    font-weight: 100;
}
</style>