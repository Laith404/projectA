import Vue from 'vue';
import VueRouter from 'vue-router';

import vHome from '../modules/home/pages/vHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome,
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: vCart,
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
