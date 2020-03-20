<template>
<main class="wrapper">
    <p id="order">Ordernummer <span style="font-weight:700;">#12DV23F</span></p>
    <img src="../assets/graphics/drone.svg" alt="drone">
    <h1>Din beställning är på väg!</h1>
    <p id="ETA">13 minuter</p>
    <button class="btn">Ok, cool!</button>
</main>
</template>

<script>
export default {

}
</script>

<style>

:root {
    background: #E5674E;
}
.wrapper {
    text-align: center;
    padding:3%;
}
p {
    font-family: montserrat, helvetica, sans-serif;
    font-size: 1em;
    margin: 16px 0;
    color: #fff;
}

#order {
    font-family: montserrat, helvetica, sans-serif;
}

h1{
    font-family: 'playfair display';
    font-size: 5rem;
    line-height: 1.4em;
    color: #fff;
} 

.btn {
    width: 10em;
    height: 3em;
    border-radius: 20px;
    font-size: 1.5em;
    font-family: 'Playfair Display';
    font-weight: 700;
}

</style>