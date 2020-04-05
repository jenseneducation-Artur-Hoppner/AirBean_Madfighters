<template>
    <div class="wrapper">
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
  }
    }


</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables";

/* Typography */

h1 {
font-weight: 700;
}

.sub-heading {
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
}

h1,h2 {
    font-family: 'PT Serif', serif;
    font-size: 5rem;
    line-height: 1.4em;
} 

h3 {
    font-weight: 700;
    font-size: 2em;
}

p {
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    padding: 16px 0;
}

/* Layout */

:root, html, section, article {
    background: $pink;
}

.wrapper {
    background: $pink;
    height:100vh;
    // max-width: 1200px;
}

article {
  padding: 0 2% 0 2%;
}

article p {
    line-height: 1.5;
}

.center {
    text-align: center;
    background: $pink;
}

/* annat */

.portrait {
  border-radius: 50%;
}
</style>