<template>

<div id="sale_list">


<ul>
<li v-for='item in sale_list'>
{{item.product}} @ {{item.price}}

</li>
</ul>


</div>


</template>
/* $store.getters.sale_list */
<script>

import {mapGetters} from 'vuex'

export default{
  // props:['sale_info'],
  data:function(){return {}},
  computed:{
    ...mapGetters([
      'sale_list'
    ])
  },

}

</script>


<style scoped>
</style>
