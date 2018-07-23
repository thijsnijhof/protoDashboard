import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import store from '../store/store'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
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
});

// OLD ROUTER VIEW
// const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Dashboard
//   }
// ]
//
// // export default new VueRouter({mode: 'history', routes})
// export default new VueRouter(routes)
