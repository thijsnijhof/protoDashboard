import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import router from '../router';
import settingsArray from './settingsArray';

// Export const store to have access to it outside of this file
// We can access this in other files by using $store

// Use the Vuex module with Vue
// We can now create a new store by using new Vuex.Store({...etc})
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // The initial state of the application
    isLoggedIn: false,
    accessToken: null,
    data: {},
    singleDevice: {},
    singleDeviceData: [],
    settingsArray,
    singleSetting:[]
  },
  plugins: [
    // persist the accessToken to localStorage
    // https://github.com/robinvdvleuten/vuex-persistedstate
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, {expires: 7, secure: false}),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  mutations: {
    authUser(state, userData) {
      // Store the accessToken in the store
      // The userData is provided by the login action below
      state.accessToken = userData.token;
      state.isLoggedIn = true;
      console.log(userData.token);
    },
    logoutUser(state, accessToken) {
      Cookies.remove('accessToken', 'userId', 'token');
      state.isLoggedIn = false;
      console.log(accessToken);
    },
    addDevices(state, newData) {
      // Store the data from the devices in the store
      // The newData is provided by the fetchDevices action
      state.data = newData;
      console.log('state data ', state.data);
    },
    singleDevice(state, device) {
      // This mutation is called by selectedDevice upon selecting a device in the Home component.
      // It retrieves the data for the selected device by taking the deviceId from the store.
      // We can then use the particle getVariable method to retrieve the data
      state.singleDevice = device;
      const particle = new Particle();
      particle.getVariable({
        deviceId: state.singleDevice,
        name: 'getMSTRSet',
        auth: state.accessToken
      })
        .then(data => {
          // After calling the getVariable method we get the response from the API on body.result
          // The result returned by the device is a CSV string.
          // The split method splits string objects into an array of strings
          // We can define where we want the method to split the CSV string into substrings by passing in a string argument
          // The CSV string is a string with comma's between each word so: "str1,str2,str3,etc..."
          // Using (",") a comma as the argument will create a new substring between each word
          let deviceCSV = data.body.result;
          console.log('devicecsv: ', deviceCSV);
          let deviceData = deviceCSV.split(",");
          // To output the list on the Dashboard I want to have an array of objects
          // I made a second array which matches the array key names of the devices
          // The deviceData array has all the values. I will create a new array and combine it into an array of objects
          // This way I can set the values of each property and list them with name and value
          let combinedArray = [];
          for (let result in deviceData) {
            let key = settingsArray.indexOf(settingsArray[result]);
            combinedArray.push({name: settingsArray[result], value: deviceData[result], key:key});
          }
          // Set the state to the combinedArray so we can access the values in the Dashboard component
          state.singleDeviceData = combinedArray;
          console.log('CombinedArray after is: ', combinedArray);
        });
    },
    editSingleSetting(state,changedVal) {
      // Takes the edited setting and put it in the combinedArray
      // Prev function
      //   let newSettings = state.singleDeviceData;
      //   newSettings[changedVal.key] = {name:changedVal.name,value:changedVal.value,key:changedVal.key};
      //   console.log('new: ',newSettings);
      //   state.singleSetting = newSettings;
      //   console.log('singleSetting: ',state.singleSetting);
      const particle = new Particle();
      const arg = `${changedVal.key}:${changedVal.value}`;
      const fnPr = particle.callFunction({
        deviceId:state.singleDevice,
        name:'setMSTRSet',
        argument:arg,
        auth:state.accessToken
      });

      fnPr.then(
        function(data) {
          console.log('Function called succesfully:', data);
        }, function(err) {
          console.log('An error occurred:', err);
        });

    },
    saveAllSettings(state) {
      console.log('SaveAllSettings fired!...')
      const particle = new Particle();
      // Takes the final new array of objects
      const allSettings = state.singleSetting;
      // Convert it to a new CSV string
      let csvArray = allSettings.map(a => a.value).join(",");
      console.log('csvarray: ',csvArray);
      // Call the setMSTRset function from the particle API
      // It takes the deviceId, name of the called function, an argument and the accessToken
      const fnPr = particle.callFunction({
        deviceId:state.singleDevice,
        name:'setMSTRSet',
        argument:csvArray,
        auth:state.accessToken
      });

      fnPr.then(
        function(data) {
          console.log('Function called succesfully:', data);
        }, function(err) {
          console.log('An error occurred:', err);
        });
    }
  },
  getters: {
    // The getters can be listened to in other components
    // When the state changes, the state in the components changes as well
    // Getters do not change any values, this is done with mutations, they simply return values
    data: state => {
      return state.data;
    },
    singleDevice: state => {
      return state.singleDevice;
    },
    singleDeviceData: state => {
      return state.singleDeviceData;
    },
    isLoggedIn: state => {
      return state.isLoggedIn;
    }
  },
  actions: {
    // AuthData = payload
    // Commit, commits the context to the mutation
    // The mutation then changes the state
    login({commit}, authData) {
      const particle = new Particle();
      particle.login({
        username: authData.username,
        password: authData.password
      })
      // commit the authUser mutation
        .then(res => {
          console.log("res: ", res.body);
          commit('authUser', {
            token: res.body.access_token
          });
          router.push('/home')
        })
        // catch errors
        .catch(error => console.log('failed to login', error))
    },
    logout({commit}, accessToken) {
      commit('logoutUser', accessToken);
      router.push('/')
    },
    // Retrieve the devices from the particle account.
    // The action is fired when the Home component is created.
    fetchDevices({commit}) {
      const particle = new Particle();
      const accessToken = this.state.accessToken;
      // listDevices is a method from the particle API.
      // It takes the accesstoken from the store
      // The accesstoken is provided by the API upon logging in
      particle.listDevices({auth: accessToken})
        .then(devices => {
          console.log('Devices', devices);
          commit('addDevices', devices.body);
        })
        .catch(error => console.log('List devices failed ', error))
    },
    // Action to select a device
    // This action is dispatched from the Home component upon selecting a device.
    selectedDevice({commit}, device) {
      console.log('storeSelectedDevice: ',device)
      commit('singleDevice', device);
      router.push('/dashboard');
    },
    editSetting({commit}, changedVal) {
      // Action to edit a single setting in the singleDeviceData
      console.log('storeEditSetting: ',changedVal);
      commit('editSingleSetting', changedVal);
    },
    // Action to save updated settings
    // saveSettings is dispatched from the Dashboard component.
    saveSettings({commit}) {
        commit('saveAllSettings');
    }
  }
});
// HistorMonodekDektInEenLaagWit
