import axios from 'axios'

export default {
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
}
