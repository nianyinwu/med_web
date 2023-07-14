import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import {store} from './store'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://192.168.1.16' //ip address
//axios.defaults.baseURL = 'http://172.20.10.12'
//axios.defaults.baseURL = 'http://192.168.5.77'
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
