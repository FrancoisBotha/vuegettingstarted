import axios from 'axios'

var axiosProxyS = axios.create({
  baseURL: 'http://10.1.1.120:1010/', 
  timeout: 1000,
})


const state = {
   regions: []
}

const getters = {
   regions: state => {
      return state.regions
   }
}

const mutations = {
  'SET_REGIONS' (state, regions) {
    state.regions = regions
  }
}

const actions = {
  initRegions: ({commit}) => {
    axiosProxyS.get('/api/regions')
         .then(function (res) {
           commit('SET_REGIONS', res.data)
         })
         .catch(function (err) {
           console.log(err)
         })
  }
}

export default {
   state,
   getters,
   mutations,
   actions
}
