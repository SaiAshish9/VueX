import vue from 'vue'

import vuex from 'vuex'

vue.use(vuex)

const module_a={
  namespaced:true,
  state:{
    info:'state a'
  },
  getters:{
    getter_info:function(state){
      return 'getter a'
    }
  },
  mutations:{
    mutate_method:function(state,arg){
      alert('mutation A')
    }
  },
    actions:{
      action_method:function(context,arg){
        alert('action A')
      }
    }
  
}

const module_b={
  namespaced:true,
  state:{
    info:'state b'
  },
  getters:{
    getter_info:function(state){
      return 'getter b'
    }
  },
  mutations:{
    mutate_method:function(state,arg){
      alert('mutation B')
    }
  },
    actions:{
      action_method:function(context,arg){
        alert('action B')
      }

  }
}

export default new vuex.Store({
  modules:{
    a:module_a,
    b:module_b
  }
})
