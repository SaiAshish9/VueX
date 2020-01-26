import vue from 'vue'

import vuex from 'vuex'

vue.use(vuex)

const store={
state:{
  product_list:[
    {product:'apple',price:5},
    {product:'grape',price:4},
  ]
},
getters:{
  sale_list:function(state){
    return state.product_list.map(function(item){
      return{
        product:item.product,
        price:item.price/2
      }
    })
  }
},
mutations:{
  mutate_each_price(state,arg){
    if(arg[0]){
arg[2].price+=arg[1]

      }else{
        arg[2].price-=arg[1]

      }
    },
  mutate_all_price(state,arg){
    if(arg[0]){
        state.product_list.forEach(function(item){
          item.price +=arg[1]
      })}else{
        state.product_list.forEach(function(item){
          item.price -=arg[1]
        })
      }
    }

},
actions:{
 action_each_price(context,arg){
   setTimeout(function(){
     context.commit('mutate_each_price',arg)
   },3000)
 }

}
}

export default new vuex.Store(store)
