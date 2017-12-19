import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import router from '../router';

Vue.use(Vuex);

// export const store to have access to it outside of this file
// we can access this in other files by using $store
export const store = new Vuex.Store({
  state: {
    // initial state
    isLoggedIn: false,
    accessToken: null,
    data: {},
    singleDevice: {},
    singleDeviceData:{}
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
      //store the accesToken in the store
      state.accessToken = userData.token
      console.log(userData.token)
      console.log(state.accessToken)
    },
    logoutUser(accessToken) {
      Cookies.remove('accessToken', 'userId', 'token');
      console.log(accessToken);
    },
    addDevices(state, newData) {
      state.data = newData;
      console.log('addDevices ', state);
      console.log('newData', newData);
      console.log('state data ', state.data);
    },
    singleDevice(state, device) {
      state.singleDevice = device;
      console.log(state.singleDevice);
    }
  },
  getters: {
    // the getters can be listened to in other components
    // when the data changes, the data in the components changes too
    data: state => {
      return state.data;
    },
    singleDevice: state => {
      return state.singleDevice;
    },
    singleDeviceData: state => {
      return state.singleDeviceData;
    }
  },
  actions: {
    // authData = payload
    // commit, commits the context to the mutation, changing the state
    login({commit}, authData) {
      const particle = new Particle();
      particle.login({
        username: authData.username,
        password: authData.password
      })
      // commit the authUser mutation
        .then(res => {
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
    // can be used to show data
    // fetch and show
    fetchDevices({commit}) {
      const particle = new Particle();
      const accessToken = this.state.accessToken;
      particle.listDevices({auth: accessToken})
        .then(devices => {
          commit('addDevices', devices.body);
        })
        .catch(error => console.log('List devices failed ', error))
    },
    selectedDevice({commit}, device) {
      commit('singleDevice', device);
      router.push('/dashboard');
    }
  }
});
// HistorMonodekDektInEenLaagWit
