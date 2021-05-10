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


window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};


if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证浏览效果');
  const img = document.createElement('img');

  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}

