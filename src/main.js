import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// console.log('######### TO STOP BUG WITH EXTENTION OF  VUE', store)
import './registerServiceWorker'
import Buefy from 'buefy'

// import 'buefy/dist/buefy.css'

// CALENDAR
import 'vuelendar/scss/vuelendar.scss'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
const datepickerOptions = {}

Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(Buefy)
Vue.use(require('vue-moment'));



Vue.config.productionTip = false

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')