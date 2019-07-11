import Vue from 'vue'
import Vuex from 'vuex'
import YachtStore from '@/modules/YachtStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    YachtStore
  }
})
export default store;