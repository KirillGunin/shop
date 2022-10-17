<template>
  <div class="v-popup">
    <!-- header -->
    <div class="v-popup_header">
      <span>Popup name</span>
      <span>
        <i class="material-icons" @click="closePopUp">close</i>
      </span>
    </div>
    <!-- content -->
    <div class="v-popup_content">
      <slot></slot>
    </div>
    <!-- footer -->
    <div class="v-popup_footer">
      <button @click="closePopUp">Закрыть</button>
      <button>Добавить</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-popup',
    data() {
      return {

      }
    },
    methods: {
      closePopUp() {
        this.$emit('closePopUp')
      }
    }
  }
</script>

<style>
  .v-popup {
    padding: 15px;
    position: fixed;
    top: 50px;
    width: 400px;
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 #4b4b4b85;
    opacity: 99%;
  }
  .v-popup_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .v-popup_content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .v-popup_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
