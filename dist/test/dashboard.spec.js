'use strict';

var _Dashboard = require('../src/components/Dashboard.vue');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _vueTestUtils = require('vue-test-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localVue = (0, _vueTestUtils.createLocalVue)();
localVue.use(_vuex2.default);

describe('Dashboard', function () {
  describe('with a store', function () {
    var store = void 0;
    var getters = void 0;
    beforeEach(function () {
      getters = {
        getter_1: function getter_1() {
          return 'value_1';
        },
        getter_2: function getter_2() {
          return function (arg) {
            return arg;
          };
        }
      };
      store = new _vuex2.default.Store({ getters: getters });
    });
    it('renders a values from getters', function () {
      var wrapper = (0, _vueTestUtils.shallow)(_Dashboard2.default, {
        store: store,
        localVue: localVue
      });
      expect(wrapper.find('.map-getters').text().trim()).toEqual('value_1');
      expect(wrapper.find('.computed-getters').text().trim()).toEqual('value_2');
    });
  });
});
//# sourceMappingURL=dashboard.spec.js.map