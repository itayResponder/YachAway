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


// CLOUDINARY
// https://cloudinary.com/documentation/vue_integration#overview
// USING FOR UPLOAD :
// import Cloudinary from 'cloudinary-vue';

// see docs for available options
const datepickerOptions = {}

Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(Buefy)
Vue.use(require('vue-moment'));
// Vue.use(Cloudinary, {
//     cloudName :"ocean-yachts",
//     "api_key":  
// });
//NADAV API  

Vue.config.productionTip = false

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')