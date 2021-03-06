import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './modules/store'

Vue.use(Vuex);
import './config.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
