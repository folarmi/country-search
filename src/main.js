import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import axios from 'axios'
import Routes from './routes';

window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
