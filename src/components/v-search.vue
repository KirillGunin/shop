<template>
  <div class="search">
    <div class="search-form">
      <input class="search-input" type="text" placeholder="Поиск по названию картины">
      <button class="search-btn">Найти</button>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'v-search',
  data() {
    return {
    }
  }
}
</script>

<style>
.search-form {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 100px 0 0;
}
.search-input {
  height: 35px;
  width: 250px;
  font-size: 14px;
  padding: 0 0 0 12px;
  line-height: 0;
  border: none;
  outline: 1px solid #ebeaea;
  outline-offset: -1px;
  background-color: #f6f3f3;
}
.search-btn {
  height: 35px;
  width: 90px;
  font-size: 14px;
  line-height: 0;
  border: none;
  color: white;
  background-color: #382e2b;
}
</style>
