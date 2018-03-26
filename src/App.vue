<template>
  <div id="app">
    <h1>Vue SPA</h1>
    <h3>{{ msg }}</h3>
    <hr>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header
    },  
    data () {
      return {
        msg: 'proxyObj.accessToken'
      }
    },
    created () {
      this.$store.dispatch('initRegions')
    }
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
