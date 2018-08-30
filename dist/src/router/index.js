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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
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
  }]
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
//# sourceMappingURL=index.js.map