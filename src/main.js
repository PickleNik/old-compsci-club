import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'
import VueRellax from 'vue-rellax'

Vue.use(VueScrollTo)
Vue.use(VueRellax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
