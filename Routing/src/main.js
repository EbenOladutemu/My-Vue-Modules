/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/custom.scss'
import Cheeksy from 'vue-router'
import { routes } from "./routes";
import sweetalert from 'sweetalert'

// Vue.use(Bootstrap);
Vue.use(BootstrapVue);
Vue.use(Cheeksy);

const router = new Cheeksy({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPostion){
    if (to.hash) {
      return {selector: to.hash}
    }
    // return {x: 0, y: 600};
  }
  
});
  router.beforeEach ((to, from, next) => {
    console.log('Global beforeEach')
    next(); //next needs to be called or app won't go the next route
            //alternatively, parse false to cancel the operation and stay on same page
            //you can also parse the name of the router-link you want it to go
  })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
