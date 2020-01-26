<template>

<div id="product_list">


<ul>
<li v-for='item in product_list'>
{{item.product}} @ {{item.price}}

<button @click='edit_each_price(true,item)'>
Up
</button>
<button @click='edit_each_price(false,item)'>
Down
</button>

</li>

</ul>


<button @click='edit_all_price(true)' >
All Up
</button>

<button @click='edit_all_price(false)'>
All Down
</button>
</div>


</template>

<script>
// npm i babel-preset-stage-2
import {mapState,mapMutations,mapActions} from 'vuex'

export default{
  // props:['info'],
  data:function(){return {
    margin:0.5
  }},
  computed:{
    // info:function(){
    //   return this.$store.state.product_list
    // }
  ...mapState([
    'product_list'
  ]) 
  
  },
  methods:{
  
  ...mapMutations([
    'mutate_all_price'
  ]),
  ...mapActions([
    'action_each_price'
  ]),  
    edit_each_price(dir,item){
// this.$store.dispatch('action_each_price',[dir,this.margin,item])
this.action_each_price([dir,this.margin,item])
    },
    edit_all_price(dir){
      
      // this.$store.commit('mutate_all_price',[dir,this.margin])
  this.mutate_all_price([dir,this.margin])
    }
  }
}

</script>


<style scoped>
</style>
