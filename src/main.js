import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons-iconfont'
import '../node_modules/normalize.css/normalize.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
