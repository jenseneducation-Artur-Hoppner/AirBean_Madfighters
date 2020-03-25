<template>


  <div class="centre navigation">
        <nav class="navbar-links">
            <a href="#">Meny</a>
            <div class="border"></div>
            <a href="#">Vårt kaffe</a>
            <div class="border"></div>
            <a href="#">Orderstatus</a>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navigation"
}

</script>

<style scoped>

   .border {
        height: 1px;
        width: 2rem;
        background-color: white;
      
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    
    }


  .navigation {
    
    height: 100vh;
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