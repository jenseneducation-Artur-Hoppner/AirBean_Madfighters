<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Menu</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-link to="/OrderStatus"> Order Status </router-link> -->

  
    <router-view/>
  </div>
</template>
<script>
import Home from './views/Start'

export default {
  name: 'App',
  component: {
     Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
