import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router';
import store from '@/vuex/store';
import VueTheMask from 'vue-the-mask'
// import './assets/fonts/fontawesome-free-6.2.1-web/css/brands.css'
// import './assets/fonts/fontawesome-free-6.2.1-web/css/solid.css'
// import './assets/fonts/fontawesome-free-6.2.1-web/css/regular.css'


createApp(App).use(router).use(VueTheMask).use(store).mount('#app')
