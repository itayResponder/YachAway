import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import YachtApp from '@/views/YachtApp.vue'
import Admin from '@/views/Admin.vue'
import AdminDetails from '@/views/Admin/AdminDetails.vue'
import AdminEdit from '@/views/Admin/AdminEdit.vue'
import Login from '@/views/Login.vue'
import YachtDetails from '@/views/yacht/yachtDetails.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [{ path: '/', name: 'Home', component: Home },
        { path: '/About', name: 'About', component: About },
        { path: '/yachts', name: 'YachtApp', component: YachtApp },
        { path: '/admin', name: 'Admin', component: Admin },
        { path: '/admin/edit/:id?', name: 'AdminEdit', component: AdminEdit },
        { path: '/admin/:id?', name: 'AdminDetails', component: AdminDetails },
        { path: '/login', name: 'Login', component: Login },
        { path: '/yacht/details', name: 'YachtDetails', component: YachtDetails }
    ]
})