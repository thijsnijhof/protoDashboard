'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _vueMoment = require('vue-moment');

var _vueMoment2 = _interopRequireDefault(_vueMoment);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _vuelidate = require('vuelidate');

var _vuelidate2 = _interopRequireDefault(_vuelidate);

var _esm = require('vue-onsenui/esm');

var _esm2 = _interopRequireDefault(_esm);

var _VOnsPage = require('vue-onsenui/esm/components/VOnsPage');

var _VOnsPage2 = _interopRequireDefault(_VOnsPage);

var _VOnsInput = require('vue-onsenui/esm/components/VOnsInput');

var _VOnsInput2 = _interopRequireDefault(_VOnsInput);

var _VOnsCard = require('vue-onsenui/esm/components/VOnsCard');

var _VOnsCard2 = _interopRequireDefault(_VOnsCard);

var _VOnsButton = require('vue-onsenui/esm/components/VOnsButton');

var _VOnsButton2 = _interopRequireDefault(_VOnsButton);

var _VOnsListHeader = require('vue-onsenui/esm/components/VOnsListHeader');

var _VOnsListHeader2 = _interopRequireDefault(_VOnsListHeader);

var _VOnsListItem = require('vue-onsenui/esm/components/VOnsListItem');

var _VOnsListItem2 = _interopRequireDefault(_VOnsListItem);

var _VOnsListTitle = require('vue-onsenui/esm/components/VOnsListTitle');

var _VOnsListTitle2 = _interopRequireDefault(_VOnsListTitle);

var _VOnsLazyRepeat = require('vue-onsenui/esm/components/VOnsLazyRepeat');

var _VOnsLazyRepeat2 = _interopRequireDefault(_VOnsLazyRepeat);

var _VOnsNavigator = require('vue-onsenui/esm/components/VOnsNavigator');

var _VOnsNavigator2 = _interopRequireDefault(_VOnsNavigator);

var _VOnsToolbar = require('vue-onsenui/esm/components/VOnsToolbar');

var _VOnsToolbar2 = _interopRequireDefault(_VOnsToolbar);

var _VOnsIcon = require('vue-onsenui/esm/components/VOnsIcon');

var _VOnsIcon2 = _interopRequireDefault(_VOnsIcon);

var _VOnsCheckbox = require('vue-onsenui/esm/components/VOnsCheckbox');

var _VOnsCheckbox2 = _interopRequireDefault(_VOnsCheckbox);

var _VOnsRange = require('vue-onsenui/esm/components/VOnsRange');

var _VOnsRange2 = _interopRequireDefault(_VOnsRange);

var _VOnsSwitch = require('vue-onsenui/esm/components/VOnsSwitch');

var _VOnsSwitch2 = _interopRequireDefault(_VOnsSwitch);

var _VOnsSelect = require('vue-onsenui/esm/components/VOnsSelect');

var _VOnsSelect2 = _interopRequireDefault(_VOnsSelect);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_vueMoment2.default, {
  moment: _momentTimezone2.default
});

_vue2.default.use(_vuelidate2.default);

// import Vue from 'vue';


_vue2.default.use(_esm2.default);
_vue2.default.component(_VOnsPage2.default.name, _VOnsPage2.default);
_vue2.default.component(_VOnsCard2.default.name, _VOnsCard2.default);
_vue2.default.component(_VOnsListHeader2.default.name, _VOnsListHeader2.default);
_vue2.default.component(_VOnsButton2.default.name, _VOnsButton2.default);
_vue2.default.component(_VOnsListItem2.default.name, _VOnsListItem2.default);
_vue2.default.component(_VOnsListTitle2.default.name, _VOnsListTitle2.default);
_vue2.default.component(_VOnsInput2.default.name, _VOnsInput2.default);
_vue2.default.component(_VOnsLazyRepeat2.default.name, _VOnsLazyRepeat2.default);
_vue2.default.component(_VOnsNavigator2.default.name, _VOnsNavigator2.default);
_vue2.default.component(_VOnsToolbar2.default.name, _VOnsToolbar2.default);
_vue2.default.component(_VOnsIcon2.default.name, _VOnsIcon2.default);
_vue2.default.component(_VOnsCheckbox2.default.name, _VOnsCheckbox2.default);
_vue2.default.component(_VOnsRange2.default.name, _VOnsRange2.default);
_vue2.default.component(_VOnsSwitch2.default.name, _VOnsSwitch2.default);
_vue2.default.component(_VOnsSelect2.default.name, _VOnsSelect2.default);

// import VueOnsen
// import VueOnsen from 'vue-onsenui';
//
// Vue.use(VueOnsen);

// import store and router and inject them in the root instance
// they can now be accessed with $store and $router

// import  store from './store/store';


_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store.store,
  template: '<App/>',
  components: { App: _App2.default }
});
//# sourceMappingURL=main.js.map