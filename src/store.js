import Vue from 'vue'
import Vuex from 'vuex'
import YachtStore from '@/modules/YachtStore'
import UserStore from '@/modules/UserStore'
import ReservationStore from '@/modules/ReservationStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    modules: {
        YachtStore,
        UserStore,
        ReservationStore
    }
})
export default store;