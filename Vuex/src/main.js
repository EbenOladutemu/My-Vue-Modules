/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});