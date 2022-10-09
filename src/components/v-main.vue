<template>
  <div class="v-main">
    {{title}}
    <v-catalog/>
    <v-cart v-if="CART.length" :cart_data="CART"/>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';
import {mapGetters} from 'vuex'
export default {
name: 'v-main',
components: { vCatalog, vCart },
props: {},
  data() {
    return {
      title: 'Main'
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style scoped>
.v-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin: 0 auto
}
</style>
