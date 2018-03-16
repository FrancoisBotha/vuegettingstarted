<template>
  <div>
    <h1>Page Three</h1>
      <p>Click here to log out:</p>
      <button @click="logout" class="btn btn-fill">Log Out</button>    
  </div>
</template>

<script>
  import axios from 'axios'

  var axiosProxyS = axios.create({
    baseURL: 'http://localhost:7000/', // process.env.baseApiUrl,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + proxyObj.accessToken}
  })

  export default {
    data () {
      return {
        apiToken: proxyObj.accessToken // eslint-disable-line no-use-before-define
      }
    },
    methods: {
      logout: function () {
        // Best practice is to post to logout
        // First log out of proxy server session
        axiosProxyS.post('/logout')
             .then(function (res) {
               window.location.href = 'http://localhost:7000/'
             })
             .catch(function (err) {
               console.log(err)
               window.location.href = 'http://localhost:7000/'
             })
      }
    }
  }
</script>
