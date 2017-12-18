// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import AddStu from './components/AddStu'
import Home from './components/Home'
import axios from 'axios';

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

const routes = [
  { path: '/index', component: AddStu },
  { path: '/home', component: Home }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App)
});
