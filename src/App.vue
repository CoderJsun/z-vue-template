<template>
  <div id="app">
     <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/img/logo.png" />
    <hello-world msg="z-vue-template successed , Now do it~" />
  </div>
</template>

<script>

import HelloWorld from 'components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  setup() {},
};
</script>

<style>
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
