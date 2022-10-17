<template>
  <footer class="footer">
    <div class="footer-navbar">
        <div class="footer-navbar-content">
            <!-- menu -->
            <ul class="footer-navbar-list">
              <!-- массив links указанный в экспорте -->
              <li class="footer-navbar-item" v-for="link in links" :key="link.title">
                <!-- ccылки-->
                <router-link class="footer-navbar-link" :title="link.title" :to="link.url">
                  <h6>{{link.title}}</h6>
                </router-link>
              </li>
            </ul>

            <div class="footer-navbar-contacts">  
              <h6>+7(812) 555-55-55</h6>
              <h6>г.Санкт-Петербург, ул.Ефимова, д.3</h6>
            </div>

        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer',
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
.footer {
  width: 100%;
  background-color: #f6f3f3;
  border-top: 1px solid #ebeaea;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
}
.footer-navbar {
  width: 90%;
}
.footer-navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-navbar-list {
  display: flex;
  list-style-type: none;
  margin: 0 0 0 100px;
  padding: 0;
}
.footer-navbar-item {
  margin: 20px;
}
.footer-navbar-link {
  text-decoration: none;
  color: #382e2b
}
.footer-navbar-contacts {
  text-decoration: none;
  color: #382e2b;
  display: flex;
  flex-direction: row;
  margin: 0 100px 0 0;
  width: 25%;
  justify-content: space-between;
}
</style>
