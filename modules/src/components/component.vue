<template>

<div >
<p>
{{$store.state.a.info}}
</p>
<p>
{{$store.state.b.info}}
</p>
<p>
{{$store.getters['a/getter_info']}}
</p>
<p>
{{$store.getters['b/getter_info']}}
</p>
<button @click="$store.commit('a/mutate_method')">
Trigger Mutation A
</button>
<button @click="$store.dispatch('a/action_method')">
Trigger Action A
</button>

<button @click="$store.commit('b/mutate_method')">
Trigger Mutation B
</button>
<button @click="$store.dispatch('b/action_method')">
Trigger Action B
</button>

</div>

</template>


<script>

export default {
  data:function(){
    return {}
  },
  computed:{},
  methods:{}
}


</script>


<style>

</style>
