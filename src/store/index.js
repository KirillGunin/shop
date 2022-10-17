import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions.js'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [],
    cart: []
  },
  mutations,
  actions,
  getters,
})
