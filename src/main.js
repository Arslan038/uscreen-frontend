import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import 'native-toast/dist/native-toast.css'
import {Pagination} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Pagination);

Vue.use(BootstrapVue)
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
   
   if ( requiresAuth &&  !localStorage.getItem("loggedUser")) {
      next('/login')
  } 
  else {
     
      next()

  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
