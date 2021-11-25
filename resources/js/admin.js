require('./bootstrap');   // xai axios

// window.Vue = require('vue');


// Vue.component('example-component', require('./App.vue').default);


// const app = new Vue({
//     el: '#app',
// });


import Vue from 'vue'
import App from './components/Warehouse.vue'
import router from './router/index'

Vue.config.productionTip = false



//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




Vue.component('example-component', require('./components/Warehouse.vue').default);  // register component

new Vue({   // create vue instance
  router,
  render: h => h(App),

}).$mount('#app')
