import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueAxiosPlugin from "./plugins/vue-axios";
import myVueMixin from './common/utils';
Vue.mixin(myVueMixin);
Vue.use(VueAxiosPlugin, { axios: axios })
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: 'mdi',
  },
  render: h => h(App)
}).$mount('#app')