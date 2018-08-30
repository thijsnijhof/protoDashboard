'use strict';

var cov_285cbdh2ox = function () {
  var path = '/home/thijs/WebstormProjects/proto-dashboard/src/test/dashboard.spec.js',
      hash = 'b351fa708d9be05cd79edda3f26768d54c997eee',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/home/thijs/WebstormProjects/proto-dashboard/src/test/dashboard.spec.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 10,
          column: 2
        }
      },
      '1': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      '2': {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 38
        }
      },
      '3': {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 7,
          column: 52
        }
      },
      '4': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 21
          },
          end: {
            line: 4,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 4
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 5,
            column: 22
          }
        },
        loc: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _testUtils = require('@vue/test-utils');

var _Dashboard = require('../components/Dashboard.vue');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_285cbdh2ox.s[0]++;


describe('Home.vue', function () {
  cov_285cbdh2ox.f[0]++;
  cov_285cbdh2ox.s[1]++;

  it('testing home', function () {
    cov_285cbdh2ox.f[1]++;

    var wrapper = (cov_285cbdh2ox.s[2]++, (0, _testUtils.shallow)(_Dashboard2.default));
    var message = (cov_285cbdh2ox.s[3]++, wrapper.find('div .left').text());
    cov_285cbdh2ox.s[4]++;
    expect(message).toBe('SettingName');
  });
});
//# sourceMappingURL=dashboard.spec.js.map