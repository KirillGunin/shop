<template>
  <div class="v-cart-good">
    <img class="v-cart-good_img" :src=" require(`../assets/img/${cart_good_data.img}`)" alt="">
    <div class="v-cart-good_info">
      <p class="good_name">{{cart_good_data.name}}</p>
      <p class="good_price">{{cart_good_data.price}} $</p>
    </div>

    <div class="v-cart-good_count">{{cart_good_data.count}}</div>
    <button @click="deleteGoodFromCart">Убрать</button>
  </div>
</template>

<script>
  export default {
    name: 'v-cart-good',
    props: {
      cart_good_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      deleteGoodFromCart() {
        this.$emit('deleteGoodFromCart')
      }
    },
    mounted() {
      // встроенный метод set (куда, что, сколько)
      this.$set(this.cart_good_data, 'count', 1)
    },
  }
</script>

<style>
  .v-cart-good {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    height: 300px;
    border: solid 1px lightgrey;
    width: 250px;
    margin: 20px;
  }
  .v-cart-good_img {
    width: 100%;
    height: 50%;
  }
</style>
