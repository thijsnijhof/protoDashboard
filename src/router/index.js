import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import store from '../store/store'

Vue.use(VueRouter)
// TRYOUT ONS NAVIGATOR
// declare the different route paths
// const router= new VueRouter({
//   mode:'history',
//    routes : [
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/dashboard',
//       name: 'Dashboard',
//       component: Dashboard
//     }
//   ]
// });

// router.beforeEach((to, from, next) => {
  // Reset pageStack to the new route
//   store.commit('navigator/reset', to.matched.map(m => m.components.default));
//   next();
// });

// export default new VueRouter({mode: 'history', routes})
// export default router;
// OLD ROUTER VIEW
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

// export default new VueRouter({mode: 'history', routes})
export default new VueRouter(routes)
