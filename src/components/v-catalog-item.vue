<template>
  <div class="v-catalog-good">
    <img class="good_img" :src=" require(`../assets/img/${good_data.img}`)" alt="img">
    <p class="good_name">{{good_data.name}}</p>
    <p class="good_price">{{good_data.price}} $</p>
    <button @click="addToCart">В корзину</button>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-good',
    props: {
      good_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {}
    },
    methods: {
      addToCart() {
        this.$emit('addToCart' ,this.good_data)
      }
    }
  }
</script>

<style>
  .v-catalog-good {
    height: 300px;
    border: solid 1px lightgrey;
    width: 250px;
    margin: 20px;
  }
  .good_img {
    width: 100%;
    height: 50%;
  }
</style>
