import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL='http'
Vue.prototype.axios = axios
Vue.prototype.Bus = new Vue()
new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
