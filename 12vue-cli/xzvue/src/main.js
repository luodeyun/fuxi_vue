import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import io from './weapp.socket.io'

 
 

Vue.config.productionTip = false
axios.defaults.baseURL=''
Vue.prototype.axios = axios
 Vue.prototype.socket=io('http://176.212.29.215:3000')
Vue.prototype.Bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
