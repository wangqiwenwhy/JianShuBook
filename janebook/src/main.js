import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'vant/lib/index.css';
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel } from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(Carousel.name, Carousel);
new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
