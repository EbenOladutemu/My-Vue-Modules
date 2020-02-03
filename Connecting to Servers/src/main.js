/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/custom.scss'
import VueResource from 'vue-resource'
import sweetalert from 'sweetalert'

Vue.use(Bootstrap);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-ff915.firebaseio.com/' //setting VueResource Globally
//check out vue-resource docs for more options

Vue.http.interceptors.push((request, elereke)=>{ //intercepting requests
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT'
  }
  elereke(response => { //intercepting responses
    response.json = () => {
      return {messages: response.body}
    }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
});

