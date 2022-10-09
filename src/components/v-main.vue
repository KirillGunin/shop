<template>
  <div class="v-main">
    {{title}}
    <!-- сохранение состояния компонента при изменении url -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
name: 'v-main',
props: {},
  data() {
    return {
      title: 'Main'
    }
  },
  computed: {
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
