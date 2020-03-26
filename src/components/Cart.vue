

<template>
<section>
      <div class="centre">
         <h1>Din beställning</h1>
      </div>
      <!--Menu Item start -->
      <div class="container cart-item"> <!---  -->
         <div class="main cart-heading">
            <p>Latte</p>
            <p style="font-size: .5em;">49kr</p>
         </div>
         <div class=" cart-heading">
            <div class="right">
               <button><img src="@/assets/graphics/arrow-up.svg" alt="arrow-up"></button>
               <p style="font-size: .5em;"></p>
               <button>
               <img src="@/assets/graphics/arrow-down.svg" alt="arrow-up"></button>
            </div>
         </div>
      </div>
      <!-- Menu Item End -->

      <!-- Total Sum Section Start -->
      <div class="container total-section">
         <div class="main ">
            <p class="cart-heading">Total: </p>
            <p>inkl moms + drönarleverans</p>
         </div>
         <div class=" right cart-heading">
            <p id="total-amount">49kr</p>
         </div>
      </div>
      <!-- Total Sum Section End -->
      <div class="centre"><button class="btn order">Take my money!</button></div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>

.btn {
    width: 60%;
    max-width: 400px;
    height: 4em;
    border-radius: 60px;
    font-family: 'Playfair Display';
    font-weight: 700;
    color: #fff;
    background: #222;
    margin-top: 40px;
}


.centre {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Playfair display' , sans-serif;
}

.right {
    display:flex;
    flex-direction: column;
    align-items: center;

}


#total-sum {
    display:flex;
    flex-direction: column;
    align-items: center;
}

body {
    padding:3%;
}
button {
    border:none;
    background:inherit;
}

/* Typography */
.cart-heading {
    font-size: 2em;
    font-family: 'Playfair';
    
}

.sub-heading {
    font-size: 1.8em;
    
}


/* LAYOUT */
    .main 
    { 
        grid-area: main;     
    }

    .sub { 
        grid-area: sub; 
    }
   
    .right {
        grid-area: right;
    }
    
    .container {
        grid-template-columns: 1fr 1fr 2fr;
        display: grid;
        grid-template-areas:
        'main main main main right right';
        grid-gap: 10px;
        padding: 10px;
    }
    
    .total-section {
       margin-top: 40%;
    }
    
</style>
