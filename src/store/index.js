import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [],
    cart: []
  },
  mutations: {
    SET_GOODS: (state, goods) => {
      state.goods = goods
    },
    SET_CART: (state, good) => {
      if(state.cart.length) {
        let isGoodinCart = false;
        state.cart.map(function(item) {
          if(item.id === good.id) {
            isGoodinCart = true
            item.count += 1 
          }
        })
        if(!isGoodinCart) {
          state.cart.push(good)
        }
      } else {
        state.cart.push(good)
      }
    },
    DELETE_GOOD: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_GOODS({commit}) {
      return axios('http://localhost:3000/goods', {
        method: 'GET'
      })
      .then((goods) => {
        commit('SET_GOODS', goods.data)
        return goods
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    ADD_TO_CART({commit}, good) {
      commit('SET_CART', good)
    },
    DELETE_FROM_CART({commit}, good) {
      commit('DELETE_GOOD', good)
    }
  },
  getters: {
    GOODS(state) {
      return state.goods;
    },
    CART(state) {
      return state.cart
    }
  },
})
