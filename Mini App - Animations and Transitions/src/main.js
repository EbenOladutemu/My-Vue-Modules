import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/custom.scss'

Vue.use(Bootstrap);
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  render: h => h(App)
});
// setTimeout(() => {
//   alert('TIMEOUT!')
// }, 20000);

