<template>
  <div class="v-catalog-good">

   <v-popup v-if="isPopUpInfoVisible" @closePopUp="closePopUp"></v-popup>

    <img class="good_img" @click="showPopUpInfo" :src=" require(`../assets/img/${good_data.img}`)" alt="img">
    <div class="good_footer">
      <h3 class="good_name">{{good_data.name}}</h3>
      <div class="good_prices">
        <p class="good_fullPrice" v-if="good_data.fullPrice">{{`${good_data.fullPrice.toString().substring(0,1)} ${good_data.fullPrice.toString().substring(1,4)} ${good_data.fullPrice.toString().substring(4,7)}`}} $</p>
        <p class="good_price">{{`${good_data.price.toString().substring(0,1)} ${good_data.price.toString().substring(1,4)} ${good_data.price.toString().substring(4,7)}`}} $</p>
      </div>
      <button class="btnBuy" @click="addToCart">Купить</button>
    </div>
  </div>
</template>

<script>
  import vPopup from './popup/v-popup.vue'
  export default {
    name: 'v-catalog-good',
    components: { vPopup },
    props: {
      good_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {
        isPopUpInfoVisible: false,
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.good_data)
      },
      showPopUpInfo() {
        this.isPopUpInfoVisible = true
      },
      closePopUp() {
        this.isPopUpInfoVisible = false
      }
    },
    mounted() {
      this.$set(this.good_data, 'count', 1)
    }
  }
</script>

<style>
.v-catalog-good {
  height: 230px;
  border: solid 1px lightgrey;
  width: 200px;
  cursor: pointer;
}
.good_img {
  width: 100%;
  height: 110px;
}
.btnBuy {
  background-color: #382e2b;
  color: white;
  height: 35px;
  width: 80px;
  font-size: 14px;
  border: none;
}
.good_footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin: 15px;
  height: 90px;
}
.good_name {
  margin-top: 5px;
  margin-bottom: 5px;
}
.good_prices {
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.good_fullPrice {
  margin: 0;
  color: #aaaaaa;
  font-size: 14px;
  font-weight: normal;
  text-decoration: line-through;
}
.good_price {
  margin: 0;
}
h3 {
  font-size: 16px;
  font-weight: normal;
}
</style>
