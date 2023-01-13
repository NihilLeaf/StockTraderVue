import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from  './router/router'
import store from  './store/store'
import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
