'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('@/components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Login = require('@/components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Dashboard = require('@/components/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _store = require('../store/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
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
var routes = [{
  path: '/home',
  name: 'Home',
  component: _Home2.default
}, {
  path: '/',
  name: 'Login',
  component: _Login2.default
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: _Dashboard2.default
}];

// export default new VueRouter({mode: 'history', routes})
exports.default = new _vueRouter2.default(routes);
//# sourceMappingURL=index.js.map