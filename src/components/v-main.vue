<template>
  <div class="v-main">
    <v-header/>
    <!-- сохранение состояния компонента при изменении url -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vFooter from '@/components/v-footer.vue'
export default {
name: 'v-main',
components: { vHeader, vFooter },
props: {},
  data() {
    return {
    }
  },
  // computed: {
  // }
}
</script>

<style scoped>
.v-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto
}
</style>
