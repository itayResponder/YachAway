import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import YachtApp from '@/views/YachtApp.vue'
import Admin from '@/views/Admin.vue'
import AdminDetails from '@/views/Admin/AdminDetails.vue'
import AdminEdit from './views/Admin/AdminEdit.vue'
import YachtDetails from './views/YachtDetails.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [{ path: '/', name: 'Home', component: Home },
    { path: '/About', name: 'About', component: About },
    { path: '/yachts', name: 'YachtApp', component: YachtApp },
    { path: '/yachts/details', name: 'YachtDetails', component: YachtDetails },
    { path: '/admin', name: 'Admin', component: Admin },
    { path: '/admin/edit/:id?', name: 'AdminEdit', component: AdminEdit },
    { path: '/admin/:id?', name: 'AdminDetails', component: AdminDetails },
    { path: '/login', name: 'Login', component: Login }
    ]
})