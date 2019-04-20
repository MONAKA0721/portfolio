<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import myheader from './components/myheader'
export default {
  name: 'App',
  components: { myheader }
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

#mainTitle{
  margin: 60px;
  font-size: 10vmin;
  margin-bottom: 0px;
}

#name{
  margin-top: 0px;
  margin-right: 300px;
}

</style>
