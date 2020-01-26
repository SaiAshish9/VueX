<template>
  <div id="app">
    <comp>
    </comp>
  </div>
</template>

<script>

import comp from './components/component'

export default {
  name: 'App',
  components:{
    'comp':comp
  }
,
data:function(){
  return {
    
  }
},
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
