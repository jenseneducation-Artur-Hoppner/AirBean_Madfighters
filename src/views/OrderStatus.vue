<template>
<main class="wrapper">
    <p id="order">Ordernummer <span style="font-weight:700;">#12DV23F</span></p>
    <img src="../assets/graphics/drone.svg" alt="drone">
    <h1 id="order-heading">Din beställning är på väg!</h1>
    <p id="ETA">13 minuter</p>
    <button class="btn">Ok, cool!</button>
</main>
</template>

<script>
export default {

    // From Ade ????
  name: "OrderStatus",
  computed: {
    order() {
      return this.$store.state.order;
    }
  }
    //_______________________________

}
</script>

<style scoped>

:root {
    background: #E5674E;
}
.wrapper {
    text-align: center;
    padding:3%;
    background: #E5674E;
    height:100vh;
    }
p {
    font-family: montserrat, helvetica, sans-serif;
    font-size: 1.4em;
    margin: 16px 0;
    color: #fff;
}

#order {
    font-family: montserrat, helvetica, sans-serif;
    margin: 16px 0;
    font-size: 1em;
}


#order-heading{
    font-family: 'playfair display';
    font-size: 4em;
    font-weight: 700;
    
    line-height: 1.4em;
    color: #fff;
} 

.btn {
    width: 10em;
    height: 3em;
    border-radius: 250px;
    font-size: 1.5em;
    font-family: 'Playfair Display';
    font-weight: 700;
    margin-top: 9%;
}

</style>