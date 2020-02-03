import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    count: 0
  },
  getters:{
    mathCounter: state => {
      return state.count * 2;
    },
    stringCounter: state => {
      if (state.count <= 1 && state.count > -1) {
        return state.count + ' Click'
      } else {
        return state.count + ' Clicks'
      }
      
    }
  }
})