import Vue from 'vue'
import App from './App.vue'
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(Bootstrap),
Vue.directive('changecolor',{
  bind(el, binding){
    // el.style.color = '#18bc9c'
    // el.style.color = binding.value

    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 2000;
    }
    else{
      delay
    }
    setTimeout(()=>{
      if(binding.arg == 'backgroundColor'){
        el.style.backgroundColor = binding.value
      }
      else{
        el.style.color = binding.value
      }
    }, delay);
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
