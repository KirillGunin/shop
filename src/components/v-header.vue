<template>
  <header class="header">
    <div class="navbar">
        <div class="navbar-content">
            <!-- menu -->
            <ul class="navbar-list">
              <!-- пройдем по массиву links указанному в экспорте -->
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <!-- выведем необходимые ccылки-->
                <router-link class="navbar-link" :title="link.title" :to="link.url">
                  <h5>{{link.title}}</h5>
                </router-link>
              </li>
            </ul>
            <!-- поиск -->
            <v-search />
        </div>
    </div>
  </header>
  
</template>

<script>
import vSearch from '@/components/v-search.vue'
export default {
  name: 'v-header',
  components: { vSearch },
   data() {
    return {
      links: [
        {title: 'Каталог', url:'/'},
        {title: 'Доставка', url:'/shipping'},
        {title: 'Оплата', url:'/cart'},
        {title: 'Контакты', url:'/contacts'},
        {title: 'О компании', url:'/about'},
      ],
    }
  },
}
</script>

<style>
.header {
  width: 100%;
  background-color: #f6f3f3;
  border-bottom: 1px solid #ebeaea;
  display: flex;
  justify-content: center;
}
.navbar {
  width: 90%;
}
.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-list {
  display: flex;
  list-style-type: none;
  margin: 0 0 0 100px;
  padding: 0;
}
.navbar-item {
  margin: 20px;
}
.navbar-link {
  text-decoration: none;
  color: #382e2b
}
h5 {
  font-size: 14px;
  font-weight: normal
}
</style>
