import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import users from './modules/users';
import orders from './modules/orders';

import extras from './modules/extras';
export default new Vuex.Store({

  
  state: {
    active_route:'Users'
  },
  getters:{
    active_route: (state) => {return state.active_route}
  },
  mutations: {
    changeRoute(state,payload){
      state.active_route=payload
    }
  },
  actions: {
    
  },
  modules: {
    users,
    extras,
    orders
  }
})
