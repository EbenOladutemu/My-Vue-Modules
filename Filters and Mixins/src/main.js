import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(Bootstrap),
//Global Filters
Vue.filter('lowerCase',(value) => {
  return value.toLowerCase();
});

//Global Mixins
Vue.mixin({
  data(){
    return{
      greeting: 'Ma mehnnnn'
    }
  },
  created(){
    console.log('Global Mixin Created')
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
