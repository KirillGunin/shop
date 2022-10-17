export default {
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
}
