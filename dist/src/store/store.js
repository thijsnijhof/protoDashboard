'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _vuexPersistedstate = require('vuex-persistedstate');

var _vuexPersistedstate2 = _interopRequireDefault(_vuexPersistedstate);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

var _settingsArray = require('./settingsArray');

var _settingsArray2 = _interopRequireDefault(_settingsArray);

var _usrArray = require('./usrArray');

var _usrArray2 = _interopRequireDefault(_usrArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export const store to have access to it outside of this file
// We can access this in other files by using $store

// Use the Vuex module with Vue
// We can now create a new store by using new Vuex.Store({...etc})
_vue2.default.use(_vuex2.default);

var store = exports.store = new _vuex2.default.Store({
  state: {
    // The initial state of the application
    isLoggedIn: false,
    accessToken: null,
    data: {},
    singleDevice: {},
    singleDeviceData: [],
    usrArray: _usrArray2.default,
    settingsArray: _settingsArray2.default,
    selectedSet: 'MSTRSet',
    singleSetting: []
  },
  plugins: [
  // persist the accessToken to localStorage
  // https://github.com/robinvdvleuten/vuex-persistedstate
  (0, _vuexPersistedstate2.default)({
    storage: {
      getItem: function getItem(key) {
        return _jsCookie2.default.get(key);
      },
      setItem: function setItem(key, value) {
        return _jsCookie2.default.set(key, value, { expires: 7, secure: false });
      },
      removeItem: function removeItem(key) {
        return _jsCookie2.default.remove(key);
      }
    }
  })],
  mutations: {
    authUser: function authUser(state, userData) {
      // Store the accessToken in the store
      // The userData is provided by the login action below
      state.accessToken = userData.token;
      state.isLoggedIn = true;
    },
    authChecked: function authChecked(state) {
      state.isLoggedIn = true;
    },
    logoutUser: function logoutUser(state, accessToken) {
      _jsCookie2.default.remove('accessToken', 'userId', 'token');
      state.isLoggedIn = false;
      state.accessToken = '';
    },
    changeSet: function changeSet(state, selected) {
      state.selectedSet = selected;
    },
    addDevices: function addDevices(state, newData) {
      // Store the data from the devices in the store
      // The newData is provided by the fetchDevices action
      state.data = newData;
    },
    singleDevice: function singleDevice(state, device) {
      // This mutation is called by selectedDevice upon selecting a device in the Home component.
      // It retrieves the data for the selected device by taking the deviceId from the store.
      // We can then use the particle getVariable method to retrieve the data
      state.singleDevice = device;
      var particle = new Particle();
      particle.getVariable({
        deviceId: state.singleDevice,
        name: 'get' + state.selectedSet,
        auth: state.accessToken
      }).then(function (data) {
        // After calling the getVariable method we get the response from the API on body.result
        // The result returned by the device is a CSV string.
        // The split method splits string objects into an array of strings
        // We can define where we want the method to split the CSV string into substrings by passing in a string argument
        // The CSV string is a string with comma's between each word so: "str1,str2,str3,etc..."
        // Using (",") a comma as the argument will create a new substring between each word
        var deviceCSV = data.body.result;
        var deviceData = deviceCSV.split(",");
        deviceData.pop();
        // To output the list on the Dashboard I want to have an array of objects
        // I made a second array which matches the array key names of the devices
        // The deviceData array has all the values. I will create a new array and combine it into an array of objects
        // This way I can set the values of each property and list them with name and value
        var combinedArray = [];
        var selectedArray = state.selectedSet === 'MSTRSet' ? _settingsArray2.default : _usrArray2.default;
        for (var result in deviceData) {
          var key = selectedArray.indexOf(selectedArray[result]);
          combinedArray.push({ name: selectedArray[result], value: deviceData[result].replace(/"/g, ''), key: key });
          // combinedArray.push({name: selectedArray[result], value: deviceData[result], key:key});
        }

        // Set the state to the combinedArray so we can access the values in the Dashboard component
        state.singleDeviceData = combinedArray;
      });
    },
    editSingleSetting: function editSingleSetting(state, changedVal) {
      // Takes the edited setting and put it in the combinedArray
      var particle = new Particle();
      var arg = changedVal.key + ':' + changedVal.value;
      var fnPr = particle.callFunction({
        deviceId: state.singleDevice,
        name: 'set' + state.selectedSet,
        // name:'setMSTRSet',
        argument: arg,
        auth: state.accessToken
      });

      fnPr.then(function (data) {
        console.log('Function called succesfully:', data);
      }, function (err) {
        console.log('An error occurred:', err);
      });
    },
    saveAllSettings: function saveAllSettings(state) {
      var particle = new Particle();
      // Takes the final new array of objects
      var allSettings = state.singleSetting;
      // Convert it to a new CSV string
      var csvArray = allSettings.map(function (a) {
        return a.value;
      }).join(",");
      // Call the setMSTRset function from the particle API
      // It takes the deviceId, name of the called function, an argument and the accessToken
      var fnPr = particle.callFunction({
        deviceId: state.singleDevice,
        name: 'setMSTRSet',
        argument: csvArray,
        auth: state.accessToken
      });

      fnPr.then(function (data) {
        console.log('Function called succesfully:', data);
      }, function (err) {
        console.log('An error occurred:', err);
      });
    }
  },
  getters: {
    // The getters can be listened to in other components
    // When the state changes, the state in the components changes as well
    // Getters do not change any values, this is done with mutations, they simply return values
    data: function data(state) {
      return state.data;
    },
    singleDevice: function singleDevice(state) {
      return state.singleDevice;
    },
    singleDeviceData: function singleDeviceData(state) {
      return state.singleDeviceData;
    },
    isLoggedIn: function isLoggedIn(state) {
      return state.isLoggedIn;
    },
    selectedSet: function selectedSet(state) {
      return state.selectedSet;
    }
  },
  actions: {
    // AuthData = payload
    // Commit, commits the context to the mutation
    // The mutation then changes the state
    login: function login(_ref, authData) {
      var commit = _ref.commit;

      var particle = new Particle();
      particle.login({
        username: authData.username,
        password: authData.password
      })
      // commit the authUser mutation
      .then(function (res) {
        commit('authUser', {
          token: res.body.access_token
        });
        _router2.default.push('/home');
      })
      // catch errors
      .catch(function (error) {
        return console.log('failed to login', error);
      });
    },
    logout: function logout(_ref2, accessToken) {
      var commit = _ref2.commit;

      commit('logoutUser', accessToken);
      _router2.default.push('/');
    },

    // Retrieve the devices from the particle account.
    // The action is fired when the Home component is created.
    fetchDevices: function fetchDevices(_ref3) {
      var commit = _ref3.commit;

      var particle = new Particle();
      var accessToken = this.state.accessToken;
      // listDevices is a method from the particle API.
      // It takes the accesstoken from the store
      // The accesstoken is provided by the API upon logging in
      particle.listDevices({ auth: accessToken }).then(function (devices) {
        commit('addDevices', devices.body);
      }).catch(function (error) {
        return console.log('List devices failed ', error);
      });
    },

    // Action to select a device
    // This action is dispatched from the Home component upon selecting a device.
    selectedDevice: function selectedDevice(_ref4, device) {
      var commit = _ref4.commit;

      commit('singleDevice', device);
      _router2.default.push('/dashboard');
    },
    editSetting: function editSetting(_ref5, changedVal) {
      var commit = _ref5.commit;

      // Action to edit a single setting in the singleDeviceData
      commit('editSingleSetting', changedVal);
    },

    // Action to save updated settings
    // saveSettings is dispatched from the Dashboard component.
    saveSettings: function saveSettings(_ref6) {
      var commit = _ref6.commit;

      commit('saveAllSettings');
    },
    selectSet: function selectSet(_ref7, selected) {
      var commit = _ref7.commit,
          state = _ref7.state;

      commit('changeSet', selected, state);
    }
  }
});
//# sourceMappingURL=store.js.map