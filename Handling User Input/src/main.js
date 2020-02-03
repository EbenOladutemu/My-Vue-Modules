import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use (Bootstrap)

new Vue({
  el: '#app',
  render: h => h(App)
})
