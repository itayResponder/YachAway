import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import Buefy from 'buefy'
import facilitiesFilter from '@/components/yacht/filterFacilities.vue'

// import 'buefy/dist/buefy.css'
Vue.use(Buefy)


// CALENDAR
import 'vuelendar/scss/vuelendar.scss'



Vue.use(require('vue-moment'));


Vue.config.productionTip = false

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')