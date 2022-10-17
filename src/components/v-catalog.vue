<template>
  <div class="v-catalog">
    <!-- <router-link :to="{name: 'v-cart', params: {cart_data: CART}}">
      <div class="v-catalog_link_to_cart">Корзина: {{CART.length}}</div>
    </router-link> -->
    <div class="v-catalog_content">
      
      <h1>Картины эпохи возрождения</h1>
      <div class="v-catalog_list">
        <v-catalog-good
        v-for="good in GOODS"
        :key="good.id"
        :good_data="good"
        @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogGood from './v-catalog-good.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'v-catalog',
  components: {vCatalogGood},
  props: {},
  data() { 
    return {
    }
  },
  computed: {
    ...mapGetters([
      'GOODS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_GOODS', 'ADD_TO_CART'
    ]),
    addToCart(data) {
      //console.log(data)
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_GOODS()
  }
}
</script>

<style>
  .v-catalog {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
  }
  .v-catalog_content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .v-catalog_list {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .v-catalog_link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    border: solid 1px lightgray;
    border-radius: 5px;
    padding: 10px
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    width: 75%;
  }
</style>
