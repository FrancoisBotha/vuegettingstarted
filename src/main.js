import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store'

import RegionPanel from './components/RegionPanel.vue'

Vue.use(VueRouter)

Vue.component('region-panel',RegionPanel)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
