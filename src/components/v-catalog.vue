<template>
  <div class="v-catalog">
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
</template>

<script>
import vCatalogGood from './v-catalog-item.vue';
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
      'GOODS'
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .v-catalog_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
