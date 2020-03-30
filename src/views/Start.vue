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

<style lang="scss" scoped>
@import "./../assets/scss/variables";
#logo{
    width:6em;
}
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $green;
    text-align: center;
    color: #FCFEFD;
    background-image: url("../assets/graphics/intro-graphic-right.svg"), url("../assets/graphics/intro-graphic-left.svg");
    background-position: right, left;
    background-repeat: no-repeat, no-repeat;
} 
/* Typography */
h1 {
    font-family: 'playfair display' ,'serif';
    font-size: 5rem;
    line-height: 1.5em;
} 
p {
    font-family: 'Work Sans', sans-serif;
    letter-spacing: .3em;
    font-weight: 100;
}
</style>