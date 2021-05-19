<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="a coderz vue template , Now do it~"/>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
