import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import YachtApp from '@/views/YachtApp.vue'
import Admin from '@/views/Admin.vue'
import AdminDetails from '@/views/admin/AdminDetails.vue'
import YachtEdit from '@/views/yacht/YachtEdit.vue'
import Login from '@/views/Login.vue'
import YachtDetails from '@/views/yacht/YachtDetails.vue'
import OwnerYachts from '@/views/owner/OwnerYachts.vue'
import ProfileHome from '@/views/user/ProfileHome.vue'
import OwnerYachtDetails from '@/views/owner/OwnerYachtDetails.vue'
import OwnerYachtEdit from '@/views/owner/OwnerYachtEdit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/About', name: 'About', component: About },
        { path: '/yachts', name: 'YachtApp', component: YachtApp },
        { path: '/edit/:id?', name: 'YachtEdit', component: YachtEdit },
        { path: '/admin', name: 'Admin', component: Admin },
        { path: '/admin/:id', name: 'AdminDetails', component: AdminDetails },
        { path: '/login', name: 'Login', component: Login },
        { path: '/yacht/:id', name: 'YachtDetails', component: YachtDetails },
        { path: '/owner/yachts', name: 'OwnerYachts', component: OwnerYachts },
        { path: '/owner/details/:id', name: 'OwnerYachtDetails', component: OwnerYachtDetails },
        { path: '/owner/edit/:id?', name: 'OwnerYachtEdit', component: OwnerYachtEdit },
        { path: '/profile', name: 'ProfileHome', component: ProfileHome },
    ]
})