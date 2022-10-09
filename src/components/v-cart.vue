<template>
  <div class="v-cart">
    <router-link :to="{name: 'v-catalog'}">
      <div class="v-catalog_link_to_cart">К каталогу</div>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!cart_data.length">Товаров в корзине пока нет</p>
    <v-cart-good
    v-for="(good, index) in cart_data"
    :key="good.id"
    :cart_good_data="good"
    @deleteGoodFromCart="deleteGoodFromCart(index)"
    />
    <div class="v-cart_total">
      <p>Итого: {{cartTotal}}</p>
    </div>
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
    computed: {
      cartTotal() {
        return this.cart_data.map(el => el.price).reduce((acc,el) => acc =  acc + el, 0)
      }
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

<style>
  .v-catalog_link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    border: solid 1px lightgray;
    border-radius: 5px;
    padding: 10px
  }
</style>
