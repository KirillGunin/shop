<template>
  <div class="v-cart">
    <h1>Корзина</h1>
    <v-cart-good v-for="(good, index) in cart_data" :key="good.id" :cart_good_data="good" @deleteGoodFromCart="deleteGoodFromCart(index)"/>
  </div>
</template>

<script>
  import vCartGood from './v-cart-good.vue'
  import {mapActions} from 'vuex'
  export default {
    name: 'v-cart',
    components: {vCartGood},
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions([
      'DELETE_FROM_CART'
    ]),
      deleteGoodFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>
