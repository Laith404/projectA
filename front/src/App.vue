<template>
  <v-app id="app">
    <VNavbar />
  </v-app>
</template>

<script>
import VNavbar from './layout/Navbar.vue';

export default {
  name: 'App',
  components: {
    VNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  text-decoration: none
}
</style>
