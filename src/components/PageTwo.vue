<template>
  <div>
    <h1>Page Two</h1>
    <button @click="getData">Get Data</button>  
    <hr>
    <ul>
      <li v-for="country in countriesArray" :key="country.name">{{country.name}}
      </li>
    </ul>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        countriesArray: []
      }
    },
    methods: {
      getData: function() {
        var vm = this
        axios.get("http://10.1.1.120:9191/api/countries")
             .then(function(res) {
               console.log(res)
               vm.countriesArray = res.data
             })
             .catch(function(err) {
               alert(err)
             })
      }
    }
  }
</script>