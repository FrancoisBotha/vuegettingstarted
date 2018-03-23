<template>
  <div class="row">
    <h1>Page Four</h1>
    <hr>
    <div class="col-sm-6">
      <div class="panel panel-default">
         <div class="panel-heading">Panel</div>
         <div class="panel-body">
            <button @click="getData" class="btn btn-fill">Get Data</button>   
            <select class="customSelect" name="example">
               <option v-for="region in regions" :key="region.regionCde" :value="region.regionCde">{{region.regionName}}</option>
            </select>   
         </div>
      </div>
    </div>
   </div>
</template>

<script>
  import axios from 'axios'

  var axiosProxyS = axios.create({
    baseURL: 'http://10.1.1.120:1010/', 
    timeout: 1000,
  })

  export default { 
    data () {
      return {
        regions: []
      }
    },
    methods: {
      getData: function () {
        var vm = this
        axiosProxyS.get('/api/regions')
             .then(function (res) {
               vm.regions = res.data
             })
             .catch(function (err) {
               console.log(err)
             })
      }
    }    
  }
</script>

<style>
.customSelect {
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;  
}
</style>

