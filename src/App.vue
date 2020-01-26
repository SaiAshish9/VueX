<template>
  <div id="app">
    <img src="./assets/logo.png">


<product >

</product>


<sale >

</sale>

  </div>
</template>

/* v-bind:info='product_list' */
/* v-bind:sale_info='sale_list' */

<script>

import product from './components/product'
import sale from './components/sale'


export default {
  name: 'App',
  components:{
    'product':product,
    'sale':sale
  },
  data:function(){
    return{

    }
  },
  computed:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
