<template>
   <header>
          <div class="column"><nav class="btn-nav"><img id="nav-sign" src="../assets/graphics/open-menu.svg" alt=""></nav></div> 
          <div class="column right-col"> <nav class="btn-bag"><img id="bag-sign" src="../assets/graphics/bag.svg" alt=""></nav></div>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>
<style scoped>
header {
        background: url('../assets/graphics/graphics-header.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-size: cover;
        height: 20vh;
        width: 100%;
        padding:2% 0% 0% 2%; 
        display: flex;
    }
    
    .column {
        flex:50%;
    }


    /* Navigation */
    #nav-sign {
            width:30px;
        }

        #nav-sign {
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
            /* margin: 2% 0% 0% 0%; */
        }

        .btn-bag {
            font-size: 4.42em;
            font-weight: 300;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #000;
            display: flex;
            justify-content: center;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            border:none;
            margin-left: auto;
            margin-right: 5%;
            
            
        }
</style>