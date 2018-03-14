<template>
  <div>
    <h1>Page One</h1>
    <button v-on:click="increment">Increase</button>
    <h3 :class="{red: isEven()}">Value i: {{ i }}</h3>
    <h3 :class="someClass">Value j: {{ j }}</h3>
    <hr>
    <input type="text" v-model="k">
    <h3>Value k: {{ k }}</h3>
    <hr>
    <p v-if="isEven()">i is even</p>
    <p v-else>i is odd</p>
    <hr>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <ul>
      <li v-for="fruit in fruits" :key="fruit.name">
        <div v-for="(value, key, index) in fruit" :key="index">
          {{key}}: {{value}} ({{index}})</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default { 
    data () {
      return {
        i: 0,
        j: 0,
        k: '',
        someClass: 'green',
        fruits: [
          {name: "Apple", color: "red"},
          {name: "Orange", color: "orange"},
          {name: "Banana", color: "yellow"},
        ]
      }
    },
    methods: {
      increment: function() {
        this.i++        
      },
      isEven: function() {
        return this.i % 2 == 0
      }
    },
    watch: {
      i: function(value) {
        var vm = this
        setTimeout(function() {
          vm.j++
          return
        },500)
      }
    }
  }
</script>

<style>
  .red {
    color: red
  }
  .green {
    color: green
  }
</style>