import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Labels from '@/views/Labels.vue'
import Money from '@/views/Money.vue'
import Statistics from '@/views/Statistics.vue'
import Notfound from '@/views/Notfound.vue'
import EditLabel from '@/views/EditLabel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: "/money",
    component:Money
  },
  {
    path: "/labels",
    component:Labels
  },
  {
    path: "/statistics",
    component:Statistics
  },
  {
    path: "/labels/edit/:id",
    component:EditLabel
  },
{
  path: "*",
  component:Notfound
}
  
]

const router = new VueRouter({
  routes
})

export default router
