<template>
  <div id="app">
    <router-view class="view" />
    <router-view class="view " name="left"></router-view>
    <router-view class="view " name="right"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  height: inherit;
  width: inherit;
}

</style>
