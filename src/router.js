import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import YachtApp from '@/views/YachtApp.vue'
import Admin from '@/views/Admin.vue'
import EditAdmin from './views/Admin/EditAdmin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/YachtApp',
      name: 'YachtApp',
      component: YachtApp
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/edit/:id?',
      name: EditAdmin,
      component: EditAdmin
    }
  ]
})
