import './registerServiceWorker'

import Vue from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
Vue.component('Nav', Nav)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.config.productionTip = false
// import tagListModel from './models/TagListModel'
// import recordListModel from './models/RecordListModel'

// window.store={
// recordList:recordListModel.fetch(),
// createRecord:(record: RecordItem)=>recordListModel.create(record),

// tagList:tagListModel.fetch(),
// findTag:(id: string)=>{
//  return window.store.tagList.filter(t => t.id === id)[0];
// },
// createTag:(name: string)=>{
//   const message = tagListModel.create(name);
//     if (message === "duplicated") {
//       window.alert("标签名重复");
//     } else if (message === "success") {
//       window.alert("成功");
//     }
// },
// removeTag:(id: string)=>{
//   return tagListModel.remove(id);
// },
// updateTag:(id: string,name: string)=>{
//   return tagListModel.updated(id, name);
// }
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
