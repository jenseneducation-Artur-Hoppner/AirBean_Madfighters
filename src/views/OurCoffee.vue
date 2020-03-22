<template>
    <div class="wrapper">
              <!-- <header>
            <nav><i class="fa fa-bars"></i>  </nav>
        </header> -->


        <Header />
        <article>
            <h1> Vårt kaffe </h1>
            <h2 class="sub-heading">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
            </h2>
            <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
            </p>
            <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
            </p>
        </article>
<section class="center">
    <img class="portrait" src="../assets/graphics/eva-cortado.jpg">
     <h3>Eva Cortado</h3>
     <p>VD &amp; Grundare</p>
</section>

<Footer />

    </div>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
    name: 'OurCoffee',
  components: {
  
    Header,
    Footer
   
  },

}
</script>

<style scoped>
/* Typography */
.fa-bars {
    color: hotpink;
    font-size: 5em;
}
h1 {
font-weight: 550;
}

.sub-heading {
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'fira sans';
}

h1,h2 {
    font-family: 'playfair display';
    font-size: 5rem;
    line-height: 1.4em;
} 

h3 {
    font-weight: 700;
    font-size: 2em;
}

p {
    font-family: 'fira sans';
    font-size: 1em;
    margin: 16px 0;
}

/* Layout */

:root {
    background: #F3E4E1;
}


.wrapper {
    background: #F3E4E1;
    height:100vh;
    max-width: 1200px;
}


article {
  padding: 0 2% 0 2%;
}

article p {
    line-height: 1.5;
}


p {
    font-family: 'fira sans';
}

.center {
    text-align: center;
    background: #F3E4E1;
}

/* FOOTER  */
/* footer {
    
    background-color: #F3E4E1;
}

#bg {
        background: url('../assets/graphics/graphics-footer.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-size: cover;
        height: 20vh;
        width: 100%;
        background-color: #F3E4E1;     
} */

/* annat */

.portrait {
  border-radius: 50%;
}
</style>