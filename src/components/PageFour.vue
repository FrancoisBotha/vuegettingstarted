<template>
  <div class="row">
    <h1>Page Four</h1>
    <hr>
    <div class="col-sm-6">
      <div class="panel panel-default">
         <div class="panel-heading">Panel</div>
         <div class="panel-body">  
            <select class="customSelect" name="example">
               <option v-for="region in regions" :key="region.regionCde" :value="region.regionCde">{{region.regionName}}</option>
            </select>   
         </div>
      </div>
    </div>
   </div>
</template>

<script>
  export default { 
     computed: {
        regions() {
           return this.$store.getters.regions
        }
     },
  }
</script>

<style>
.customSelect {
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;  
}
</style>

