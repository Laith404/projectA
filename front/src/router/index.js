import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: vCatalog,
  // },
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
