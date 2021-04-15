import './registerServiceWorker'

import Vue from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
import tagListModel from './models/TagListModel'



Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)

window.tagList=tagListModel.fetch();
window.createTag=(name: string)=>{
  if (name) {
    const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签名重复");
    } else if (message === "success") {
      window.alert("成功");
    }
  }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
