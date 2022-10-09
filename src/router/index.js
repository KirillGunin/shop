//подключение
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//компоненты
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'

//маршруты
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'v-catalog',
      component: vCatalog
    },
    {
      path: '/cart',
      name: 'v-cart',
      component: vCart,
      props: true
    }
  ]
})
