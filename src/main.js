import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'

Vue.use(VModal)
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
