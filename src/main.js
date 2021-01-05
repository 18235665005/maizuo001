import Vue from 'vue'
import App from './App.vue'
import router from './router'
// axios 导入
import axios from '@/api/https'
Vue.prototype.$https = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
