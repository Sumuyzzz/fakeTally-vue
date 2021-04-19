import './registerServiceWorker'

import Vue from 'vue'


import App from './App.vue'
import router from './router'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
import store from '@/store/index'

Vue.prototype.$store = store;//全局使用$store2
Vue.component('Nav', Nav)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
